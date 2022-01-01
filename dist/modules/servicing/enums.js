"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceEventStatus = exports.ServiceType = void 0;
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["reactive"] = 0] = "reactive";
    ServiceType[ServiceType["planned"] = 1] = "planned";
    ServiceType[ServiceType["productQuote"] = 2] = "productQuote";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
var ServiceEventStatus;
(function (ServiceEventStatus) {
    ServiceEventStatus[ServiceEventStatus["inactive"] = 0] = "inactive";
    ServiceEventStatus[ServiceEventStatus["planned"] = 1] = "planned";
    ServiceEventStatus[ServiceEventStatus["progressing"] = 2] = "progressing";
    ServiceEventStatus[ServiceEventStatus["completed"] = 3] = "completed";
    ServiceEventStatus[ServiceEventStatus["failed"] = 4] = "failed";
})(ServiceEventStatus = exports.ServiceEventStatus || (exports.ServiceEventStatus = {}));
//# sourceMappingURL=enums.js.map