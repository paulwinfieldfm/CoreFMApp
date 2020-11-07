"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleType = exports.UserAccountType = exports.DeprecatedLinkedEntityType = exports.JournalEntryPropertyType = exports.SearchableItemType = exports.SearchStatusType = exports.ActivityType = exports.ContactType = void 0;
var ContactType;
(function (ContactType) {
    ContactType[ContactType["contact"] = 0] = "contact";
    ContactType[ContactType["accountManager"] = 1] = "accountManager";
    ContactType[ContactType["bookingAgent"] = 2] = "bookingAgent";
    ContactType[ContactType["helpdesk"] = 3] = "helpdesk";
})(ContactType = exports.ContactType || (exports.ContactType = {}));
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["unknown"] = 0] = "unknown";
    ActivityType[ActivityType["created"] = 1] = "created";
    ActivityType[ActivityType["modified"] = 2] = "modified";
    ActivityType[ActivityType["deleted"] = 3] = "deleted";
    ActivityType[ActivityType["viewed"] = 4] = "viewed";
    ActivityType[ActivityType["actioned"] = 5] = "actioned";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
var SearchStatusType;
(function (SearchStatusType) {
    SearchStatusType[SearchStatusType["searching"] = 0] = "searching";
    SearchStatusType[SearchStatusType["searchComplete"] = 1] = "searchComplete";
    SearchStatusType[SearchStatusType["selected"] = 2] = "selected";
    SearchStatusType[SearchStatusType["error"] = 3] = "error";
    SearchStatusType[SearchStatusType["reset"] = 4] = "reset";
})(SearchStatusType = exports.SearchStatusType || (exports.SearchStatusType = {}));
var SearchableItemType;
(function (SearchableItemType) {
    SearchableItemType[SearchableItemType["asset"] = 0] = "asset";
    SearchableItemType[SearchableItemType["company"] = 1] = "company";
    SearchableItemType[SearchableItemType["category"] = 2] = "category";
    SearchableItemType[SearchableItemType["service"] = 3] = "service";
    SearchableItemType[SearchableItemType["product"] = 4] = "product";
})(SearchableItemType = exports.SearchableItemType || (exports.SearchableItemType = {}));
var JournalEntryPropertyType;
(function (JournalEntryPropertyType) {
    JournalEntryPropertyType[JournalEntryPropertyType["acknowledgeRequired"] = 0] = "acknowledgeRequired";
    JournalEntryPropertyType[JournalEntryPropertyType["showTransientNotification"] = 1] = "showTransientNotification";
    JournalEntryPropertyType[JournalEntryPropertyType["statusMonitoring"] = 2] = "statusMonitoring";
})(JournalEntryPropertyType = exports.JournalEntryPropertyType || (exports.JournalEntryPropertyType = {}));
var DeprecatedLinkedEntityType;
(function (DeprecatedLinkedEntityType) {
    DeprecatedLinkedEntityType[DeprecatedLinkedEntityType["acknowledge"] = 0] = "acknowledge";
    DeprecatedLinkedEntityType[DeprecatedLinkedEntityType["quote"] = 1] = "quote";
    DeprecatedLinkedEntityType[DeprecatedLinkedEntityType["order"] = 2] = "order";
    DeprecatedLinkedEntityType[DeprecatedLinkedEntityType["job"] = 3] = "job";
    DeprecatedLinkedEntityType[DeprecatedLinkedEntityType["pod"] = 4] = "pod";
    DeprecatedLinkedEntityType[DeprecatedLinkedEntityType["supplier"] = 5] = "supplier";
    DeprecatedLinkedEntityType[DeprecatedLinkedEntityType["company"] = 6] = "company";
})(DeprecatedLinkedEntityType = exports.DeprecatedLinkedEntityType || (exports.DeprecatedLinkedEntityType = {}));
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
//# sourceMappingURL=enums.js.map