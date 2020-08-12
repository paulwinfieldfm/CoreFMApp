"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
class Price {
    constructor() {
        this.currencyUnit = 'gbp';
        this.isFoc = false;
    }
    static assignPrice(title, currencyUnit, price, taxRate) {
        const basePrice = Price.rounded(price);
        return ({
            title: title,
            currencyUnit: currencyUnit,
            price: basePrice,
            taxRate: taxRate,
            total: (taxRate > 0) ? (basePrice + Price.taxValue(basePrice, taxRate)) : basePrice,
            isFoc: false
        });
    }
    static assignFoc(title, taxRate = 0) {
        return ({
            title: title,
            currencyUnit: '',
            taxRate: taxRate,
            isFoc: true
        });
    }
    static taxValue(basicPrice, taxRate) {
        return Price.rounded((basicPrice / 100) * taxRate);
    }
    static rounded(value) {
        if (value === undefined || value === 0) {
            return 0;
        }
        return parseFloat(value.toFixed(2));
    }
    static format(value, currencyUnit) {
        return `${Price.currencySymbol(currencyUnit)}${value.toFixed(2)}`;
    }
    static currencySymbol(currencyUnit) {
        switch (currencyUnit.toLowerCase()) {
            case 'gbp': return '£';
            case 'usd': return '$';
            case 'eur': return '';
            default: return '€';
        }
    }
    toString() {
        if (this.isFoc) {
            return '(foc)';
        }
        if (!this.total) {
            return Price.format(0, this.currencyUnit);
        }
        return Price.format(this.total, this.currencyUnit);
    }
}
exports.Price = Price;
//# sourceMappingURL=price.js.map