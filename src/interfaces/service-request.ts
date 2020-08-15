import { IAuditedItem, IService, BookingPriority, IContact, ICompany, ILocation, IAsset } from ".";

export interface IServiceRequest extends IAuditedItem {
    reference: string,
    service?: IService,
    bookingPriority?: BookingPriority,
    contact?: IContact,
    company?: ICompany,
    location?: ILocation,
    asset?: IAsset,
    proformaAnswers?: any,
}