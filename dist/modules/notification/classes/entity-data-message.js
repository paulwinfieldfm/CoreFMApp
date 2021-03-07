"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityDataMessage = void 0;
const date_extensions_1 = require("../../date-extensions");
const base_data_message_1 = require("./base-data-message");
class EntityDataMessage {
    constructor() {
        this.qos = 1;
        this.time = date_extensions_1.DateHelper.dateToEpoch();
    }
    static create(linkedEntity, supplierId, organisationUnitId, toastMessage) {
        let result = (new base_data_message_1.BaseDataMessage(supplierId, organisationUnitId, toastMessage));
        result.linkedEntity = linkedEntity;
        return result;
    }
}
exports.EntityDataMessage = EntityDataMessage;
//# sourceMappingURL=entity-data-message.js.map