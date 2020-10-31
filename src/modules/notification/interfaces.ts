import { IPerson } from "../base";
import { UserNotificationMessageClass, UserNotificationMessageSeverity, UserNotificationType } from "./enums";

export interface IUserNotificationMessage {
    userNotificationMessageSeverity: UserNotificationMessageSeverity,
    userNotificationMessageClass: UserNotificationMessageClass,
    link?: string,
    payload?: any,
}

export interface IUserNotification {
    userNotificationType: UserNotificationType,
    time: number,
    user?: IPerson,
    userNotificationMessage?: IUserNotificationMessage,
}