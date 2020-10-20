export declare enum ActivityType {
    unknown = 0,
    created = 1,
    modified = 2,
    deleted = 3,
    viewed = 4,
    actioned = 5
}
export interface IUserActivity {
    uid?: string;
    time: number;
    activityType: ActivityType;
    payload?: any;
}
