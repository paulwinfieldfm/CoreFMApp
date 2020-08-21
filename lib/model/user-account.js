"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
const interfaces_1 = require("../interfaces");
class UserAccount {
    constructor() {
        this.attributes = {};
        this.userAccountTypeId = interfaces_1.UserAccountType.unknown;
    }
    static assign(id, uid, name, email, photoURL, displayName, userAccountType, attributes = {}) {
        return ({
            id: id,
            name: name,
            uid: uid,
            email: email,
            photoURL: photoURL,
            displayName: displayName,
            userAccountTypeId: userAccountType,
            attributes: attributes
        });
    }
    setAttribute(attribute) {
        this.attributes[attribute.name] = attribute;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=user-account.js.map