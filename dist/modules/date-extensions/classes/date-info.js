"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInfo = void 0;
const date_helper_1 = require("./date-helper");
class DateInfo {
    constructor(dateInfo) {
        this.secondsFromNow = dateInfo.secondsFromNow;
        this.hoursFromNow = dateInfo.secondsFromNow > 3599 ? Math.trunc(dateInfo.secondsFromNow / 3600) : 0;
        this.epoch = dateInfo.epoch;
        this.isWorkingDay = dateInfo.isWorkingDay;
    }
    static fromEpoch(epoch, workSchedule) {
        const d = date_helper_1.DateHelper.epochToDate(epoch);
        const n = date_helper_1.DateHelper.dateToEpoch();
        let result = new DateInfo({
            epoch: epoch,
            secondsFromNow: (n < epoch) ? epoch - n : 0,
            isWorkingDay: DateInfo.isWorkingDay(d, workSchedule)
        });
        return result;
    }
    /// Work out a date profile to provide the amount of full working hours until a given SLA
    /// The seedate will be the current time
    static fromSLADuration(numberOfHours, workSchedule) {
        const now = new Date();
        if (!workSchedule || !DateInfo.scheduleContainsWorkingHours(workSchedule)) {
            const seconds = numberOfHours * 3600;
            return new DateInfo({
                epoch: now.getTime() + seconds,
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
    static _epochFromWorkingHours(startDate, workSchedule) {
        let startEpoch = date_helper_1.DateHelper.dateToEpoch(startDate);
        let dayIndex = startDate.getDay();
        // Scan through each day to see at what point we'd accumulate enough working hours
        // TODO
        return undefined;
    }
    static secondsUntil(hour, minute, daysFromToday) {
        const now = new Date();
        const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysFromToday, hour, minute);
        let diff = next.getTime() - now.getTime(); // difference in ms
        return Math.round(diff / 1000); // convert to seconds    
    }
    static isWorkingDay(d, workSchedule) {
        const dayConfiguration = DateInfo.getScheduleEntry(d, workSchedule);
        return (dayConfiguration && dayConfiguration.workingDay === true) ? true : false;
    }
    static scheduleContainsWorkingHours(workSchedule) {
        if (!workSchedule) {
            return false;
        }
        for (const e in workSchedule) {
            const day = workSchedule[e];
            if (day.workingDay === true && day.workToHour !== undefined && day.workFromHour !== undefined && (day.workToHour > day.workFromHour)) {
                return true;
            }
        }
        return false;
    }
    static getScheduleEntry(d, workSchedule) {
        if (!workSchedule) {
            return undefined;
        }
        const dayIndex = d.getDay();
        for (const e in workSchedule) {
            const day = workSchedule[e];
            if (day.index !== undefined && day.index == dayIndex) {
                return day;
            }
        }
        return undefined;
    }
}
exports.DateInfo = DateInfo;
//# sourceMappingURL=date-info.js.map