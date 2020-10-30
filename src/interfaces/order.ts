import { IDeprecatedServiceRequest } from "./service-request";
import { IAuditedItem } from "./audited-item";
import { ISupplier } from "./supplier";
import { IItemAttributeMap } from "./item-attribute";
import { IPriceLine } from "./price-line";

export interface IServiceOrder extends IDeprecatedServiceRequest {
    quoteId?: number,
    quoteReference: string,
    supplier: ISupplier,
    properties: IItemAttributeMap,
    priceLines: Array<IPriceLine>,
}

export interface IOrder extends IServiceOrder {
    responseDateTime?: number,
    confirmedDateTime?: number,
    anticipatedVisitCount?: number,
    siteSurveyRequired: boolean,
    bookingDate?: number,
    bestAndFinalOffer: boolean,
}

export interface IMultiOrder extends IAuditedItem {
    reference: string,
    serviceOrders: Array<IServiceOrder>
}