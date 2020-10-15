import { IItemAttributeMap } from "./item-attribute";
import { IKeyedPersonItem } from "./keyed-item";
import { ISupplier } from "./supplier";

export enum UserAccountType {
    unknown,
    portal,
    supplier,
    pod
}

export enum UserRoleType {
    unknown,
    requisitioner,
    contractManager,
    supplierAdministrator,
    engineer
}

export interface IUserAccount extends IKeyedPersonItem {
    properties: IItemAttributeMap,
    userAccountTypeId: UserAccountType,
    userRoleTypeId: UserRoleType,
    userConfiguration?: IUserConfiguration,
}

export interface IUserConfiguration {
    supplier?: ISupplier,
}