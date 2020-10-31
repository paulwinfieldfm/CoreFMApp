"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingPriorityLookup = void 0;
const enums_1 = require("../enums");
class BookingPriorityLookup {
    constructor(descriptions) {
        this._defaultDescriptions = [
            {
                bookingPriority: enums_1.BookingPriority.p1,
                name: "P1",
                description: "Same day",
                icon: "notification_important"
            },
            {
                bookingPriority: enums_1.BookingPriority.p2,
                name: "P2",
                description: "Next working day",
                icon: "access_alarm"
            },
            {
                bookingPriority: enums_1.BookingPriority.p3,
                name: "P3",
                description: "Within 48 hours",
                icon: "access_time"
            },
            {
                bookingPriority: enums_1.BookingPriority.p4,
                name: "P4",
                description: "Within 7 days",
                icon: "date_range"
            }
        ];
        this.descriptions = descriptions || this._defaultDescriptions;
    }
    ofBookingPriority(bookingPriority) {
        return this.descriptions.find(e => e.bookingPriority == bookingPriority);
    }
}
exports.BookingPriorityLookup = BookingPriorityLookup;
//# sourceMappingURL=booking-priority-lookup.js.map