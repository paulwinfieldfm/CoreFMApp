import { IPrice } from "../interfaces";

export class Price implements IPrice {
    currencyUnit: string = 'gbp';
    price?: number;
    taxRate!: number;
    total?: number;
    isFoc: boolean = false;

    static assignPrice(currencyUnit: string, price: number, taxRate: number): Price {
        const basePrice: number = Price.rounded(price);
        return<Price>({
            currencyUnit: currencyUnit,
            price: basePrice,
            taxRate: taxRate,
            total: (taxRate>0) ? (basePrice+Price.taxValue(basePrice, taxRate)) : basePrice,
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


    static taxValue(basicPrice: number, taxRate: number): number {
        return Price.rounded((basicPrice/100) * taxRate);
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

    toString(): string {
        if (this.isFoc) {
            return '(foc)';
        }
        if (!this.total) {
            return Price.format(0, this.currencyUnit);
        }
        return Price.format(this.total, this.currencyUnit);
    }
}