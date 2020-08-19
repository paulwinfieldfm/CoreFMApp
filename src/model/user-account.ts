import { 
    IUserAccount,
    IItemAttribute,
    IItemAttributeMap,
    UserAccountType
} from '../interfaces';

export class UserAccount implements IUserAccount {
  id!: number;
  name!: string;
  uid!: string;
  email!: string;
  photoURL?: string;
  displayName?: string;
  attributes: IItemAttributeMap = { };
  userAccountType: UserAccountType = UserAccountType.unknown;

  static assign(
    id: number,
    uid: string,
    name: string,
    email: string, 
    photoURL: string,
    displayName: string, 
    userAccountType: UserAccountType,
    attributes: IItemAttributeMap = {}): UserAccount {
    return <UserAccount>({
      id: id,
      name: name,
      uid: uid,
      email: email,
      photoURL: photoURL,
      displayName: displayName,
      userAccountType: userAccountType,
      attributes: attributes
    });
  }

  public setAttribute(attribute: IItemAttribute) {
    this.attributes[attribute.name] = attribute;
  }
}
