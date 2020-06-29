import { 
    IClientApplicationUser,
    IItemAttribute,
    IItemAttributeMap
} from '../interfaces';

export class Customer implements IClientApplicationUser {
  uid!: string;
  email!: string;
  photoURL?: string;
  displayName?: string;

  customerId!: number;
  name!: string;
  contactName?: string;
  contactEmail!: string;
  contactPhone1?: string;
  address1?: string;
  address2?: string;
  town?: string;
  postcode?: string;
  companyName?: string;
  attributes: IItemAttributeMap = { };

  emailVerified?: boolean;

  static assign(
    uid: string, customerId: number, photoURL: string,
    displayName: string, name: string, contactName: string,
    email: string, contactEmail: string, contactPhone1: string,
    address1: string, address2: string,
    town: string, postcode: string, companyName: string,
    attributes: IItemAttributeMap = {}): Customer {
    return <Customer>({
      uid: uid,
      customerId: customerId,
      photoURL: photoURL,
      displayName: displayName,
      name: name ?? contactName ?? displayName,
      contactName: contactName ?? name ?? displayName,
      email: email ?? contactEmail,
      contactEmail: contactEmail ?? email,
      contactPhone1: contactPhone1,
      address1: address1,
      address2: address2,
      town: town,
      postcode: postcode,
      companyName: companyName,
      attributes: attributes
    });
  }

  public setAttribute(attribute: IItemAttribute) {
    this.attributes[attribute.name] = attribute;
  }
}
