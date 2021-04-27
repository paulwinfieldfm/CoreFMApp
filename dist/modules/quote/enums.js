"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteWonStatus = exports.PriceLineCategory = exports.BookingPriority = exports.QuotationResponse = exports.QuoteResponseProvided = exports.QuoteResponseArea = exports.QuoteArea = exports.QuoteCreateStatusType = void 0;
var QuoteCreateStatusType;
(function (QuoteCreateStatusType) {
    QuoteCreateStatusType[QuoteCreateStatusType["reset"] = 0] = "reset";
    QuoteCreateStatusType[QuoteCreateStatusType["serviceSelected"] = 1] = "serviceSelected";
})(QuoteCreateStatusType = exports.QuoteCreateStatusType || (exports.QuoteCreateStatusType = {}));
var QuoteArea;
(function (QuoteArea) {
    QuoteArea[QuoteArea["selectService"] = 0] = "selectService";
    QuoteArea[QuoteArea["selectCustomer"] = 1] = "selectCustomer";
    QuoteArea[QuoteArea["selectContact"] = 2] = "selectContact";
    QuoteArea[QuoteArea["selectAsset"] = 3] = "selectAsset";
    QuoteArea[QuoteArea["questionSet"] = 4] = "questionSet";
    QuoteArea[QuoteArea["inviteSuppliers"] = 5] = "inviteSuppliers";
    QuoteArea[QuoteArea["confirmation"] = 6] = "confirmation";
    QuoteArea[QuoteArea["review"] = 7] = "review";
})(QuoteArea = exports.QuoteArea || (exports.QuoteArea = {}));
var QuoteResponseArea;
(function (QuoteResponseArea) {
    QuoteResponseArea[QuoteResponseArea["reviewQuote"] = 0] = "reviewQuote";
    QuoteResponseArea[QuoteResponseArea["declinedToQuote"] = 1] = "declinedToQuote";
    QuoteResponseArea[QuoteResponseArea["specifyAvailability"] = 2] = "specifyAvailability";
    QuoteResponseArea[QuoteResponseArea["specifyCostings"] = 3] = "specifyCostings";
    QuoteResponseArea[QuoteResponseArea["specifyProperties"] = 4] = "specifyProperties";
    QuoteResponseArea[QuoteResponseArea["confirmation"] = 5] = "confirmation";
    QuoteResponseArea[QuoteResponseArea["refineQuote"] = 6] = "refineQuote";
})(QuoteResponseArea = exports.QuoteResponseArea || (exports.QuoteResponseArea = {}));
var QuoteResponseProvided;
(function (QuoteResponseProvided) {
    QuoteResponseProvided[QuoteResponseProvided["pending"] = 0] = "pending";
    QuoteResponseProvided[QuoteResponseProvided["declined"] = 1] = "declined";
    QuoteResponseProvided[QuoteResponseProvided["quoteGiven"] = 2] = "quoteGiven";
})(QuoteResponseProvided = exports.QuoteResponseProvided || (exports.QuoteResponseProvided = {}));
var QuotationResponse;
(function (QuotationResponse) {
    QuotationResponse[QuotationResponse["unconfirmed"] = 0] = "unconfirmed";
    QuotationResponse[QuotationResponse["excluded"] = 1] = "excluded";
    QuotationResponse[QuotationResponse["included"] = 2] = "included";
})(QuotationResponse = exports.QuotationResponse || (exports.QuotationResponse = {}));
var BookingPriority;
(function (BookingPriority) {
    BookingPriority[BookingPriority["unspecified"] = 0] = "unspecified";
    BookingPriority[BookingPriority["p1"] = 1] = "p1";
    BookingPriority[BookingPriority["p2"] = 2] = "p2";
    BookingPriority[BookingPriority["p3"] = 3] = "p3";
    BookingPriority[BookingPriority["p4"] = 4] = "p4";
})(BookingPriority = exports.BookingPriority || (exports.BookingPriority = {}));
var PriceLineCategory;
(function (PriceLineCategory) {
    PriceLineCategory[PriceLineCategory["time"] = 0] = "time";
    PriceLineCategory[PriceLineCategory["materials"] = 1] = "materials";
    PriceLineCategory[PriceLineCategory["discount"] = 2] = "discount";
    PriceLineCategory[PriceLineCategory["credit"] = 3] = "credit";
    PriceLineCategory[PriceLineCategory["fixedCost"] = 4] = "fixedCost";
})(PriceLineCategory = exports.PriceLineCategory || (exports.PriceLineCategory = {}));
var QuoteWonStatus;
(function (QuoteWonStatus) {
    QuoteWonStatus[QuoteWonStatus["pending"] = 0] = "pending";
    QuoteWonStatus[QuoteWonStatus["won"] = 1] = "won";
    QuoteWonStatus[QuoteWonStatus["notWon"] = 2] = "notWon";
})(QuoteWonStatus = exports.QuoteWonStatus || (exports.QuoteWonStatus = {}));
//# sourceMappingURL=enums.js.map