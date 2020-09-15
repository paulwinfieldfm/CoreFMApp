import { IService } from "./service";

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
export enum QuoteResponseArea {
    reviewQuote,
    declinedToQuote,
    specifyAvailability,
    specifyCostings,
    specifyProperties,
    confirmation,
    refineQuote
}
