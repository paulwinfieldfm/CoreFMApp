export declare class DateHelper {
    static inFuture(secondsSinceEpoch: number): boolean;
    static epochToDate(secondsSinceEpoch: number): Date;
    static dateToEpoch(d?: Date): number;
    static localeDate(d: Date): string;
    static localeTime(d: Date, includeSeconds?: boolean): string;
    static localeDateTime(d: Date): string;
    static pad2(v: number): string;
    static compareAsc(epochSeconds1: number, epochSeconds2: number, emptyFirst?: boolean): number;
    static compareDesc(epochSeconds1: number, epochSeconds2: number, emptyFirst?: boolean): number;
}
