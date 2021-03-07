"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMessage = void 0;
const date_extensions_1 = require("../../date-extensions");
class DataMessage {
    constructor(linkedEntity, supplierId, organisationUnitId, qos, showMessage, title, text) {
        this.time = date_extensions_1.DateHelper.dateToEpoch();
        this.linkedEntity = linkedEntity;
        this.supplierId = supplierId;
        this.organisationUnitId = organisationUnitId;
        this.qos = qos || 2;
        this.showMessage = showMessage;
        this.title = title;
        this.text = text;
    }
}
exports.DataMessage = DataMessage;
//# sourceMappingURL=data-message.js.map