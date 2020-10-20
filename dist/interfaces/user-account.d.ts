import { IItemAttributeMap } from "./item-attribute";
import { IKeyedPersonItem } from "./keyed-item";
import { ISupplier } from "./supplier";
export declare enum UserAccountType {
    unknown = 0,
    portal = 1,
    supplier = 2,
    pod = 3
}
export declare enum UserRoleType {
    unknown = 0,
    requisitioner = 1,
    contractManager = 2,
    supplierAdministrator = 3,
    engineer = 4
}
export interface IUserAccount extends IKeyedPersonItem {
    properties: IItemAttributeMap;
    userAccountTypeId: UserAccountType;
    userRoleTypeId: UserRoleType;
    userConfiguration?: IUserConfiguration;
}
export interface IUserConfiguration {
    supplier?: ISupplier;
}
