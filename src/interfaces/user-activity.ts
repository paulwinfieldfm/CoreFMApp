export enum ActivityType {
    unknown,
    created,
    modified,
    deleted,
    viewed,
    actioned,
}

export interface IUserActivity {
    uid?: string,
    time: number,
    activityType: ActivityType,
    payload?: any,
}