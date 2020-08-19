import { IItemAttributeMap } from "./item-attribute";
import { IKeyedPersonItem } from "./keyed-item";

export enum UserAccountType {
    unknown,
    portal,
    supplier,
    internal
}

export interface IUserAccount extends IKeyedPersonItem {
    attributes: IItemAttributeMap,
    userAccountType: UserAccountType,
}