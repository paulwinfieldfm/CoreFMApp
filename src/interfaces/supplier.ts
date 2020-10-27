import { IKeyedImageItem, ILocation, IContact } from ".";

export interface ISupplierService extends IKeyedImageItem {
    active: boolean,
    preferred: boolean,
    displayIndex?: number,
}
export interface ISupplierLocation extends ILocation {
    serviceRadiusMetres?: number,
}
export interface ISupplier extends IKeyedImageItem {
    active: boolean,
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