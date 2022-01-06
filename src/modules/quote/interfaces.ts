import { ICoreAsset } from "../asset";
import { IAuditedItem, ICategory, IContact, IItemAttributeMap, IKeyedItem, ILinearProgressEntry } from "../base";
import { ICompany } from "../company";
import { DateMap, IScheduleDefinition } from "../date-extensions";
import { ILocation } from "../location";
import { IDeprecatedServiceRequest, IService, IServiceAssetRequirement, IServiceRequirement } from "../servicing";
import { ISupplier, ISupplierInviteProfile } from "../supplier";
import { BookingPriority, IQuoteResponseStatus, PriceLineCategory, ProductQuoteArea, QuotationResponse, QuoteArea, QuoteCreateStatusType, QuoteResponseProvided } from "./enums";

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
    id?: number,
    // Does this price entry pertain to a particular asset?
    assetId?: number,
    // Was this price entry generated from a predefined rate?
    rateId?: number,
    name: string,
    description?: string,
    priceLineCategory: PriceLineCategory,
    quantity?: number,
    itemPrice?: number,
    currencyUnit: string,
    price?: number,
    taxRate: number,
    total?: number,
    isFoc: boolean,
    lineTotal?: number,
    taxTotal?: number,
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

export interface IDeprecatedQuotationResponseLine {
    quotationResponse?: QuotationResponse,
    advisedServiceDate?: number,
    // The asset within the quote that this entry pertains to - will assume 
    serviceAssetRequirement?: IServiceAssetRequirement,
    priceLine: IPriceLine,   
}

export interface IQuotationResponsePriceLine extends IPriceLine {
    assetId?: number, // If this price entry pertains to a particular asset
    quotationAssetResponseId?: number, // To enable maintaining link back to QUotationAssetResponsee record
}

export interface IQuotationAssetResponse {
    id: number,
    assetId: number,
    quotationResponse: QuotationResponse,
    advisedServiceDate?: number,
}

export interface IQuotationSupplierResponse extends IServiceRequirement {
    quotationId: number,
    quotationSupplierInviteId: number,
    quotationResponse: QuotationResponse,
    responseDateTime?: number,
    supplier: ISupplier,
    // Confirm providing our initial response to the quote request
    responseSubmittedDateTime?: number,
    // Quote will be closed off when there's no further dialog or if it was cancelled etc
    closedDateTime?: number,
    // Time the quote was first accessed
    supplierOpenedDateTime?: number,
    haveOpenQuestions: boolean,
    // Custom properties can be specified by the supplier
    properties: IItemAttributeMap,
    // Pricing, support multiple entries per asset
    quotationAssetResponses: Array<IQuotationAssetResponse>,
    quotationResponsePriceLines: Array<IQuotationResponsePriceLine>, 

    bestAndFinalOffer: boolean,
    bestOfferRequested: boolean,
    // Likely only applies to single site reative job
    anticipatedVisitCount?: number,
    siteSurveyRequired: boolean,
    soonestServiceDate: number,
    declineToQuoteReason?: string,
    responseCutoffDate?: number,
    quoteTerms: string,
    validUntilDate?: number,
    siteSurveyProperties?: string,
}

export interface IQuotationResponse {
    quotationId: number,
    quotationSupplierInviteId: number,
    quotationResponse: QuotationResponse,
    responseSubmittedDateTime: number,
    anticipatedVisitCount?: number,
    bestAndFinalOffer: boolean,
    bestOfferResponseDate?: number,
    siteSurveyRequired?: boolean,
    soonestServiceDate?: number,
    declineToQuoteReason?: string,
    supplierId: number,
    price: number, 
    properties?: IItemAttributeMap,
    assetDetails: Array<IQuotationAssetResponse>,
    priceLines: Array<IPriceLine>, 
    quoteTerms: string,
    validUntilDate?: number,
    siteSurveyProperties?: string,
}

export interface IBafoOptout {
    quotationId: number,
    supplierId: number,
    quotationSupplierInviteId: number,
    notes: string,
}

export interface IQuotationDocument extends IKeyedItem {
    reference: string,
    dateRequired?: string,
    organisationUnitName: string,
    organisationUnitImage: string,
    customer: string,
    service: string,
    createdByUserName: string,
    responseDate: string,
    siteLocation: string,
    validUntil: string,
    time: Array<IPriceLine>,
    material: Array<IPriceLine>,
    fixedCost: Array<IPriceLine>,
    discount: Array<IPriceLine>,
    responses: Array<IQuotationDocumentSupplierResponse>,
    subTotal: number,
    taxTotal: number,
    total: number,
}

export interface IQuotationDocumentSupplierResponse {
    quotationSupplierInviteId: number,
    supplierId: number,
    supplierName: string,
    supplierImage: string,
    price?: number,
    originalPrice?: number,
    optout: boolean,
    responded: boolean,
    declineToQuoteReason?: string,
    quoteWonStatusId: number,
    score: number
}

export interface ISupplierQuoteRequest extends IServiceRequirement {
    subject: string,
    supplierId: number,
    organisationUnitId: number,
    price: number, 
    assetDetails: Array<ISupplierQuotationAsset>,
    priceLines: Array<IPriceLine>, 
    quoteTerms: string,
    validUntilDate?: number,
    submittedDate?: number,
    soonestServiceDate?: number,
    originalQuoteId?: number,
    relatedReference?: string,
    answers?: string,
}

export interface ISupplierQuoteReview extends IServiceRequirement {
    id: number,
    subject: string,
    supplierId: number,
    organisationUnitId: number,
    price: number, 
    priceLines: Array<IPriceLine>, 
    quoteTerms: string,
    validUntilDate?: number,
    submittedDate?: number,
    soonestServiceDate?: number,
    originalQuoteId?: number,
    relatedReference?: string,
    answers?: string,
    supplier: IKeyedItem,
}

export interface ISupplierQuotationAsset {
    id: number,
    assetId: number,
    companyLocationId: number,
    advisedServiceDate?: number,
}

/* product quotes interfaces */
export interface IProductContainer extends IKeyedItem {
    location?: ILocation,
    productLines: Array<IProductLine>,
    properties: any,
  }
  
  export interface IProductLine extends IKeyedItem {
    asset?: ICoreAsset,
    category: ICategory,
    quantity: number,
    requiredDate: number,
  }
  
  export interface IProductLineViewModel extends IProductLine {
    key?: string
  }
  
  export interface IProductCategory extends IKeyedItem
  {
  
  }
  
  export interface IProductQuoteCompletionState {
    haveProduct: boolean,
    haveContract: boolean,
    haveSupplierInvites: boolean,
    haveConfirmation: boolean,
  }
  
  export interface IProductQuoteRequest extends IKeyedItem {
    reference: string,
    productContainers: Array<IProductContainer>
    company?: ICompany,
    invitedSuppliers: Array<ISupplierInviteProfile>,
    responseCutoffDate?: number,
    requiredDate?: number,
    submittedDate?: number,
  }
  
  export interface IProductQuoteRequestStatus extends ILinearProgressEntry {
    quoteArea: ProductQuoteArea;
  }
  