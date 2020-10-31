import { IAsset } from "../asset";
import { ICategory, IKeyedItem } from "../base";
import { IScheduleDefinition } from "../date-extensions";
import { ServiceType, ServiceEventStatus } from "./enums";

/// Describes a service that can be provisioned
export interface IService extends IKeyedItem {
    categories?: Array<ICategory>,
    suppliers?: Array<IKeyedItem>,
    proformaQuestions?: any,
}
/// Describes a requirement for a service to be performed
export interface IServiceRequirement {
    reference: string,
    serviceType: ServiceType,
    service: IService,
    asset: IAsset,
}
/// Describes an asset within the context of a service requirement
export interface IServiceAssetRequirement {
    asset: IAsset,
    scheduleDefinition: IScheduleDefinition,
}
/// Describes a service event performned on an asset
export interface IServiceAssetEvent {
    asset: IAsset,
    dateScheduled: number,
    eventDate?: number,
    serviceEventStatus: ServiceEventStatus,
}
