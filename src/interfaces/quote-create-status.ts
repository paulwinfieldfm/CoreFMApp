import { IService } from "./service";

export enum QuoteCreateStatusType {
    reset,
    serviceSelected
}

export interface IQuoteCreateStatus {
    status: QuoteCreateStatusType,
    service: IService
}