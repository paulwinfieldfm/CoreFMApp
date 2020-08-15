import { IPrice } from "./price";

export enum PriceLineCategory {
    time,
    materials,
    discount,
    credit,
}

export interface IPriceLine extends IPrice {
    title: string,
    description?: string,
    quoteLineCategory: PriceLineCategory,
    quantity?: number,
    itemPrice?: number,

    currencyUnit: string,
    price?: number,
    taxRate: number,
    total?: number,
    isFoc: boolean,
}
  