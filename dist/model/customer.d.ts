import { IItemAttribute, IItemAttributeMap, IKeyedPersonItem } from '../interfaces';
export declare class Customer implements IKeyedPersonItem {
    id: number;
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    customerId: number;
    name: string;
    contactName?: string;
    contactEmail: string;
    contactPhone1?: string;
    address1?: string;
    address2?: string;
    town?: string;
    postcode?: string;
    companyName?: string;
    properties: IItemAttributeMap;
    emailVerified?: boolean;
    static assign(id: number, uid: string, customerId: number, photoURL: string, displayName: string, name: string, contactName: string, email: string, contactEmail: string, contactPhone1: string, address1: string, address2: string, town: string, postcode: string, companyName: string, properties?: IItemAttributeMap): Customer;
    setAttribute(property: IItemAttribute): void;
}
