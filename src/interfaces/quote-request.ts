import { ISupplier } from "./supplier";
import { IActionStatus } from "./action-status";
import { IQuoteResponse } from "./quote-response";
import { QuoteArea } from "./quote-create-status";
import { IServiceRequest } from "./service-request";
import { DateMap } from "../model";

export interface IQuoteRequestStatus extends IActionStatus {
    quoteArea: QuoteArea;
}
  
export interface IQuoteRequest extends IServiceRequest {
    invitedSuppliers: Array<ISupplier>,
    progress: Array<IQuoteRequestStatus>,
    responses?: Array<IQuoteResponse>,
    confirmedDateTime?: number,
    responseCutoffTime?: DateMap,
}