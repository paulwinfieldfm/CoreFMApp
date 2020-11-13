import { IAuditedItem, IContact, IItemAttributeMap, ILinearProgressEntry } from "../base";
import { DateMap, IScheduleDefinition } from "../date-extensions";
import { IDeprecatedServiceRequest, IService, IServiceAssetRequirement, IServiceRequirement } from "../servicing";
import { ISupplier, ISupplierInviteProfile } from "../supplier";
import { BookingPriority, IQuoteResponseStatus, PriceLineCategory, QuoteArea, QuoteAssetServiceResponse, QuoteCreateStatusType, QuoteResponseProvided } from "./enums";

export interface IDeprecatedQuoteCreateStatus {
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
export interface IDeprecatedQuoteResponse extends IAuditedItem {
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
  
export interface IDeprecatedQuoteRequest extends IDeprecatedServiceRequest {
    invitedSuppliers: Array<ISupplier>,
    progress: Array<IQuoteRequestStatus>,
    responses?: Array<IDeprecatedQuoteResponse>,
    confirmedDateTime?: number,
    responseCutoffTime?: DateMap,
}
export interface IDeprecatedSupplierQuoteResponse extends IDeprecatedServiceRequest {
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

export interface IQuotationRequest extends IServiceRequirement {
    purchaseOrderReference?: string,
    companyContact?: IContact,
    proformaAnswers?: any,
    invitedSuppliers: Array<ISupplierInviteProfile>,
    responses?: Array<IQuotationSupplierResponse>,
    submittedDate?: number,
    responseCutoffDate?: number,
}

export interface IQuotationResponseLine {
    quoteAssetServiceResponse?: QuoteAssetServiceResponse,
    advisedServiceDate?: number,
    // The asset within the quote that this entry pertains to - will assume 
    serviceAssetRequirement?: IServiceAssetRequirement,
    priceLine: IPriceLine,   
}

export interface IQuotationSupplierResponse extends IServiceRequirement {
    quoteResponseProvided: QuoteResponseProvided,
    responseDateTime?: number,
    supplier: ISupplier,
    // Confirm providing our initial response to the quote request
    confirmedDateTime?: number,
    // Quote will be closed off when there's no further dialog or if it was cancelled etc
    closedDateTime?: number,
    // Time the quote was first accessed
    openedDateTime?: number,
    haveOpenQuestions: boolean,
    // Custom properties can be specified by the supplier
    properties: IItemAttributeMap,
    // Pricing, support multiple entries per asset
    responseLines: Array<IQuotationResponseLine>,
    bestAndFinalOffer: boolean,
    // Likely only applies to single site reative job
    anticipatedVisitCount?: number,
    siteSurveyRequired: boolean,
    soonestServiceDate: number,
    declineToQuoteReason?: string,
}

