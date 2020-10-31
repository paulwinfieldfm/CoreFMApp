import { IDateInfo, IDayConfiguration, IWorkSchedule } from "../interfaces";
import { DateHelper } from "./date-helper";

export class DateInfo implements IDateInfo {
    hoursFromNow: number;
    secondsFromNow: number;
    epoch: number;
    isWorkingDay: boolean;

    private constructor(dateInfo: IDateInfo) {
        this.secondsFromNow = dateInfo.secondsFromNow;
        this.hoursFromNow = dateInfo.secondsFromNow > 3599 ? Math.trunc(dateInfo.secondsFromNow / 3600) : 0;
        this.epoch = dateInfo.epoch;
        this.isWorkingDay = dateInfo.isWorkingDay;
    }

    static fromEpoch(epoch: number, workSchedule?: IWorkSchedule): DateInfo {
        const d = DateHelper.epochToDate(epoch);
        const n = DateHelper.dateToEpoch();
        let result = new DateInfo({
          epoch: epoch,
          secondsFromNow: (n<epoch) ? epoch-n : 0,
          isWorkingDay: DateInfo.isWorkingDay(d, workSchedule)
        });
        return result;
    }

    /// Work out a date profile to provide the amount of full working hours until a given SLA
    /// The seedate will be the current time
    static fromSLADuration(numberOfHours: number, workSchedule?: IWorkSchedule): DateInfo {
        const now = new Date();
        if (!workSchedule || !DateInfo.scheduleContainsWorkingHours(workSchedule)) {
            const seconds: number = numberOfHours*3600;
            return new DateInfo({
                epoch: now.getTime()+seconds,
                secondsFromNow: seconds,
                isWorkingDay: false
            });
        }

        // TODO Work this stuff out - earliest epoch to fulfill number of working hours

        return new DateInfo({
            epoch: 0,
            secondsFromNow: 0,
            isWorkingDay: false,
        });
    }

    static _epochFromWorkingHours(startDate: Date, workSchedule: IWorkSchedule): any {
        let startEpoch = DateHelper.dateToEpoch(startDate);
        let dayIndex = startDate.getDay();
        // Scan through each day to see at what point we'd accumulate enough working hours

        // TODO
        return undefined;
    }

    static secondsUntil(hour: number, minute: number, daysFromToday: number): number {
        const now = new Date();
        const next = new Date(now.getFullYear(), now.getMonth(), now.getDate()+daysFromToday, hour, minute);
        let diff = next.getTime() - now.getTime(); // difference in ms
        return Math.round(diff / 1000); // convert to seconds    
    }
  
    static isWorkingDay(d: Date, workSchedule: any): boolean {
        const dayConfiguration = DateInfo.getScheduleEntry(d, workSchedule);
        return (dayConfiguration && dayConfiguration.workingDay===true) ? true : false;
    }

    static scheduleContainsWorkingHours(workSchedule: any): boolean {
        if (!workSchedule) {
            return false;
        }

        for (const e in workSchedule) {
            const day: any = workSchedule[e];
            if (day.workingDay===true && day.workToHour!==undefined && day.workFromHour!==undefined&&(day.workToHour>day.workFromHour)) {
                return true;
            }
        }
        return false;
    }

    static getScheduleEntry(d: Date, workSchedule: any): IDayConfiguration | undefined {
        if (!workSchedule) {
            return undefined;
        }

        const dayIndex = d.getDay();
        for (const e in workSchedule) {
            const day: any = workSchedule[e];
            if (day.index !== undefined && day.index == dayIndex) {
                return day;
            }
        }
        return undefined;
    }
  
}