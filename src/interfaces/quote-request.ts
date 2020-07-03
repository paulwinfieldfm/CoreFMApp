import { IAuditedItem } from "./audited-item";
import { IService } from "./service";

export interface IQuoteRequest extends IAuditedItem {
    reference: string,
    service?: IService,
}