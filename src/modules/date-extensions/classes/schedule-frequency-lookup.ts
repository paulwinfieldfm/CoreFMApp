import { ScheduleFrequency } from "../enums";
import { IScheduleFrequencyDescription } from "../interfaces";

export class ScheduleFrequencyLookup {
    private _defaultDescriptions: Array<IScheduleFrequencyDescription> = [
        {
            scheduleFrequency: ScheduleFrequency.once,
            name: "Once",
            description: "Happens once on the given date",
        },
        {
            scheduleFrequency: ScheduleFrequency.daily,
            name: "Every day",
            description: "Happens every day",
        },
        {
            scheduleFrequency: ScheduleFrequency.weekly,
            name: "Every week",
            description: "Happens once per week",
        },
        {
            scheduleFrequency: ScheduleFrequency.monthly,
            name: "Monthly",
            description: "Happens once per month",
        },
        {
            scheduleFrequency: ScheduleFrequency.annually,
            name: "Annually",
            description: "Happens once per year",
        },
    ];

    public descriptions: Array<IScheduleFrequencyDescription>;

    constructor(descriptions?: Array<IScheduleFrequencyDescription>) {
        this.descriptions = descriptions||this._defaultDescriptions;
    }

    public ofScheduleFrequency(scheduleFrequency: ScheduleFrequency): IScheduleFrequencyDescription|undefined {
        return this.descriptions.find(e => e.scheduleFrequency == scheduleFrequency);
    }
}