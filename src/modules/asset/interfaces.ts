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
    type?: string, // What type of physical thing this represents - room, air con unit, what have you
}
export interface IAsset extends ICoreAsset {
    assets?: Array<IAsset>,
}
/// Interface geared toward helping display an asset in a tree view or other hierarchy view element
export interface IAssetNode extends ICoreAsset {
    isLocation: boolean,
    selected: boolean,
    hasChildren?: boolean, // Help support dynamic loading without having children populated in advance
    children?: IAssetNode[]
}    
