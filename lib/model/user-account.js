"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor() {
        this.attributes = {};
    }
    static assign(uid, email, photoURL, displayName, attributes = {}) {
        return ({
            uid: uid,
            email: email,
            photoURL: photoURL,
            displayName: displayName,
            attributes: attributes
        });
    }
    setAttribute(attribute) {
        this.attributes[attribute.name] = attribute;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=user-account.js.map