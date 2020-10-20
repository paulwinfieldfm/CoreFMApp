import { ICategory } from "./category";
import { IService } from "./service";
import { SearchableItemType } from "./searchable-item-type";
export interface IItemSelected {
    searchableItemType: SearchableItemType;
    clearSelection: boolean;
    category?: ICategory;
    service?: IService;
}
