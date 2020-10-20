import { IUserNotification, UserNotificationType, IUserNotificationMessage, IKeyedPersonItem } from "../interfaces";
export declare class UserNotification implements IUserNotification {
    userNotificationType: UserNotificationType;
    time: number;
    user?: IKeyedPersonItem;
    userNotificationMessage?: IUserNotificationMessage;
    constructor(userNotificationType: UserNotificationType, user?: IKeyedPersonItem, userNotificationMessage?: IUserNotificationMessage);
}
