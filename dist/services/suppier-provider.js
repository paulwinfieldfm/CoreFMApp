"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierProviderService = void 0;
const __1 = require("..");
const utilities_1 = require("../utilities");
class SupplierProviderService {
    constructor() { }
    static getInstance() {
        if (!SupplierProviderService.instance) {
            SupplierProviderService.instance = new SupplierProviderService();
        }
        return SupplierProviderService.instance;
    }
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
    nominalAvgQuoteResponse(value) {
        return utilities_1.Utils.hasMinimumValue(value, 2) ? value : 90;
    }
    nominalQuoteToCostRatio(value) {
        return utilities_1.Utils.hasMinimumValue(value, 5) ? value : 105;
    }
    nominalRating(value) {
        return utilities_1.Utils.hasMinimumValue(value, 2) ? value : 75;
    }
    _sortByAvgQuoteResponse(supplier1, supplier2) {
        const value1 = SupplierProviderService.getInstance().nominalAvgQuoteResponse(supplier1.avgQuoteResponse);
        const value2 = SupplierProviderService.getInstance().nominalAvgQuoteResponse(supplier2.avgQuoteResponse);
        if (value1 == value2) {
            return 0;
        }
        else if (value1 > value2) {
            return 1;
        }
        return -1;
    }
    _sortByQuoteToCostRatio(supplier1, supplier2) {
        const value1 = SupplierProviderService.getInstance().nominalQuoteToCostRatio(supplier1.quoteToCostRatio);
        const value2 = SupplierProviderService.getInstance().nominalQuoteToCostRatio(supplier2.quoteToCostRatio);
        if (value1 == value2) {
            return 0;
        }
        else if (value1 > value2) {
            return 1;
        }
        return -1;
    }
    _sortByRating(supplier1, supplier2) {
        const value1 = SupplierProviderService.getInstance().nominalRating(supplier1.rating);
        const value2 = SupplierProviderService.getInstance().nominalRating(supplier2.rating);
        if (value1 == value2) {
            return 0;
        }
        else if (value1 < value2) {
            return 1;
        }
        return -1;
    }
}
exports.SupplierProviderService = SupplierProviderService;
//# sourceMappingURL=suppier-provider.js.map