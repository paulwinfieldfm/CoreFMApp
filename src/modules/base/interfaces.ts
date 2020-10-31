export interface IKeyedItem {
    id: number,
    name: string,
    code?: string,
    description?: string,
    dirty?: boolean, // Helps us to isolate when persisting complex object structures back to the db
    active?: boolean, // Helps us track when we soft delete an item and need to persist
    image?: string,
}
/// Basic person interface to represent a known actor within the system
export interface IPerson extends IKeyedItem {
    uid?: string,
    email?: string,
    photoURL?: string,
    displayName?: string,
    telephone?: string,
    telephone2?: string,
    reportsTo?: IPerson,
}
/// A named value for a property map
export interface IItemAttribute {
    name: string,
    value?: any,
}
/// Allows mapping a property/custom attribute set against an entity
export interface IItemAttributeMap {
    [key: string]: IItemAttribute,
}
/// Breadcrumb to show and assist with hierarchy/path traveral
export interface IBreadcrumbPathEntry extends IKeyedItem { 

}
/// Categorisation of services or other logical or phyical items (assets too?)
export interface ICategory extends IKeyedItem {
    parentId?: number,
    parentCategory?: ICategory,
    documentUrl?: string,
    image?: string,
    path?: Array<IBreadcrumbPathEntry>,
}
