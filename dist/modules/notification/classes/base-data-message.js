"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDataMessage = void 0;
const date_extensions_1 = require("../../date-extensions");
/// Raw data message
class BaseDataMessage {
    constructor(id, supplierId, organisationUnitId, toastMessage, messageType, qos = 2) {
        this.id = id;
        this.time = date_extensions_1.DateHelper.dateToEpoch();
        this.qos = qos;
        this.supplierId = supplierId;
        this.organisationUnitId = organisationUnitId;
        this.toastMessage = toastMessage;
        this.messageType = messageType;
    }
}
exports.BaseDataMessage = BaseDataMessage;
//# sourceMappingURL=base-data-message.js.map