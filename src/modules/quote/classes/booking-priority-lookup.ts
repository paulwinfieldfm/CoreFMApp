import { BookingPriority } from "../enums";
import { IBookingPriorityDescription } from "../interfaces";

export class BookingPriorityLookup {
    private _defaultDescriptions: Array<IBookingPriorityDescription> = [
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
    ];

    public descriptions: Array<IBookingPriorityDescription>;

    constructor(descriptions?: Array<IBookingPriorityDescription>) {
        this.descriptions = descriptions||this._defaultDescriptions;
    }

    public ofBookingPriority(bookingPriority: BookingPriority): IBookingPriorityDescription|undefined {
        return this.descriptions.find(e => e.bookingPriority == bookingPriority);
    }
}