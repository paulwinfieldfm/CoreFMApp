import { IAsset, IBreadcrumbPathEntry, IItemAttributeMap, ILocation, IPlottableLocation, ISimpleTravelRoute } from "../interfaces";
export declare class PlottableLocation implements IPlottableLocation {
    displayName: string;
    postcode?: string;
    lat?: number;
    lng?: number;
    constructor(location: IPlottableLocation);
    get isPlottable(): boolean;
    toString(): string | undefined;
    toGeoString(): string | undefined;
}
export declare class Location implements ILocation {
    assets?: Array<IAsset>;
    buildingNameNumber?: string;
    houseNameNumber?: string;
    street?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    town: string;
    county?: string;
    id: number;
    name: string;
    description?: string;
    code: string;
    coordinates?: string;
    parentId?: number;
    locationId?: number;
    floorplanImage?: string;
    path?: Array<IBreadcrumbPathEntry>;
    properties?: IItemAttributeMap;
    displayName: string;
    postcode?: string;
    lat?: number;
    lng?: number;
    constructor(location: ILocation);
    toString(): string;
    static formatAddress(location: ILocation, shortFormat: boolean): string;
}
export declare class SimpleTravelRoute implements ISimpleTravelRoute {
    distanceInMetres: number;
    timeInSeconds: number;
    costFactor?: number;
    constructor(route: ISimpleTravelRoute);
    get distanceInMiles(): number | undefined;
    get toTimeString(): string | undefined;
    toString(): string | undefined;
}
