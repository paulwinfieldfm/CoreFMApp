import { SearchableItemType } from "./searchable-item-type";
export interface ISearchRequest {
    searchableItemType: SearchableItemType;
    term: string;
}
