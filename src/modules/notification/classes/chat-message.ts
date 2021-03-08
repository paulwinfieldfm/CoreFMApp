import { ILinkedEntity, IContact } from "../../base";
import { DateHelper } from "../../date-extensions";
import { IChatMessage, IToastMessage } from "../interfaces";
import { BaseDataMessage } from "./base-data-message";

export class ChatMessage implements IChatMessage {
    id!: string;
    sender!: IContact;
    delivered?: number | undefined;
    read?: number | undefined;
    content!: string;
    linkedEntity: ILinkedEntity | undefined;
    time!: number;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: 0 | 1 | 2 = 2;
    toastMessage?: IToastMessage | undefined;
    
    static create(id: string, sender: IContact, content: string, supplierId: number | undefined, organisationUnitId: number | undefined, linkedEntity: ILinkedEntity | undefined) {
        let result = <ChatMessage>(new BaseDataMessage(id, supplierId, organisationUnitId, undefined));
        result.sender = sender;
        result.content = content;
        result.linkedEntity = linkedEntity;
        return result;
    }

    private constructor(id: string) {
        this.id = id;
        this.time = DateHelper.dateToEpoch();
    }
}