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

/// A simple notification message that can be shown within a toast or snackbar etc
export interface IToastMessage {
    title: string,
    text: string,
}
/// A message structure for message brokering
export interface IBaseDataMessage {
    id: string,
    // Creation time, epoch seconds
    time: number,
    // Id of a supplier who is a valid consumer of the message
    supplierId?: number,
    // Id of an organisationUnit that is a valid consumer of the message
    organisationUnitId?: number,
    // QOS (quality of service), basically priority.
    qos: 0 | 1 | 2,
    // Whether to instruct the UI to show a notification message to end user (requires title and text to be set)
    toastMessage?: IToastMessage,
}

export interface IEntityDataMessage extends IBaseDataMessage {
    // An entity which is the subject/target of the message
    linkedEntity: ILinkedEntity,
}

export interface IChatMessage extends IBaseDataMessage {
    sender: IPerson,
    // Time delivered
    delivered?: number,    
    // Time read
    read?: number,
    // Message content text
    content: string,
    // An optional entity which is the subject/target of the message
    linkedEntity?: ILinkedEntity,
}