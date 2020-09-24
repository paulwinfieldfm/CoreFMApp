import { DateHelper } from "../utilities";

export class DateMap {
    epoch: number;
    _date: Date;
    
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
    
    set date(value: Date) {
      this._date = value;
      this.epoch = DateHelper.dateToEpoch(this._date);
    }
  
}