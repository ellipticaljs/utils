(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.__tmp9z=global.__tmp9z || {};
        global.__tmp9z.object = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    var object = {};

    /**
     * returns the value of an object prop by index
     * @param obj {object}
     * @param index {number}
     * @returns {object}
     */
    object.propertyByIndex = function (obj, index) {
        return obj[Object.keys(obj)[index]];
    };

    /**
     * returns the index of an element with idProp==id in an array
     * @param obj {Object}
     * @param id {String}
     * @param idProp {String}
     * @returns {Number}
     */
    object.indexById = function (obj, id) {
        var idProp = arguments[2] === undefined ? "id" : arguments[2];

        var arr = object.propertyByIndex(obj, 0);
        if (arr.length && arr.length > 0) {
            var len = arr.length;
            var index = undefined;
            for (var i = 0; i < len; i++) {
                if (arr[i][idProp] === id) {
                    index = i;
                    break;
                }
            }
            return index;
        } else {
            return null;
        }
    };

    object.isEmpty = function (obj) {
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        if (obj == null) return true;

        if (obj.length > 0) return false;
        if (obj.length === 0) return true;

        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }

        return true;
    };
});
