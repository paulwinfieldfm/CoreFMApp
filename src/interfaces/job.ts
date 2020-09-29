import { IAuditedItem, IService, BookingPriority, IContact, ICompany, ILocation, IAsset, IPlottableLocation } from ".";
import { IOrder } from "./order";
import { IKeyedPersonItem, IKeyedImageItem } from "./keyed-item";
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

export interface IJob extends IAuditedItem {
    reference: string,
    requiredDateTime?: number,
    bookingDateTime?: number,
    bookingDurationMinutes?: number,
    estimatedTravelTimeMinutes?: number,
    // We can have a pre-emptive assignment that's not associated with a work order
    order?: IOrder,
    // Or have a non-binding placeholder assignment to a quote to give the ability to
    // ringfence a booking in expectation of it dropping in
    quotePlaceholder?: IQuoteRequest,
    assignedToUser?: IKeyedPersonItem,
    statusHistory: Array<IJobStatusEvent>,
    currentStatus: JobStatus,
    media: Array<IKeyedImageItem>,
    pod?: any,
}