"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epoch = exports.DateHelper = void 0;
class DateHelper {
    static inFuture(secondsSinceEpoch) {
        if (!secondsSinceEpoch) {
            return true;
        }
        const now = Math.trunc((new Date()).getTime() / 1000);
        return secondsSinceEpoch > now;
    }
    static epochToDate(secondsSinceEpoch) {
        return new Date(secondsSinceEpoch * 1000);
    }
    static dateToEpoch(d) {
        if (!d) {
            d = new Date();
        }
        return Math.trunc(d.getTime() / 1000);
    }
    static localeDate(d) {
        return `${DateHelper.pad2(d.getDate())}/${DateHelper.pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
    }
    static localeTime(d, includeSeconds = false) {
        let result = `${DateHelper.pad2(d.getHours())}:${DateHelper.pad2(d.getMinutes())}`;
        return (includeSeconds) ? `${result}:${DateHelper.pad2(d.getSeconds())}` : result;
    }
    static localeDateTime(d) {
        return `${DateHelper.localeDate(d)} ${DateHelper.localeTime(d)}`;
    }
    static pad2(v) {
        let result = v ? v.toString() : "00";
        return (result.length < 2) ? "0" + result : result;
    }
    static compareAsc(epochSeconds1, epochSeconds2, emptyFirst = false) {
        if (emptyFirst) {
            if (epochSeconds1 > epochSeconds2 || epochSeconds2 === undefined)
                return 1;
            else
                return (epochSeconds1 == epochSeconds2) ? 0 : -1;
        }
        else {
            if (epochSeconds1 > epochSeconds2 || epochSeconds1 === undefined)
                return 1;
            else
                return (epochSeconds1 == epochSeconds2) ? 0 : -1;
        }
    }
    static compareDesc(epochSeconds1, epochSeconds2, emptyFirst = false) {
        if (emptyFirst) {
            if (epochSeconds1 < epochSeconds2 || epochSeconds2 === undefined)
                return 1;
            else
                return (epochSeconds1 == epochSeconds2) ? 0 : -1;
        }
        else {
            if (epochSeconds1 < epochSeconds2 || epochSeconds1 === undefined)
                return 1;
            else
                return (epochSeconds1 == epochSeconds2) ? 0 : -1;
        }
    }
}
exports.DateHelper = DateHelper;
class Epoch {
    static now() {
        return Epoch.from(undefined);
    }
    static today() {
        return new Date().setHours(11, 59, 59); //Today EOD
    }
    static tomorrow() {
        const today = new Date().setHours(11, 59, 59);
        return Epoch.addDays(today, 1); //Tomorrow EOD
    }
    static from(d) {
        if (!d) {
            d = new Date();
        }
        return Math.trunc(d.getTime() / 1000);
    }
    static toDate(secondsSinceEpoch) {
        return new Date(secondsSinceEpoch * 1000);
    }
    static inc(sourceDate, calculations) {
        let result = sourceDate;
        if (calculations.addYears) {
            result += Epoch.addYears(result, calculations.addYears);
        }
        if (calculations.addMonths) {
            result += Epoch.addMonths(result, calculations.addMonths);
        }
        if (calculations.addDays) {
            result += (calculations.addDays * (3600 * 24));
        }
        if (calculations.addHours) {
            result += (calculations.addHours * (3600));
        }
        if (calculations.addMinutes) {
            result += (calculations.addMinutes * (60));
        }
        return result;
    }
    static addYears(value, add) {
        const d = Epoch.toDate(value);
        d.setFullYear(d.getFullYear() + add);
        return Epoch.from(d);
    }
    static addMonths(value, add) {
        const d = Epoch.toDate(value);
        d.setMonth(d.getMonth() + add);
        return Epoch.from(d);
    }
    static addDays(value, add) {
        const d = Epoch.toDate(value);
        d.setDate(d.getDate() + add);
        return Epoch.from(d);
    }
}
exports.Epoch = Epoch;
//# sourceMappingURL=date-helper.js.map