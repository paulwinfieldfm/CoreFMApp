export declare enum BookingPriority {
    unspecified = 0,
    p1 = 1,
    p2 = 2,
    p3 = 3,
    p4 = 4
}
export interface IBookingPriorityEntry {
    bookingPriority: BookingPriority;
    name: string;
    description: string;
    icon?: string;
}
export declare const bookingPriorities: Array<IBookingPriorityEntry>;
