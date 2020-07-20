import { IItemAttributeMap } from "./item-attribute";
import { IKeyedPersonItem } from "./keyed-item";

export interface IUserAccount extends IKeyedPersonItem {
    attributes: IItemAttributeMap
}