import { IPrice } from "./price";
export declare enum PriceLineCategory {
    time = 0,
    materials = 1,
    discount = 2,
    credit = 3
}
export interface IPriceLine extends IPrice {
    title: string;
    description?: string;
    quoteLineCategory: PriceLineCategory;
    quantity?: number;
    itemPrice?: number;
    currencyUnit: string;
    price?: number;
    taxRate: number;
    total?: number;
    isFoc: boolean;
}
