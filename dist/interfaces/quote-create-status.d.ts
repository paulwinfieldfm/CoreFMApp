import { IService } from "./service";
export declare enum QuoteCreateStatusType {
    reset = 0,
    serviceSelected = 1
}
export declare enum QuoteArea {
    selectService = 0,
    selectCustomer = 1,
    selectAsset = 2,
    questionSet = 3,
    inviteSuppliers = 4,
    confirmation = 5,
    review = 6
}
export interface IQuoteCreateStatus {
    status: QuoteCreateStatusType;
    service: IService;
}
