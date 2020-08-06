import { ICoreAsset, IAsset } from "./asset";
import { IPlottableLocation } from "./plottable-location";

export interface ILocation extends ICoreAsset, IPlottableLocation {
    assets?: Array<IAsset>,
    buildingNameNumber?: string,
    houseNameNumber?: string,
    street?: string,
    address1?: string,
    address2?: string,
    address3?: string,
    town: string,
    county?: string,
    displayName: string,
    postcode?: string,
    latitude?: number,
    longitude?: number,
}