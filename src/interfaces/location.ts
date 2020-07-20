import { ICoreAsset, IAsset } from "./asset";

export interface ILocation extends ICoreAsset {
    assets?: Array<IAsset>,
    buildingNameNumber?: String,
    houseNameNumber?: String,
    street?: String,
    address1?: String,
    address2?: String,
    address3?: String,
    countty?: String,
    postcode?: String,
}