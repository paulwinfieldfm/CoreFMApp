import { IContact, IKeyedItem, IScoredElement } from "../base";
import { ILocation } from "../location";
import { SupplierWeighting } from "./enums";

export interface ISupplierService extends IKeyedItem {
    preferred: boolean,
    displayIndex?: number,
}
export interface ISupplierLocation extends ILocation {
    serviceRadiusMetres?: number,
}
export interface ICoreSupplier extends IKeyedItem {
    preferred?: boolean,
    url?: string,
    ecoScore?: number,
    firstFixRatio?: number,
    avgQuoteResponse?: number,
    quoteToCostRatio?: number,
    rating?: number,
    services?: Array<ISupplierService>,
}

export interface ISupplier extends ICoreSupplier {
    locations?: Array<ISupplierLocation>,
    contacts?: Array<IContact>,
}
export interface ISupplierInviteProfile extends ICoreSupplier, IScoredElement {
    invite: boolean,
    // Distance from nearest site to job request
    distance?: number,
    // Coverage distance of nearest site
    serviceRadiusMetres?: number,
    serviceSupported?: number,
}
export interface ISupplierPreference {
    supplierWeighting: SupplierWeighting,
    defaultInvites: number,
    maxInvites: number,
    minInvites: number,
}