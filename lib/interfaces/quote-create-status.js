"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteArea = exports.QuoteCreateStatusType = void 0;
var QuoteCreateStatusType;
(function (QuoteCreateStatusType) {
    QuoteCreateStatusType[QuoteCreateStatusType["reset"] = 0] = "reset";
    QuoteCreateStatusType[QuoteCreateStatusType["serviceSelected"] = 1] = "serviceSelected";
})(QuoteCreateStatusType = exports.QuoteCreateStatusType || (exports.QuoteCreateStatusType = {}));
var QuoteArea;
(function (QuoteArea) {
    QuoteArea[QuoteArea["selectService"] = 0] = "selectService";
    QuoteArea[QuoteArea["selectCustomer"] = 1] = "selectCustomer";
    QuoteArea[QuoteArea["selectAsset"] = 2] = "selectAsset";
    QuoteArea[QuoteArea["questionSet"] = 3] = "questionSet";
    QuoteArea[QuoteArea["inviteSuppliers"] = 4] = "inviteSuppliers";
    QuoteArea[QuoteArea["confirmation"] = 5] = "confirmation";
    QuoteArea[QuoteArea["review"] = 6] = "review";
})(QuoteArea = exports.QuoteArea || (exports.QuoteArea = {}));
//# sourceMappingURL=quote-create-status.js.map