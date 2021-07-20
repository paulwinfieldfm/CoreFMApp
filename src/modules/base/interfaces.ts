import { BookingPriority } from "../quote/enums";
import { IService, ServiceType } from "../servicing";
import { ActivityType, ContactType, EntityStatus, JournalEntryPropertyType, SearchableItemType, SearchStatusType, UserAccountType, UserRoleType } from "./enums";

export interface IKeyedItem {
    id: number,
    name: string,
    code?: string,
    description?: string,
    dirty?: boolean, // Helps us to isolate when persisting complex object structures back to the db
    active?: boolean, // Helps us track when we soft delete an item and need to persist
    image?: string,
}
/// Basic person interface to represent a known actor within the system
export interface IPerson extends IKeyedItem {
    uid?: string,
    email?: string,
    photoURL?: string,
    displayName?: string,
    telephone?: string,
    telephone2?: string,
    reportsTo?: IPerson,
}
export interface IContact extends IPerson {
    parentLocationId?: number,
    contactTypeId: ContactType,
    userAccountType: UserAccountType,
}
export interface ILinkedEntity {
    id: number,
    type: string,
}

export interface IEntity {
    id: number,
    type: string,
    reference: string,
    description: string,
    bookingPriority?: BookingPriority,
    serviceType: number,
    serviceId: number,
    organisationUnitId: number
}

/// A named value for a property map
export interface IItemAttribute {
    name: string,
    value?: any,
}
/// Allows mapping a property/custom attribute set against an entity
export interface IItemAttributeMap {
    [key: string]: IItemAttribute,
}
/// Breadcrumb to show and assist with hierarchy/path traveral
export interface IBreadcrumbPathEntry extends IKeyedItem { 

}
export interface ILinearProgressEntry {
    action: string,
    description?: string,
    actioned: boolean,
    order?: number,
    onSelect?: any,
    isSelected: boolean,
    //linkedEntityType: LinkedEntityType,
}
export interface IJournalEntry {
    id: number,
    title: string,
    subtitle?: string,
    description?: string,
    // Entry should work out the correct icon, but we can override with a specific image or icon
    imageOverride?: string,
    journalEntryProperties: Array<JournalEntryPropertyType>,
    linkedEntity: ILinkedEntity,
    date: number,
    dueDate?: number,
    data?: any,
}
export interface ITodoEntry {
    id: number,
    reference: string,
    description: string,
    status: string,    
    action: string, // In scope action to be performed
    actionDueDate?: number,
    actionStatus?: string,
    responsibility?: string,
    locationDescription?: string,
    locationCount: number,
    linkedEntity: IEntity,
    serviceType: ServiceType,
    service?: IService,
    owner?: IPerson,
    entityStaus?: EntityStatus,
    entityPage?: string
}
/// Categorisation of services or other logical or phyical items (assets too?)
export interface ICategory extends IKeyedItem {
    parentId?: number,
    parentCategory?: ICategory,
    documentUrl?: string,
    image?: string,
    path?: Array<IBreadcrumbPathEntry>,
}
export interface IUserActivity {
    uid?: string,
    time: number,
    activityType: ActivityType,
    payload?: any,
}
export interface IAuditedItem extends IKeyedItem {
    userActivities: Array<IUserActivity>
}
export interface IUserAccount extends IPerson {
    properties: IItemAttributeMap,
    userAccountTypeId: UserAccountType,
    userRoleTypeId: UserRoleType,
    userConfiguration?: IUserConfiguration,
    licenseData?: any,
}
export interface IUserConfiguration {
    supplier?: any,
}
export interface IServerApplicationUser {
    uid: string,
    displayName: string,
    email: string,
    emailVerified: boolean,
    isAnonymous: boolean,
    phoneNumber?: string,
    photoUrl?: string,
}
export interface ISearchRequest {
    searchableItemType: SearchableItemType,
    term: string;
}
export interface ISearchResults {
    searchableItemType: SearchableItemType,
    data: Array<IKeyedItem>
}

export interface ISearchSelection {
    searchableItemType: SearchableItemType,
    data: IKeyedItem
}

export interface IDashboardFilter {
    statusList: Array<EntityStatus>,
    showMyItems: boolean,
    showUnassignedItems: boolean,
    showAllItems: boolean,
    showUserIdItems?: number,
}
export interface ISearchStatus {
    status: SearchStatusType,
    message?: string,
    dashboardFilter?: IDashboardFilter,
    searchResultsEntries?: Array<ISearchResults>,
    selection?: ISearchSelection
}

export interface IScoredElement {
    score?: number,
    calculations?: any,
}

export interface IEmailContact {
    emailAddress: string,
    displayName: string,
}

export interface IHeaderRequirement {
    entityId: number,
    entityType: string,
    reference: string,
    description?: string,
    bookingPriority: BookingPriority,
    serviceType: number,
    service: IService,
    actionDate?: number,
  }
