import { ScheduleFrequency } from "./enums";

export interface IWorkSchedule {
    sunday: IDayConfiguration,
    monday: IDayConfiguration,
    tuesday: IDayConfiguration,
    wednesday: IDayConfiguration,
    thursday: IDayConfiguration,
    friday: IDayConfiguration,
    saturday: IDayConfiguration,
}
export interface IDayConfiguration {
    index: number,
    workingDay: boolean,
    workFromHour?: number,
    workFromMinute?: number,
    workToHour?: number,
    workToMinute?: number,
}
export interface IDateInfo {
    hoursFromNow?: number,
    secondsFromNow: number,
    epoch: number,
    isWorkingDay: boolean
}
/// Defines information to allowa schedule frequency to be depicted in UI
export interface IScheduleFrequencyDescription {
    scheduleFrequency: ScheduleFrequency,
    name: string,
    description: string,
    icon?: string,
}
/// Define the frequency and repeat status of an event
export interface IScheduleDefinition {
    scheduleFrequency: ScheduleFrequency,
    // Time and date of first instance of this event (or only)
    epochSeconds: number,
    // For annual events
    monthOfYear?: number,
    // For monthly and annual events, the day of month
    dayOfMonth?: number,
    // For weekly event
    dayOfWeek?: number,
}