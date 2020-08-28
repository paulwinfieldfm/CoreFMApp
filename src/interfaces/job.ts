import { IAuditedItem, IService, BookingPriority, IContact, ICompany, ILocation, IAsset } from ".";
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

export interface IJobStatusEvent {
    user: IKeyedPersonItem,
    date: number,
    jobStatus: JobStatus,
    lat?: number,
    lng?: number
}

export interface IJob extends IAuditedItem {
    reference: string,
    order: IOrder,
    assignedToUser?: IKeyedPersonItem,
    statusHistory: Array<IJobStatusEvent>,
    currentStatus: JobStatus,
    pod?: any,
}