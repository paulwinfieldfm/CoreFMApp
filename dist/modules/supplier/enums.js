"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPermission = exports.SupplierWeighting = void 0;
var SupplierWeighting;
(function (SupplierWeighting) {
    SupplierWeighting[SupplierWeighting["avgQuoteResponse"] = 0] = "avgQuoteResponse";
    SupplierWeighting[SupplierWeighting["quoteToCostRatio"] = 1] = "quoteToCostRatio";
    SupplierWeighting[SupplierWeighting["rating"] = 2] = "rating";
    SupplierWeighting[SupplierWeighting["greenScore"] = 3] = "greenScore";
})(SupplierWeighting = exports.SupplierWeighting || (exports.SupplierWeighting = {}));
var SupplierPermission;
(function (SupplierPermission) {
    SupplierPermission[SupplierPermission["unknown"] = 0] = "unknown";
    SupplierPermission[SupplierPermission["canReceiveQuoteInvite"] = 1] = "canReceiveQuoteInvite";
    SupplierPermission[SupplierPermission["canProvideQuotation"] = 2] = "canProvideQuotation";
})(SupplierPermission = exports.SupplierPermission || (exports.SupplierPermission = {}));
//# sourceMappingURL=enums.js.map