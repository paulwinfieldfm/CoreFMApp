import { IPlottableLocation, ISimpleTravelRoute } from "../location";

export interface IMappingSupportService {
    geocodeResultToPlottableLocation: (result: any, displayName: string) => IPlottableLocation | undefined,
    matrixToSimpleTravelRoute: (result: any) => ISimpleTravelRoute | undefined,
    routeToSimpleTravelRoute: (result: any) => ISimpleTravelRoute | undefined,
}
