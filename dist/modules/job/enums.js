"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatusType = exports.JobTaskStatus = exports.JobStatus = void 0;
var JobStatus;
(function (JobStatus) {
    JobStatus[JobStatus["new"] = 0] = "new";
    JobStatus[JobStatus["scheduled"] = 1] = "scheduled";
    JobStatus[JobStatus["allocated"] = 2] = "allocated";
    JobStatus[JobStatus["cancelled"] = 3] = "cancelled";
    JobStatus[JobStatus["deallocated"] = 4] = "deallocated";
    JobStatus[JobStatus["receivedInApp"] = 5] = "receivedInApp";
    JobStatus[JobStatus["acceptedInApp"] = 6] = "acceptedInApp";
    JobStatus[JobStatus["rejectedInApp"] = 7] = "rejectedInApp";
    JobStatus[JobStatus["onRoute"] = 8] = "onRoute";
    JobStatus[JobStatus["arrivedAtSite"] = 9] = "arrivedAtSite";
    JobStatus[JobStatus["admittedOnSite"] = 10] = "admittedOnSite";
    JobStatus[JobStatus["workInProgress"] = 11] = "workInProgress";
    JobStatus[JobStatus["paused"] = 12] = "paused";
    JobStatus[JobStatus["completed"] = 13] = "completed";
    JobStatus[JobStatus["unableToComplete"] = 14] = "unableToComplete";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var JobTaskStatus;
(function (JobTaskStatus) {
    JobTaskStatus[JobTaskStatus["pending"] = 0] = "pending";
    JobTaskStatus[JobTaskStatus["complete"] = 1] = "complete";
    JobTaskStatus[JobTaskStatus["incomplete"] = 2] = "incomplete";
})(JobTaskStatus = exports.JobTaskStatus || (exports.JobTaskStatus = {}));
var JobStatusType;
(function (JobStatusType) {
    JobStatusType[JobStatusType["new"] = 1] = "new";
    JobStatusType[JobStatusType["accepted"] = 2] = "accepted";
    JobStatusType[JobStatusType["onRoute"] = 3] = "onRoute";
    JobStatusType[JobStatusType["atSite"] = 4] = "atSite";
    JobStatusType[JobStatusType["onSite"] = 5] = "onSite";
    JobStatusType[JobStatusType["inProgress"] = 6] = "inProgress";
    JobStatusType[JobStatusType["completed"] = 7] = "completed";
    JobStatusType[JobStatusType["rejected"] = 8] = "rejected";
    JobStatusType[JobStatusType["aborted"] = 9] = "aborted";
    JobStatusType[JobStatusType["onHold"] = 10] = "onHold";
})(JobStatusType = exports.JobStatusType || (exports.JobStatusType = {}));
//# sourceMappingURL=enums.js.map