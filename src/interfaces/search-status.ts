import { ICategory } from "./category";
import { IService } from "./service";

export enum SearchStatusType {
    searching,
    searchComplete,
    selected,
    error,
    reset
}

export interface ISearchStatus {
    status: SearchStatusType,
    message?: string,
    categories?: Array<ICategory>,
    services?: Array<IService>
}