import { DateHelper } from "../../date-extensions";
import { IBaseDataMessage, IToastMessage } from "../interfaces";

/// Raw data message
export class BaseDataMessage implements IBaseDataMessage {
    id: string;
    time: number;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: 0 | 1 | 2;
    toastMessage?: IToastMessage | undefined;
    
    constructor(id: string, supplierId: number | undefined, organisationUnitId: number | undefined, toastMessage: IToastMessage | undefined, qos: 0 | 1 | 2 = 2) {
        this.id = id;
        this.time = DateHelper.dateToEpoch();
        this.qos = qos;
        this.supplierId = supplierId;
        this.organisationUnitId = organisationUnitId;
        this.toastMessage = toastMessage;
    }
}