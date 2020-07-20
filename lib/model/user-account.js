"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor() {
        this.attributes = {};
    }
    static assign(id, uid, name, email, photoURL, displayName, attributes = {}) {
        return ({
            id: id,
            name: name,
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