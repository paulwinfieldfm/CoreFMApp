"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
class Quote {
    constructor() {
        this.userActivities = [];
        this.invitedSuppliers = [];
    }
    static createNew(createdActivity, reference, service) {
        return ({
            userActivities: [createdActivity],
            reference: reference,
            service: service,
        });
    }
    addActivity(activity) {
        this.userActivities.push(activity);
    }
}
exports.Quote = Quote;
//# sourceMappingURL=quote.js.map