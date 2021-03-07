"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
const date_extensions_1 = require("../../date-extensions");
const base_data_message_1 = require("./base-data-message");
class ChatMessage {
    constructor() {
        this.qos = 2;
        this.time = date_extensions_1.DateHelper.dateToEpoch();
    }
    static create(content, supplierId, organisationUnitId, linkedEntity) {
        let result = (new base_data_message_1.BaseDataMessage(supplierId, organisationUnitId, undefined));
        result.content = content;
        result.linkedEntity = linkedEntity;
        return result;
    }
}
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chat-message.js.map