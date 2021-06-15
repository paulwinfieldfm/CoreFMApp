export enum ApprovalRequiredType {
    unknown,
    approvalNotRequired,
    approvalRequired,
    approved,
    declined,
    canceled,
}
export enum ContactType {
    contact,
    accountManager,
    bookingAgent,
    helpdesk,
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
    quoteAcceptedWithoutOrder,
    orderAccepted,
    quotationChatMessageSent,
    orderChatMessageSent,
    visitChatMessageSent,
    jobOnHold,
    jobCompleted,
    quoteCancelled,
    orderCancelled,

}

export enum RegistrationStatus {
    referred=1,
    standard
}

export enum EntityStatus {
    unknown,
    newQuote,
    compare,
    quoteAccepted,
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
}

export enum ReadReceiptStatus {
    unknown,
    notRead,
    read,
  }