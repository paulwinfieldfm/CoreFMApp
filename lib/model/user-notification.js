"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotification = void 0;
const utilities_1 = require("../utilities");
class UserNotification {
    constructor(userNotificationType, user, userNotificationMessage) {
        this.userNotificationType = userNotificationType;
        this.time = utilities_1.DateHelper.dateToEpoch();
        this.user = user;
        this.userNotificationMessage = userNotificationMessage;
    }
}
exports.UserNotification = UserNotification;
//# sourceMappingURL=user-notification.js.map