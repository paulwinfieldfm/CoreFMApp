import { IBreadcrumbPathEntry, IItemAttributeMap, IKeyedItem } from "../base";
import { IService } from "../servicing";

export interface ICoreAsset extends IKeyedItem {
    coordinates?: string, // Assets have at least rudimentary location, although optional
    parentId?: number, // Parent in hierarchy
    locationId?: number, // Hosting phyical location, site etc
    floorplanImage?: string, // May be different from the image attr available in IKeyedItem
    path?: Array<IBreadcrumbPathEntry>,
    properties?: IItemAttributeMap,
    defaultService?: IService,
}
export interface IAsset extends ICoreAsset {
    assets?: Array<IAsset>,
}
/// Interface geared toward helping display an asset in a tree view or other hierarchy view element
export interface IAssetNode extends ICoreAsset {
    isLocation: boolean,
    children?: IAssetNode[]
}    
