"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTravelRoute = exports.Location = exports.PlottableLocation = void 0;
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
class Location {
    constructor(location) {
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
    toString() {
        return Location.formatAddress(this, true);
    }
    static formatAddress(location, shortFormat) {
        let line1 = '';
        let lines = [];
        if (location.buildingNameNumber) {
            line1 = (`${location.buildingNameNumber}`).trim();
        }
        else if (location.houseNameNumber) {
            line1 = (`${location.houseNameNumber}`).trim();
        }
        if (location.street) {
            line1 = line1 ? `${line1} ${location.street.trim()}` : location.street.trim();
        }
        if (line1) {
            lines.push(line1);
        }
        if (location.address1) {
            lines.push(location.address1.trim());
        }
        if (!shortFormat && location.address2) {
            lines.push(location.address2.trim());
        }
        if (!shortFormat && location.address3) {
            lines.push(location.address3.trim());
        }
        if (location.town) {
            lines.push(location.town.trim());
        }
        if (location.postcode) {
            lines.push(location.postcode.trim());
        }
        return lines.length > 0 ? lines.join(', ') : '';
    }
}
exports.Location = Location;
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
//# sourceMappingURL=location.js.map