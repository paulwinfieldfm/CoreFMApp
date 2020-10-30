import { IAuditedItem, IService, BookingPriority, IContact, ICompany, ILocation, IAsset, ISupplier } from ".";
import { DateMap } from "../model";

export interface IDeprecatedServiceRequest extends IAuditedItem {
    reference: string,
    requiredDate?: DateMap,
    purchaseOrderReference?: string,
    bookingPriority?: BookingPriority,
    service?: IService,
    company?: ICompany,
    contact?: IContact,
    location?: ILocation,
    asset?: IAsset,
    proformaAnswers?: any,
}