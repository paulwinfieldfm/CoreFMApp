"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateMap = void 0;
const utilities_1 = require("../utilities");
class DateMap {
    constructor(epoch, date) {
        this._includeSeconds = false;
        this.epoch = epoch;
        this._date = date;
    }
    static fromEpoch(epoch) {
        return new DateMap(epoch, utilities_1.DateHelper.epochToDate(epoch));
    }
    static fromDate(date) {
        return new DateMap(utilities_1.DateHelper.dateToEpoch(date), date);
    }
    get date() { return this._date; }
    set date(value) { this._updateDate(value); }
    get time() {
        if (!this._date) {
            return '';
        }
        return utilities_1.DateHelper.localeTime(this._date, this._includeSeconds);
    }
    set time(value) {
        let timeEntries = value ? value.toLowerCase().split(':') : [];
        if (timeEntries.length > 1) {
            if (!this._date) {
                this._date = new Date();
            }
            const pmIdentifier = timeEntries.indexOf('pm') > -1;
            let hours = this._numberInRange(timeEntries[0], 0, 23);
            let minutes = this._numberInRange(timeEntries[1], 0, 59);
            // Figure out the seconds and fallback elegantly if we need to
            let seconds = 0;
            if (timeEntries.length > 2 && this._includeSeconds) {
                seconds = this._numberInRange(timeEntries[2], 0, 59);
                if (seconds === undefined) {
                    seconds = 0;
                }
            }
            // Can't progress if we don't have both hours and minutes
            if (hours === undefined || minutes === undefined) {
                return;
            }
            if (pmIdentifier && hours < 13) {
                hours = hours == 12 ? 0 : hours + 12;
            }
            this._date.setHours(hours);
            this._date.setMinutes(minutes);
            this._date.setSeconds(seconds);
            this._updateDate(this._date);
        }
    }
    _updateDate(value) {
        this._date = value;
        this.epoch = utilities_1.DateHelper.dateToEpoch(this._date);
    }
    _numberInRange(value, min, max) {
        const result = utilities_1.Utils.tryParseInt(value);
        return (result !== undefined && result >= min && value <= max) ? result : undefined;
    }
}
exports.DateMap = DateMap;
//# sourceMappingURL=date-map.js.map