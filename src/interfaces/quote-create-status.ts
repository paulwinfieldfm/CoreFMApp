import { IService } from "./service";

export enum QuoteCreateStatusType {
    reset,
    serviceSelected
}

export enum QuoteArea {
    selectService,
    selectCustomer,
    selectAsset,
    questionSet,
    inviteSuppliers,
    confirmation,
    review,
}

export interface IQuoteCreateStatus {
    status: QuoteCreateStatusType,
    service: IService,
}