"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDefinitionConstaint = void 0;
const enums_1 = require("../enums");
/// Governs how we restrict schedule type availability
class ScheduleDefinitionConstaint {
    constructor(availableScheduleFrequencies) {
        this.availableScheduleFrequencies = [];
        this.availableScheduleFrequencies = availableScheduleFrequencies;
    }
    get requireMonthOfYear() {
        return this.scheduleFrequency == enums_1.ScheduleFrequency.annually;
    }
    get requireDayOfMonth() {
        return this.scheduleFrequency == enums_1.ScheduleFrequency.annually || this.scheduleFrequency == enums_1.ScheduleFrequency.monthly;
    }
    get requireDayOfWeek() {
        return this.scheduleFrequency == enums_1.ScheduleFrequency.weekly;
    }
}
exports.ScheduleDefinitionConstaint = ScheduleDefinitionConstaint;
//# sourceMappingURL=schedule-definition-contraint.js.map