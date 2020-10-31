import { ScheduleFrequency } from "./enums";

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