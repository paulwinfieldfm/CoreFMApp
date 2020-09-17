import { IAuditedItem, IService, BookingPriority, IContact, ICompany, ILocation, IAsset, IPlottableLocation } from ".";
import { IOrder } from "./order";
import { IKeyedPersonItem } from "./keyed-item";

export enum JobStatus {
    new,
    scheduled,
    allocated,
    cancelled,
    deallocated,
    receivedInApp,
    acceptedInApp,
    rejectedInApp,
    onRoute,
    arrivedAtSite,
    admittedOnSite,
    workInProgress,
    paused,
    completed,
    unableToComplete,
}

export interface IJobStatusEvent extends IPlottableLocation {
    user: IKeyedPersonItem,
    date: number,
    jobStatus: JobStatus,
}

export interface IJob extends IAuditedItem {
    reference: string,
    order: IOrder,
    assignedToUser?: IKeyedPersonItem,
    statusHistory: Array<IJobStatusEvent>,
    currentStatus: JobStatus,
    pod?: any,
}