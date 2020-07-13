import { IKeyedItem } from "./keyed-item";
import { ICategory } from "./category";

export interface IService extends IKeyedItem {
    description: string,
    image?: string,
    categories?: Array<ICategory>,
    suppliers?: Array<IKeyedItem>,
}