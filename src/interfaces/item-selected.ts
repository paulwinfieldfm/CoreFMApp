import { ICategory } from "./category";
import { IService } from "./service";
import { SearchableItemType } from "./searchable-item-type";

export interface IDeprecatedItemSelected {
    searchableItemType: SearchableItemType,
    clearSelection: boolean,
    category?: ICategory,
    service?: IService
}