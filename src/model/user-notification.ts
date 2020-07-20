import { IUserNotification, UserNotificationType, IUserNotificationMessage, IKeyedPersonItem } from "../interfaces";
import { DateHelper } from "../utilities";

export class UserNotification implements IUserNotification {
    userNotificationType: UserNotificationType;
    time: number;
    user?: IKeyedPersonItem;
    userNotificationMessage?: IUserNotificationMessage;

    constructor(userNotificationType: UserNotificationType, user?: IKeyedPersonItem, userNotificationMessage?: IUserNotificationMessage) {
        this.userNotificationType = userNotificationType;
        this.time = DateHelper.dateToEpoch();
        this.user = user;
        this.userNotificationMessage = userNotificationMessage;
    }
}