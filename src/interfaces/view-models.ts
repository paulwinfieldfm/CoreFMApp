import { IContact } from ".";
import { IItemAttributeMap } from "./item-attribute";
import { IKeyedImageItem } from "./keyed-item";
import { ILocation } from "./location";

export interface IGridViewModel extends IKeyedImageItem {
    // id
    // name
    // description
    requiredDate: string,
    bookedDate?: string,
    reference?: string,
    status: string,
    filter: string,
    contact?: IContact,
    location?: ILocation,
    properties?: IItemAttributeMap,
}

/*
reference
required
booking
location
user
ownerUser

*/