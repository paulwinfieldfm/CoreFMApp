import { IPlottableLocation, ISimpleTravelRoute } from "../interfaces";
export interface IMappingSupportService {
    geocodeResultToPlottableLocation: (result: any, displayName: string) => IPlottableLocation | undefined;
    matrixToSimpleTravelRoute: (result: any) => ISimpleTravelRoute | undefined;
    routeToSimpleTravelRoute: (result: any) => ISimpleTravelRoute | undefined;
}
export declare class HereMapsSupportService implements IMappingSupportService {
    geocodeResultToPlottableLocation(result: any, displayName: string): IPlottableLocation | undefined;
    matrixToSimpleTravelRoute(result: any): ISimpleTravelRoute | undefined;
    routeToSimpleTravelRoute(result: any): ISimpleTravelRoute | undefined;
    private _summaryToSimpleTravelRoute;
    private _getPlottableLocationFromLocation;
}
