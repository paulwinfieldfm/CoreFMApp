import { IAsset } from "../asset";
import { IAuditedItem, ICategory, IContact, IKeyedItem } from "../base";
import { ICompany } from "../company";
import { DateMap, IScheduleDefinition } from "../date-extensions";
import { ILocation } from "../location";
import { BookingPriority } from "../quote";
import { ServiceType, ServiceEventStatus } from "./enums";

/// Describes a service that can be provisioned
export interface IService extends IKeyedItem {
    categories?: Array<ICategory>,
    suppliers?: Array<IKeyedItem>,
    proformaQuestions?: any,
}
/// Describes an asset within the context of a service requirement
export interface IServiceAssetRequirement {
    requiredDate: number,
    location: ILocation, // Location where the asset exists
    asset: IAsset, // Asset to be serviced
    scheduleDefinition: IScheduleDefinition, // When and with what frequency
}
/// Describes a service event performned on an asset
export interface IServiceAssetEvent {
    asset: IAsset,
    dateScheduled: number,
    eventDate?: number,
    serviceEventStatus: ServiceEventStatus,
}
/// Describes a requirement for a service to be performed
// This supercedes the IDeprecatedServiceRequest
export interface IServiceRequirement extends IAuditedItem {
    bookingPriority?: BookingPriority,
    company?: ICompany,
    reference: string,
    serviceType: ServiceType,
    service: IService,
    serviceAssetRequirements: Array<IServiceAssetRequirement>,
}
export interface IDeprecatedServiceRequest extends IAuditedItem {
    reference: string,
    requiredDate?: DateMap,
    purchaseOrderReference?: string,
    bookingPriority?: BookingPriority,
    service?: IService,
    company?: ICompany,
    contact?: IContact,
    location?: ILocation,
    asset?: IAsset,
    proformaAnswers?: any,
}
