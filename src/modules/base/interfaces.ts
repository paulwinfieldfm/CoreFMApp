import { ActivityType, ContactType, LinkedEntityType, SearchableItemType, SearchStatusType, UserAccountType, UserRoleType } from "./enums";

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
export interface IContact extends IPerson {
    parentLocationId?: number,
    contactTypeId: ContactType,
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
export interface ILinearProgressEntry {
    action: string,
    description?: string,
    actioned: boolean,
    order?: number,
    onSelect?: any,
    isSelected: boolean,
    linkedEntityType: LinkedEntityType,
}
export interface IActionStatus {
    action: string,
    description?: string,
    actioned: boolean,
    order?: number,
    onSelect?: any,
    isSelected: boolean,
    service?: string,
    customer?: string,
    reference?: string,
    priority?: string,
    actionRequiredByTime?: number,
    linkedEntityType: LinkedEntityType,
}
/// Categorisation of services or other logical or phyical items (assets too?)
export interface ICategory extends IKeyedItem {
    parentId?: number,
    parentCategory?: ICategory,
    documentUrl?: string,
    image?: string,
    path?: Array<IBreadcrumbPathEntry>,
}
export interface IUserActivity {
    uid?: string,
    time: number,
    activityType: ActivityType,
    payload?: any,
}
export interface IAuditedItem extends IKeyedItem {
    userActivities: Array<IUserActivity>
}
export interface IUserAccount extends IPerson {
    properties: IItemAttributeMap,
    userAccountTypeId: UserAccountType,
    userRoleTypeId: UserRoleType,
    userConfiguration?: IUserConfiguration,
}
export interface IUserConfiguration {
    supplier?: any,
}
export interface IServerApplicationUser {
    uid: string,
    displayName: string,
    email: string,
    emailVerified: boolean,
    isAnonymous: boolean,
    phoneNumber?: string,
    photoUrl?: string,
}
export interface ISearchRequest {
    searchableItemType: SearchableItemType,
    term: string;
}
export interface ISearchResults {
    searchableItemType: SearchableItemType,
    data: Array<IKeyedItem>
}

export interface ISearchSelection {
    searchableItemType: SearchableItemType,
    data: IKeyedItem
}

export interface ISearchStatus {
    status: SearchStatusType,
    message?: string,
    searchResultsEntries?: Array<ISearchResults>,
    selection?: ISearchSelection
}
/*
export interface ISelectEntry {
    display: string,
    description: string,
    value: number,
    imageUrl?: string,
}  
export interface IHistoryItem {
    recordId: number,
    sessionId: string,
    reference: string,
    activeFrom: number,
    activeTo?: number;
    serviceTypeId: number,
    serviceType: string;
    detail?: any,
    lineDetail?: any,
    isQuote: boolean,
    customerReference: string,
    primaryAmount?: number,
    status?: string
    statusDate?: number,
    progressStepCount?: number,
    progressIndex?: number,
    properties?: any,
}
  

export interface IHistoryEvent {
    id: number,
}
*/