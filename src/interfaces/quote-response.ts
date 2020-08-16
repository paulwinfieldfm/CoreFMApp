import { IAuditedItem } from "./audited-item";
import { ISupplier } from "./supplier";
import { IItemAttributeMap } from "./item-attribute";
import { IPriceLine } from "./price-line";

export interface IQuoteResponse extends IAuditedItem {
    quoteReference: string,
    supplier: ISupplier,
    properties: IItemAttributeMap,
    quoteLines: Array<IPriceLine>,
    anticipatedVisitCount?: number,
    siteSurveyRequired: boolean,
    soonestServiceDate: number,
    bestAndFinalOffer: boolean,
    quoteProvided?: boolean,
    declineToQuoteReason?: string,
}