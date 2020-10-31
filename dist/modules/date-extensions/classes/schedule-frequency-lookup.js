"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleFrequencyLookup = void 0;
const enums_1 = require("../enums");
class ScheduleFrequencyLookup {
    constructor(descriptions) {
        this._defaultDescriptions = [
            {
                scheduleFrequency: enums_1.ScheduleFrequency.once,
                name: "Once",
                description: "Happens once on the given date",
            },
            {
                scheduleFrequency: enums_1.ScheduleFrequency.daily,
                name: "Every day",
                description: "Happens every day",
            },
            {
                scheduleFrequency: enums_1.ScheduleFrequency.weekly,
                name: "Every week",
                description: "Happens once per week",
            },
            {
                scheduleFrequency: enums_1.ScheduleFrequency.monthly,
                name: "Monthly",
                description: "Happens once per month",
            },
            {
                scheduleFrequency: enums_1.ScheduleFrequency.annually,
                name: "Annually",
                description: "Happens once per year",
            },
        ];
        this.descriptions = descriptions || this._defaultDescriptions;
    }
    ofScheduleFrequency(scheduleFrequency) {
        return this.descriptions.find(e => e.scheduleFrequency == scheduleFrequency);
    }
}
exports.ScheduleFrequencyLookup = ScheduleFrequencyLookup;
//# sourceMappingURL=schedule-frequency-lookup.js.map