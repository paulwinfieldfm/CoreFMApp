export enum SupplierWeighting {
    avgQuoteResponse,
    quoteToCostRatio,
    rating,
    greenScore,
}

export interface ISupplierPreference {
    supplierWeighting: SupplierWeighting,
    defaultInvites: number,
    maxInvites: number,
    minInvites: number,
}