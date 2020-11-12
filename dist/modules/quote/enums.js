"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceLineCategory = exports.BookingPriority = exports.QuoteAssetServiceResponse = exports.QuoteResponseProvided = exports.QuoteResponseArea = exports.QuoteArea = exports.QuoteCreateStatusType = void 0;
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
var QuoteAssetServiceResponse;
(function (QuoteAssetServiceResponse) {
    QuoteAssetServiceResponse[QuoteAssetServiceResponse["unconfirmed"] = 0] = "unconfirmed";
    QuoteAssetServiceResponse[QuoteAssetServiceResponse["excluded"] = 1] = "excluded";
    QuoteAssetServiceResponse[QuoteAssetServiceResponse["included"] = 2] = "included";
})(QuoteAssetServiceResponse = exports.QuoteAssetServiceResponse || (exports.QuoteAssetServiceResponse = {}));
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
})(PriceLineCategory = exports.PriceLineCategory || (exports.PriceLineCategory = {}));
//# sourceMappingURL=enums.js.map