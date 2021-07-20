import { UserAccountType, UserRoleType } from "../enums";
import { IItemAttribute, IItemAttributeMap, IUserAccount, IUserConfiguration } from "../interfaces";

export class UserAccount implements IUserAccount {
    id!: number;
    name!: string;
    uid!: string;
    email!: string;
    photoURL?: string;
    displayName?: string;
    properties: IItemAttributeMap = { };
    userAccountTypeId: UserAccountType = UserAccountType.unknown;
    userRoleTypeId: UserRoleType = UserRoleType.unknown;
    userConfiguration?: IUserConfiguration = {}; 
    licenseData?: any;
  
    static assign(
      id: number,
      uid: string,
      name: string,
      email: string, 
      photoURL: string,
      displayName: string, 
      userAccountTypeId: UserAccountType,
      userRoleTypeId: UserRoleType,
      properties: IItemAttributeMap = {},
      userConfiguration: IUserConfiguration,
      licenseData?: any): UserAccount {
      return <UserAccount>({
        id: id,
        name: name,
        uid: uid,
        email: email,
        photoURL: photoURL,
        displayName: displayName,
        userAccountTypeId: userAccountTypeId,
        userRoleTypeId: userRoleTypeId,
        properties: properties,
        userConfiguration: userConfiguration,
        licenseData: licenseData
      });
    }
  
    public setAttribute(property: IItemAttribute) {
      this.properties[property.name] = property;
    }
  }
  