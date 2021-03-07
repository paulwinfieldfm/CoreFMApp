import { ILinkedEntity, IPerson } from "../base";
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

/// A message structure for message brokering
export interface IDataMessage {
    // Creation time, epoch seconds
    time: number,
    // An optional entity which is the subject/target of the message
    linkedEntity?: ILinkedEntity,
    // Id of a supplier who is a valid consumer of the message
    supplierId?: number,
    // Id of an organisationUnit that is a valid consumer of the message
    organisationUnitId?: number,
    // QOS (quality of service), basically priority. 1,2 or 3
    qos: number,
    // Whether to instruct the UI to show a notification message to end user (requires title and text to be set)
    showMessage: boolean,
    title?: string,
    text?: string,
}

export interface IChatMessage extends IDataMessage {
    // Time delivered
    delivered?: number,    
    // Time read
    read?: number,
    // Message content text
    content: string,
}