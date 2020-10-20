export declare enum SupplierWeighting {
    avgQuoteResponse = 0,
    quoteToCostRatio = 1,
    rating = 2,
    greenScore = 3
}
export interface ISupplierPreference {
    supplierWeighting: SupplierWeighting;
    defaultInvites: number;
    maxInvites: number;
    minInvites: number;
}
