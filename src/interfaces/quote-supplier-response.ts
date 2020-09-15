import { ISupplier } from "./supplier";
import { IActionStatus } from "./action-status";
import { IServiceRequest } from "./service-request";
import { QuoteResponseArea } from "./quote-response-status";

export interface IQuoteResponseStatus extends IActionStatus {
    quoteArea: QuoteResponseArea;
}
 
export interface IQuoteSupplierResponse extends IServiceRequest {
    supplier: ISupplier,
    progress: Array<IQuoteResponseStatus>,
    confirmedDateTime?: number,
}