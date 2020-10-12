import { 
    IItemAttribute,
    IItemAttributeMap,
    IKeyedPersonItem
} from '../interfaces';

export class Customer implements IKeyedPersonItem {
  id!: number;

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
  properties: IItemAttributeMap = { };

  emailVerified?: boolean;

  static assign(
    id: number,
    uid: string, customerId: number, photoURL: string,
    displayName: string, name: string, contactName: string,
    email: string, contactEmail: string, contactPhone1: string,
    address1: string, address2: string,
    town: string, postcode: string, companyName: string,
    properties: IItemAttributeMap = {}): Customer {
    return <Customer>({
      id: id,
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
      properties: properties
    });
  }

  public setAttribute(property: IItemAttribute) {
    this.properties[property.name] = property;
  }
}
