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
}
  