import { IItemAttributeMap } from "./item-attribute";
import { IKeyedItem } from "./keyed-item";
import { ILocation } from "./location";

export interface IGrudViewModel extends IKeyedItem {
    // id
    // name
    // description
    requiredDate: string,
    bookedDate?: string,
    reference?: string,
    status: string,
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