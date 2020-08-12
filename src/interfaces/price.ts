export interface IPrice {
    title: string,
    currencyUnit: string,
    price?: number,
    taxRate: number,
    total?: number,
    isFoc: boolean,
}