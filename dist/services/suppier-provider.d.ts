import { ISupplier, ISupplierPreference, SupplierWeighting } from "..";
export declare class SupplierProviderService {
    private static instance;
    private constructor();
    static getInstance(): SupplierProviderService;
    prepare(suppliers: Array<ISupplier>, supplierPreference: ISupplierPreference): void;
    defaultSupplierPreference(): ISupplierPreference;
    sortBySupplierPreference(suppliers: Array<ISupplier>, supplierWeighting: SupplierWeighting): void;
    nominalAvgQuoteResponse(value?: any): number;
    nominalQuoteToCostRatio(value?: any): number;
    nominalRating(value?: any): number;
    private _sortByAvgQuoteResponse;
    private _sortByQuoteToCostRatio;
    private _sortByRating;
}
