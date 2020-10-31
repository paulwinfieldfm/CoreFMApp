"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
const enums_1 = require("../enums");
class UserAccount {
    constructor() {
        this.properties = {};
        this.userAccountTypeId = enums_1.UserAccountType.unknown;
        this.userRoleTypeId = enums_1.UserRoleType.unknown;
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