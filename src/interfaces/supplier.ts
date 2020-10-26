import { IKeyedImageItem, ILocation, IContact } from ".";

export interface ISupplier extends IKeyedImageItem {
    locations?: Array<ILocation>,
    contacts?: Array<IContact>,
    preferred?: boolean,
    avgQuoteResponse?: number,
    quoteToCostRatio?: number,
    rating?: number,
    invite: boolean,
}