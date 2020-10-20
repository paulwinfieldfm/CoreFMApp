export declare class DateMap {
    epoch?: number;
    _date?: Date;
    _includeSeconds: boolean;
    private constructor();
    static fromEpoch(epoch: number): DateMap;
    static fromDate(date: Date): DateMap;
    static fromEmpty(): DateMap;
    get empty(): boolean;
    get date(): Date | undefined;
    set date(value: Date | undefined);
    get time(): string;
    set time(value: string);
    private _updateDate;
    private _numberInRange;
}
