"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
const base_data_message_1 = require("./base-data-message");
class ChatMessage {
    constructor() {
        this.qos = 2;
        this.showMessage = false;
    }
    static create(content, supplierId, organisationUnitId, linkedEntity, showMessage = false) {
        let result = (new base_data_message_1.BaseDataMessage(supplierId, organisationUnitId, 2, showMessage, "Message", undefined));
        result.content = content;
        result.linkedEntity = linkedEntity;
        return result;
    }
}
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chat-message.js.map