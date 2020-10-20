import { IKeyedPersonItem } from "./keyed-item";
export declare enum UserNotificationType {
    login = 0,
    logout = 1,
    broadcastMessage = 2,
    userMessage = 3
}
export declare enum UserNotificationMessageSeverity {
    information = 0,
    warning = 1,
    error = 2
}
export declare enum UserNotificationMessageClass {
    notification = 0,
    interactive = 1,
    question = 2
}
export interface IUserNotificationMessage {
    userNotificationMessageSeverity: UserNotificationMessageSeverity;
    userNotificationMessageClass: UserNotificationMessageClass;
    link?: string;
    payload?: any;
}
export interface IUserNotification {
    userNotificationType: UserNotificationType;
    time: number;
    user?: IKeyedPersonItem;
    userNotificationMessage?: IUserNotificationMessage;
}
