"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
const date_extensions_1 = require("../../date-extensions");
class ChatMessage {
    constructor(linkedEntity, supplierId, organisationUnitId, content) {
        this.time = date_extensions_1.DateHelper.dateToEpoch();
        this.linkedEntity = linkedEntity;
        this.supplierId = supplierId;
        this.organisationUnitId = organisationUnitId;
        this.qos = 2;
        this.showMessage = false;
        this.content = content;
    }
}
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chat-message.js.map