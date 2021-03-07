"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDataMessage = void 0;
const date_extensions_1 = require("../../date-extensions");
/// Raw data message
class BaseDataMessage {
    constructor(supplierId, organisationUnitId, qos, showMessage, title, text) {
        this.time = date_extensions_1.DateHelper.dateToEpoch();
        this.qos = qos;
        this.supplierId = supplierId;
        this.organisationUnitId = organisationUnitId;
        this.showMessage = showMessage;
        this.title = title;
        this.text = text;
    }
}
exports.BaseDataMessage = BaseDataMessage;
//# sourceMappingURL=base-data-message.js.map