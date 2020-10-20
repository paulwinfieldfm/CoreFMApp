import { IDateInfo, IWorkSchedule, IDayConfiguration } from "../interfaces";
export declare class DateInfo implements IDateInfo {
    hoursFromNow: number;
    secondsFromNow: number;
    epoch: number;
    isWorkingDay: boolean;
    private constructor();
    static fromEpoch(epoch: number, workSchedule?: IWorkSchedule): DateInfo;
    static fromSLADuration(numberOfHours: number, workSchedule?: IWorkSchedule): DateInfo;
    static _epochFromWorkingHours(startDate: Date, workSchedule: IWorkSchedule): any;
    static secondsUntil(hour: number, minute: number, daysFromToday: number): number;
    static isWorkingDay(d: Date, workSchedule: any): boolean;
    static scheduleContainsWorkingHours(workSchedule: any): boolean;
    static getScheduleEntry(d: Date, workSchedule: any): IDayConfiguration | undefined;
}
