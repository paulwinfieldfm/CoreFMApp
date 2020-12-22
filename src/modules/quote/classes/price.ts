import { PriceLineCategory } from "../enums";
import { IPrice } from "../interfaces";

export class Price implements IPrice {
    currencyUnit: string = 'gbp';
    subtotal?: number;
    taxRate!: number;
    total?: number;
    isFoc: boolean = false;

    private constructor(priceProperties: IPrice) {
        this.currencyUnit = priceProperties.currencyUnit;
        this.subtotal = priceProperties.subtotal;
        this.taxRate = priceProperties.taxRate;
        this.total = priceProperties.total;
        this.isFoc = priceProperties.isFoc;
    }

    static assign(price: IPrice): Price {
        const baseSubtotal: number = Price.rounded(price.subtotal);
        const taxRate: number = price.taxRate??0;
        return new Price({
            currencyUnit: price.currencyUnit,
            subtotal: baseSubtotal,
            taxRate: taxRate??0,
            total: (taxRate>0) ? (baseSubtotal+Price.taxValue(baseSubtotal, taxRate)) : baseSubtotal,
            isFoc: price.isFoc
        });
    }

    static create(currencyUnit: string, subtotal: number, taxRate: number): Price {
        const baseSubtotal: number = Price.rounded(subtotal);
        return new Price({
            currencyUnit: currencyUnit,
            subtotal: baseSubtotal,
            taxRate: taxRate??0,
            total: (taxRate>0) ? (baseSubtotal+Price.taxValue(baseSubtotal, taxRate)) : baseSubtotal,
            isFoc: false
        });
    }

    static createFOC(taxRate: number = 0): Price {
        return new Price({
            currencyUnit: '',
            subtotal: 0,
            taxRate: taxRate,
            total: 0,
            isFoc: true
        });
    }

    static createTotal(prices: Array<IPrice>): Price {
        if (!prices) {
            return Price.createFOC(0);
        }

        const c = prices.find(p => p.currencyUnit !== undefined);
        const currencyUnit: string = c ? c.currencyUnit : '';
        const linesWithValues = prices.filter(p => p.subtotal !== undefined);
        let subtotal: number = 0;
        let total: number = 0;
        linesWithValues.forEach(ln => {
            const lineSubtotal: number = (ln.subtotal===undefined)?0:ln.subtotal;
            let lineTotal: number = (ln.total===undefined)?0:ln.total;
            if (lineSubtotal !== 0 && lineTotal == 0) {
                lineTotal = (ln.taxRate) 
                    ? (lineSubtotal + this.taxValue(lineSubtotal, ln.taxRate))
                    : lineSubtotal;
            }
            const category = Price.priceLineCategory(<any>ln, PriceLineCategory.time);
            if (category==PriceLineCategory.discount||category==PriceLineCategory.credit) {
                subtotal -= lineSubtotal;
                total -= lineTotal;
            } else {
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

    static categoryTotals(prices: Array<any>): any {
        const timeEntries = (prices||[]).filter(p => p.priceLineCategory==PriceLineCategory.time);
        const hours = timeEntries.reduce((r, c) => r + c.quantity, 0);
        return {
            "time": Price.categoryTotal(timeEntries, PriceLineCategory.time),
            "hours": hours,
            "materials": Price.categoryTotal(prices, PriceLineCategory.materials),
            "fixedCosts": Price.categoryTotal(prices, PriceLineCategory.fixedCost),
            "discount": Price.categoryTotal(prices, PriceLineCategory.discount),
            "credit": Price.categoryTotal(prices, PriceLineCategory.credit)
        }
    }

    static categoryTotal(prices: Array<any>, category: PriceLineCategory): string {
        const categoryItems = (prices||[]).filter(p => p.priceLineCategory==category);
        if (categoryItems.length==0) { return "" }
        // Make sure it's subtotaled or the createTotal function will ignore
        // because the createTotal function isn't itemPrice and quantity aware
        categoryItems.forEach(c => c.subtotal = c.quantity * c.itemPrice);
        const result = Price.createTotal(categoryItems);
        return result.isFoc ? "" : result.display(false);
    }

    static priceLineCategory(entry: any, defaultValue: PriceLineCategory): PriceLineCategory {
        return (entry.priceLineCategory!==undefined)
            ? entry.priceLineCategory||defaultValue
            : defaultValue;
    }


    static taxValue(subtotal: number, taxRate: number): number {
        return Price.rounded((subtotal/100) * taxRate);
    }

    static rounded(value?: number): number {
        if (value===undefined || value===0) {
            return 0;
        }
        return parseFloat(value.toFixed(2));
    }

    static format(value: number, currencyUnit: string): string {
        return `${Price.currencySymbol(currencyUnit)}${value.toFixed(2)}`;
    }

    static currencySymbol(currencyUnit: string): string {
        switch (currencyUnit.toLowerCase()) {
            case 'gbp': return '£';
            case 'usd': return '$';
            case 'eur': return '€';
            default: return '£';
        }
    }

    display(withTax: boolean = false): string {
        if (this.isFoc) {
            return '(foc)';
        }
        if (!this.total || !this.subtotal) {
            return Price.format(0, this.currencyUnit);
        }
        return (withTax) 
            ? Price.format(this.total, this.currencyUnit)
            : Price.format(this.subtotal, this.currencyUnit)
    }
}