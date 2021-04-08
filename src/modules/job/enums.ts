export enum JobStatus {
    new,
    scheduled,
    allocated,
    cancelled,
    deallocated,
    receivedInApp,
    acceptedInApp,
    rejectedInApp,
    onRoute,
    arrivedAtSite,
    admittedOnSite,
    workInProgress,
    paused,
    completed,
    unableToComplete,
}
export enum JobTaskStatus {
    pending,
    complete,
    incomplete
}

export enum JobStatusType {
    new = 1,
    accepted,
    onRoute,
    atSite,
    onSite,
    inProgress,
    completed,
    rejected,
    aborted,
    onHold
}
