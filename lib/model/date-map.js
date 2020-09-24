"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateMap = void 0;
const utilities_1 = require("../utilities");
class DateMap {
    constructor(epoch, date) {
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
    set date(value) {
        this._date = value;
        this.epoch = utilities_1.DateHelper.dateToEpoch(this._date);
    }
}
exports.DateMap = DateMap;
//# sourceMappingURL=date-map.js.map