"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlottableLocation = void 0;
class PlottableLocation {
    constructor(location) {
        this.displayName = location.displayName;
        this.postcode = location.postcode;
        this.lat = location.lat;
        this.lng = location.lng;
    }
    get isPlottable() {
        return this.lat !== undefined && this.lng !== undefined;
    }
    toString() {
        if (!this.isPlottable) {
            return undefined;
        }
        return `${this.lat},${this.lng}`;
    }
    toGeoString() {
        const result = this.toString();
        return result ? `geo!${result}` : undefined;
    }
}
exports.PlottableLocation = PlottableLocation;
//# sourceMappingURL=plottable-location.js.map