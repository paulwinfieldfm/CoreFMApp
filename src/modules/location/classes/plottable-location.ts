import { IPlottableLocation } from "../interfaces";

export class PlottableLocation implements IPlottableLocation {
    displayName: string;
    postcode?: string;
    lat?: number;
    lng?: number;

    constructor(location: IPlottableLocation) {
        this.displayName = location.displayName;
        this.postcode = location.postcode;
        this.lat = location.lat;
        this.lng = location.lng;
    }

    public get isPlottable(): boolean {
        return this.lat !== undefined && this.lng !== undefined;
    }

    public toString(): string | undefined {
        if (!this.isPlottable) {
            return undefined;
        }
        return `${this.lat},${this.lng}`;
    }    

    public toGeoString(): string | undefined {
        const result = this.toString();
        return result ? `geo!${result}` : undefined;
    }
}
