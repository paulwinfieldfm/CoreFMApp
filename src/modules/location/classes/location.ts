import { IAsset } from "../../asset";
import { IBreadcrumbPathEntry, IItemAttributeMap } from "../../base";
import { ILocation } from "../interfaces";


export class Location implements ILocation {
    assets?: Array<IAsset>;
    buildingNameNumber?: string;
    houseNameNumber?: string;
    street?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    town: string;
    county?: string;
    // IKeyedImageItem
    id: number;
    name: string;
    description?: string;
    // ICoreAsset
    code?: string;
    coordinates?: string;
    parentId?: number;
    locationId?: number;
    floorplanImage?: string;
    path?: Array<IBreadcrumbPathEntry>;
    properties?: IItemAttributeMap;
    // IPlottableLocation
    displayName: string;
    postcode?: string;
    lat?: number;
    lng?: number;

    constructor(location: ILocation) {
        this.assets = location.assets;
        this.buildingNameNumber = location.buildingNameNumber;
        this.houseNameNumber = location.houseNameNumber;
        this.street = location.street;
        this.address1 = location.address1;
        this.address2 = location.address2;
        this.address3 = location.address3;
        this.town = location.town;
        this.county = location.county;
        this.id = location.id;
        this.name = location.name;
        this.description = location.description;
        this.code = location.code;
        this.coordinates = location.coordinates;
        this.parentId = location.parentId;
        this.locationId = location.locationId;
        this.floorplanImage = location.floorplanImage;
        this.path = location.path;
        this.properties = location.properties;    
        this.displayName = location.displayName;
        this.postcode = location.postcode;
        this.lat = location.lat;
        this.lng = location.lng;
    }

    public toString(): string {
        return Location.formatAddress(this, true);
    }

    public static formatAddress(location: ILocation, shortFormat: boolean): string {
        let line1: string = '';
        let lines: Array<string> = [];
        if (location.buildingNameNumber) {
            line1 = (`${location.buildingNameNumber}`).trim();
        } else if (location.houseNameNumber) {
            line1 = (`${location.houseNameNumber}`).trim();
        }
        if (location.street) {
            line1 = line1 ? `${line1} ${location.street.trim()}` : location.street.trim();
        }
        if (line1) { lines.push(line1); }
        if (location.address1)  { lines.push(location.address1.trim()); }
        if (!shortFormat && location.address2)  { lines.push(location.address2.trim()); }
        if (!shortFormat && location.address3)  { lines.push(location.address3.trim()); }
        if (location.town)  { lines.push(location.town.trim()); }
        if (location.postcode)  { lines.push(location.postcode.trim()); }

        return lines.length > 0 ? lines.join(', ') : '';
    }
}
