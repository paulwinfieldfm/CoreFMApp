import { IKeyedItem } from "./keyed-item";

export interface ICoreAsset extends IKeyedItem {
    code: String,
    coordinates?: String,
    parentId?: number,
}

export interface IAsset extends ICoreAsset {
    assets?: Array<IAsset>,
}

export interface IAssetNode {
    id: number,
    name: string,
    isLocation: boolean,
    children?: IAssetNode[]
}