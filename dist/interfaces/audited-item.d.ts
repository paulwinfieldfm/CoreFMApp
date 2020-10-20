import { IUserActivity } from "./user-activity";
import { IKeyedItem } from "./keyed-item";
export interface IAuditedItem extends IKeyedItem {
    userActivities: Array<IUserActivity>;
}
