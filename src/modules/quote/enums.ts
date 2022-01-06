import { ILinearProgressEntry } from "../base";

export enum QuoteCreateStatusType {
    reset,
    serviceSelected
}
export enum QuoteArea {
    selectService,
    selectCustomer,
    selectContact,
    selectAsset,
    questionSet,
    inviteSuppliers,
    confirmation,
    review,
}
export enum QuoteResponseArea {
    reviewQuote,
    declinedToQuote,
    specifyAvailability,
    specifyCostings,
    specifyProperties,
    confirmation,
    refineQuote
}
export enum QuoteResponseProvided {
    pending,
    declined,
    quoteGiven,
}
export enum QuotationResponse {
    unconfirmed,
    excluded,
    included,
}
export interface IQuoteResponseStatus extends ILinearProgressEntry {
    quoteArea: QuoteResponseArea;
}
export enum BookingPriority {
    unspecified,
    p1,
    p2,
    p3,
    p4
}
export enum PriceLineCategory {
    time,
    materials,
    discount,
    credit,
    fixedCost,
}
export enum QuoteWonStatus {
    pending,
    won,
    notWon,
    cancelled
}

export enum ProductQuoteArea {
    selectCustomer,
    selectProduct,
    inviteSuppliers,
    confirmation,
  }

export enum quotationType {
    service=1,
    product=2
  }