import { IPlottableLocation, ISimpleTravelRoute } from "../../location";
import { IMappingSupportService } from "../interfaces";

export class HereMapsSupportService implements IMappingSupportService {
    public geocodeResultToPlottableLocation(result: any, displayName: string): IPlottableLocation | undefined {
        if (!result || !result.Response || !result.Response.View || result.Response.View.length == 0) {
            return undefined;
        }
        const viewResult: any = result.Response.View[0].Result
            ? result.Response.View[0].Result[0]
            : undefined;

        if (!viewResult || !viewResult.Location) {
            return undefined;
        }
        return this._getPlottableLocationFromLocation(viewResult.Location, displayName || viewResult.Location.Address.Label || 'Unknown');
    }
    public matrixToSimpleTravelRoute(result: any): ISimpleTravelRoute | undefined {
        if (!result || !result.response || !result.response.matrixEntry || result.response.matrixEntry.length == 0) {
            return undefined;
        }
        return this._summaryToSimpleTravelRoute(result.response.matrixEntry[0]);
    }

    public routeToSimpleTravelRoute(result: any): ISimpleTravelRoute | undefined {
        if (!result || !result.response || !result.response.route || result.response.route.length == 0) {
            return undefined;
        }
        return this._summaryToSimpleTravelRoute(result.response.route[0]);
    }

    private _summaryToSimpleTravelRoute(route: any): ISimpleTravelRoute {
        return {
            distanceInMetres: route.summary.distance,
            timeInSeconds: route.summary.travelTime,
            costFactor: route.summary.costFactor,
            co2Emission: route.summary.co2Emission,
        }
    }

    private _getPlottableLocationFromLocation(location: any, displayName: string): IPlottableLocation | undefined {
        if (!location) {
            return undefined;
        }
        if (location.NavigationPosition && location.NavigationPosition.length > 0 && location.NavigationPosition[0].Latitude) {
            return { 
                displayName: displayName, 
                lat: location.NavigationPosition[0].Latitude, 
                lng: location.NavigationPosition[0].Longitude 
            }
        } else if (location.DisplayPosition && location.DisplayPosition.Latitude) {
            return {
                displayName: displayName,
                lat: location.DisplayPosition.Latitude,
                lng: location.DisplayPosition.Longitude
            }
        } 
        return undefined;
      }
    
}