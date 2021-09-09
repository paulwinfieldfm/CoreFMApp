"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadReceiptStatus = exports.EntityStatus = exports.RegistrationStatus = exports.EntityState = exports.UserRoleType = exports.UserAccountType = exports.DeprecatedLinkedEntityType = exports.JournalEntryPropertyType = exports.SearchableItemType = exports.SearchStatusType = exports.ActivityType = exports.ContactType = exports.ApprovalRequiredType = void 0;
var ApprovalRequiredType;
(function (ApprovalRequiredType) {
    ApprovalRequiredType[ApprovalRequiredType["unknown"] = 0] = "unknown";
    ApprovalRequiredType[ApprovalRequiredType["approvalNotRequired"] = 1] = "approvalNotRequired";
    ApprovalRequiredType[ApprovalRequiredType["approvalRequired"] = 2] = "approvalRequired";
    ApprovalRequiredType[ApprovalRequiredType["approved"] = 3] = "approved";
    ApprovalRequiredType[ApprovalRequiredType["declined"] = 4] = "declined";
    ApprovalRequiredType[ApprovalRequiredType["canceled"] = 5] = "canceled";
})(ApprovalRequiredType = exports.ApprovalRequiredType || (exports.ApprovalRequiredType = {}));
var ContactType;
(function (ContactType) {
    ContactType[ContactType["unknown"] = 0] = "unknown";
    ContactType[ContactType["contact"] = 1] = "contact";
    ContactType[ContactType["accountManager"] = 2] = "accountManager";
    ContactType[ContactType["bookingAgent"] = 3] = "bookingAgent";
    ContactType[ContactType["helpdesk"] = 4] = "helpdesk";
    ContactType[ContactType["admin"] = 5] = "admin";
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
    SearchStatusType[SearchStatusType["searchDelegated"] = 2] = "searchDelegated";
    SearchStatusType[SearchStatusType["selected"] = 3] = "selected";
    SearchStatusType[SearchStatusType["error"] = 4] = "error";
    SearchStatusType[SearchStatusType["reset"] = 5] = "reset";
    SearchStatusType[SearchStatusType["searchableItemTypeChanged"] = 6] = "searchableItemTypeChanged";
})(SearchStatusType = exports.SearchStatusType || (exports.SearchStatusType = {}));
var SearchableItemType;
(function (SearchableItemType) {
    SearchableItemType[SearchableItemType["currentAreaFilter"] = 0] = "currentAreaFilter";
    SearchableItemType[SearchableItemType["asset"] = 1] = "asset";
    SearchableItemType[SearchableItemType["company"] = 2] = "company";
    SearchableItemType[SearchableItemType["contact"] = 3] = "contact";
    SearchableItemType[SearchableItemType["category"] = 4] = "category";
    SearchableItemType[SearchableItemType["service"] = 5] = "service";
    SearchableItemType[SearchableItemType["supplier"] = 6] = "supplier";
    SearchableItemType[SearchableItemType["product"] = 7] = "product";
    SearchableItemType[SearchableItemType["combined"] = 8] = "combined";
    SearchableItemType[SearchableItemType["dashboardFilter"] = 9] = "dashboardFilter";
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
    DeprecatedLinkedEntityType[DeprecatedLinkedEntityType["supplierQuote"] = 7] = "supplierQuote";
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
var EntityState;
(function (EntityState) {
    EntityState[EntityState["newQuoteAdded"] = 1] = "newQuoteAdded";
    EntityState[EntityState["quoteResponseSubmitted"] = 2] = "quoteResponseSubmitted";
    EntityState[EntityState["BAFORequested"] = 3] = "BAFORequested";
    EntityState[EntityState["BAFOResponseSubmitted"] = 4] = "BAFOResponseSubmitted";
    EntityState[EntityState["quoteAccepted"] = 5] = "quoteAccepted";
    EntityState[EntityState["orderAccepted"] = 6] = "orderAccepted";
    EntityState[EntityState["quotationChatMessageSent"] = 7] = "quotationChatMessageSent";
    EntityState[EntityState["orderChatMessageSent"] = 8] = "orderChatMessageSent";
    EntityState[EntityState["visitChatMessageSent"] = 9] = "visitChatMessageSent";
    EntityState[EntityState["jobOnHold"] = 10] = "jobOnHold";
    EntityState[EntityState["jobCompleted"] = 11] = "jobCompleted";
    EntityState[EntityState["quoteCancelled"] = 12] = "quoteCancelled";
    EntityState[EntityState["orderCancelled"] = 13] = "orderCancelled";
    EntityState[EntityState["quoteAcceptedWithoutOrder"] = 14] = "quoteAcceptedWithoutOrder";
    EntityState[EntityState["quoteResponseReceived"] = 15] = "quoteResponseReceived";
    EntityState[EntityState["BAFOResponseReceived"] = 16] = "BAFOResponseReceived";
})(EntityState = exports.EntityState || (exports.EntityState = {}));
var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus[RegistrationStatus["referred"] = 1] = "referred";
    RegistrationStatus[RegistrationStatus["standard"] = 2] = "standard";
    RegistrationStatus[RegistrationStatus["trial"] = 3] = "trial";
})(RegistrationStatus = exports.RegistrationStatus || (exports.RegistrationStatus = {}));
var EntityStatus;
(function (EntityStatus) {
    EntityStatus[EntityStatus["unknown"] = 0] = "unknown";
    EntityStatus[EntityStatus["newQuote"] = 1] = "newQuote";
    EntityStatus[EntityStatus["compare"] = 2] = "compare";
    EntityStatus[EntityStatus["raised"] = 3] = "raised";
    EntityStatus[EntityStatus["orderAccepted"] = 4] = "orderAccepted";
    EntityStatus[EntityStatus["booked"] = 5] = "booked";
    EntityStatus[EntityStatus["onRoute"] = 6] = "onRoute";
    EntityStatus[EntityStatus["atSite"] = 7] = "atSite";
    EntityStatus[EntityStatus["onSite"] = 8] = "onSite";
    EntityStatus[EntityStatus["inProgress"] = 9] = "inProgress";
    EntityStatus[EntityStatus["onHold"] = 10] = "onHold";
    EntityStatus[EntityStatus["completed"] = 11] = "completed";
    EntityStatus[EntityStatus["signOff"] = 12] = "signOff";
    EntityStatus[EntityStatus["cancelled"] = 13] = "cancelled";
    EntityStatus[EntityStatus["clonedQuote"] = 14] = "clonedQuote";
    EntityStatus[EntityStatus["quoteAccepted"] = 15] = "quoteAccepted";
    EntityStatus[EntityStatus["clientApprovalPending"] = 16] = "clientApprovalPending";
    EntityStatus[EntityStatus["newSupplierRequestAdded"] = 17] = "newSupplierRequestAdded";
})(EntityStatus = exports.EntityStatus || (exports.EntityStatus = {}));
var ReadReceiptStatus;
(function (ReadReceiptStatus) {
    ReadReceiptStatus[ReadReceiptStatus["unknown"] = 0] = "unknown";
    ReadReceiptStatus[ReadReceiptStatus["notRead"] = 1] = "notRead";
    ReadReceiptStatus[ReadReceiptStatus["read"] = 2] = "read";
})(ReadReceiptStatus = exports.ReadReceiptStatus || (exports.ReadReceiptStatus = {}));
//# sourceMappingURL=enums.js.map