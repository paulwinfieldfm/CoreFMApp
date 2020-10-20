import { IKeyedImageItem } from "./keyed-item";
import { IBreadcrumbPathEntry, IItemAttributeMap } from ".";
export interface ICoreAsset extends IKeyedImageItem {
    code: string;
    coordinates?: string;
    parentId?: number;
    locationId?: number;
    floorplanImage?: string;
    path?: Array<IBreadcrumbPathEntry>;
    properties?: IItemAttributeMap;
}
export interface IAsset extends ICoreAsset {
    assets?: Array<IAsset>;
}
export interface IAssetNode extends ICoreAsset {
    isLocation: boolean;
    children?: IAssetNode[];
}
