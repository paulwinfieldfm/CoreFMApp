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
    selected,
    error,
    reset,
}
export enum SearchableItemType {
    asset,
    company,
    category,
    service,
    product,
}
export enum LinkedEntityType {
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
