import { ILinkedEntity } from "../../base";
import { DateHelper } from "../../date-extensions";
import { IChatMessage } from "../interfaces";

export class ChatMessage implements IChatMessage {
    time: number;
    linkedEntity?: ILinkedEntity | undefined;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: number;
    showMessage: boolean;
    title?: string | undefined;
    text?: string | undefined;

    delivered?: number | undefined;
    read?: number | undefined;
    content: string;

    constructor(linkedEntity: ILinkedEntity, supplierId: number, organisationUnitId: number, content: string) {
        this.time = DateHelper.dateToEpoch();
        this.linkedEntity = linkedEntity;
        this.supplierId = supplierId;
        this.organisationUnitId = organisationUnitId;
        this.qos = 2;
        this.showMessage = false;
        this.content = content;
    }
}