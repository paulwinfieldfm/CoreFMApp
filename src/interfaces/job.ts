import { IAuditedItem, IService, BookingPriority, IContact, ICompany, ILocation, IAsset, IPlottableLocation } from ".";
import { IOrder } from "./order";
import { IKeyedPersonItem, IKeyedImageItem, IKeyedItem } from "./keyed-item";
import { IQuoteRequest } from "./quote-request";

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

export interface IJobMaterial extends IKeyedItem {
    serialNumber?: string,
    quantityEstimated: number,
    quantityEstimatedUnits: string,
    quantityUsed?: number,
    quantityUsedUnits?: string,
}

export enum JobTaskStatus {
    pending,
    complete,
    incomplete
}

export interface IJobTask extends IKeyedItem {
    status: JobTaskStatus,
    title: string,
    description?: string,
    startedDateTime?: number,
    completedDateTIme?: number,
    notes?: string,
    materials?: Array<IJobMaterial>,
    followUpMaterials?: Array<IJobMaterial>,
}

export interface IJob extends IAuditedItem {
    reference: string,
    // Location to be assigned/defaulted to any assigned quote or order
    location: ILocation,
    requiredDateTime?: number,
    bookingDateTime?: number,
    bookingDurationMinutes?: number,
    estimatedTravelTimeMinutes?: number,
    // We can have a pre-emptive assignment that's not associated with a work order
    order?: IOrder,
    // Or have a non-binding placeholder assignment to a quote to give the ability to
    // ringfence a booking in expectation of it dropping in
    quotePlaceholder?: IQuoteRequest,
    // Prescribe the things that need to be done within the job
    tasks?: Array<IJobTask>,
    assignedToUser?: IKeyedPersonItem,
    statusHistory: Array<IJobStatusEvent>,
    currentStatus: JobStatus,
    media: Array<IKeyedImageItem>,
    pod?: any,
    notes?: string,
}