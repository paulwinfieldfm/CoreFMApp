import { IClientApplicationUser } from "./client-application-user";
import { IItemAttributeMap } from "./item-attribute";

export interface IUserAccount extends IClientApplicationUser {
    attributes: IItemAttributeMap
}