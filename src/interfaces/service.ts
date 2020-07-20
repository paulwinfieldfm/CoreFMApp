import { IKeyedImageItem, IKeyedItem } from "./keyed-item";
import { ICategory } from "./category";

export interface IService extends IKeyedImageItem {
    categories?: Array<ICategory>,
    suppliers?: Array<IKeyedItem>,
}