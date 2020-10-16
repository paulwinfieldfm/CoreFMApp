import { ICoreAsset, IAsset } from "./asset";

export interface IPlottableLocation {
    displayName: string,
    postcode?: string,
    lat?: number,
    lng?: number,
}
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
}

export interface ISimpleTravelRoute {
    distanceInMetres: number,
    timeInSeconds: number,
    costFactor?: number,
}