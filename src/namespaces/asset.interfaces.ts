import { BaseInterfaces } from "./base.interfaces";

export namespace AssetInterfaces {
    export interface ICoreAsset extends BaseInterfaces.IKeyedItem {
        coordinates?: string, // Assets have at least rudimentary location, although optional
        parentId?: number, // Parent in hierarchy
        locationId?: number, // Hosting phyical location, site etc
        floorplanImage?: string, // May be different from the image attr available in IKeyedItem
        path?: Array<BaseInterfaces.IBreadcrumbPathEntry>,
        properties?: BaseInterfaces.IItemAttributeMap,
    }
    export interface IAsset extends ICoreAsset {
        assets?: Array<IAsset>,
    }
    /// Interface geared toward helping display an asset in a tree view or other hierarchy view element
    export interface IAssetNode extends ICoreAsset {
        isLocation: boolean,
        children?: IAssetNode[]
    }    
}