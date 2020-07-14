import { IKeyedImageItem, IKeyedItem } from "./keyed-item";
import { ICategory } from "./category";

export interface IService extends IKeyedImageItem {
    description: string,
    image?: string,
    categories?: Array<ICategory>,
    suppliers?: Array<IKeyedItem>,
}