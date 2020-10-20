export interface IPrice {
    currencyUnit: string;
    subtotal?: number;
    taxRate: number;
    total?: number;
    isFoc: boolean;
}
