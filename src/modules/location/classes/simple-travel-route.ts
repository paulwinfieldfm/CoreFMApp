import { ISimpleTravelRoute } from "../interfaces";

export class SimpleTravelRoute implements ISimpleTravelRoute {
    distanceInMetres: number;
    timeInSeconds: number;
    costFactor?: number;

    constructor(route: ISimpleTravelRoute) {
        this.distanceInMetres = route.distanceInMetres;
        this.timeInSeconds = route.timeInSeconds;
        this.costFactor = route.costFactor;
    }

    public get distanceInMiles(): number | undefined {
        if (!this.distanceInMetres) {
            return undefined;
        }
        let miles = this.distanceInMetres * 0.000621371;
        return parseFloat(miles > 4 ? miles.toFixed(0) : miles.toFixed(1));
    }

    public get toTimeString(): string | undefined {
        if (!this.timeInSeconds) {
            return undefined;
        }

        const m = ~~((this.timeInSeconds % 3600) / 60);
        if (this.timeInSeconds > 3600) {
            let h = ~~(this.timeInSeconds / 3600);
            return `${h} h ${m} min`;

        }
        return (this.timeInSeconds > 300) ? `${m} min` : '5 min';
    }

    public toString(): string | undefined {
        const d = this.distanceInMiles;
        const t = this.toTimeString;
        return (!d || !t) ? '' : `${t}; ${d}`;
    }    
}
