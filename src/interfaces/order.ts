import { IServiceRequest } from "./service-request";
import { IAuditedItem } from "./audited-item";
import { ISupplier } from "./supplier";
import { IItemAttributeMap } from "./item-attribute";
import { IPriceLine } from "./price-line";

export interface IServiceOrder extends IServiceRequest {
    quoteId?: number,
    supplier: ISupplier,
    properties: IItemAttributeMap,
    priceLines: Array<IPriceLine>,
}

export interface IOrder extends IAuditedItem {
    serviceOrders: Array<IServiceOrder>
}