import { IPrice } from "../interfaces";
export declare class Price implements IPrice {
    currencyUnit: string;
    subtotal?: number;
    taxRate: number;
    total?: number;
    isFoc: boolean;
    private constructor();
    static assign(price: IPrice): Price;
    static create(currencyUnit: string, subtotal: number, taxRate: number): Price;
    static createFOC(taxRate?: number): Price;
    static createTotal(prices: Array<IPrice>): Price;
    static taxValue(subtotal: number, taxRate: number): number;
    static rounded(value?: number): number;
    static format(value: number, currencyUnit: string): string;
    static currencySymbol(currencyUnit: string): string;
    display(withTax?: boolean): string;
}
