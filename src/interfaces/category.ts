import { IBreadcrumbPathEntry } from './breadcrumb-path-entry';
import { IKeyedItem } from "./keyed-item";

export interface ICategory extends IKeyedItem {
    parentId?: number,
    parentCategory?: ICategory,
    description: string,
    documentUrl?: string,
    image?: string,
    path?: Array<IBreadcrumbPathEntry>,
}
  