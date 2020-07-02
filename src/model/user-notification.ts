import { IUserNotification, UserNotificationType, IClientApplicationUser, IUserNotificationMessage } from "../interfaces";
import { DateHelper } from "../utilities";

export class UserNotification implements IUserNotification {
    userNotificationType: UserNotificationType;
    time: number;
    clientApplicationUser?: IClientApplicationUser;
    userNotificationMessage?: IUserNotificationMessage;

    constructor(userNotificationType: UserNotificationType, clientApplicationUser?: IClientApplicationUser, userNotificationMessage?: IUserNotificationMessage) {
        this.userNotificationType = userNotificationType;
        this.time = DateHelper.dateToEpoch();
        this.clientApplicationUser = clientApplicationUser;
        this.userNotificationMessage = userNotificationMessage;
    }
}