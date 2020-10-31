"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotification = void 0;
const date_extensions_1 = require("../../date-extensions");
class UserNotification {
    constructor(userNotificationType, user, userNotificationMessage) {
        this.userNotificationType = userNotificationType;
        this.time = date_extensions_1.DateHelper.dateToEpoch();
        this.user = user;
        this.userNotificationMessage = userNotificationMessage;
    }
}
exports.UserNotification = UserNotification;
//# sourceMappingURL=user-notification.js.map