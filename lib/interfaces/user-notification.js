"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotificationMessageClass = exports.UserNotificationMessageSeverity = exports.UserNotificationType = void 0;
var UserNotificationType;
(function (UserNotificationType) {
    UserNotificationType[UserNotificationType["login"] = 0] = "login";
    UserNotificationType[UserNotificationType["logout"] = 1] = "logout";
    UserNotificationType[UserNotificationType["broadcastMessage"] = 2] = "broadcastMessage";
    UserNotificationType[UserNotificationType["userMessage"] = 3] = "userMessage";
})(UserNotificationType = exports.UserNotificationType || (exports.UserNotificationType = {}));
var UserNotificationMessageSeverity;
(function (UserNotificationMessageSeverity) {
    UserNotificationMessageSeverity[UserNotificationMessageSeverity["information"] = 0] = "information";
    UserNotificationMessageSeverity[UserNotificationMessageSeverity["warning"] = 1] = "warning";
    UserNotificationMessageSeverity[UserNotificationMessageSeverity["error"] = 2] = "error";
})(UserNotificationMessageSeverity = exports.UserNotificationMessageSeverity || (exports.UserNotificationMessageSeverity = {}));
var UserNotificationMessageClass;
(function (UserNotificationMessageClass) {
    UserNotificationMessageClass[UserNotificationMessageClass["notification"] = 0] = "notification";
    UserNotificationMessageClass[UserNotificationMessageClass["interactive"] = 1] = "interactive";
    UserNotificationMessageClass[UserNotificationMessageClass["question"] = 2] = "question";
})(UserNotificationMessageClass = exports.UserNotificationMessageClass || (exports.UserNotificationMessageClass = {}));
//# sourceMappingURL=user-notification.js.map