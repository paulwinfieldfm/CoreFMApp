"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteResponseArea = void 0;
/*
Progression through quote response as a supplier:

- open the quote on notify that an invite received
- view details given by the requester
- can we respond?
- do we need further info from the requester?
- enter availability
- enter time to do job
- costings
- properties (warranty etc)
- bafo?
- submit > await
- review loop
- accepted
- rejected

*/
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
//# sourceMappingURL=quote-response-status.js.map