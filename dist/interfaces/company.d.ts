import { IKeyedImageItem } from "./keyed-item";
import { ILocation } from "./location";
import { IContact } from "./contact";
export interface ICompany extends IKeyedImageItem {
    locations?: Array<ILocation>;
    contacts?: Array<IContact>;
}
