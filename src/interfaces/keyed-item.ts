export interface IKeyedItem {
    id: number,
    name: string,
    code?: string,
    description?: string,
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