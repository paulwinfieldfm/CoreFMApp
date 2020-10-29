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
  static hasValue(item?: any): boolean {
    return (item!=null && item!==undefined);
  }
  static hasMinimumValue(field: any, minValue: number): boolean {
    return Utils.hasValue(field) && field >= minValue;
  }
  static resetArray(obj: any): void {
    if (obj && obj.length > 0) {
      obj.splice(0, obj.length);
    } else {
      obj = [];
    }
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
  static initials(username: string): string {
    let v = username.split(' ');
    let result = v[0][0];
    if (v.length > 1) {
      result += v[1][0];
    }
    return result.toUpperCase();
  }
  static isObject(value: any): boolean {
    if (value === null) { return false;}
    return ( (typeof value === 'function') || (typeof value === 'object') );      
  }
  static parseAsObject(value: any, defaultIfUndefined: any): any {
    if (!value) {
      return defaultIfUndefined;
    }
    if (Utils.isObject(value)) {
      return value;
    }
    return (typeof value === 'string') ? JSON.parse(value) : value;
  }
  static async asyncForEach(array: Array<any>, callback: any) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }
  static async wait(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }
}

export class ObjectUtils {
  static clone = (obj: any): any => obj ? JSON.parse(JSON.stringify(obj)) : { }
}
