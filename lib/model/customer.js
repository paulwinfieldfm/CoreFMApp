"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor() {
        this.attributes = {};
    }
    static assign(uid, customerId, photoURL, displayName, name, contactName, email, contactEmail, contactPhone1, address1, address2, town, postcode, companyName, attributes = {}) {
        var _a, _b;
        return ({
            uid: uid,
            customerId: customerId,
            photoURL: photoURL,
            displayName: displayName,
            name: (_a = name !== null && name !== void 0 ? name : contactName) !== null && _a !== void 0 ? _a : displayName,
            contactName: (_b = contactName !== null && contactName !== void 0 ? contactName : name) !== null && _b !== void 0 ? _b : displayName,
            email: email !== null && email !== void 0 ? email : contactEmail,
            contactEmail: contactEmail !== null && contactEmail !== void 0 ? contactEmail : email,
            contactPhone1: contactPhone1,
            address1: address1,
            address2: address2,
            town: town,
            postcode: postcode,
            companyName: companyName,
            attributes: attributes
        });
    }
    setAttribute(attribute) {
        this.attributes[attribute.name] = attribute;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map