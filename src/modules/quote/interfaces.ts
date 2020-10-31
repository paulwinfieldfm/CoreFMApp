import { IAuditedItem, IItemAttributeMap, ILinearProgressEntry } from "../base";
import { DateMap } from "../date-extensions";
import { IDeprecatedServiceRequest, IService } from "../servicing";
import { ISupplier } from "../supplier";
import { BookingPriority, IQuoteResponseStatus, PriceLineCategory, QuoteArea, QuoteCreateStatusType, QuoteResponseProvided } from "./enums";

export interface IQuoteCreateStatus {
    status: QuoteCreateStatusType,
    service: IService,
}
export interface IPrice {
    currencyUnit: string,
    subtotal?: number,
    taxRate: number,
    total?: number,
    isFoc: boolean,
}
export interface IPriceLine extends IPrice {
    title: string,
    description?: string,
    quoteLineCategory: PriceLineCategory,
    quantity?: number,
    itemPrice?: number,
    currencyUnit: string,
    price?: number,
    taxRate: number,
    total?: number,
    isFoc: boolean,
}
export interface IQuoteResponse extends IAuditedItem {
    quoteReference: string,
    supplier: ISupplier,
    properties: IItemAttributeMap,
    quoteLines: Array<IPriceLine>,
    anticipatedVisitCount?: number,
    siteSurveyRequired: boolean,
    soonestServiceDate: number,
    bestAndFinalOffer: boolean,
    quoteProvided?: boolean,
    declineToQuoteReason?: string,
    compareData?: any
}
export interface IQuoteRequestStatus extends ILinearProgressEntry {
    quoteArea: QuoteArea;
}
  
export interface IQuoteRequest extends IDeprecatedServiceRequest {
    invitedSuppliers: Array<ISupplier>,
    progress: Array<IQuoteRequestStatus>,
    responses?: Array<IQuoteResponse>,
    confirmedDateTime?: number,
    responseCutoffTime?: DateMap,
}
export interface ISupplierQuoteResponse extends IDeprecatedServiceRequest {
    // Can we/have we quoted?
    quoteResponseProvided: QuoteResponseProvided,
    responseDateTime?: number,
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
    soonestServiceDate: DateMap,
    bestAndFinalOffer: boolean,
    declineToQuoteReason?: string,
}
export interface IBookingPriorityDescription {
    bookingPriority: BookingPriority,
    name: string,
    description: string,
    icon?: string,
}
