import { IAuditedItem, IService, BookingPriority, IContact, ICompany, ILocation, IAsset, ISupplier } from ".";
import { DateMap } from "../model";

export interface IServiceRequest extends IAuditedItem {
    reference: string,
    requiredDate?: DateMap,
    service?: IService,
    bookingPriority?: BookingPriority,
    contact?: IContact,
    company?: ICompany,
    location?: ILocation,
    asset?: IAsset,
    proformaAnswers?: any,
}