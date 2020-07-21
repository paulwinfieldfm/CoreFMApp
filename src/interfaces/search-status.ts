import { SearchableItemType } from "./searchable-item-type";
import { IKeyedItem } from "./keyed-item";

export enum SearchStatusType {
    searching,
    searchComplete,
    selected,
    error,
    reset
}

export interface ISearchResults {
    searchableItemType: SearchableItemType,
    data: Array<IKeyedItem>
}

export interface ISearchSelection {
    searchableItemType: SearchableItemType,
    data: IKeyedItem
}

export interface ISearchStatus {
    status: SearchStatusType,
    message?: string,
    searchResultsEntries?: Array<ISearchResults>,
    selection?: ISearchSelection
}