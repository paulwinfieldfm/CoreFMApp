import { BaseInterfaces } from "./base.interfaces";

export namespace Servicing {
    export enum ServiceType {
        reactive,
        planned,
    }
    /// Describes a service that can be provisioned
    export interface IService extends BaseInterfaces.IKeyedItem {
        categories?: Array<BaseInterfaces.ICategory>,
        suppliers?: Array<BaseInterfaces.IKeyedItem>,
        proformaQuestions?: any,
    }
    /// Describes a requirement for a service to be performed
    export interface IServiceRequirement {
        serviceType: ServiceType,
    }

}