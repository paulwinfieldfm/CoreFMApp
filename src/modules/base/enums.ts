export enum ApprovalRequiredType {
    unknown,
    approvalNotRequired,
    approvalRequired,
    approved,
    declined,
    canceled,
}
export enum ContactType {
    unknown,
    contact,
    accountManager,
    bookingAgent,
    helpdesk,
    admin,
}
export enum ActivityType {
    unknown,
    created,
    modified,
    deleted,
    viewed,
    actioned,
}
export enum SearchStatusType {
    searching,
    searchComplete,
    searchDelegated,
    selected,
    error,
    reset,
    searchableItemTypeChanged,
}
export enum SearchableItemType {
    currentAreaFilter,
    asset,
    company,
    contact,
    category,
    service,
    supplier,
    product,
    combined,
    dashboardFilter,
}
export enum JournalEntryPropertyType {
    acknowledgeRequired,
    showTransientNotification,
    statusMonitoring,
}
export enum DeprecatedLinkedEntityType {
    acknowledge,
    quote,
    order,
    job,
    pod,
    supplier,
    company,
    supplierQuote,
}
export enum UserAccountType {
    unknown,
    portal,
    supplier,
    pod
}
export enum UserRoleType {
    unknown,
    requisitioner,
    contractManager,
    supplierAdministrator,
    engineer
}

export enum EntityState {
    newQuoteAdded = 1,
    quoteResponseSubmitted,
    BAFORequested,
    BAFOResponseSubmitted,
    quoteAccepted,
    orderAccepted,
    quotationChatMessageSent,
    orderChatMessageSent,
    visitChatMessageSent,
    jobOnHold,
    jobCompleted,
    quoteCancelled,
    orderCancelled,
    quoteAcceptedWithoutOrder,
    quoteResponseReceived,
    BAFOResponseReceived,
    supplierQuoteChatMessageSent,
}

export enum RegistrationStatus {
    referred=1,
    standard,
    trial,
}

export enum EntityStatus {
    unknown,
    newQuote,
    compare,
    raised,
    orderAccepted,
    booked,
    onRoute,
    atSite,
    onSite,
    inProgress,
    onHold,
    completed,
    signOff,
    cancelled,
    clonedQuote,
    quoteAccepted,
    clientApprovalPending,
    newSupplierRequestAdded,
}

export enum ReadReceiptStatus {
    unknown,
    notRead,
    read,
  }