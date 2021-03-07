import { ILinkedEntity } from "../../base";
import { DateHelper } from "../../date-extensions";
import { IChatMessage } from "../interfaces";
import { BaseDataMessage } from "./base-data-message";

export class ChatMessage implements IChatMessage {
    delivered?: number | undefined;
    read?: number | undefined;
    content!: string;
    linkedEntity: ILinkedEntity | undefined;
    time!: number;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: 0 | 1 | 2 = 2;
    showMessage: boolean = false;
    title?: string | undefined;
    text?: string | undefined;
    
    static create(content: string, supplierId: number | undefined, organisationUnitId: number | undefined, linkedEntity: ILinkedEntity | undefined, showMessage: boolean = false) {
        let result = <ChatMessage>(new BaseDataMessage(supplierId, organisationUnitId, 2, showMessage, "Message", undefined));
        result.content = content;
        result.linkedEntity = linkedEntity;
        return result;
    }
}