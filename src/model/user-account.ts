import { 
    IUserAccount,
    IItemAttribute,
    IItemAttributeMap
} from '../interfaces';

export class UserAccount implements IUserAccount {
  uid!: string;
  email!: string;
  photoURL?: string;
  displayName?: string;
  attributes: IItemAttributeMap = { };

  static assign(
    uid: string, 
    email: string, 
    photoURL: string,
    displayName: string, 
    attributes: IItemAttributeMap = {}): UserAccount {
    return <UserAccount>({
      uid: uid,
      email: email,
      photoURL: photoURL,
      displayName: displayName,
      attributes: attributes
    });
  }

  public setAttribute(attribute: IItemAttribute) {
    this.attributes[attribute.name] = attribute;
  }
}
