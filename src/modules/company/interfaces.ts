import { IContact, IKeyedItem } from "../base";
import { ILocation } from "../location";

export interface ICompany extends IKeyedItem {
    url?: string,
    locations?: Array<ILocation>,
    contacts?: Array<IContact>,
}