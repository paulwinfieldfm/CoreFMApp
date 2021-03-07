import { DateHelper } from "../../date-extensions";
import { IBaseDataMessage } from "../interfaces";

/// Raw data message
export class BaseDataMessage implements IBaseDataMessage {
    time: number;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: 0 | 1 | 2;
    showMessage: boolean;
    title?: string | undefined;
    text?: string | undefined;
    
    constructor(supplierId: number | undefined, organisationUnitId: number | undefined, qos: 0 | 1 | 2, showMessage: boolean, title: string | undefined, text: string | undefined) {
        this.time = DateHelper.dateToEpoch();
        this.qos = qos;
        this.supplierId = supplierId;
        this.organisationUnitId = organisationUnitId;
        this.showMessage = showMessage;
        this.title = title;
        this.text = text;
    }
}