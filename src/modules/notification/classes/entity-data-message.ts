import { ILinkedEntityInfo } from "../../base";
import { DateHelper } from "../../date-extensions";
import { EntityDataMessageType } from "../enums";
import { IEntityDataMessage, IToastMessage } from "../interfaces";
import { BaseDataMessage } from "./base-data-message";

export class EntityDataMessage implements IEntityDataMessage {
    id!: string;
    linkedEntity!: ILinkedEntityInfo;
    time!: number;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: 0 | 1 | 2 = 1;
    toastMessage?: IToastMessage | undefined;
    messageType? : EntityDataMessageType;

    static create(id: string, linkedEntity: ILinkedEntityInfo, supplierId: number | undefined, organisationUnitId: number | undefined, toastMessage: IToastMessage | undefined, messageType?: EntityDataMessageType) {
        let result = <EntityDataMessage>(new BaseDataMessage(id, supplierId, organisationUnitId, toastMessage, messageType));
        result.linkedEntity = linkedEntity;        
        return result;
    }

    private constructor(id: string) {
        this.id = id;
        this.time = DateHelper.dateToEpoch();
    }   
}