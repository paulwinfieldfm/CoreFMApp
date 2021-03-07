import { ILinkedEntity } from "../../base";
import { DateHelper } from "../../date-extensions";
import { IDataMessage } from "../interfaces";

export class DataMessage implements IDataMessage {
    time: number;
    linkedEntity?: ILinkedEntity | undefined;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: number;
    showMessage: boolean;
    title?: string | undefined;
    text?: string | undefined;

    constructor(linkedEntity: ILinkedEntity, supplierId: number, organisationUnitId: number, qos: number, showMessage: boolean, title: string, text: string) {
        this.time = DateHelper.dateToEpoch();
        this.linkedEntity = linkedEntity;
        this.supplierId = supplierId;
        this.organisationUnitId = organisationUnitId;
        this.qos = qos||2;
        this.showMessage = showMessage;
        this.title = title;
        this.text = text;
    }
}