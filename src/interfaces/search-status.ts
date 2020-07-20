import { ICategory } from "./category";
import { IService } from "./service";
import { ICompany } from "./company";
import { IAsset } from "./asset";

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
    assets?: Array<IAsset>,
    categories?: Array<ICategory>,
    companies?: Array<ICompany>,
    services?: Array<IService>
}