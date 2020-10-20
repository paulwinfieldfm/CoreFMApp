"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    static hasMinimumValue(field, minValue) {
        return Utils.hasValue(field) && field >= minValue;
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
    static isObject(value) {
        if (value === null) {
            return false;
        }
        return ((typeof value === 'function') || (typeof value === 'object'));
    }
    static parseAsObject(value, defaultIfUndefined) {
        if (!value) {
            return defaultIfUndefined;
        }
        if (Utils.isObject(value)) {
            return value;
        }
        return (typeof value === 'string') ? JSON.parse(value) : value;
    }
    static asyncForEach(array, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index = 0; index < array.length; index++) {
                yield callback(array[index], index, array);
            }
        });
    }
    static wait(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(r => setTimeout(r, ms));
        });
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map