import { IKeyedItem } from '../modules/base';



import { ILocation, IContact } from ".";

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