import { IAuditedItem, IKeyedItem, IPerson } from "../base";
import { ILocation, IPlottableLocation } from "../location";
import { IOrder } from "../order";
import { IDeprecatedQuoteRequest } from "../quote";
import { JobStatus, JobTaskStatus } from "./enums";


export interface IJobStatusEvent extends IPlottableLocation {
    user: IPerson,
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
    quotePlaceholder?: IDeprecatedQuoteRequest,
    // Prescribe the things that need to be done within the job
    tasks?: Array<IJobTask>,
    assignedToUser?: IPerson,
    statusHistory: Array<IJobStatusEvent>,
    currentStatus: JobStatus,
    media: Array<IKeyedItem>,
    pod?: any,
    notes?: string,
}