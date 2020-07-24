import { IKeyedItem } from "./keyed-item";

export interface ICoreAsset extends IKeyedItem {
    code: String,
    coordinates?: String,
    parentId?: number,
    locationId?: number,
}

export interface IAsset extends ICoreAsset {
    assets?: Array<IAsset>,
}

export interface IAssetNode extends ICoreAsset {
    isLocation: boolean,
    children?: IAssetNode[]
}