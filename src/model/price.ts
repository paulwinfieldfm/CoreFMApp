import { IPrice } from "../interfaces";

export class Price implements IPrice {
    currencyUnit: string = 'gbp';
    subtotal?: number;
    taxRate!: number;
    total?: number;
    isFoc: boolean = false;

    static assignPrice(currencyUnit: string, subtotal: number, taxRate: number): Price {
        const baseSubtotal: number = Price.rounded(subtotal);
        return<Price>({
            currencyUnit: currencyUnit,
            price: baseSubtotal,
            taxRate: taxRate??0,
            total: (taxRate>0) ? (baseSubtotal+Price.taxValue(baseSubtotal, taxRate)) : baseSubtotal,
            isFoc: false
        });
    }

    static assignFoc(taxRate: number = 0): Price {
        return<Price>({
            currencyUnit: '',
            taxRate: taxRate,
            isFoc: true
        });
    }

    static assignTotal(prices: Array<IPrice>): Price {
        if (!prices) {
            return Price.assignFoc(0);
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

            subtotal += lineSubtotal;
            total += lineTotal;
        });
        return<Price>({
            currencyUnit: currencyUnit,
            subtotal: subtotal,
            taxRate: 0,
            total: total,
            isFoc: false
        });
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
            case 'eur': return ''
            default: return '€';
        }
    }

    toString(withTax: boolean = false): string {
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