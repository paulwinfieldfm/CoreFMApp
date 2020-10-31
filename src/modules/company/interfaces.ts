import { IContact, IKeyedItem } from "../base";
import { ILocation } from "../location";

export interface ICompany extends IKeyedItem {
    locations?: Array<ILocation>,
    contacts?: Array<IContact>,
}