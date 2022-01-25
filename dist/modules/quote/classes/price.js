"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
const enums_1 = require("../enums");
const currency_symbol_map_1 = __importDefault(require("currency-symbol-map"));
class Price {
    constructor(priceProperties) {
        this.currencyUnit = 'gbp';
        this.isFoc = false;
        this.currencyUnit = priceProperties.currencyUnit;
        this.subtotal = priceProperties.subtotal;
        this.taxRate = priceProperties.taxRate;
        this.total = priceProperties.total;
        this.isFoc = priceProperties.isFoc;
    }
    static assign(price) {
        var _a;
        const baseSubtotal = Price.rounded(price.subtotal);
        const taxRate = (_a = price.taxRate) !== null && _a !== void 0 ? _a : 0;
        return new Price({
            currencyUnit: price.currencyUnit,
            subtotal: baseSubtotal,
            taxRate: taxRate !== null && taxRate !== void 0 ? taxRate : 0,
            total: (taxRate > 0) ? (baseSubtotal + Price.taxValue(baseSubtotal, taxRate)) : baseSubtotal,
            isFoc: price.isFoc
        });
    }
    static create(currencyUnit, subtotal, taxRate) {
        const baseSubtotal = Price.rounded(subtotal);
        return new Price({
            currencyUnit: currencyUnit,
            subtotal: baseSubtotal,
            taxRate: taxRate !== null && taxRate !== void 0 ? taxRate : 0,
            total: (taxRate > 0) ? (baseSubtotal + Price.taxValue(baseSubtotal, taxRate)) : baseSubtotal,
            isFoc: false
        });
    }
    static createFOC(taxRate = 0) {
        return new Price({
            currencyUnit: '',
            subtotal: 0,
            taxRate: taxRate,
            total: 0,
            isFoc: true
        });
    }
    static createTotal(prices) {
        if (!prices) {
            return Price.createFOC(0);
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
            const category = Price.priceLineCategory(ln, enums_1.PriceLineCategory.time);
            if (category == enums_1.PriceLineCategory.discount || category == enums_1.PriceLineCategory.credit) {
                subtotal -= lineSubtotal;
                total -= lineTotal;
            }
            else {
                subtotal += lineSubtotal;
                total += lineTotal;
            }
        });
        return new Price({
            currencyUnit: currencyUnit,
            subtotal: subtotal,
            taxRate: 0,
            total: total,
            isFoc: false
        });
    }
    static categoryTotals(prices) {
        const timeEntries = (prices || []).filter(p => p.priceLineCategory == enums_1.PriceLineCategory.time);
        const hours = timeEntries.reduce((r, c) => r + c.quantity, 0);
        return {
            "time": Price.categoryTotal(timeEntries, enums_1.PriceLineCategory.time),
            "hours": hours,
            "materials": Price.categoryTotal(prices, enums_1.PriceLineCategory.materials),
            "fixedCosts": Price.categoryTotal(prices, enums_1.PriceLineCategory.fixedCost),
            "discount": Price.categoryTotal(prices, enums_1.PriceLineCategory.discount),
            "credit": Price.categoryTotal(prices, enums_1.PriceLineCategory.credit)
        };
    }
    static categoryTotal(prices, category) {
        const categoryItems = (prices || []).filter(p => p.priceLineCategory == category);
        if (categoryItems.length == 0) {
            return "";
        }
        // Make sure it's subtotaled or the createTotal function will ignore
        // because the createTotal function isn't itemPrice and quantity aware
        categoryItems.forEach(c => c.subtotal = c.quantity * c.itemPrice);
        const result = Price.createTotal(categoryItems);
        return result.isFoc ? "" : result.display(false);
    }
    static generateSubtotals(priceLines) {
        return priceLines && priceLines.length > 0
            ? priceLines.map((p) => {
                return Object.assign(Object.assign({}, p), { subtotal: Price.lineSubtotal(p) });
            })
            : [];
    }
    static lineSubtotal(priceLine) {
        return priceLine.isFoc || !priceLine.itemPrice ? 0 : ((priceLine.quantity || 1) * priceLine.itemPrice);
    }
    static priceLineCategory(entry, defaultValue) {
        return (entry.priceLineCategory !== undefined)
            ? entry.priceLineCategory || defaultValue
            : defaultValue;
    }
    static taxValue(subtotal, taxRate) {
        return Price.rounded((subtotal / 100) * taxRate);
    }
    static addTax(price, taxRate) {
        return price + Price.rounded((price / 100) * taxRate);
    }
    static addMargin(price, marginRate) {
        return price / (1 - (marginRate / 100));
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
        return currency_symbol_map_1.default(currencyUnit) || '£';
    }
    display(withTax = false) {
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