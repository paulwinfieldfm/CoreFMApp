"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityDataMessage = void 0;
const date_extensions_1 = require("../../date-extensions");
const base_data_message_1 = require("./base-data-message");
class EntityDataMessage {
    constructor(id) {
        this.qos = 1;
        this.id = id;
        this.time = date_extensions_1.DateHelper.dateToEpoch();
    }
    static create(id, linkedEntity, supplierId, organisationUnitId, toastMessage, messageType) {
        let result = (new base_data_message_1.BaseDataMessage(id, supplierId, organisationUnitId, toastMessage, messageType));
        result.linkedEntity = linkedEntity;
        return result;
    }
}
exports.EntityDataMessage = EntityDataMessage;
//# sourceMappingURL=entity-data-message.js.map