import { IUserAccount, IItemAttribute, IItemAttributeMap, UserAccountType, IUserConfiguration, UserRoleType } from '../interfaces';
export declare class UserAccount implements IUserAccount {
    id: number;
    name: string;
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    properties: IItemAttributeMap;
    userAccountTypeId: UserAccountType;
    userRoleTypeId: UserRoleType;
    userConfiguration?: IUserConfiguration;
    static assign(id: number, uid: string, name: string, email: string, photoURL: string, displayName: string, userAccountTypeId: UserAccountType, userRoleTypeId: UserRoleType, properties: IItemAttributeMap | undefined, userConfiguration: IUserConfiguration): UserAccount;
    setAttribute(property: IItemAttribute): void;
}
