import { ISupplier } from "./supplier";
import { IActionStatus } from "./action-status";
import { IServiceRequest } from "./service-request";
import { QuoteResponseArea } from "./quote-response-status";
import { IItemAttributeMap, IPriceLine } from ".";

export interface IQuoteResponseStatus extends IActionStatus {
    quoteArea: QuoteResponseArea;
}

export enum QuoteResponseProvided {
    pending,
    declined,
    quoteGiven,
}
/*
Deprecated?
export enum QuoteResponseStatus {
    unknown,
    reviewing,
    pending,
    specifyAvailability,
    specifyCosting,
    specifyAdditionalInformation,
    confirmation,
    moreInformationRequired,
    declined,
    quoteProvided,
}
*/
/*
export enum QuoteResponseArea {
    reviewQuote,
    declinedToQuote,
    specifyAvailability,
    specifyCostings,
    specifyProperties,
    confirmation,
    refineQuote
}
*/
export interface ISupplierQuoteResponse extends IServiceRequest {
    // Can we/have we quoted?
    quoteResponseProvided: QuoteResponseProvided,
    supplier: ISupplier,
    // Indicate how far through we've got for the llinear progress tracker
    progress: Array<IQuoteResponseStatus>,
    // Confirm providing our initial response to the quote request
    confirmedDateTime?: number,
    // Quote will be closed off when there's no further dialog or if it was cancelled etc
    closedDateTime?: number,
    openedDateTime?: number,
    haveOpenQuestions: boolean,
    // Custom properties can be specified by the supplier
    properties: IItemAttributeMap,
    // Pricing
    quoteLines: Array<IPriceLine>,
    anticipatedVisitCount?: number,
    siteSurveyRequired: boolean,
    soonestServiceDate: number,
    bestAndFinalOffer: boolean,
    declineToQuoteReason?: string,
}