import { SearchableItemType } from "./searchable-item-type";
import { IKeyedItem } from "./keyed-item";
export declare enum SearchStatusType {
    searching = 0,
    searchComplete = 1,
    selected = 2,
    error = 3,
    reset = 4
}
export interface ISearchResults {
    searchableItemType: SearchableItemType;
    data: Array<IKeyedItem>;
}
export interface ISearchSelection {
    searchableItemType: SearchableItemType;
    data: IKeyedItem;
}
export interface ISearchStatus {
    status: SearchStatusType;
    message?: string;
    searchResultsEntries?: Array<ISearchResults>;
    selection?: ISearchSelection;
}
