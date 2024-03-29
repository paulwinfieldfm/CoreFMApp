"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
const interfaces_1 = require("../interfaces");
class UserAccount {
    constructor() {
        this.properties = {};
        this.userAccountTypeId = interfaces_1.UserAccountType.unknown;
        this.userRoleTypeId = interfaces_1.UserRoleType.unknown;
        this.userConfiguration = {};
    }
    static assign(id, uid, name, email, photoURL, displayName, userAccountTypeId, userRoleTypeId, properties = {}, userConfiguration) {
        return ({
            id: id,
            name: name,
            uid: uid,
            email: email,
            photoURL: photoURL,
            displayName: displayName,
            userAccountTypeId: userAccountTypeId,
            userRoleTypeId: userRoleTypeId,
            properties: properties,
            userConfiguration: userConfiguration
        });
    }
    setAttribute(property) {
        this.properties[property.name] = property;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=user-account.js.map