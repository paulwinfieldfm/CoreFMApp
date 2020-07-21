"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
const interfaces_1 = require("../interfaces");
class Quote {
    constructor() {
        this.userActivities = [];
        this.invitedSuppliers = [];
    }
    static createNew(createdActivity, reference, bookingPriority, service) {
        return ({
            userActivities: [createdActivity],
            reference: reference,
            service: service,
            bookingPriority: bookingPriority !== null && bookingPriority !== void 0 ? bookingPriority : interfaces_1.BookingPriority.p4
        });
    }
    addActivity(activity) {
        this.userActivities.push(activity);
    }
}
exports.Quote = Quote;
//# sourceMappingURL=quote.js.map