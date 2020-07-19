import { IAuditedItem } from "./audited-item";
import { IService } from "./service";
import { BookingPriority } from "./booking-priority";


export interface IQuoteRequest extends IAuditedItem {
    reference: string,
    service?: IService,
    bookingPriority?: BookingPriority,
}