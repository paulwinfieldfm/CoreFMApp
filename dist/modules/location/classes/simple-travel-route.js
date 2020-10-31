"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTravelRoute = void 0;
class SimpleTravelRoute {
    constructor(route) {
        this.distanceInMetres = route.distanceInMetres;
        this.timeInSeconds = route.timeInSeconds;
        this.costFactor = route.costFactor;
    }
    get distanceInMiles() {
        if (!this.distanceInMetres) {
            return undefined;
        }
        let miles = this.distanceInMetres * 0.000621371;
        return parseFloat(miles > 4 ? miles.toFixed(0) : miles.toFixed(1));
    }
    get toTimeString() {
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
    toString() {
        const d = this.distanceInMiles;
        const t = this.toTimeString;
        return (!d || !t) ? '' : `${t}; ${d}`;
    }
}
exports.SimpleTravelRoute = SimpleTravelRoute;
//# sourceMappingURL=simple-travel-route.js.map