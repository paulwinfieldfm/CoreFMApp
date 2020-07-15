import { IService } from "./service";

export enum QuoteCreateStatusType {
    reset,
    serviceSelected
}

export interface QuoteCreateStatus {
    status: QuoteCreateStatusType,
    services: IService
}