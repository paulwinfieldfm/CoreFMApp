"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteResponseStatus = void 0;
var QuoteResponseStatus;
(function (QuoteResponseStatus) {
    QuoteResponseStatus[QuoteResponseStatus["unknown"] = 0] = "unknown";
    QuoteResponseStatus[QuoteResponseStatus["reviewing"] = 1] = "reviewing";
    QuoteResponseStatus[QuoteResponseStatus["pending"] = 2] = "pending";
    QuoteResponseStatus[QuoteResponseStatus["specifyAvailability"] = 3] = "specifyAvailability";
    QuoteResponseStatus[QuoteResponseStatus["specifyCosting"] = 4] = "specifyCosting";
    QuoteResponseStatus[QuoteResponseStatus["specifyAdditionalInformation"] = 5] = "specifyAdditionalInformation";
    QuoteResponseStatus[QuoteResponseStatus["confirmation"] = 6] = "confirmation";
    QuoteResponseStatus[QuoteResponseStatus["moreInformationRequired"] = 7] = "moreInformationRequired";
    QuoteResponseStatus[QuoteResponseStatus["declined"] = 8] = "declined";
    QuoteResponseStatus[QuoteResponseStatus["quoteProvided"] = 9] = "quoteProvided";
})(QuoteResponseStatus = exports.QuoteResponseStatus || (exports.QuoteResponseStatus = {}));
//# sourceMappingURL=supplier-quote-response.js.map