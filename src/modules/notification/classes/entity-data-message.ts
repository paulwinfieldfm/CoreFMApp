import { ILinkedEntity } from "../../base";
import { DateHelper } from "../../date-extensions";
import { IEntityDataMessage } from "../interfaces";
import { BaseDataMessage } from "./base-data-message";

export class EntityDataMessage implements IEntityDataMessage {
    linkedEntity!: ILinkedEntity;
    time!: number;
    supplierId?: number | undefined;
    organisationUnitId?: number | undefined;
    qos: 0 | 1 | 2 = 1;
    showMessage: boolean = false;
    title?: string | undefined;
    text?: string | undefined;

    static create(linkedEntity: ILinkedEntity, supplierId: number | undefined, organisationUnitId: number | undefined, showMessage: boolean = false) {
        let result = <EntityDataMessage>(new BaseDataMessage(supplierId, organisationUnitId, 2, showMessage, "Message", undefined));
        result.linkedEntity = linkedEntity;        
        return result;
    }
    
}