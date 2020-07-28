"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierProviderService = void 0;
const __1 = require("..");
const utilities_1 = require("../utilities");
class SupplierProviderService {
    prepare(suppliers, supplierPreference) {
        const prefs = supplierPreference !== null && supplierPreference !== void 0 ? supplierPreference : this.defaultSupplierPreference();
        this.sortBySupplierPreference(suppliers, prefs.supplierWeighting);
        if (prefs.defaultInvites) {
            const c = (suppliers.length > prefs.defaultInvites) ? prefs.defaultInvites : suppliers.length;
            for (let i = 0; i < c; i++) {
                suppliers[i].invite = true;
            }
        }
    }
    defaultSupplierPreference() {
        return {
            supplierWeighting: __1.SupplierWeighting.quoteToCostRatio,
            defaultInvites: 3,
            maxInvites: 5,
            minInvites: 1,
        };
    }
    sortBySupplierPreference(suppliers, supplierWeighting) {
        switch (supplierWeighting) {
            case __1.SupplierWeighting.avgQuoteResponse:
                suppliers.sort(this._sortByAvgQuoteResponse);
                break;
            case __1.SupplierWeighting.quoteToCostRatio:
                suppliers.sort(this._sortByQuoteToCostRatio);
                break;
            default:
                suppliers.sort(this._sortByRating);
                break;
        }
    }
    _sortByAvgQuoteResponse(supplier1, supplier2) {
        const supplier1HasValue = utilities_1.Utils.hasMinimumValue(supplier1.avgQuoteResponse, 5);
        const supplier2HasValue = utilities_1.Utils.hasMinimumValue(supplier2.avgQuoteResponse, 5);
        if ((!supplier1HasValue && !supplier2HasValue) || (supplier1.avgQuoteResponse == supplier2.avgQuoteResponse)) {
            return 0;
        }
        else if (!supplier1HasValue || (supplier1.avgQuoteResponse < supplier2.avgQuoteResponse)) {
            return -1;
        }
        else {
            return 1;
        }
    }
    _sortByQuoteToCostRatio(supplier1, supplier2) {
        // The lower the quote to cost ratio, the better - so item 1 wins if smaller
        const supplier1HasValue = utilities_1.Utils.hasMinimumValue(supplier1.quoteToCostRatio, 5);
        const supplier2HasValue = utilities_1.Utils.hasMinimumValue(supplier2.quoteToCostRatio, 5);
        if ((!supplier1HasValue && !supplier2HasValue) || (supplier1.quoteToCostRatio == supplier2.quoteToCostRatio)) {
            return 0;
        }
        else if (!supplier1HasValue || (supplier1.quoteToCostRatio > supplier2.quoteToCostRatio)) {
            return -1;
        }
        else {
            return 1;
        }
    }
    _sortByRating(supplier1, supplier2) {
        const supplier1HasValue = utilities_1.Utils.hasMinimumValue(supplier1.rating, 1);
        const supplier2HasValue = utilities_1.Utils.hasMinimumValue(supplier2.rating, 1);
        if ((!supplier1HasValue && !supplier2HasValue) || (supplier1.rating == supplier2.rating)) {
            return 0;
        }
        else if (!supplier1HasValue || (supplier1.rating < supplier2.rating)) {
            return -1;
        }
        else {
            return 1;
        }
    }
}
exports.SupplierProviderService = SupplierProviderService;
//# sourceMappingURL=suppier-provider.js.map