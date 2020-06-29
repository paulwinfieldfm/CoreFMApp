import { IBreadcrumbPathEntry } from './breadcrumb-path-entry';
import { IKeyedItem } from "./keyed-item";

export interface ICategory extends IKeyedItem {
    parentId: number;
    description: string,
    documentUrl: string,
    path?: Array<IBreadcrumbPathEntry>,
}
  