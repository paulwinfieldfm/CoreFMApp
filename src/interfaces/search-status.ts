import { ICategory } from "./category";
import { IService } from "./service";

export enum SearchStatusType {
    searching,
    searchComplete,
    error
}

export interface ISearchStatus {
    status: SearchStatusType,
    message?: string,
    categories?: Array<ICategory>,
    services?: Array<IService>
}