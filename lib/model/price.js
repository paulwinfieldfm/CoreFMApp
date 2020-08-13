"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
class Price {
    constructor() {
        this.currencyUnit = 'gbp';
        this.isFoc = false;
    }
    static assignPrice(currencyUnit, subtotal, taxRate) {
        const baseSubtotal = Price.rounded(subtotal);
        return ({
            currencyUnit: currencyUnit,
            price: baseSubtotal,
            taxRate: taxRate !== null && taxRate !== void 0 ? taxRate : 0,
            total: (taxRate > 0) ? (baseSubtotal + Price.taxValue(baseSubtotal, taxRate)) : baseSubtotal,
            isFoc: false
        });
    }
    static assignFoc(taxRate = 0) {
        return ({
            currencyUnit: '',
            taxRate: taxRate,
            isFoc: true
        });
    }
    static assignTotal(prices) {
        if (!prices) {
            return Price.assignFoc(0);
        }
        const c = prices.find(p => p.currencyUnit !== undefined);
        const currencyUnit = c ? c.currencyUnit : '';
        const linesWithValues = prices.filter(p => p.subtotal !== undefined);
        let subtotal = 0;
        let total = 0;
        linesWithValues.forEach(ln => {
            const lineSubtotal = (ln.subtotal === undefined) ? 0 : ln.subtotal;
            let lineTotal = (ln.total === undefined) ? 0 : ln.total;
            if (lineSubtotal !== 0 && lineTotal == 0) {
                lineTotal = (ln.taxRate)
                    ? (lineSubtotal + this.taxValue(lineSubtotal, ln.taxRate))
                    : lineSubtotal;
            }
            subtotal += lineSubtotal;
            total += lineTotal;
        });
        return ({
            currencyUnit: currencyUnit,
            subtotal: subtotal,
            taxRate: 0,
            total: total,
            isFoc: false
        });
    }
    static taxValue(subtotal, taxRate) {
        return Price.rounded((subtotal / 100) * taxRate);
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
    toString(withTax = false) {
        if (this.isFoc) {
            return '(foc)';
        }
        if (!this.total || !this.subtotal) {
            return Price.format(0, this.currencyUnit);
        }
        return (withTax)
            ? Price.format(this.total, this.currencyUnit)
            : Price.format(this.subtotal, this.currencyUnit);
    }
}
exports.Price = Price;
//# sourceMappingURL=price.js.map