import { IQuoteRequest, IUserActivity, IService, IContact, ICompany, ILocation, IAsset, ISupplier } from "../interfaces";

export class Quote implements IQuoteRequest {
    userActivities: Array<IUserActivity> = [];
    reference!: string;
    service?: IService;
    contact?: IContact;
    company?: ICompany;
    location?: ILocation;
    asset?: IAsset;
    invitedSuppliers: Array<ISupplier> = [];

    static createNew(createdActivity: IUserActivity, reference: string, service?: IService): Quote {
        return <Quote>({
            userActivities: [ createdActivity ],
            reference: reference,
            service: service,
        });
    }

    public addActivity(activity: IUserActivity): void {
        this.userActivities.push(activity);
    }
}