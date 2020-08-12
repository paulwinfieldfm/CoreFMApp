import { IAuditedItem } from "./audited-item";
import { IService } from "./service";
import { BookingPriority } from "./booking-priority";
import { IContact } from "./contact";
import { ICompany } from "./company";
import { IAsset } from "./asset";
import { ILocation } from "./location";
import { ISupplier } from "./supplier";
import { IActionStatus } from "./action-status";
import { IQuoteResponse } from "./quote-response";


export interface IQuoteRequest extends IAuditedItem {
    reference: string,
    service?: IService,
    bookingPriority?: BookingPriority,
    contact?: IContact,
    company?: ICompany,
    location?: ILocation,
    asset?: IAsset,
    invitedSuppliers: Array<ISupplier>,
    progress: Array<IActionStatus>,
    responses?: Array<IQuoteResponse>,
}