import { IContact, IItemAttributeMap, IKeyedItem } from "../base";
import { ILocation } from "../location";

export interface IKPIEntry {
    title: string,
    titleSuffix?: string,
    subtitle: string,
    subtitleSuffix?: string,
    linkPath?: string,
}
export interface IKPIViewModel {
    updatedDate: number,
    entries: Array<IKPIEntry>,
}

export interface IGridViewModel extends IKeyedItem {
    requiredDate: string,
    bookedDate?: string,
    reference?: string,
    status: string,
    filter: string,
    contact?: IContact,
    location?: ILocation,
    properties?: IItemAttributeMap,
}
