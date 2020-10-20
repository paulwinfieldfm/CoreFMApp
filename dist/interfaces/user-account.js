"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleType = exports.UserAccountType = void 0;
var UserAccountType;
(function (UserAccountType) {
    UserAccountType[UserAccountType["unknown"] = 0] = "unknown";
    UserAccountType[UserAccountType["portal"] = 1] = "portal";
    UserAccountType[UserAccountType["supplier"] = 2] = "supplier";
    UserAccountType[UserAccountType["pod"] = 3] = "pod";
})(UserAccountType = exports.UserAccountType || (exports.UserAccountType = {}));
var UserRoleType;
(function (UserRoleType) {
    UserRoleType[UserRoleType["unknown"] = 0] = "unknown";
    UserRoleType[UserRoleType["requisitioner"] = 1] = "requisitioner";
    UserRoleType[UserRoleType["contractManager"] = 2] = "contractManager";
    UserRoleType[UserRoleType["supplierAdministrator"] = 3] = "supplierAdministrator";
    UserRoleType[UserRoleType["engineer"] = 4] = "engineer";
})(UserRoleType = exports.UserRoleType || (exports.UserRoleType = {}));
//# sourceMappingURL=user-account.js.map