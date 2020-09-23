export interface IWorkSchedule {
    sunday: IDayConfiguration,
    monday: IDayConfiguration,
    tuesday: IDayConfiguration,
    wednesday: IDayConfiguration,
    thursday: IDayConfiguration,
    friday: IDayConfiguration,
    saturday: IDayConfiguration,
}

export interface IDayConfiguration {
    index: number,
    workingDay: boolean,
    workFromHour?: number,
    workFromMinute?: number,
    workToHour?: number,
    workToMinute?: number,
}