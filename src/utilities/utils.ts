export class Utils {
  static tryParseInt(val: any): number | undefined {
    if (val === undefined || val == null) {
      return undefined;
    }
    try {
      return parseInt(val);
    } catch(e) {
      return undefined;
    }
  }
  static tryParseIntDefault(val: any, def: number): number {
    const result = Utils.tryParseInt(val);
    return result !== undefined ? result : def;
  }
  static yieldObjectPath(obj: any, keys: Array<string>): any {
    if (!obj) {
      return undefined;
    }
    let currentPath = obj;
    for (const k of keys) {
      currentPath = currentPath[k];
      if (!currentPath) {
        return undefined;
      }
    }
    return currentPath;
  }
  static coalesceKey(obj: any, keyName?: string): any {
    return (obj && keyName)
      ? obj[keyName]
      : undefined;
  }
  static coalesceValues(values: Array<any>): any {
    for (const o of values) {
      if (o==0 || o) {
        return o;
      }
    }
    return undefined;
  }
  static inThreshhold(val: number, min?: number, max?: number): boolean {
    return (!min || (val > min)) && (!max || (val < max));
  }
  static asCurrency(val: number): number {
    return parseFloat((Math.round(val*100)/100).toFixed(2));
  }
}
