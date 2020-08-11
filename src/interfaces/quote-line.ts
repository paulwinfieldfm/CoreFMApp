export enum QuoteLineCategory {
    time,
    materials,
}

export interface IQuoteLine {
    title: string,
    description?: string,
    quoteLineCategory: QuoteLineCategory,
    quantity?: number,
    price?: number,
    linePrice?: number,
    taxRate: number,
    currencyUnit: string,
}
  