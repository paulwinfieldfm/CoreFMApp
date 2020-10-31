import { ScheduleFrequency } from "../enums";

/// Governs how we restrict schedule type availability
export class ScheduleDefinitionConstaint {
    public availableScheduleFrequencies: Array<ScheduleFrequency> = [];
    public scheduleFrequency?: ScheduleFrequency;

    constructor(availableScheduleFrequencies: Array<ScheduleFrequency>) {
        this.availableScheduleFrequencies = availableScheduleFrequencies;        
    }

    public get requireMonthOfYear(): boolean {
        return this.scheduleFrequency == ScheduleFrequency.annually;
    }

    public get requireDayOfMonth(): boolean {
        return this.scheduleFrequency == ScheduleFrequency.annually || this.scheduleFrequency == ScheduleFrequency.monthly;
    }

    public get requireDayOfWeek(): boolean {
        return this.scheduleFrequency == ScheduleFrequency.weekly;
    }
}
