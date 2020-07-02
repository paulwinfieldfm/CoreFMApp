import { IClientApplicationUser } from "./client-application-user";

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
    clientApplicationUser?: IClientApplicationUser,
    userNotificationMessage?: IUserNotificationMessage,
}