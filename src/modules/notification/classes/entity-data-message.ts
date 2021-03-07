import { ILinkedEntity } from "../../base";
import { DateHelper } from "../../date-extensions";
import { IEntityDataMessage, IToastMessage } from "../interfaces";
import { BaseDataMessage } from "./base-data-message";

export class EntityDataMessage implements IEntityDataMessage {
    linkedEntity!: ILinkedEntity;
    time!: number;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: 0 | 1 | 2 = 1;

    static create(linkedEntity: ILinkedEntity, supplierId: number | undefined, organisationUnitId: number | undefined, toastMessage: IToastMessage) {
        let result = <EntityDataMessage>(new BaseDataMessage(supplierId, organisationUnitId, toastMessage));
        result.linkedEntity = linkedEntity;        
        return result;
    }

    private constructor() {
        this.time = DateHelper.dateToEpoch();
    }   
}