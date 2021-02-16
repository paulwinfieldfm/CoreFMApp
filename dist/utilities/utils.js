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
exports.SeabeckUtils = exports.Utils = void 0;
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
        const s = username.replace(/[()/&,.?)]/g, ' ');
        let v = s.split(' ');
        let result = v[0][0];
        if (v.length > 1) {
            result += v[1][0];
        }
        else if (v[0] && v[0].length > 1) {
            result += v[0][1];
        }
        return result.toUpperCase();
    }
}
exports.Utils = Utils;
var SeabeckUtils;
(function (SeabeckUtils) {
    let Async = /** @class */ (() => {
        class Async {
        }
        Async.forEach = (array, callback) => __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < array.length; i++) {
                yield callback(array[i], i, array);
            }
        });
        Async.wait = (ms) => __awaiter(this, void 0, void 0, function* () { return new Promise(r => setTimeout(r, ms)); });
        return Async;
    })();
    SeabeckUtils.Async = Async;
    let Objects = /** @class */ (() => {
        class Objects {
        }
        Objects.clone = (obj) => obj ? JSON.parse(JSON.stringify(obj)) : {};
        Objects.isObject = (value) => {
            return value === null
                ? false
                : ((typeof value === 'function') || (typeof value === 'object'));
        };
        Objects.parseAsObject = (value, defaultIfUndefined) => {
            if (!value) {
                return defaultIfUndefined;
            }
            return Objects.isObject(value)
                ? value
                : ((typeof value === 'string') ? JSON.parse(value) : value);
        };
        return Objects;
    })();
    SeabeckUtils.Objects = Objects;
})(SeabeckUtils = exports.SeabeckUtils || (exports.SeabeckUtils = {}));
//# sourceMappingURL=utils.js.map