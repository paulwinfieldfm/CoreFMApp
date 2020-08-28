import { IAuditedItem, IService, BookingPriority, IContact, ICompany, ILocation, IAsset, ISupplier } from ".";

export interface IServiceRequest extends IAuditedItem {
    reference: string,
    //orderDate: number,
    service?: IService,
    bookingPriority?: BookingPriority,
    contact?: IContact,
    company?: ICompany,
    location?: ILocation,
    asset?: IAsset,
    proformaAnswers?: any,
}