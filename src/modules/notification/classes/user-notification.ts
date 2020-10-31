import { IKeyedItem } from "../../base";
import { DateHelper } from "../../date-extensions";
import { UserNotificationType } from "../enums";
import { IUserNotification, IUserNotificationMessage } from "../interfaces";

export class UserNotification implements IUserNotification {
    userNotificationType: UserNotificationType;
    time: number;
    user?: IKeyedItem;
    userNotificationMessage?: IUserNotificationMessage;

    constructor(userNotificationType: UserNotificationType, user?: IKeyedItem, userNotificationMessage?: IUserNotificationMessage) {
        this.userNotificationType = userNotificationType;
        this.time = DateHelper.dateToEpoch();
        this.user = user;
        this.userNotificationMessage = userNotificationMessage;
    }
}