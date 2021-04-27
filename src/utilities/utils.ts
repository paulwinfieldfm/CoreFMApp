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
    const s = username.replace(/[()/&,.?)]/g, ' ');
    let v = s.split(' ').filter(e=>e);
    let result = v[0][0];
    if (v.length > 1) {
      if (v[1][0]) {
        result += v[1][0];
      }
    } else if (v[0] && v[0].length > 1) {
      result += v[0][1];
    }

    return result.toUpperCase();
  }
}

export namespace SeabeckUtils {
  export class Async {

    static forEach = async (array: Array<any>, callback: any) => {
      for (let i=0; i< array.length; i++) {
        await callback(array[i], i, array);
      }
    }
  
    static wait = async (ms: number): Promise<any> => new Promise(r => setTimeout(r, ms));
  }

  export class Objects {
    static clone = (obj: any): any => obj ? JSON.parse(JSON.stringify(obj)) : { }
  
    static isObject = (value: any): boolean => {
      return value===null
        ? false
        : ( (typeof value === 'function') || (typeof value === 'object') ); 
    }
  
    static parseAsObject = (value: any, defaultIfUndefined: any): any => {
      if (!value) {
        return defaultIfUndefined;
      }
      return Objects.isObject(value)
        ? value
        : ((typeof value === 'string') ? JSON.parse(value) : value);
    }
  }
    
}

