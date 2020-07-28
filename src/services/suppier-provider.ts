import { ISupplier, ISupplierPreference, SupplierWeighting } from "..";
import { Utils } from "../utilities";

export class SupplierProviderService  {
    public prepare(suppliers: Array<ISupplier>, supplierPreference: ISupplierPreference): void {
        const prefs = supplierPreference ?? this.defaultSupplierPreference();
        this.sortBySupplierPreference(suppliers, prefs.supplierWeighting);
        if (prefs.defaultInvites) {
            const c: number = (suppliers.length > prefs.defaultInvites) ? prefs.defaultInvites : suppliers.length;
            for (let i=0;i<c;i++) {
                suppliers[i].invite = true;
            }
        }
    }

    public defaultSupplierPreference(): ISupplierPreference {
        return {
            supplierWeighting: SupplierWeighting.quoteToCostRatio,
            defaultInvites: 3,
            maxInvites: 5,
            minInvites: 1,
        }
    }

    public sortBySupplierPreference(suppliers: Array<ISupplier>, supplierWeighting: SupplierWeighting): void {
        switch (supplierWeighting) {
            case SupplierWeighting.avgQuoteResponse:
                suppliers.sort(this._sortByAvgQuoteResponse);
                break;
            case SupplierWeighting.quoteToCostRatio:
                suppliers.sort(this._sortByQuoteToCostRatio);
                break;
            default:
                suppliers.sort(this._sortByRating);
                break;
        }
    }

    private _sortByAvgQuoteResponse(supplier1: ISupplier, supplier2: ISupplier): number {
        const supplier1HasValue: boolean = this._hasMinimumValue(supplier1.avgQuoteResponse, 5);
        const supplier2HasValue: boolean = this._hasMinimumValue(supplier2.avgQuoteResponse, 5);
        if ((!supplier1HasValue && !supplier2HasValue) || (supplier1.avgQuoteResponse == supplier2.avgQuoteResponse)) {
            return 0;
        } else if (!supplier1HasValue || (supplier1.avgQuoteResponse! < supplier2.avgQuoteResponse!)) {
            return -1;
        } else {
            return 1;
        }
    }

    private _sortByQuoteToCostRatio(supplier1: ISupplier, supplier2: ISupplier): number {
        // The lower the quote to cost ratio, the better - so item 1 wins if smaller
        const supplier1HasValue: boolean = this._hasMinimumValue(supplier1.quoteToCostRatio, 5);
        const supplier2HasValue: boolean = this._hasMinimumValue(supplier2.quoteToCostRatio, 5);
        if ((!supplier1HasValue && !supplier2HasValue) || (supplier1.quoteToCostRatio == supplier2.quoteToCostRatio)) {
            return 0;
        } else if (!supplier1HasValue || (supplier1.quoteToCostRatio! > supplier2.quoteToCostRatio!)) {
            return -1;
        } else {
            return 1;
        }
    }

    private _sortByRating(supplier1: ISupplier, supplier2: ISupplier): number {
        const supplier1HasValue: boolean = this._hasMinimumValue(supplier1.rating, 1);
        const supplier2HasValue: boolean = this._hasMinimumValue(supplier2.rating, 1);
        if ((!supplier1HasValue && !supplier2HasValue) || (supplier1.rating == supplier2.rating)) {
            return 0;
        } else if (!supplier1HasValue || (supplier1.rating! < supplier2.rating!)) {
            return -1;
        } else {
            return 1;
        }
    }

    private _hasMinimumValue(field: any, minValue: number): boolean {
        return Utils.hasValue(field) && field >= minValue;
    }
}  