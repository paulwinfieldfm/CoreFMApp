import { DateHelper, Utils } from "../utilities";

export class DateMap {
    epoch: number;
    _date: Date;
    _includeSeconds: boolean = false;
    
    private constructor(epoch: number, date: Date) {
        this.epoch = epoch;
        this._date = date;
    }

    static fromEpoch(epoch: number): DateMap {
        return new DateMap(epoch, DateHelper.epochToDate(epoch));
    }

    static fromDate(date: Date): DateMap {
        return new DateMap(DateHelper.dateToEpoch(date), date);
    }

    get date(): Date { return this._date; }
    
    set date(value: Date) { this._updateDate(value); }

    get time(): string {
        if (!this._date) {
            return '';
        }
        return DateHelper.localeTime(this._date, this._includeSeconds);
    }

    set time(value: string) {
        let timeEntries = value ? value.toLowerCase().split(':') : [];
        if (timeEntries.length > 1) {
            if (!this._date) {
                this._date = new Date();
            }
            const pmIdentifier: boolean = timeEntries.indexOf('pm') > -1;
            let hours = this._numberInRange(timeEntries[0], 0, 23);
            let minutes = this._numberInRange(timeEntries[1], 0, 59);
            // Figure out the seconds and fallback elegantly if we need to
            let seconds: any = 0;
            if (timeEntries.length>2 && this._includeSeconds) {
                seconds = this._numberInRange(timeEntries[2], 0, 59);
                if (seconds===undefined) {
                    seconds = 0;
                }
            }
            // Can't progress if we don't have both hours and minutes
            if (hours===undefined || minutes===undefined) {
                return;
            }
            if (pmIdentifier && hours < 13) {
                hours = hours==12 ? 0 : hours+12;
            }
            this._date.setHours(hours);
            this._date.setMinutes(minutes);
            this._date.setSeconds(seconds);
            this._updateDate(this._date);
        }
    }

    private _updateDate(value: Date): void {
        this._date = value;
        this.epoch = DateHelper.dateToEpoch(this._date);  
    }

    private _numberInRange(value: any, min: number, max: number): number | undefined {
        const result = Utils.tryParseInt(value);
        return (result!==undefined && result >= min && value <= max) ? result : undefined;
    }
}