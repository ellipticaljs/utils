(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports,mod);
        global.__tmp9z=global.__tmp9z || {};
        global.__tmp9z.object = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    var _arguments = arguments;

    var object = {};

    var spec = {
        descriptors: false,
        extensibility: false,
        enumerator: Object.keys
    };

    /**
     * is object
     * @param obj {*}
     * @returns {boolean}
     */
    object.isObject = function (obj) {
        return typeof obj === 'object' && obj !== null;
    };

    /**
     * is function
     * @param fn {*}
     * @returns {boolean}
     */
    object.isFunction = function (fn) {
        return typeof fn === 'function';
    };

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
        var idProp = arguments[2] === undefined ? 'id' : arguments[2];

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

    /**
     * tests if object is empty
     * @param obj
     * @returns {boolean}
     */
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

    /**
     * tests if object is a POJO
     * @param obj {object}
     * @returns {*}
     */
    object.isPlainObject = function (obj) {
        var _isObject = function _isObject(o) {
            return object.isObject(o) && Object.prototype.toString.call(o) === '[object Object]';
        };

        var ctor, prot;

        if (_isObject(obj) === false) return false;

        // if has modified constructor
        ctor = obj.constructor;
        if (typeof ctor !== 'function') return false;

        // if has modified prototype
        prot = ctor.prototype;
        if (_isObject(prot) === false) return false;

        // if constructor does not have an Object-specific method
        return prot.hasOwnProperty('isPrototypeOf') !== false;
    };

    /**
     *  equality test
     * @param x {object}
     * @param y {object}
     * @returns {*}
     */
    object.isEqual = function (x, y) {
        return Object.equals(x, y, spec);
    };

    /**
     * clone object
     * @param src
     * @returns {*}
     */
    object.clone = function (src) {
        return Object.clone(src, false, spec);
    };

    /**
     * deep clone
     * @param src
     * @returns {*}
     */
    object.deepClone = function (src) {
        return Object.clone(src, true, spec);
    };

    /**
     * returns modified target
     * @param target {object}
     * @param source {object}
     * @returns {*}
     */
    object.mixin = function (target, source) {
        return Object.mixin(target, source);
    };

    /**
     * returns modified target
     * @param target {object}
     * @param sources {object}
     * @returns {*}
     */
    object.assign = function (target) {
        for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            sources[_key - 1] = arguments[_key];
        }

        return Object.assign.apply(Object, [target].concat(sources));
    };


    module.exports = object;
});
