"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
class Price {
    constructor() {
        this.currencyUnit = 'gbp';
        this.isFoc = false;
    }
    static assignPrice(currencyUnit, price, taxRate) {
        const basePrice = Price.rounded(price);
        return ({
            currencyUnit: currencyUnit,
            price: basePrice,
            taxRate: taxRate,
            total: (taxRate > 0) ? (basePrice + Price.taxValue(basePrice, taxRate)) : basePrice,
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
        const linesWithValues = prices.filter(p => p.price !== undefined || p.total !== undefined);
        let price = 0;
        let total = 0;
        linesWithValues.forEach(ln => {
            const linePrice = (ln.price === undefined) ? 0 : ln.price;
            let lineTotal = (ln.total === undefined) ? 0 : ln.total;
            if (linePrice !== 0 && lineTotal == 0) {
                lineTotal = (ln.taxRate)
                    ? (linePrice + this.taxValue(linePrice, ln.taxRate))
                    : linePrice;
            }
            price += linePrice;
            total += lineTotal;
        });
        return ({
            currencyUnit: currencyUnit,
            price: price,
            taxRate: 0,
            total: total,
            isFoc: false
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