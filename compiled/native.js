(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.__tmp9z=global.__tmp9z || {};
        global.__tmp9z.native = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    var native = {};

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    native.extends=function(superClass){

        var SubClass = function (_superClass) {
            _inherits(SubClass, _superClass);

            function SubClass() {
                _classCallCheck(this, SubClass);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(SubClass).apply(this, arguments));
            }

            return SubClass;
        };
        
        return SubClass(superClass);
    };
   
    module.exports = native;
});


