import { IBreadcrumbPathEntry } from './breadcrumb-path-entry';
import { IKeyedItem } from "./keyed-item";

export interface ICategory extends IKeyedItem {
    parentId: number,
    parentCategory: ICategory,
    description: string,
    documentUrl: string,
    path?: Array<IBreadcrumbPathEntry>,
}
  