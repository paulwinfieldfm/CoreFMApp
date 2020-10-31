import { IAuditedItem, IItemAttributeMap } from "../base";
import { IPriceLine } from "../quote";
import { IDeprecatedServiceRequest } from "../servicing";
import { ISupplier } from "../supplier";

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