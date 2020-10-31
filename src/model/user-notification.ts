import { IKeyedItem } from '../modules/base';


import { IUserNotification, UserNotificationType, IUserNotificationMessage } from "../interfaces";
import { DateHelper } from "../utilities";

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