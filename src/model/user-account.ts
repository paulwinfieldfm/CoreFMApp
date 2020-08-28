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
  attributes: IItemAttributeMap = { };
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
    attributes: IItemAttributeMap = {},
    userConfiguration: IUserConfiguration): UserAccount {
    return <UserAccount>({
      id: id,
      name: name,
      uid: uid,
      email: email,
      photoURL: photoURL,
      displayName: displayName,
      userAccountTypeId: userAccountType,
      attributes: attributes,
      userConfiguration: userConfiguration
    });
  }

  public setAttribute(attribute: IItemAttribute) {
    this.attributes[attribute.name] = attribute;
  }
}
