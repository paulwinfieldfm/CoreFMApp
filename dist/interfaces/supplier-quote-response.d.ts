import { ISupplier } from "./supplier";
import { IActionStatus } from "./action-status";
import { IServiceRequest } from "./service-request";
import { QuoteResponseArea } from "./quote-response-status";
import { IItemAttributeMap, IPriceLine } from ".";
import { DateMap } from "../model";
export interface IQuoteResponseStatus extends IActionStatus {
    quoteArea: QuoteResponseArea;
}
export declare enum QuoteResponseProvided {
    pending = 0,
    declined = 1,
    quoteGiven = 2
}
export interface ISupplierQuoteResponse extends IServiceRequest {
    quoteResponseProvided: QuoteResponseProvided;
    responseDateTime?: number;
    supplier: ISupplier;
    progress: Array<IQuoteResponseStatus>;
    confirmedDateTime?: number;
    closedDateTime?: number;
    openedDateTime?: number;
    haveOpenQuestions: boolean;
    properties: IItemAttributeMap;
    quoteLines: Array<IPriceLine>;
    anticipatedVisitCount?: number;
    siteSurveyRequired: boolean;
    soonestServiceDate: DateMap;
    bestAndFinalOffer: boolean;
    declineToQuoteReason?: string;
}
