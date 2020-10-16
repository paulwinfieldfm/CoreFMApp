import { IPlottableLocation, ISimpleTravelRoute } from "../interfaces";

export interface IMappingSupportService {
    geocodeResultToPlottableLocation: (result: any, displayName: string) => IPlottableLocation | undefined,
    routeResultToSimpleTravelRoute: (result: any) => ISimpleTravelRoute | undefined,
}

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
    public routeResultToSimpleTravelRoute(result: any): ISimpleTravelRoute | undefined {
        if (!result || !result.response || !result.response.matrixEntry || !result.response.matrixEntry.summary) {
            return undefined;
        }
        return {
            distanceInMetres: result.response.matrixEntry.summary.distance,
            timeInSeconds: result.response.matrixEntry.summary.travelTime,
            costFactor: result.response.matrixEntry.summary.costFactor
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