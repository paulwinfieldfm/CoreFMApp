"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static tryParseInt(val) {
        if (val === undefined || val == null) {
            return undefined;
        }
        try {
            return parseInt(val);
        }
        catch (e) {
            return undefined;
        }
    }
    static tryParseIntDefault(val, def) {
        const result = Utils.tryParseInt(val);
        return result !== undefined ? result : def;
    }
    static hasValue(item) {
        return (item != null && item !== undefined);
    }
    static resetArray(obj) {
        if (obj && obj.length > 0) {
            obj.splice(0, obj.length);
        }
        else {
            obj = [];
        }
    }
    static yieldObjectPath(obj, keys) {
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
    static coalesceKey(obj, keyName) {
        return (obj && keyName)
            ? obj[keyName]
            : undefined;
    }
    static coalesceValues(values) {
        for (const o of values) {
            if (o == 0 || o) {
                return o;
            }
        }
        return undefined;
    }
    static inThreshhold(val, min, max) {
        return (!min || (val > min)) && (!max || (val < max));
    }
    static asCurrency(val) {
        return parseFloat((Math.round(val * 100) / 100).toFixed(2));
    }
    static initials(username) {
        let v = username.split(' ');
        let result = v[0][0];
        if (v.length > 1) {
            result += v[1][0];
        }
        return result.toUpperCase();
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map