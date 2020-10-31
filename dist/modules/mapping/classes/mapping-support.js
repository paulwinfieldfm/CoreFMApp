"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HereMapsSupportService = void 0;
class HereMapsSupportService {
    geocodeResultToPlottableLocation(result, displayName) {
        if (!result || !result.Response || !result.Response.View || result.Response.View.length == 0) {
            return undefined;
        }
        const viewResult = result.Response.View[0].Result
            ? result.Response.View[0].Result[0]
            : undefined;
        if (!viewResult || !viewResult.Location) {
            return undefined;
        }
        return this._getPlottableLocationFromLocation(viewResult.Location, displayName || viewResult.Location.Address.Label || 'Unknown');
    }
    matrixToSimpleTravelRoute(result) {
        if (!result || !result.response || !result.response.matrixEntry || result.response.matrixEntry.length == 0) {
            return undefined;
        }
        return this._summaryToSimpleTravelRoute(result.response.matrixEntry[0]);
    }
    routeToSimpleTravelRoute(result) {
        if (!result || !result.response || !result.response.route || result.response.route.length == 0) {
            return undefined;
        }
        return this._summaryToSimpleTravelRoute(result.response.route[0]);
    }
    _summaryToSimpleTravelRoute(route) {
        return {
            distanceInMetres: route.summary.distance,
            timeInSeconds: route.summary.travelTime,
            costFactor: route.summary.costFactor,
            co2Emission: route.summary.co2Emission,
        };
    }
    _getPlottableLocationFromLocation(location, displayName) {
        if (!location) {
            return undefined;
        }
        if (location.NavigationPosition && location.NavigationPosition.length > 0 && location.NavigationPosition[0].Latitude) {
            return {
                displayName: displayName,
                lat: location.NavigationPosition[0].Latitude,
                lng: location.NavigationPosition[0].Longitude
            };
        }
        else if (location.DisplayPosition && location.DisplayPosition.Latitude) {
            return {
                displayName: displayName,
                lat: location.DisplayPosition.Latitude,
                lng: location.DisplayPosition.Longitude
            };
        }
        return undefined;
    }
}
exports.HereMapsSupportService = HereMapsSupportService;
//# sourceMappingURL=mapping-support.js.map