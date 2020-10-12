import { 
    IUserAccount,
    IItemAttribute,
    IItemAttributeMap,
    UserAccountType,
    IUserConfiguration
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
  userConfiguration?: IUserConfiguration = {}; 

  static assign(
    id: number,
    uid: string,
    name: string,
    email: string, 
    photoURL: string,
    displayName: string, 
    userAccountType: UserAccountType,
    properties: IItemAttributeMap = {},
    userConfiguration: IUserConfiguration): UserAccount {
    return <UserAccount>({
      id: id,
      name: name,
      uid: uid,
      email: email,
      photoURL: photoURL,
      displayName: displayName,
      userAccountTypeId: userAccountType,
      properties: properties,
      userConfiguration: userConfiguration
    });
  }

  public setAttribute(property: IItemAttribute) {
    this.properties[property.name] = property;
  }
}
