import { IUserActivity } from "./user-activity";

export interface IAuditedItem {
    userActivities: Array<IUserActivity>
}