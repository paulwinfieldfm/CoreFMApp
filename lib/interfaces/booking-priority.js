"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingPriorities = exports.BookingPriority = void 0;
var BookingPriority;
(function (BookingPriority) {
    BookingPriority[BookingPriority["p1"] = 0] = "p1";
    BookingPriority[BookingPriority["p2"] = 1] = "p2";
    BookingPriority[BookingPriority["p3"] = 2] = "p3";
    BookingPriority[BookingPriority["p4"] = 3] = "p4";
})(BookingPriority = exports.BookingPriority || (exports.BookingPriority = {}));
exports.bookingPriorities = [
    {
        bookingPriority: BookingPriority.p1,
        name: "P1",
        description: "Same day",
        icon: "notification_important"
    },
    {
        bookingPriority: BookingPriority.p2,
        name: "P2",
        description: "Next working day",
        icon: "access_alarm"
    },
    {
        bookingPriority: BookingPriority.p3,
        name: "P3",
        description: "Within 48 hours",
        icon: "access_time"
    },
    {
        bookingPriority: BookingPriority.p4,
        name: "P4",
        description: "Within 7 days",
        icon: "date_range"
    }
];
//# sourceMappingURL=booking-priority.js.map