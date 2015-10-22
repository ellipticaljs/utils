(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', './generator'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('./generator'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.__tmp9z.generator);
        global.__tmp9z=global.__tmp9z || {};
        global.__tmp9z.array = mod.exports;
    }
})(this, function (exports, module, _generator) {
    'use strict';

    function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

    var _generator2 = _interopRequire(_generator);

    var array = {};

    array.isArray = function (obj) {
        return /Array/.test(Object.prototype.toString.call(obj));
    };

    /**
     * is object/value in array
     * @param arr {Array}
     * @param obj {Object}
     * @returns {Boolean}
     */
    array.inArray = function (arr, obj) {
        return _generator2.find(arr, function (o) {
            return Object.is(o, obj);
        });
    };

    /**
     * remove of an array of items from an array
     * @param arr1 {Array}
     * @param arr2 {Array}
     * @returns {Array}
     */
    array.remove = function (arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            if (array.inArray(arr2, arr1[i])) {
                arr1.splice(i, 1);
            }
        }
        return arr1;
    };

    /**
     * empty an array
     * @param arr {Array}
     */
    array.empty = function (arr) {
        return arr.splice(0, arr.length);
    };

    /**
     * tests if valid val for an array index
     * @param val {number}
     */
    array.isValidIndex = function (val) {
        return /^[0-9]+$/.test(String(val));
    };

    /**
     * validates if the value of an object prop is an array
     * @param obj {Object}
     * @param prop {String}
     * @returns {boolean}
     */
    array.isObjectProperty = function (obj, prop) {
        return !!array.isArray(obj[prop]);
    };

    /**
     * validates if the value of an object prop by index is an array
     * @param obj {Object}
     * @param index {Number}
     * @returns {boolean}
     */
    array.isObjectPropertyByIndex = function (obj, index) {
        try {
            var o = obj[Object.keys(obj)[index]];
            return !!array.isArray(o);
        } catch (ex) {
            return false;
        }
    };

    /**
     * finds an object in an array by id
     * @param arr {Array}
     * @param id {String}|{Number}
     * @param propId {String}
     * @returns {Object}
     */
    array.findById = function (arr, id) {
        var propId = arguments[2] === undefined ? 'id' : arguments[2];

        return _generator2.find(arr, function (obj) {
            return obj[propId] === id;
        });
    };

    module.exports = array;
});