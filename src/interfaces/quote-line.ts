import { IPrice } from "./price";

export enum QuoteLineCategory {
    time,
    materials,
}

export interface IQuoteLine extends IPrice {
    title: string,
    description?: string,
    quoteLineCategory: QuoteLineCategory,
    quantity?: number,
    itemPrice?: number,

    currencyUnit: string,
    price?: number,
    taxRate: number,
    total?: number,
    isFoc: boolean,
}
  