import { IItemAttributeMap } from "./item-attribute";
import { IKeyedPersonItem } from "./keyed-item";
import { ISupplier } from "./supplier";

export enum UserAccountType {
    unknown,
    portal,
    supplier,
    internal
}

export interface IUserAccount extends IKeyedPersonItem {
    attributes: IItemAttributeMap,
    userAccountTypeId: UserAccountType,
    userConfiguration?: IUserConfiguration,
}

export interface IUserConfiguration {
    supplier?: ISupplier,
}