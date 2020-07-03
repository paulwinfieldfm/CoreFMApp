import { IQuoteRequest, IUserActivity, IService } from "../interfaces";

export class Quote implements IQuoteRequest {
    userActivities: Array<IUserActivity> = [];
    reference!: string;
    service?: IService;

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