import { IAuditedItem, ILocation, IPlottableLocation } from ".";
import { IOrder } from "./order";
import { IKeyedPersonItem, IKeyedImageItem, IKeyedItem } from "./keyed-item";
import { IQuoteRequest } from "./quote-request";
export declare enum JobStatus {
    new = 0,
    scheduled = 1,
    allocated = 2,
    cancelled = 3,
    deallocated = 4,
    receivedInApp = 5,
    acceptedInApp = 6,
    rejectedInApp = 7,
    onRoute = 8,
    arrivedAtSite = 9,
    admittedOnSite = 10,
    workInProgress = 11,
    paused = 12,
    completed = 13,
    unableToComplete = 14
}
export interface IJobStatusEvent extends IPlottableLocation {
    user: IKeyedPersonItem;
    date: number;
    jobStatus: JobStatus;
}
export interface IJobMaterial extends IKeyedItem {
    serialNumber?: string;
    quantityEstimated: number;
    quantityEstimatedUnits: string;
    quantityUsed?: number;
    quantityUsedUnits?: string;
}
export declare enum JobTaskStatus {
    pending = 0,
    complete = 1,
    incomplete = 2
}
export interface IJobTask extends IKeyedItem {
    status: JobTaskStatus;
    title: string;
    description?: string;
    startedDateTime?: number;
    completedDateTIme?: number;
    notes?: string;
    materials?: Array<IJobMaterial>;
    followUpMaterials?: Array<IJobMaterial>;
}
export interface IJob extends IAuditedItem {
    reference: string;
    location: ILocation;
    requiredDateTime?: number;
    bookingDateTime?: number;
    bookingDurationMinutes?: number;
    estimatedTravelTimeMinutes?: number;
    order?: IOrder;
    quotePlaceholder?: IQuoteRequest;
    tasks?: Array<IJobTask>;
    assignedToUser?: IKeyedPersonItem;
    statusHistory: Array<IJobStatusEvent>;
    currentStatus: JobStatus;
    media: Array<IKeyedImageItem>;
    pod?: any;
    notes?: string;
}
