import { ICategory } from "./category";
import { IService } from "./service";

export enum SelectionType {
    asset,
    company,
    category,
    service,
    product,
}

export interface IItemSelected {
    selectionType: SelectionType,
    clearSelection: boolean,
    category?: ICategory,
    service?: IService
}