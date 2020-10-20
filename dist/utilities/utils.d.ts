export declare class Utils {
    static tryParseInt(val: any): number | undefined;
    static tryParseIntDefault(val: any, def: number): number;
    static hasValue(item?: any): boolean;
    static hasMinimumValue(field: any, minValue: number): boolean;
    static resetArray(obj: any): void;
    static yieldObjectPath(obj: any, keys: Array<string>): any;
    static coalesceKey(obj: any, keyName?: string): any;
    static coalesceValues(values: Array<any>): any;
    static inThreshhold(val: number, min?: number, max?: number): boolean;
    static asCurrency(val: number): number;
    static initials(username: string): string;
    static isObject(value: any): boolean;
    static parseAsObject(value: any, defaultIfUndefined: any): any;
    static asyncForEach(array: Array<any>, callback: any): Promise<void>;
    static wait(ms: number): Promise<void>;
}
