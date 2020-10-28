export interface IKeyedItem {
    id: number,
    name: string,
    code?: string,
    description?: string,
    dirty?: boolean, // Helps us to isolate when persisting complex object structures back to the db
    active?: boolean, // Helps us track when we soft delete an item and need to persist
}

export interface IKeyedImageItem extends IKeyedItem {
    image?: string,
}

export interface IKeyedPersonItem extends IKeyedItem {
    uid?: string,
    email?: string;
    photoURL?: string;
    displayName?: string;
    telephone?: string,
    telephone2?: string,
    reportsTo?: IKeyedPersonItem,
}