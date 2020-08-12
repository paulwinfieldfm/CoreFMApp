import { IAuditedItem } from "./audited-item";
import { ISupplier } from "./supplier";
import { IItemAttributeMap } from "./item-attribute";
import { IQuoteLine } from "./quote-line";

export interface IQuoteResponse extends IAuditedItem {
    quoteReference: string,
    supplier: ISupplier,
    properties: IItemAttributeMap,
    quoteLines: Array<IQuoteLine>,
    anticipatedVisitCount?: number,
    siteSurveyRequired: boolean,
    soonestServiceDate: number,
    bestAndFinalOffer: boolean,
}