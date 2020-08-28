"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatus = void 0;
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
//# sourceMappingURL=job.js.map