import { IKeyedItem } from "./keyed-item";

export interface ICoreAsset extends IKeyedItem {
    code: String,
    coordinates?: String,
}

export interface IAsset extends ICoreAsset {
    assets?: Array<IAsset>,
}