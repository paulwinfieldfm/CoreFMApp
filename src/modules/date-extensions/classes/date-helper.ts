import { IDateCalculation } from "../interfaces";

export class DateHelper {
    static inFuture(secondsSinceEpoch: number): boolean {
      if (!secondsSinceEpoch) {
        return true;
      }
      const now = Math.trunc((new Date()).getTime()/1000);
      return secondsSinceEpoch > now;
    }
    static epochToDate(secondsSinceEpoch: number): Date {
      return new Date(secondsSinceEpoch*1000);
    }
    static dateToEpoch(d?: Date): number {
      if (!d) {
        d = new Date();
      }
      return Math.trunc(d.getTime()/1000);
    }
    static localeDate(d: Date): string {
      return `${DateHelper.pad2(d.getDate())}/${DateHelper.pad2(d.getMonth()+1)}/${d.getFullYear()}`;
    }
    static localeTime(d: Date, includeSeconds: boolean = false): string {
      let result = `${DateHelper.pad2(d.getHours())}:${DateHelper.pad2(d.getMinutes())}`;
      return (includeSeconds) ? `${result}:${DateHelper.pad2(d.getSeconds())}` : result;
    }
    static localeDateTime(d: Date): string {
      return `${DateHelper.localeDate(d)} ${DateHelper.localeTime(d)}`;
    }
    static pad2(v: number): string {
      let result: string = v ? v.toString() : "00";
      return (result.length < 2) ? "0" + result : result;
    }
    static compareAsc(epochSeconds1: number, epochSeconds2: number, emptyFirst: boolean = false): number {
      if (emptyFirst) {
        if (epochSeconds1>epochSeconds2 || epochSeconds2===undefined) return 1; else return (epochSeconds1==epochSeconds2) ? 0 : -1;
      } else {
        if (epochSeconds1>epochSeconds2 || epochSeconds1===undefined) return 1; else return (epochSeconds1==epochSeconds2) ? 0 : -1;    
      }
    }
    static compareDesc(epochSeconds1: number, epochSeconds2: number, emptyFirst: boolean = false): number {
      if (emptyFirst) {
        if (epochSeconds1<epochSeconds2 || epochSeconds2===undefined) return 1; else return (epochSeconds1==epochSeconds2) ? 0 : -1;
      } else {
        if (epochSeconds1<epochSeconds2 || epochSeconds1===undefined) return 1; else return (epochSeconds1==epochSeconds2) ? 0 : -1;    
      }
    }
}
  
export class Epoch {
  static now(): number {
    return Epoch.from(undefined);
  }
  static from(d?: Date): number {
    if (!d) {
      d = new Date();
    }
    return Math.trunc(d.getTime()/1000);
  }
  static toDate(secondsSinceEpoch: number): Date {
    return new Date(secondsSinceEpoch*1000);
  }
  static inc(sourceDate: number, calculations: IDateCalculation): number {
    let result = sourceDate;
    if (calculations.addYears) {
      result += Epoch.addYears(result, calculations.addYears);
    }
    if (calculations.addMonths) {
      result += Epoch.addMonths(result, calculations.addMonths);
    }
    if (calculations.addDays) {
      result+= (calculations.addDays*(3600*24));
    }
    if (calculations.addHours) {
      result+= (calculations.addHours*(3600));
    }
    if (calculations.addMinutes) {
      result+= (calculations.addMinutes*(60));
    }
    return result;
  }
  static addYears(value: number, add: number): number {
    const d = Epoch.toDate(value);
    d.setFullYear(d.getFullYear()+add);
    return Epoch.from(d);
  }
  static addMonths(value: number, add: number): number {
    const d = Epoch.toDate(value);
    d.setMonth(d.getMonth()+add);
    return Epoch.from(d);
  }
}