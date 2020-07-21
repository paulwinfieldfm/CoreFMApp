import { IQuoteRequest, IUserActivity, IService, IContact, ICompany, ILocation, IAsset, ISupplier, BookingPriority } from "../interfaces";

export class Quote implements IQuoteRequest {
    userActivities: Array<IUserActivity> = [];
    reference!: string;
    bookingPriority?: BookingPriority;
    service?: IService;
    contact?: IContact;
    company?: ICompany;
    location?: ILocation;
    asset?: IAsset;
    invitedSuppliers: Array<ISupplier> = [];

    static createNew(createdActivity: IUserActivity, reference: string, bookingPriority: BookingPriority, service?: IService): Quote {
        return <Quote>({
            userActivities: [ createdActivity ],
            reference: reference,
            service: service,
            bookingPriority: bookingPriority ?? BookingPriority.p4
        });
    }

    public addActivity(activity: IUserActivity): void {
        this.userActivities.push(activity);
    }
}