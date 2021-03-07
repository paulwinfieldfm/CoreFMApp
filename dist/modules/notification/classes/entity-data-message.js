"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityDataMessage = void 0;
const base_data_message_1 = require("./base-data-message");
class EntityDataMessage {
    constructor() {
        this.qos = 1;
        this.showMessage = false;
    }
    static create(linkedEntity, supplierId, organisationUnitId, showMessage = false) {
        let result = (new base_data_message_1.BaseDataMessage(supplierId, organisationUnitId, 2, showMessage, "Message", undefined));
        result.linkedEntity = linkedEntity;
        return result;
    }
}
exports.EntityDataMessage = EntityDataMessage;
//# sourceMappingURL=entity-data-message.js.map