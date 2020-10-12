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
    properties: IItemAttributeMap,
    userAccountTypeId: UserAccountType,
    userConfiguration?: IUserConfiguration,
}

export interface IUserConfiguration {
    supplier?: ISupplier,
}