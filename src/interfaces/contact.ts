import { IKeyedPersonItem } from "./keyed-item";

export enum ContactType {
    contact,
    accountManager,
    bookingAgent,
    helpdesk,
}
export interface IContact extends IKeyedPersonItem {
    parentLocationId?: number,
    contactTypeId: ContactType,
}