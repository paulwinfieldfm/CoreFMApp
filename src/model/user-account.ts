import { 
    IUserAccount,
    IItemAttribute,
    IItemAttributeMap,
    UserAccountType,
    IUserConfiguration, UserRoleType
} from '../interfaces';

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
    userConfiguration: IUserConfiguration): UserAccount {
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
      userConfiguration: userConfiguration
    });
  }

  public setAttribute(property: IItemAttribute) {
    this.properties[property.name] = property;
  }
}
