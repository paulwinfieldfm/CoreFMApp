import { IBreadcrumbPathEntry } from './breadcrumb-path-entry';
import { IKeyedImageItem } from "./keyed-item";
export interface ICategory extends IKeyedImageItem {
    parentId?: number;
    parentCategory?: ICategory;
    documentUrl?: string;
    image?: string;
    path?: Array<IBreadcrumbPathEntry>;
}
