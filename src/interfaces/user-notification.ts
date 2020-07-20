import { IKeyedPersonItem } from "./keyed-item";

export enum UserNotificationType {
    login,
    logout,
    broadcastMessage,
    userMessage,
}

export enum UserNotificationMessageSeverity {
    information,
    warning,
    error,
}
export enum UserNotificationMessageClass {
    notification,
    interactive, // clickable > link
    question,
}

export interface IUserNotificationMessage {
    userNotificationMessageSeverity: UserNotificationMessageSeverity,
    userNotificationMessageClass: UserNotificationMessageClass,
    link?: string,
    payload?: any,
}

export interface IUserNotification {
    userNotificationType: UserNotificationType,
    time: number,
    user?: IKeyedPersonItem,
    userNotificationMessage?: IUserNotificationMessage,
}