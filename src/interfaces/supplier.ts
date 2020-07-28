import { IKeyedImageItem, ILocation, IContact } from ".";

export interface ISupplier extends IKeyedImageItem {
    locations?: Array<ILocation>,
    contacts?: Array<IContact>,
    avgQuoteResponse?: number,
    quoteToCostRatio?: number,
    rating?: number,
    invite: boolean,
}