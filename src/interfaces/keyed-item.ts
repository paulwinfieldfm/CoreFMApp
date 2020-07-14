export interface IKeyedItem {
    id: number,
    name: string,
}

export interface IKeyedImageItem extends IKeyedItem {
    image?: string,
}