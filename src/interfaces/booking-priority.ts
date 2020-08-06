export enum BookingPriority {
    unspecified,
    p1,
    p2,
    p3,
    p4
}

export interface IBookingPriorityEntry {
    bookingPriority: BookingPriority,
    name: string,
    description: string,
    icon?: string,
}

export const bookingPriorities: Array<IBookingPriorityEntry> = [
    { 
        bookingPriority : BookingPriority.p1, 
        name: "P1",
        description: "Same day",
        icon: "notification_important"
    },
    { 
        bookingPriority : BookingPriority.p2, 
        name: "P2",
        description: "Next working day",
        icon: "access_alarm"
    },
    { 
        bookingPriority : BookingPriority.p3, 
        name: "P3",
        description: "Within 48 hours",
        icon: "access_time"
    },
    { 
        bookingPriority : BookingPriority.p4, 
        name: "P4",
        description: "Within 7 days",
        icon: "date_range"
    }
]