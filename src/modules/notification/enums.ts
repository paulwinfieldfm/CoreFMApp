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
