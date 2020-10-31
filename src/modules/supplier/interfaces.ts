import { IContact, IKeyedItem } from "../base";
import { ILocation } from "../location";
import { SupplierWeighting } from "./enums";

export interface ISupplierService extends IKeyedItem {
    preferred: boolean,
    displayIndex?: number,
}
export interface ISupplierLocation extends ILocation {
    serviceRadiusMetres?: number,
}
export interface ISupplier extends IKeyedItem {
    locations?: Array<ISupplierLocation>,
    contacts?: Array<IContact>,
    preferred?: boolean,
    url?: string,
    ecoScore?: number,
    firstFixRatio?: number,
    avgQuoteResponse?: number,
    quoteToCostRatio?: number,
    rating?: number,
    invite: boolean,
    services?: Array<ISupplierService>,
}
export interface ISupplierPreference {
    supplierWeighting: SupplierWeighting,
    defaultInvites: number,
    maxInvites: number,
    minInvites: number,
}