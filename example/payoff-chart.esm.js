function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    if (r) i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n;else {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, _regeneratorDefine(e, r, n, t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function size(_a) {
  var width = _a.width,
    height = _a.height;
  if (width < 0) {
    throw new Error('Negative width is not allowed for Size');
  }
  if (height < 0) {
    throw new Error('Negative height is not allowed for Size');
  }
  return {
    width: width,
    height: height
  };
}
function equalSizes(first, second) {
  return first.width === second.width && first.height === second.height;
}

var Observable = /** @class */function () {
  function Observable(win) {
    var _this = this;
    this._resolutionListener = function () {
      return _this._onResolutionChanged();
    };
    this._resolutionMediaQueryList = null;
    this._observers = [];
    this._window = win;
    this._installResolutionListener();
  }
  Observable.prototype.dispose = function () {
    this._uninstallResolutionListener();
    this._window = null;
  };
  Object.defineProperty(Observable.prototype, "value", {
    get: function get() {
      return this._window.devicePixelRatio;
    },
    enumerable: false,
    configurable: true
  });
  Observable.prototype.subscribe = function (next) {
    var _this = this;
    var observer = {
      next: next
    };
    this._observers.push(observer);
    return {
      unsubscribe: function unsubscribe() {
        _this._observers = _this._observers.filter(function (o) {
          return o !== observer;
        });
      }
    };
  };
  Observable.prototype._installResolutionListener = function () {
    if (this._resolutionMediaQueryList !== null) {
      throw new Error('Resolution listener is already installed');
    }
    var dppx = this._window.devicePixelRatio;
    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(dppx, "dppx)"));
    // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
    this._resolutionMediaQueryList.addListener(this._resolutionListener);
  };
  Observable.prototype._uninstallResolutionListener = function () {
    if (this._resolutionMediaQueryList !== null) {
      // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
      this._resolutionMediaQueryList.removeListener(this._resolutionListener);
      this._resolutionMediaQueryList = null;
    }
  };
  Observable.prototype._reinstallResolutionListener = function () {
    this._uninstallResolutionListener();
    this._installResolutionListener();
  };
  Observable.prototype._onResolutionChanged = function () {
    var _this = this;
    this._observers.forEach(function (observer) {
      return observer.next(_this._window.devicePixelRatio);
    });
    this._reinstallResolutionListener();
  };
  return Observable;
}();
function createObservable(win) {
  return new Observable(win);
}

var DevicePixelContentBoxBinding = /** @class */function () {
  function DevicePixelContentBoxBinding(canvasElement, transformBitmapSize, options) {
    var _a;
    this._canvasElement = null;
    this._bitmapSizeChangedListeners = [];
    this._suggestedBitmapSize = null;
    this._suggestedBitmapSizeChangedListeners = [];
    // devicePixelRatio approach
    this._devicePixelRatioObservable = null;
    // ResizeObserver approach
    this._canvasElementResizeObserver = null;
    this._canvasElement = canvasElement;
    this._canvasElementClientSize = size({
      width: this._canvasElement.clientWidth,
      height: this._canvasElement.clientHeight
    });
    this._transformBitmapSize = transformBitmapSize !== null && transformBitmapSize !== void 0 ? transformBitmapSize : function (size) {
      return size;
    };
    this._allowResizeObserver = (_a = options === null || options === void 0 ? void 0 : options.allowResizeObserver) !== null && _a !== void 0 ? _a : true;
    this._chooseAndInitObserver();
    // we MAY leave the constuctor without any bitmap size observation mechanics initialized
  }
  DevicePixelContentBoxBinding.prototype.dispose = function () {
    var _a, _b;
    if (this._canvasElement === null) {
      throw new Error('Object is disposed');
    }
    (_a = this._canvasElementResizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this._canvasElementResizeObserver = null;
    (_b = this._devicePixelRatioObservable) === null || _b === void 0 ? void 0 : _b.dispose();
    this._devicePixelRatioObservable = null;
    this._suggestedBitmapSizeChangedListeners.length = 0;
    this._bitmapSizeChangedListeners.length = 0;
    this._canvasElement = null;
  };
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "canvasElement", {
    get: function get() {
      if (this._canvasElement === null) {
        throw new Error('Object is disposed');
      }
      return this._canvasElement;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "canvasElementClientSize", {
    get: function get() {
      return this._canvasElementClientSize;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "bitmapSize", {
    get: function get() {
      return size({
        width: this.canvasElement.width,
        height: this.canvasElement.height
      });
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Use this function to change canvas element client size until binding is disposed
   * @param clientSize New client size for bound HTMLCanvasElement
   */
  DevicePixelContentBoxBinding.prototype.resizeCanvasElement = function (clientSize) {
    this._canvasElementClientSize = size(clientSize);
    this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px");
    this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px");
    this._invalidateBitmapSize();
  };
  DevicePixelContentBoxBinding.prototype.subscribeBitmapSizeChanged = function (listener) {
    this._bitmapSizeChangedListeners.push(listener);
  };
  DevicePixelContentBoxBinding.prototype.unsubscribeBitmapSizeChanged = function (listener) {
    this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function (l) {
      return l !== listener;
    });
  };
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "suggestedBitmapSize", {
    get: function get() {
      return this._suggestedBitmapSize;
    },
    enumerable: false,
    configurable: true
  });
  DevicePixelContentBoxBinding.prototype.subscribeSuggestedBitmapSizeChanged = function (listener) {
    this._suggestedBitmapSizeChangedListeners.push(listener);
  };
  DevicePixelContentBoxBinding.prototype.unsubscribeSuggestedBitmapSizeChanged = function (listener) {
    this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function (l) {
      return l !== listener;
    });
  };
  DevicePixelContentBoxBinding.prototype.applySuggestedBitmapSize = function () {
    if (this._suggestedBitmapSize === null) {
      // nothing to apply
      return;
    }
    var oldSuggestedSize = this._suggestedBitmapSize;
    this._suggestedBitmapSize = null;
    this._resizeBitmap(oldSuggestedSize);
    this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, this._suggestedBitmapSize);
  };
  DevicePixelContentBoxBinding.prototype._resizeBitmap = function (newSize) {
    var oldSize = this.bitmapSize;
    if (equalSizes(oldSize, newSize)) {
      return;
    }
    this.canvasElement.width = newSize.width;
    this.canvasElement.height = newSize.height;
    this._emitBitmapSizeChanged(oldSize, newSize);
  };
  DevicePixelContentBoxBinding.prototype._emitBitmapSizeChanged = function (oldSize, newSize) {
    var _this = this;
    this._bitmapSizeChangedListeners.forEach(function (listener) {
      return listener.call(_this, oldSize, newSize);
    });
  };
  DevicePixelContentBoxBinding.prototype._suggestNewBitmapSize = function (newSize) {
    var oldSuggestedSize = this._suggestedBitmapSize;
    var finalNewSize = size(this._transformBitmapSize(newSize, this._canvasElementClientSize));
    var newSuggestedSize = equalSizes(this.bitmapSize, finalNewSize) ? null : finalNewSize;
    if (oldSuggestedSize === null && newSuggestedSize === null) {
      return;
    }
    if (oldSuggestedSize !== null && newSuggestedSize !== null && equalSizes(oldSuggestedSize, newSuggestedSize)) {
      return;
    }
    this._suggestedBitmapSize = newSuggestedSize;
    this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, newSuggestedSize);
  };
  DevicePixelContentBoxBinding.prototype._emitSuggestedBitmapSizeChanged = function (oldSize, newSize) {
    var _this = this;
    this._suggestedBitmapSizeChangedListeners.forEach(function (listener) {
      return listener.call(_this, oldSize, newSize);
    });
  };
  DevicePixelContentBoxBinding.prototype._chooseAndInitObserver = function () {
    var _this = this;
    if (!this._allowResizeObserver) {
      this._initDevicePixelRatioObservable();
      return;
    }
    isDevicePixelContentBoxSupported().then(function (isSupported) {
      return isSupported ? _this._initResizeObserver() : _this._initDevicePixelRatioObservable();
    });
  };
  // devicePixelRatio approach
  DevicePixelContentBoxBinding.prototype._initDevicePixelRatioObservable = function () {
    var _this = this;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    var win = canvasElementWindow(this._canvasElement);
    if (win === null) {
      throw new Error('No window is associated with the canvas');
    }
    this._devicePixelRatioObservable = createObservable(win);
    this._devicePixelRatioObservable.subscribe(function () {
      return _this._invalidateBitmapSize();
    });
    this._invalidateBitmapSize();
  };
  DevicePixelContentBoxBinding.prototype._invalidateBitmapSize = function () {
    var _a, _b;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    var win = canvasElementWindow(this._canvasElement);
    if (win === null) {
      return;
    }
    var ratio = (_b = (_a = this._devicePixelRatioObservable) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : win.devicePixelRatio;
    var canvasRects = this._canvasElement.getClientRects();
    var newSize =
    // eslint-disable-next-line no-negated-condition
    canvasRects[0] !== undefined ? predictedBitmapSize(canvasRects[0], ratio) : size({
      width: this._canvasElementClientSize.width * ratio,
      height: this._canvasElementClientSize.height * ratio
    });
    this._suggestNewBitmapSize(newSize);
  };
  // ResizeObserver approach
  DevicePixelContentBoxBinding.prototype._initResizeObserver = function () {
    var _this = this;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    this._canvasElementResizeObserver = new ResizeObserver(function (entries) {
      var entry = entries.find(function (entry) {
        return entry.target === _this._canvasElement;
      });
      if (!entry || !entry.devicePixelContentBoxSize || !entry.devicePixelContentBoxSize[0]) {
        return;
      }
      var entrySize = entry.devicePixelContentBoxSize[0];
      var newSize = size({
        width: entrySize.inlineSize,
        height: entrySize.blockSize
      });
      _this._suggestNewBitmapSize(newSize);
    });
    this._canvasElementResizeObserver.observe(this._canvasElement, {
      box: 'device-pixel-content-box'
    });
  };
  return DevicePixelContentBoxBinding;
}();
function bindTo(canvasElement, target) {
  {
    return new DevicePixelContentBoxBinding(canvasElement, target.transform, target.options);
  }
}
function canvasElementWindow(canvasElement) {
  // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
  // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return canvasElement.ownerDocument.defaultView;
}
function isDevicePixelContentBoxSupported() {
  return new Promise(function (resolve) {
    var ro = new ResizeObserver(function (entries) {
      resolve(entries.every(function (entry) {
        return 'devicePixelContentBoxSize' in entry;
      }));
      ro.disconnect();
    });
    ro.observe(document.body, {
      box: 'device-pixel-content-box'
    });
  })["catch"](function () {
    return false;
  });
}
function predictedBitmapSize(canvasRect, ratio) {
  return size({
    width: Math.round(canvasRect.left * ratio + canvasRect.width * ratio) - Math.round(canvasRect.left * ratio),
    height: Math.round(canvasRect.top * ratio + canvasRect.height * ratio) - Math.round(canvasRect.top * ratio)
  });
}

/**
 * @experimental
 */
var CanvasRenderingTarget2D = /** @class */function () {
  function CanvasRenderingTarget2D(context, mediaSize, bitmapSize) {
    if (mediaSize.width === 0 || mediaSize.height === 0) {
      throw new TypeError('Rendering target could only be created on a media with positive width and height');
    }
    this._mediaSize = mediaSize;
    // !Number.isInteger(bitmapSize.width) || !Number.isInteger(bitmapSize.height)
    if (bitmapSize.width === 0 || bitmapSize.height === 0) {
      throw new TypeError('Rendering target could only be created using a bitmap with positive integer width and height');
    }
    this._bitmapSize = bitmapSize;
    this._context = context;
  }
  CanvasRenderingTarget2D.prototype.useMediaCoordinateSpace = function (f) {
    try {
      this._context.save();
      // do not use resetTransform to support old versions of Edge
      this._context.setTransform(1, 0, 0, 1, 0, 0);
      this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio);
      return f({
        context: this._context,
        mediaSize: this._mediaSize
      });
    } finally {
      this._context.restore();
    }
  };
  CanvasRenderingTarget2D.prototype.useBitmapCoordinateSpace = function (f) {
    try {
      this._context.save();
      // do not use resetTransform to support old versions of Edge
      this._context.setTransform(1, 0, 0, 1, 0, 0);
      return f({
        context: this._context,
        mediaSize: this._mediaSize,
        bitmapSize: this._bitmapSize,
        horizontalPixelRatio: this._horizontalPixelRatio,
        verticalPixelRatio: this._verticalPixelRatio
      });
    } finally {
      this._context.restore();
    }
  };
  Object.defineProperty(CanvasRenderingTarget2D.prototype, "_horizontalPixelRatio", {
    get: function get() {
      return this._bitmapSize.width / this._mediaSize.width;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(CanvasRenderingTarget2D.prototype, "_verticalPixelRatio", {
    get: function get() {
      return this._bitmapSize.height / this._mediaSize.height;
    },
    enumerable: false,
    configurable: true
  });
  return CanvasRenderingTarget2D;
}();
/**
 * @experimental
 */
function tryCreateCanvasRenderingTarget2D(binding, contextOptions) {
  var mediaSize = binding.canvasElementClientSize;
  if (mediaSize.width === 0 || mediaSize.height === 0) {
    return null;
  }
  var bitmapSize = binding.bitmapSize;
  if (bitmapSize.width === 0 || bitmapSize.height === 0) {
    return null;
  }
  var context = binding.canvasElement.getContext('2d', contextOptions);
  if (context === null) {
    return null;
  }
  return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
}

var _excluded = ["time", "color"];
var _navigator;
var e = {
  title: "",
  visible: true,
  lastValueVisible: true,
  priceLineVisible: true,
  priceLineSource: 0,
  priceLineWidth: 1,
  priceLineColor: "",
  priceLineStyle: 2,
  baseLineVisible: true,
  baseLineWidth: 1,
  baseLineColor: "#B2B5BE",
  baseLineStyle: 0,
  priceFormat: {
    type: "price",
    precision: 2,
    minMove: .01
  }
};
var r, h;
function a(t, i) {
  var s = {
    0: [],
    1: [t.lineWidth, t.lineWidth],
    2: [2 * t.lineWidth, 2 * t.lineWidth],
    3: [6 * t.lineWidth, 6 * t.lineWidth],
    4: [t.lineWidth, 4 * t.lineWidth]
  }[i];
  t.setLineDash(s);
}
function l(t, i, s, n) {
  t.beginPath();
  var e = t.lineWidth % 2 ? .5 : 0;
  t.moveTo(s, i + e), t.lineTo(n, i + e), t.stroke();
}
function o(t, i) {
  if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
}
function _(t) {
  if (void 0 === t) throw new Error("Value is undefined");
  return t;
}
function u(t) {
  if (null === t) throw new Error("Value is null");
  return t;
}
function c(t) {
  return u(_(t));
}
!function (t) {
  t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved";
}(r || (r = {})), function (t) {
  t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
}(h || (h = {}));
var d = /*#__PURE__*/function () {
  function d() {
    _classCallCheck(this, d);
    this.t = [];
  }
  return _createClass(d, [{
    key: "i",
    value: function i(t, _i2, s) {
      var n = {
        h: t,
        l: _i2,
        o: true === s
      };
      this.t.push(n);
    }
  }, {
    key: "_",
    value: function _(t) {
      var i = this.t.findIndex(function (i) {
        return t === i.h;
      });
      i > -1 && this.t.splice(i, 1);
    }
  }, {
    key: "u",
    value: function u(t) {
      this.t = this.t.filter(function (i) {
        return i.l !== t;
      });
    }
  }, {
    key: "p",
    value: function p(t, i, s) {
      var n = _toConsumableArray(this.t);
      this.t = this.t.filter(function (t) {
        return !t.o;
      }), n.forEach(function (n) {
        return n.h(t, i, s);
      });
    }
  }, {
    key: "v",
    value: function v() {
      return this.t.length > 0;
    }
  }, {
    key: "m",
    value: function m() {
      this.t = [];
    }
  }]);
}();
function f(t) {
  for (var _len = arguments.length, i = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    i[_key - 1] = arguments[_key];
  }
  for (var _i4 = 0, _i3 = i; _i4 < _i3.length; _i4++) {
    var _s2 = _i3[_i4];
    for (var _i5 in _s2) void 0 !== _s2[_i5] && Object.prototype.hasOwnProperty.call(_s2, _i5) && !["__proto__", "constructor", "prototype"].includes(_i5) && ("object" != _typeof(_s2[_i5]) || void 0 === t[_i5] || Array.isArray(_s2[_i5]) ? t[_i5] = _s2[_i5] : f(t[_i5], _s2[_i5]));
  }
  return t;
}
function p(t) {
  return "number" == typeof t && isFinite(t);
}
function v(t) {
  return "number" == typeof t && t % 1 == 0;
}
function m(t) {
  return "string" == typeof t;
}
function w(t) {
  return "boolean" == typeof t;
}
function g(t) {
  var i = t;
  if (!i || "object" != _typeof(i)) return i;
  var s, n, e;
  for (n in s = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(n) && (e = i[n], s[n] = e && "object" == _typeof(e) ? g(e) : e);
  return s;
}
function M(t) {
  return null !== t;
}
function b(t) {
  return null === t ? void 0 : t;
}
var S = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function x(t, i, s) {
  return void 0 === i && (i = S), "".concat(s = void 0 !== s ? "".concat(s, " ") : "").concat(t, "px ").concat(i);
}
var C = /*#__PURE__*/function () {
  function C(t) {
    _classCallCheck(this, C);
    this.M = {
      S: 1,
      C: 5,
      k: NaN,
      P: "",
      T: "",
      R: "",
      D: "",
      V: 0,
      I: 0,
      B: 0,
      A: 0,
      L: 0
    }, this.O = t;
  }
  return _createClass(C, [{
    key: "N",
    value: function N() {
      var t = this.M,
        i = this.W(),
        s = this.F();
      return t.k === i && t.T === s || (t.k = i, t.T = s, t.P = x(i, s), t.A = 2.5 / 12 * i, t.V = t.A, t.I = i / 12 * t.C, t.B = i / 12 * t.C, t.L = 0), t.R = this.H(), t.D = this.U(), this.M;
    }
  }, {
    key: "H",
    value: function H() {
      return this.O.N().layout.textColor;
    }
  }, {
    key: "U",
    value: function U() {
      return this.O.$();
    }
  }, {
    key: "W",
    value: function W() {
      return this.O.N().layout.fontSize;
    }
  }, {
    key: "F",
    value: function F() {
      return this.O.N().layout.fontFamily;
    }
  }]);
}();
function y(t) {
  return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
}
function k(t) {
  return .199 * t[0] + .687 * t[1] + .114 * t[2];
}
var P = /*#__PURE__*/function () {
  function P(t, i) {
    _classCallCheck(this, P);
    this.q = new Map(), this.Y = t, i && (this.q = i);
  }
  return _createClass(P, [{
    key: "j",
    value: function j(t, i) {
      if ("transparent" === t) return t;
      var s = this.K(t),
        n = s[3];
      return "rgba(".concat(s[0], ", ").concat(s[1], ", ").concat(s[2], ", ").concat(i * n, ")");
    }
  }, {
    key: "X",
    value: function X(t) {
      var i = this.K(t);
      return {
        Z: "rgb(".concat(i[0], ", ").concat(i[1], ", ").concat(i[2], ")"),
        G: k(i) > 160 ? "black" : "white"
      };
    }
  }, {
    key: "J",
    value: function J(t) {
      return k(this.K(t));
    }
  }, {
    key: "tt",
    value: function tt(t, i, s) {
      var _this$K = this.K(t),
        _this$K2 = _slicedToArray(_this$K, 4),
        n = _this$K2[0],
        e = _this$K2[1],
        r = _this$K2[2],
        h = _this$K2[3],
        _this$K3 = this.K(i),
        _this$K4 = _slicedToArray(_this$K3, 4),
        a = _this$K4[0],
        l = _this$K4[1],
        o = _this$K4[2],
        _ = _this$K4[3],
        u = [y(n + s * (a - n)), y(e + s * (l - e)), y(r + s * (o - r)), (c = h + s * (_ - h), c <= 0 || c > 1 ? Math.min(Math.max(c, 0), 1) : Math.round(1e4 * c) / 1e4)];
      var c;
      return "rgba(".concat(u[0], ", ").concat(u[1], ", ").concat(u[2], ", ").concat(u[3], ")");
    }
  }, {
    key: "K",
    value: function K(t) {
      var i = this.q.get(t);
      if (i) return i;
      var s = function (t) {
          var i = document.createElement("div");
          i.style.display = "none", document.body.appendChild(i), i.style.color = t;
          var s = window.getComputedStyle(i).color;
          return document.body.removeChild(i), s;
        }(t),
        n = s.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
      if (!n) {
        if (this.Y.length) {
          var _iterator = _createForOfIteratorHelper(this.Y),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i6 = _step.value;
              var _s3 = _i6(t);
              if (_s3) return this.q.set(t, _s3), _s3;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        throw new Error("Failed to parse color: ".concat(t));
      }
      var e = [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10), n[4] ? parseFloat(n[4]) : 1];
      return this.q.set(t, e), e;
    }
  }]);
}();
var T = /*#__PURE__*/function () {
  function T() {
    _classCallCheck(this, T);
    this.it = [];
  }
  return _createClass(T, [{
    key: "st",
    value: function st(t) {
      this.it = t;
    }
  }, {
    key: "nt",
    value: function nt(t, i, s) {
      this.it.forEach(function (n) {
        n.nt(t, i, s);
      });
    }
  }]);
}();
var R = /*#__PURE__*/function () {
  function R() {
    _classCallCheck(this, R);
  }
  return _createClass(R, [{
    key: "nt",
    value: function nt(t, i, s) {
      var _this = this;
      t.useBitmapCoordinateSpace(function (t) {
        return _this.et(t, i, s);
      });
    }
  }]);
}();
var D = /*#__PURE__*/function (_R) {
  function D() {
    var _this2;
    _classCallCheck(this, D);
    _this2 = _callSuper(this, D, arguments), _this2.rt = null;
    return _this2;
  }
  _inherits(D, _R);
  return _createClass(D, [{
    key: "ht",
    value: function ht(t) {
      this.rt = t;
    }
  }, {
    key: "et",
    value: function et(_ref) {
      var t = _ref.context,
        i = _ref.horizontalPixelRatio,
        s = _ref.verticalPixelRatio;
      if (null === this.rt || null === this.rt.lt) return;
      var n = this.rt.lt,
        e = this.rt,
        r = Math.max(1, Math.floor(i)) % 2 / 2,
        h = function h(_h) {
          t.beginPath();
          for (var _a = n.to - 1; _a >= n.from; --_a) {
            var _n2 = e.ot[_a],
              _l = Math.round(_n2._t * i) + r,
              _o = _n2.ut * s,
              _2 = _h * s + r;
            t.moveTo(_l, _o), t.arc(_l, _o, _2, 0, 2 * Math.PI);
          }
          t.fill();
        };
      e.ct > 0 && (t.fillStyle = e.dt, h(e.ft + e.ct)), t.fillStyle = e.vt, h(e.ft);
    }
  }]);
}(R);
function V() {
  return {
    ot: [{
      _t: 0,
      ut: 0,
      wt: 0,
      gt: 0
    }],
    vt: "",
    dt: "",
    ft: 0,
    ct: 0,
    lt: null
  };
}
var I = {
  from: 0,
  to: 1
};
var B = /*#__PURE__*/function () {
  function B(t, i, s) {
    _classCallCheck(this, B);
    this.Mt = new T(), this.bt = [], this.St = [], this.xt = true, this.O = t, this.Ct = i, this.yt = s, this.Mt.st(this.bt);
  }
  return _createClass(B, [{
    key: "kt",
    value: function kt(t) {
      this.Pt(), this.xt = true;
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.xt && (this.Rt(), this.xt = false), this.Mt;
    }
  }, {
    key: "Pt",
    value: function Pt() {
      var t = this.yt.Dt();
      t.length !== this.bt.length && (this.St = t.map(V), this.bt = this.St.map(function (t) {
        var i = new D();
        return i.ht(t), i;
      }), this.Mt.st(this.bt));
    }
  }, {
    key: "Rt",
    value: function Rt() {
      var _this3 = this;
      var t = 2 === this.Ct.N().mode || !this.Ct.Vt(),
        i = this.yt.It(),
        s = this.Ct.Bt(),
        n = this.O.At();
      this.Pt(), i.forEach(function (i, e) {
        var _h$Ht;
        var r = _this3.St[e],
          h = i.Et(s),
          a = i.zt();
        !t && null !== h && i.Vt() && null !== a ? (r.vt = h.Lt, r.ft = h.ft, r.ct = h.Ot, r.ot[0].gt = h.gt, r.ot[0].ut = i.Wt().Nt(h.gt, a.Ft), r.dt = (_h$Ht = h.Ht) !== null && _h$Ht !== void 0 ? _h$Ht : _this3.O.Ut(r.ot[0].ut / i.Wt().$t()), r.ot[0].wt = s, r.ot[0]._t = n.qt(s), r.lt = I) : r.lt = null;
      });
    }
  }]);
}();
var A = /*#__PURE__*/function (_R2) {
  function A(t) {
    var _this4;
    _classCallCheck(this, A);
    _this4 = _callSuper(this, A), _this4.Yt = t;
    return _this4;
  }
  _inherits(A, _R2);
  return _createClass(A, [{
    key: "et",
    value: function et(_ref2) {
      var t = _ref2.context,
        i = _ref2.bitmapSize,
        s = _ref2.horizontalPixelRatio,
        n = _ref2.verticalPixelRatio;
      if (null === this.Yt) return;
      var e = this.Yt.jt.Vt,
        r = this.Yt.Kt.Vt;
      if (!e && !r) return;
      var h = Math.round(this.Yt._t * s),
        o = Math.round(this.Yt.ut * n);
      t.lineCap = "butt", e && h >= 0 && (t.lineWidth = Math.floor(this.Yt.jt.ct * s), t.strokeStyle = this.Yt.jt.R, t.fillStyle = this.Yt.jt.R, a(t, this.Yt.jt.Xt), function (t, i, s, n) {
        t.beginPath();
        var e = t.lineWidth % 2 ? .5 : 0;
        t.moveTo(i + e, s), t.lineTo(i + e, n), t.stroke();
      }(t, h, 0, i.height)), r && o >= 0 && (t.lineWidth = Math.floor(this.Yt.Kt.ct * n), t.strokeStyle = this.Yt.Kt.R, t.fillStyle = this.Yt.Kt.R, a(t, this.Yt.Kt.Xt), l(t, o, 0, i.width));
    }
  }]);
}(R);
var E = /*#__PURE__*/function () {
  function E(t, i) {
    _classCallCheck(this, E);
    this.xt = true, this.Zt = {
      jt: {
        ct: 1,
        Xt: 0,
        R: "",
        Vt: false
      },
      Kt: {
        ct: 1,
        Xt: 0,
        R: "",
        Vt: false
      },
      _t: 0,
      ut: 0
    }, this.Gt = new A(this.Zt), this.Jt = t, this.yt = i;
  }
  return _createClass(E, [{
    key: "kt",
    value: function kt() {
      this.xt = true;
    }
  }, {
    key: "Tt",
    value: function Tt(t) {
      return this.xt && (this.Rt(), this.xt = false), this.Gt;
    }
  }, {
    key: "Rt",
    value: function Rt() {
      var t = this.Jt.Vt(),
        i = this.yt.Qt().N().crosshair,
        s = this.Zt;
      if (2 === i.mode) return s.Kt.Vt = false, void (s.jt.Vt = false);
      s.Kt.Vt = t && this.Jt.ti(this.yt), s.jt.Vt = t && this.Jt.ii(), s.Kt.ct = i.horzLine.width, s.Kt.Xt = i.horzLine.style, s.Kt.R = i.horzLine.color, s.jt.ct = i.vertLine.width, s.jt.Xt = i.vertLine.style, s.jt.R = i.vertLine.color, s._t = this.Jt.si(), s.ut = this.Jt.ni();
    }
  }]);
}();
function L(t, i, s, n, e, r) {
  t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, s, n, e), t.restore();
}
function O(t, i, s, n, e, r) {
  t.beginPath(), t.roundRect ? t.roundRect(i, s, n, e, r) : (t.lineTo(i + n - r[1], s), 0 !== r[1] && t.arcTo(i + n, s, i + n, s + r[1], r[1]), t.lineTo(i + n, s + e - r[2]), 0 !== r[2] && t.arcTo(i + n, s + e, i + n - r[2], s + e, r[2]), t.lineTo(i + r[3], s + e), 0 !== r[3] && t.arcTo(i, s + e, i, s + e - r[3], r[3]), t.lineTo(i, s + r[0]), 0 !== r[0] && t.arcTo(i, s, i + r[0], s, r[0]));
}
function N(t, i, s, n, e, r) {
  var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var a = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [0, 0, 0, 0];
  var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "";
  if (t.save(), !h || !l || l === r) return O(t, i, s, n, e, a), t.fillStyle = r, t.fill(), void t.restore();
  var o = h / 2;
  var _;
  O(t, i + o, s + o, n - h, e - h, (_ = -o, a.map(function (t) {
    return 0 === t ? t : t + _;
  }))), "transparent" !== r && (t.fillStyle = r, t.fill()), "transparent" !== l && (t.lineWidth = h, t.strokeStyle = l, t.closePath(), t.stroke()), t.restore();
}
function W(t, i, s, n, e, r, h) {
  t.save(), t.globalCompositeOperation = "copy";
  var a = t.createLinearGradient(0, 0, 0, e);
  a.addColorStop(0, r), a.addColorStop(1, h), t.fillStyle = a, t.fillRect(i, s, n, e), t.restore();
}
var F = /*#__PURE__*/function () {
  function F(t, i) {
    _classCallCheck(this, F);
    this.ht(t, i);
  }
  return _createClass(F, [{
    key: "ht",
    value: function ht(t, i) {
      this.Yt = t, this.ei = i;
    }
  }, {
    key: "$t",
    value: function $t(t, i) {
      return this.Yt.Vt ? t.k + t.A + t.V : 0;
    }
  }, {
    key: "nt",
    value: function nt(t, i, s, n) {
      var _this5 = this;
      if (!this.Yt.Vt || 0 === this.Yt.ri.length) return;
      var e = this.Yt.R,
        r = this.ei.Z,
        h = t.useBitmapCoordinateSpace(function (t) {
          var h = t.context;
          h.font = i.P;
          var a = _this5.hi(t, i, s, n),
            l = a.ai;
          return a.li ? N(h, l.oi, l._i, l.ui, l.ci, r, l.di, [l.ft, 0, 0, l.ft], r) : N(h, l.fi, l._i, l.ui, l.ci, r, l.di, [0, l.ft, l.ft, 0], r), _this5.Yt.pi && (h.fillStyle = e, h.fillRect(l.fi, l.mi, l.wi - l.fi, l.gi)), _this5.Yt.Mi && (h.fillStyle = i.D, h.fillRect(a.li ? l.bi - l.di : 0, l._i, l.di, l.Si - l._i)), a;
        });
      t.useMediaCoordinateSpace(function (_ref3) {
        var t = _ref3.context;
        var s = h.xi;
        t.font = i.P, t.textAlign = h.li ? "right" : "left", t.textBaseline = "middle", t.fillStyle = e, t.fillText(_this5.Yt.ri, s.Ci, (s._i + s.Si) / 2 + s.yi);
      });
    }
  }, {
    key: "hi",
    value: function hi(t, i, s, n) {
      var _this$ei$Ii;
      var e = t.context,
        r = t.bitmapSize,
        h = t.mediaSize,
        a = t.horizontalPixelRatio,
        l = t.verticalPixelRatio,
        o = this.Yt.pi || !this.Yt.ki ? i.C : 0,
        _ = this.Yt.Pi ? i.S : 0,
        u = i.A + this.ei.Ti,
        c = i.V + this.ei.Ri,
        d = i.I,
        f = i.B,
        p = this.Yt.ri,
        v = i.k,
        m = s.Di(e, p),
        w = Math.ceil(s.Vi(e, p)),
        g = v + u + c,
        M = i.S + d + f + w + o,
        b = Math.max(1, Math.floor(l));
      var S = Math.round(g * l);
      S % 2 != b % 2 && (S += 1);
      var x = _ > 0 ? Math.max(1, Math.floor(_ * a)) : 0,
        C = Math.round(M * a),
        y = Math.round(o * a),
        k = (_this$ei$Ii = this.ei.Ii) !== null && _this$ei$Ii !== void 0 ? _this$ei$Ii : this.ei.Bi,
        P = Math.round(k * l) - Math.floor(.5 * l),
        T = Math.floor(P + b / 2 - S / 2),
        R = T + S,
        D = "right" === n,
        V = D ? h.width - _ : _,
        I = D ? r.width - x : x;
      var B, A, E;
      return D ? (B = I - C, A = I - y, E = V - o - d - _) : (B = I + C, A = I + y, E = V + o + d), {
        li: D,
        ai: {
          _i: T,
          mi: P,
          Si: R,
          ui: C,
          ci: S,
          ft: 2 * a,
          di: x,
          oi: B,
          fi: I,
          wi: A,
          gi: b,
          bi: r.width
        },
        xi: {
          _i: T / l,
          Si: R / l,
          Ci: E,
          yi: m
        }
      };
    }
  }]);
}();
var H = /*#__PURE__*/function () {
  function H(t) {
    _classCallCheck(this, H);
    this.Ai = {
      Bi: 0,
      Z: "#000",
      Ri: 0,
      Ti: 0
    }, this.Ei = {
      ri: "",
      Vt: false,
      pi: true,
      ki: false,
      Ht: "",
      R: "#FFF",
      Mi: false,
      Pi: false
    }, this.zi = {
      ri: "",
      Vt: false,
      pi: false,
      ki: true,
      Ht: "",
      R: "#FFF",
      Mi: true,
      Pi: true
    }, this.xt = true, this.Li = new (t || F)(this.Ei, this.Ai), this.Oi = new (t || F)(this.zi, this.Ai);
  }
  return _createClass(H, [{
    key: "ri",
    value: function ri() {
      return this.Ni(), this.Ei.ri;
    }
  }, {
    key: "Bi",
    value: function Bi() {
      return this.Ni(), this.Ai.Bi;
    }
  }, {
    key: "kt",
    value: function kt() {
      this.xt = true;
    }
  }, {
    key: "$t",
    value: function $t(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return Math.max(this.Li.$t(t, i), this.Oi.$t(t, i));
    }
  }, {
    key: "Wi",
    value: function Wi() {
      return this.Ai.Ii || 0;
    }
  }, {
    key: "Fi",
    value: function Fi(t) {
      this.Ai.Ii = t;
    }
  }, {
    key: "Hi",
    value: function Hi() {
      return this.Ni(), this.Ei.Vt || this.zi.Vt;
    }
  }, {
    key: "Ui",
    value: function Ui() {
      return this.Ni(), this.Ei.Vt;
    }
  }, {
    key: "Tt",
    value: function Tt(t) {
      return this.Ni(), this.Ei.pi = this.Ei.pi && t.N().ticksVisible, this.zi.pi = this.zi.pi && t.N().ticksVisible, this.Li.ht(this.Ei, this.Ai), this.Oi.ht(this.zi, this.Ai), this.Li;
    }
  }, {
    key: "$i",
    value: function $i() {
      return this.Ni(), this.Li.ht(this.Ei, this.Ai), this.Oi.ht(this.zi, this.Ai), this.Oi;
    }
  }, {
    key: "Ni",
    value: function Ni() {
      this.xt && (this.Ei.pi = true, this.zi.pi = false, this.qi(this.Ei, this.zi, this.Ai));
    }
  }]);
}();
var U = /*#__PURE__*/function (_H) {
  function U(t, i, s) {
    var _this6;
    _classCallCheck(this, U);
    _this6 = _callSuper(this, U), _this6.Jt = t, _this6.Yi = i, _this6.ji = s;
    return _this6;
  }
  _inherits(U, _H);
  return _createClass(U, [{
    key: "qi",
    value: function qi(t, i, s) {
      if (t.Vt = false, 2 === this.Jt.N().mode) return;
      var n = this.Jt.N().horzLine;
      if (!n.labelVisible) return;
      var e = this.Yi.zt();
      if (!this.Jt.Vt() || this.Yi.Ki() || null === e) return;
      var r = this.Yi.Xi().X(n.labelBackgroundColor);
      s.Z = r.Z, t.R = r.G;
      var h = 2 / 12 * this.Yi.k();
      s.Ti = h, s.Ri = h;
      var a = this.ji(this.Yi);
      s.Bi = a.Bi, t.ri = this.Yi.Zi(a.gt, e), t.Vt = true;
    }
  }]);
}(H);
var $ = /[1-9]/g;
var q = /*#__PURE__*/function () {
  function q() {
    _classCallCheck(this, q);
    this.Yt = null;
  }
  return _createClass(q, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "nt",
    value: function nt(t, i) {
      var _this7 = this;
      if (null === this.Yt || false === this.Yt.Vt || 0 === this.Yt.ri.length) return;
      var s = t.useMediaCoordinateSpace(function (_ref4) {
        var t = _ref4.context;
        return t.font = i.P, Math.round(i.Gi.Vi(t, u(_this7.Yt).ri, $));
      });
      if (s <= 0) return;
      var n = i.Ji,
        e = s + 2 * n,
        r = e / 2,
        h = this.Yt.Qi;
      var a = this.Yt.Bi,
        l = Math.floor(a - r) + .5;
      l < 0 ? (a += Math.abs(0 - l), l = Math.floor(a - r) + .5) : l + e > h && (a -= Math.abs(h - (l + e)), l = Math.floor(a - r) + .5);
      var o = l + e,
        _ = Math.ceil(0 + i.S + i.C + i.A + i.k + i.V);
      t.useBitmapCoordinateSpace(function (_ref5) {
        var t = _ref5.context,
          s = _ref5.horizontalPixelRatio,
          n = _ref5.verticalPixelRatio;
        var e = u(_this7.Yt);
        t.fillStyle = e.Z;
        var r = Math.round(l * s),
          h = Math.round(0 * n),
          a = Math.round(o * s),
          c = Math.round(_ * n),
          d = Math.round(2 * s);
        if (t.beginPath(), t.moveTo(r, h), t.lineTo(r, c - d), t.arcTo(r, c, r + d, c, d), t.lineTo(a - d, c), t.arcTo(a, c, a, c - d, d), t.lineTo(a, h), t.fill(), e.pi) {
          var _r2 = Math.round(e.Bi * s),
            _a2 = h,
            _l2 = Math.round((_a2 + i.C) * n);
          t.fillStyle = e.R;
          var _o2 = Math.max(1, Math.floor(s)),
            _3 = Math.floor(.5 * s);
          t.fillRect(_r2 - _3, _a2, _o2, _l2 - _a2);
        }
      }), t.useMediaCoordinateSpace(function (_ref6) {
        var t = _ref6.context;
        var s = u(_this7.Yt),
          e = 0 + i.S + i.C + i.A + i.k / 2;
        t.font = i.P, t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = s.R;
        var r = i.Gi.Di(t, "Apr0");
        t.translate(l + n, e + r), t.fillText(s.ri, 0, 0);
      });
    }
  }]);
}();
var Y = /*#__PURE__*/function () {
  function Y(t, i, s) {
    _classCallCheck(this, Y);
    this.xt = true, this.Gt = new q(), this.Zt = {
      Vt: false,
      Z: "#4c525e",
      R: "white",
      ri: "",
      Qi: 0,
      Bi: NaN,
      pi: true
    }, this.Ct = t, this.ts = i, this.ji = s;
  }
  return _createClass(Y, [{
    key: "kt",
    value: function kt() {
      this.xt = true;
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.xt && (this.Rt(), this.xt = false), this.Gt.ht(this.Zt), this.Gt;
    }
  }, {
    key: "Rt",
    value: function Rt() {
      var t = this.Zt;
      if (t.Vt = false, 2 === this.Ct.N().mode) return;
      var i = this.Ct.N().vertLine;
      if (!i.labelVisible) return;
      var s = this.ts.At();
      if (s.Ki()) return;
      t.Qi = s.Qi();
      var n = this.ji();
      if (null === n) return;
      t.Bi = n.Bi;
      var e = s.ss(this.Ct.Bt());
      t.ri = s.ns(u(e)), t.Vt = true;
      var r = this.ts.Xi().X(i.labelBackgroundColor);
      t.Z = r.Z, t.R = r.G, t.pi = s.N().ticksVisible;
    }
  }]);
}();
var j = /*#__PURE__*/function () {
  function j() {
    _classCallCheck(this, j);
    this.es = null, this.rs = 0;
  }
  return _createClass(j, [{
    key: "hs",
    value: function hs() {
      return this.rs;
    }
  }, {
    key: "ls",
    value: function ls(t) {
      this.rs = t;
    }
  }, {
    key: "Wt",
    value: function Wt() {
      return this.es;
    }
  }, {
    key: "_s",
    value: function _s(t) {
      this.es = t;
    }
  }, {
    key: "us",
    value: function us(t) {
      return [];
    }
  }, {
    key: "cs",
    value: function cs() {
      return [];
    }
  }, {
    key: "Vt",
    value: function Vt() {
      return true;
    }
  }]);
}();
var K;
!function (t) {
  t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet", t[t.Hidden = 2] = "Hidden", t[t.MagnetOHLC = 3] = "MagnetOHLC";
}(K || (K = {}));
var X = /*#__PURE__*/function (_j) {
  function X(t, i) {
    var _this8;
    _classCallCheck(this, X);
    _this8 = _callSuper(this, X), _this8.yt = null, _this8.ds = NaN, _this8.fs = 0, _this8.ps = false, _this8.vs = new Map(), _this8.ws = false, _this8.gs = new WeakMap(), _this8.Ms = new WeakMap(), _this8.bs = NaN, _this8.Ss = NaN, _this8.xs = NaN, _this8.Cs = NaN, _this8.ts = t, _this8.ys = i;
    _this8.ks = function (t, i) {
      return function (s) {
        var n = i(),
          e = t();
        if (s === u(_this8.yt).Ps()) return {
          gt: e,
          Bi: n
        };
        {
          var _t2 = u(s.zt());
          return {
            gt: s.Ts(n, _t2),
            Bi: n
          };
        }
      };
    }(function () {
      return _this8.ds;
    }, function () {
      return _this8.Ss;
    });
    var s = function (t, i) {
      return function () {
        var s = _this8.ts.At().Rs(t()),
          n = i();
        return s && Number.isFinite(n) ? {
          wt: s,
          Bi: n
        } : null;
      };
    }(function () {
      return _this8.fs;
    }, function () {
      return _this8.si();
    });
    _this8.Ds = new Y(_this8, t, s);
    return _this8;
  }
  _inherits(X, _j);
  return _createClass(X, [{
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "Vs",
    value: function Vs(t, i) {
      this.xs = t, this.Cs = i;
    }
  }, {
    key: "Is",
    value: function Is() {
      this.xs = NaN, this.Cs = NaN;
    }
  }, {
    key: "Bs",
    value: function Bs() {
      return this.xs;
    }
  }, {
    key: "As",
    value: function As() {
      return this.Cs;
    }
  }, {
    key: "Es",
    value: function Es(t, i, s) {
      this.ws || (this.ws = true), this.ps = true, this.zs(t, i, s);
    }
  }, {
    key: "Bt",
    value: function Bt() {
      return this.fs;
    }
  }, {
    key: "si",
    value: function si() {
      return this.bs;
    }
  }, {
    key: "ni",
    value: function ni() {
      return this.Ss;
    }
  }, {
    key: "Vt",
    value: function Vt() {
      return this.ps;
    }
  }, {
    key: "Ls",
    value: function Ls() {
      this.ps = false, this.Os(), this.ds = NaN, this.bs = NaN, this.Ss = NaN, this.yt = null, this.Is(), this.Ns();
    }
  }, {
    key: "Ws",
    value: function Ws(t) {
      var i = this.gs.get(t);
      i || (i = new E(this, t), this.gs.set(t, i));
      var s = this.Ms.get(t);
      return s || (s = new B(this.ts, this, t), this.Ms.set(t, s)), [i, s];
    }
  }, {
    key: "ti",
    value: function ti(t) {
      return t === this.yt && this.ys.horzLine.visible;
    }
  }, {
    key: "ii",
    value: function ii() {
      return this.ys.vertLine.visible;
    }
  }, {
    key: "Fs",
    value: function Fs(t, i) {
      this.ps && this.yt === t || this.vs.clear();
      var s = [];
      return this.yt === t && s.push(this.Hs(this.vs, i, this.ks)), s;
    }
  }, {
    key: "cs",
    value: function cs() {
      return this.ps ? [this.Ds] : [];
    }
  }, {
    key: "Us",
    value: function Us() {
      return this.yt;
    }
  }, {
    key: "Ns",
    value: function Ns() {
      var _this9 = this;
      this.ts.$s().forEach(function (t) {
        var _this9$gs$get, _this9$Ms$get;
        (_this9$gs$get = _this9.gs.get(t)) !== null && _this9$gs$get !== void 0 && _this9$gs$get.kt(), (_this9$Ms$get = _this9.Ms.get(t)) === null || _this9$Ms$get === void 0 ? void 0 : _this9$Ms$get.kt();
      }), this.vs.forEach(function (t) {
        return t.kt();
      }), this.Ds.kt();
    }
  }, {
    key: "qs",
    value: function qs(t) {
      return t && !t.Ps().Ki() ? t.Ps() : null;
    }
  }, {
    key: "zs",
    value: function zs(t, i, s) {
      this.Ys(t, i, s) && this.Ns();
    }
  }, {
    key: "Ys",
    value: function Ys(t, i, s) {
      var n = this.bs,
        e = this.Ss,
        r = this.ds,
        h = this.fs,
        a = this.yt,
        l = this.qs(s);
      this.fs = t, this.bs = isNaN(t) ? NaN : this.ts.At().qt(t), this.yt = s;
      var o = null !== l ? l.zt() : null;
      return null !== l && null !== o ? (this.ds = i, this.Ss = l.Nt(i, o)) : (this.ds = NaN, this.Ss = NaN), n !== this.bs || e !== this.Ss || h !== this.fs || r !== this.ds || a !== this.yt;
    }
  }, {
    key: "Os",
    value: function Os() {
      var t = this.ts.js().map(function (t) {
          return t.Xs().Ks();
        }).filter(M),
        i = 0 === t.length ? null : Math.max.apply(Math, _toConsumableArray(t));
      this.fs = null !== i ? i : NaN;
    }
  }, {
    key: "Hs",
    value: function Hs(t, i, s) {
      var n = t.get(i);
      return void 0 === n && (n = new U(this, i, s), t.set(i, n)), n;
    }
  }]);
}(j);
function Z(t) {
  return "left" === t || "right" === t;
}
var G = /*#__PURE__*/function () {
  function G(t) {
    _classCallCheck(this, G);
    this.Zs = new Map(), this.Gs = [], this.Js = t;
  }
  return _createClass(G, [{
    key: "Qs",
    value: function Qs(t, i) {
      var s = function (t, i) {
        return void 0 === t ? i : {
          tn: Math.max(t.tn, i.tn),
          sn: t.sn || i.sn
        };
      }(this.Zs.get(t), i);
      this.Zs.set(t, s);
    }
  }, {
    key: "nn",
    value: function nn() {
      return this.Js;
    }
  }, {
    key: "en",
    value: function en(t) {
      var i = this.Zs.get(t);
      return void 0 === i ? {
        tn: this.Js
      } : {
        tn: Math.max(this.Js, i.tn),
        sn: i.sn
      };
    }
  }, {
    key: "rn",
    value: function rn() {
      this.hn(), this.Gs = [{
        an: 0
      }];
    }
  }, {
    key: "ln",
    value: function ln(t) {
      this.hn(), this.Gs = [{
        an: 1,
        Ft: t
      }];
    }
  }, {
    key: "_n",
    value: function _n(t) {
      this.un(), this.Gs.push({
        an: 5,
        Ft: t
      });
    }
  }, {
    key: "hn",
    value: function hn() {
      this.un(), this.Gs.push({
        an: 6
      });
    }
  }, {
    key: "cn",
    value: function cn() {
      this.hn(), this.Gs = [{
        an: 4
      }];
    }
  }, {
    key: "dn",
    value: function dn(t) {
      this.hn(), this.Gs.push({
        an: 2,
        Ft: t
      });
    }
  }, {
    key: "fn",
    value: function fn(t) {
      this.hn(), this.Gs.push({
        an: 3,
        Ft: t
      });
    }
  }, {
    key: "pn",
    value: function pn() {
      return this.Gs;
    }
  }, {
    key: "vn",
    value: function vn(t) {
      var _this0 = this;
      var _iterator2 = _createForOfIteratorHelper(t.Gs),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _i7 = _step2.value;
          this.mn(_i7);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.Js = Math.max(this.Js, t.Js), t.Zs.forEach(function (t, i) {
        _this0.Qs(i, t);
      });
    }
  }, {
    key: "mn",
    value: function mn(t) {
      switch (t.an) {
        case 0:
          this.rn();
          break;
        case 1:
          this.ln(t.Ft);
          break;
        case 2:
          this.dn(t.Ft);
          break;
        case 3:
          this.fn(t.Ft);
          break;
        case 4:
          this.cn();
          break;
        case 5:
          this._n(t.Ft);
          break;
        case 6:
          this.un();
      }
    }
  }, {
    key: "un",
    value: function un() {
      var t = this.Gs.findIndex(function (t) {
        return 5 === t.an;
      });
      -1 !== t && this.Gs.splice(t, 1);
    }
  }], [{
    key: "wn",
    value: function wn() {
      return new G(2);
    }
  }, {
    key: "gn",
    value: function gn() {
      return new G(3);
    }
  }]);
}();
var J = ".";
function Q(t, i) {
  if (!p(t)) return "n/a";
  if (!v(i)) throw new TypeError("invalid length");
  if (i < 0 || i > 16) throw new TypeError("invalid length");
  if (0 === i) return t.toString();
  return ("0000000000000000" + t.toString()).slice(-i);
}
var tt = /*#__PURE__*/function () {
  function tt(t, i) {
    _classCallCheck(this, tt);
    if (i || (i = 1), p(t) && v(t) || (t = 100), t < 0) throw new TypeError("invalid base");
    this.Yi = t, this.Mn = i, this.bn();
  }
  return _createClass(tt, [{
    key: "format",
    value: function format(t) {
      var i = t < 0 ? "−" : "";
      return t = Math.abs(t), i + this.Sn(t);
    }
  }, {
    key: "bn",
    value: function bn() {
      if (this.xn = 0, this.Yi > 0 && this.Mn > 0) {
        var _t3 = this.Yi;
        for (; _t3 > 1;) _t3 /= 10, this.xn++;
      }
    }
  }, {
    key: "Sn",
    value: function Sn(t) {
      var i = this.Yi / this.Mn;
      var s = Math.floor(t),
        n = "";
      var e = void 0 !== this.xn ? this.xn : NaN;
      if (i > 1) {
        var _r3 = +(Math.round(t * i) - s * i).toFixed(this.xn);
        _r3 >= i && (_r3 -= i, s += 1), n = J + Q(+_r3.toFixed(this.xn) * this.Mn, e);
      } else s = Math.round(s * i) / i, e > 0 && (n = J + Q(0, e));
      return s.toFixed(0) + n;
    }
  }]);
}();
var it = /*#__PURE__*/function (_tt) {
  function it() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    _classCallCheck(this, it);
    return _callSuper(this, it, [t]);
  }
  _inherits(it, _tt);
  return _createClass(it, [{
    key: "format",
    value: function format(t) {
      return "".concat(_superPropGet(it, "format", this, 3)([t]), "%");
    }
  }]);
}(tt);
var st = /*#__PURE__*/function () {
  function st(t) {
    _classCallCheck(this, st);
    this.Cn = t;
  }
  return _createClass(st, [{
    key: "format",
    value: function format(t) {
      var i = "";
      return t < 0 && (i = "-", t = -t), t < 995 ? i + this.yn(t) : t < 999995 ? i + this.yn(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.yn(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.yn(t / 1e9) + "B");
    }
  }, {
    key: "yn",
    value: function yn(t) {
      var i;
      var s = Math.pow(10, this.Cn);
      return i = (t = Math.round(t * s) / s) >= 1e-15 && t < 1 ? t.toFixed(this.Cn).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, function (t, i) {
        return i;
      });
    }
  }]);
}();
var nt = /[2-9]/g;
var et = /*#__PURE__*/function () {
  function et() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
    _classCallCheck(this, et);
    this.kn = 0, this.Pn = 1, this.Tn = 1, this.Rn = {}, this.Dn = new Map(), this.Vn = t;
  }
  return _createClass(et, [{
    key: "In",
    value: function In() {
      this.kn = 0, this.Dn.clear(), this.Pn = 1, this.Tn = 1, this.Rn = {};
    }
  }, {
    key: "Vi",
    value: function Vi(t, i, s) {
      return this.Bn(t, i, s).width;
    }
  }, {
    key: "Di",
    value: function Di(t, i, s) {
      var n = this.Bn(t, i, s);
      return ((n.actualBoundingBoxAscent || 0) - (n.actualBoundingBoxDescent || 0)) / 2;
    }
  }, {
    key: "Bn",
    value: function Bn(t, i, s) {
      var n = s || nt,
        e = String(i).replace(n, "0");
      if (this.Dn.has(e)) return _(this.Dn.get(e)).An;
      if (this.kn === this.Vn) {
        var _t4 = this.Rn[this.Tn];
        delete this.Rn[this.Tn], this.Dn["delete"](_t4), this.Tn++, this.kn--;
      }
      t.save(), t.textBaseline = "middle";
      var r = t.measureText(e);
      return t.restore(), 0 === r.width && i.length || (this.Dn.set(e, {
        An: r,
        En: this.Pn
      }), this.Rn[this.Pn] = e, this.kn++, this.Pn++), r;
    }
  }]);
}();
var rt = /*#__PURE__*/function () {
  function rt(t) {
    _classCallCheck(this, rt);
    this.zn = null, this.M = null, this.Ln = "right", this.On = t;
  }
  return _createClass(rt, [{
    key: "Nn",
    value: function Nn(t, i, s) {
      this.zn = t, this.M = i, this.Ln = s;
    }
  }, {
    key: "nt",
    value: function nt(t) {
      null !== this.M && null !== this.zn && this.zn.nt(t, this.M, this.On, this.Ln);
    }
  }]);
}();
var ht = /*#__PURE__*/function () {
  function ht(t, i, s) {
    _classCallCheck(this, ht);
    this.Wn = t, this.On = new et(50), this.Fn = i, this.O = s, this.W = -1, this.Gt = new rt(this.On);
  }
  return _createClass(ht, [{
    key: "Tt",
    value: function Tt() {
      var t = this.O.Hn(this.Fn);
      if (null === t) return null;
      var i = t.Un(this.Fn) ? t.$n() : this.Fn.Wt();
      if (null === i) return null;
      var s = t.qn(i);
      if ("overlay" === s) return null;
      var n = this.O.Yn();
      return n.k !== this.W && (this.W = n.k, this.On.In()), this.Gt.Nn(this.Wn.$i(), n, s), this.Gt;
    }
  }]);
}();
var at = /*#__PURE__*/function (_R3) {
  function at() {
    var _this1;
    _classCallCheck(this, at);
    _this1 = _callSuper(this, at, arguments), _this1.Yt = null;
    return _this1;
  }
  _inherits(at, _R3);
  return _createClass(at, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "jn",
    value: function jn(t, i) {
      var _this$Yt;
      if (!((_this$Yt = this.Yt) !== null && _this$Yt !== void 0 && _this$Yt.Vt)) return null;
      var _this$Yt2 = this.Yt,
        s = _this$Yt2.ut,
        n = _this$Yt2.ct,
        e = _this$Yt2.Kn;
      return i >= s - n - 7 && i <= s + n + 7 ? {
        Xn: this.Yt,
        Kn: e
      } : null;
    }
  }, {
    key: "et",
    value: function et(_ref7) {
      var t = _ref7.context,
        i = _ref7.bitmapSize,
        s = _ref7.horizontalPixelRatio,
        n = _ref7.verticalPixelRatio;
      if (null === this.Yt) return;
      if (false === this.Yt.Vt) return;
      var e = Math.round(this.Yt.ut * n);
      e < 0 || e > i.height || (t.lineCap = "butt", t.strokeStyle = this.Yt.R, t.lineWidth = Math.floor(this.Yt.ct * s), a(t, this.Yt.Xt), l(t, e, 0, i.width));
    }
  }]);
}(R);
var lt = /*#__PURE__*/function () {
  function lt(t) {
    _classCallCheck(this, lt);
    this.Zn = {
      ut: 0,
      R: "rgba(0, 0, 0, 0)",
      ct: 1,
      Xt: 0,
      Vt: false
    }, this.Gn = new at(), this.xt = true, this.Jn = t, this.Qn = t.Qt(), this.Gn.ht(this.Zn);
  }
  return _createClass(lt, [{
    key: "kt",
    value: function kt() {
      this.xt = true;
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.Jn.Vt() ? (this.xt && (this.te(), this.xt = false), this.Gn) : null;
    }
  }]);
}();
var ot = /*#__PURE__*/function (_lt) {
  function ot(t) {
    _classCallCheck(this, ot);
    return _callSuper(this, ot, [t]);
  }
  _inherits(ot, _lt);
  return _createClass(ot, [{
    key: "te",
    value: function te() {
      this.Zn.Vt = false;
      var t = this.Jn.Wt(),
        i = t.ie().ie;
      if (2 !== i && 3 !== i) return;
      var s = this.Jn.N();
      if (!s.baseLineVisible || !this.Jn.Vt()) return;
      var n = this.Jn.zt();
      null !== n && (this.Zn.Vt = true, this.Zn.ut = t.Nt(n.Ft, n.Ft), this.Zn.R = s.baseLineColor, this.Zn.ct = s.baseLineWidth, this.Zn.Xt = s.baseLineStyle);
    }
  }]);
}(lt);
var _t = /*#__PURE__*/function (_R4) {
  function _t() {
    var _this10;
    _classCallCheck(this, _t);
    _this10 = _callSuper(this, _t, arguments), _this10.Yt = null;
    return _this10;
  }
  _inherits(_t, _R4);
  return _createClass(_t, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "se",
    value: function se() {
      return this.Yt;
    }
  }, {
    key: "et",
    value: function et(_ref8) {
      var t = _ref8.context,
        i = _ref8.horizontalPixelRatio,
        s = _ref8.verticalPixelRatio;
      var n = this.Yt;
      if (null === n) return;
      var e = Math.max(1, Math.floor(i)),
        r = e % 2 / 2,
        h = Math.round(n.ne.x * i) + r,
        a = n.ne.y * s;
      t.fillStyle = n.ee, t.beginPath();
      var l = Math.max(2, 1.5 * n.re) * i;
      t.arc(h, a, l, 0, 2 * Math.PI, false), t.fill(), t.fillStyle = n.he, t.beginPath(), t.arc(h, a, n.ft * i, 0, 2 * Math.PI, false), t.fill(), t.lineWidth = e, t.strokeStyle = n.ae, t.beginPath(), t.arc(h, a, n.ft * i + e / 2, 0, 2 * Math.PI, false), t.stroke();
    }
  }]);
}(R);
var ut = [{
  le: 0,
  oe: .25,
  _e: 4,
  ue: 10,
  ce: .25,
  de: 0,
  fe: .4,
  pe: .8
}, {
  le: .25,
  oe: .525,
  _e: 10,
  ue: 14,
  ce: 0,
  de: 0,
  fe: .8,
  pe: 0
}, {
  le: .525,
  oe: 1,
  _e: 14,
  ue: 14,
  ce: 0,
  de: 0,
  fe: 0,
  pe: 0
}];
var ct = /*#__PURE__*/function () {
  function ct(t) {
    _classCallCheck(this, ct);
    this.Gt = new _t(), this.xt = true, this.ve = true, this.me = performance.now(), this.we = this.me - 1, this.ge = t;
  }
  return _createClass(ct, [{
    key: "Me",
    value: function Me() {
      this.we = this.me - 1, this.kt();
    }
  }, {
    key: "be",
    value: function be() {
      if (this.kt(), 2 === this.ge.N().lastPriceAnimation) {
        var _t5 = performance.now(),
          _i8 = this.we - _t5;
        if (_i8 > 0) return void (_i8 < 650 && (this.we += 2600));
        this.me = _t5, this.we = _t5 + 2600;
      }
    }
  }, {
    key: "kt",
    value: function kt() {
      this.xt = true;
    }
  }, {
    key: "Se",
    value: function Se() {
      this.ve = true;
    }
  }, {
    key: "Vt",
    value: function Vt() {
      return 0 !== this.ge.N().lastPriceAnimation;
    }
  }, {
    key: "xe",
    value: function xe() {
      switch (this.ge.N().lastPriceAnimation) {
        case 0:
          return false;
        case 1:
          return true;
        case 2:
          return performance.now() <= this.we;
      }
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.xt ? (this.Rt(), this.xt = false, this.ve = false) : this.ve && (this.Ce(), this.ve = false), this.Gt;
    }
  }, {
    key: "Rt",
    value: function Rt() {
      this.Gt.ht(null);
      var t = this.ge.Qt().At(),
        i = t.ye(),
        s = this.ge.zt();
      if (null === i || null === s) return;
      var n = this.ge.ke(true);
      if (n.Pe || !i.Te(n.Re)) return;
      var e = {
          x: t.qt(n.Re),
          y: this.ge.Wt().Nt(n.gt, s.Ft)
        },
        r = n.R,
        h = this.ge.N().lineWidth,
        a = this.De(this.Ve(), r);
      this.Gt.ht({
        ee: r,
        re: h,
        he: a.he,
        ae: a.ae,
        ft: a.ft,
        ne: e
      });
    }
  }, {
    key: "Ce",
    value: function Ce() {
      var t = this.Gt.se();
      if (null !== t) {
        var _i9 = this.De(this.Ve(), t.ee);
        t.he = _i9.he, t.ae = _i9.ae, t.ft = _i9.ft;
      }
    }
  }, {
    key: "Ve",
    value: function Ve() {
      return this.xe() ? performance.now() - this.me : 2599;
    }
  }, {
    key: "Ie",
    value: function Ie(t, i, s, n) {
      var e = s + (n - s) * i;
      return this.ge.Qt().Xi().j(t, e);
    }
  }, {
    key: "De",
    value: function De(t, i) {
      var s = t % 2600 / 2600;
      var n;
      for (var _i0 = 0, _ut = ut; _i0 < _ut.length; _i0++) {
        var _t6 = _ut[_i0];
        if (s >= _t6.le && s <= _t6.oe) {
          n = _t6;
          break;
        }
      }
      o(void 0 !== n, "Last price animation internal logic error");
      var e = (s - n.le) / (n.oe - n.le);
      return {
        he: this.Ie(i, e, n.ce, n.de),
        ae: this.Ie(i, e, n.fe, n.pe),
        ft: (r = e, h = n._e, a = n.ue, h + (a - h) * r)
      };
      var r, h, a;
    }
  }]);
}();
var dt = /*#__PURE__*/function (_lt2) {
  function dt(t) {
    _classCallCheck(this, dt);
    return _callSuper(this, dt, [t]);
  }
  _inherits(dt, _lt2);
  return _createClass(dt, [{
    key: "te",
    value: function te() {
      var t = this.Zn;
      t.Vt = false;
      var i = this.Jn.N();
      if (!i.priceLineVisible || !this.Jn.Vt()) return;
      var s = this.Jn.ke(0 === i.priceLineSource);
      s.Pe || (t.Vt = true, t.ut = s.Bi, t.R = this.Jn.Be(s.R), t.ct = i.priceLineWidth, t.Xt = i.priceLineStyle);
    }
  }]);
}(lt);
var ft = /*#__PURE__*/function (_H2) {
  function ft(t) {
    var _this11;
    _classCallCheck(this, ft);
    _this11 = _callSuper(this, ft), _this11.Jt = t;
    return _this11;
  }
  _inherits(ft, _H2);
  return _createClass(ft, [{
    key: "qi",
    value: function qi(t, i, s) {
      t.Vt = false, i.Vt = false;
      var n = this.Jt;
      if (!n.Vt()) return;
      var e = n.N(),
        r = e.lastValueVisible,
        h = "" !== n.Ae(),
        a = 0 === e.seriesLastValueMode,
        l = n.ke(false);
      if (l.Pe) return;
      r && (t.ri = this.Ee(l, r, a), t.Vt = 0 !== t.ri.length), (h || a) && (i.ri = this.ze(l, r, h, a), i.Vt = i.ri.length > 0);
      var o = n.Be(l.R),
        _ = this.Jt.Qt().Xi().X(o);
      s.Z = _.Z, s.Bi = l.Bi, i.Ht = n.Qt().Ut(l.Bi / n.Wt().$t()), t.Ht = o, t.R = _.G, i.R = _.G;
    }
  }, {
    key: "ze",
    value: function ze(t, i, s, n) {
      var e = "";
      var r = this.Jt.Ae();
      return s && 0 !== r.length && (e += "".concat(r, " ")), i && n && (e += this.Jt.Wt().Le() ? t.Oe : t.Ne), e.trim();
    }
  }, {
    key: "Ee",
    value: function Ee(t, i, s) {
      return i ? s ? this.Jt.Wt().Le() ? t.Ne : t.Oe : t.ri : "";
    }
  }]);
}(H);
function pt(t, i, s, n) {
  var e = Number.isFinite(i),
    r = Number.isFinite(s);
  return e && r ? t(i, s) : e || r ? e ? i : s : n;
}
var vt = /*#__PURE__*/function () {
  function vt(t, i) {
    _classCallCheck(this, vt);
    this.We = t, this.Fe = i;
  }
  return _createClass(vt, [{
    key: "He",
    value: function He(t) {
      return null !== t && this.We === t.We && this.Fe === t.Fe;
    }
  }, {
    key: "Ue",
    value: function Ue() {
      return new vt(this.We, this.Fe);
    }
  }, {
    key: "$e",
    value: function $e() {
      return this.We;
    }
  }, {
    key: "qe",
    value: function qe() {
      return this.Fe;
    }
  }, {
    key: "Ye",
    value: function Ye() {
      return this.Fe - this.We;
    }
  }, {
    key: "Ki",
    value: function Ki() {
      return this.Fe === this.We || Number.isNaN(this.Fe) || Number.isNaN(this.We);
    }
  }, {
    key: "vn",
    value: function vn(t) {
      return null === t ? this : new vt(pt(Math.min, this.$e(), t.$e(), -1 / 0), pt(Math.max, this.qe(), t.qe(), 1 / 0));
    }
  }, {
    key: "je",
    value: function je(t) {
      if (!p(t)) return;
      if (0 === this.Fe - this.We) return;
      var i = .5 * (this.Fe + this.We);
      var s = this.Fe - i,
        n = this.We - i;
      s *= t, n *= t, this.Fe = i + s, this.We = i + n;
    }
  }, {
    key: "Ke",
    value: function Ke(t) {
      p(t) && (this.Fe += t, this.We += t);
    }
  }, {
    key: "Xe",
    value: function Xe() {
      return {
        minValue: this.We,
        maxValue: this.Fe
      };
    }
  }], [{
    key: "Ze",
    value: function Ze(t) {
      return null === t ? null : new vt(t.minValue, t.maxValue);
    }
  }]);
}();
var mt = /*#__PURE__*/function () {
  function mt(t, i) {
    _classCallCheck(this, mt);
    this.Ge = t, this.Je = i || null;
  }
  return _createClass(mt, [{
    key: "Qe",
    value: function Qe() {
      return this.Ge;
    }
  }, {
    key: "tr",
    value: function tr() {
      return this.Je;
    }
  }, {
    key: "Xe",
    value: function Xe() {
      return {
        priceRange: null === this.Ge ? null : this.Ge.Xe(),
        margins: this.Je || void 0
      };
    }
  }], [{
    key: "Ze",
    value: function Ze(t) {
      return null === t ? null : new mt(vt.Ze(t.priceRange), t.margins);
    }
  }]);
}();
var wt = /*#__PURE__*/function (_lt3) {
  function wt(t, i) {
    var _this12;
    _classCallCheck(this, wt);
    _this12 = _callSuper(this, wt, [t]), _this12.ir = i;
    return _this12;
  }
  _inherits(wt, _lt3);
  return _createClass(wt, [{
    key: "te",
    value: function te() {
      var t = this.Zn;
      t.Vt = false;
      var i = this.ir.N();
      if (!this.Jn.Vt() || !i.lineVisible) return;
      var s = this.ir.sr();
      null !== s && (t.Vt = true, t.ut = s, t.R = i.color, t.ct = i.lineWidth, t.Xt = i.lineStyle, t.Kn = this.ir.N().id);
    }
  }]);
}(lt);
var gt = /*#__PURE__*/function (_H3) {
  function gt(t, i) {
    var _this13;
    _classCallCheck(this, gt);
    _this13 = _callSuper(this, gt), _this13.ge = t, _this13.ir = i;
    return _this13;
  }
  _inherits(gt, _H3);
  return _createClass(gt, [{
    key: "qi",
    value: function qi(t, i, s) {
      t.Vt = false, i.Vt = false;
      var n = this.ir.N(),
        e = n.axisLabelVisible,
        r = "" !== n.title,
        h = this.ge;
      if (!e || !h.Vt()) return;
      var a = this.ir.sr();
      if (null === a) return;
      r && (i.ri = n.title, i.Vt = true), i.Ht = h.Qt().Ut(a / h.Wt().$t()), t.ri = this.nr(n.price), t.Vt = true;
      var l = this.ge.Qt().Xi().X(n.axisLabelColor || n.color);
      s.Z = l.Z;
      var o = n.axisLabelTextColor || l.G;
      t.R = o, i.R = o, s.Bi = a;
    }
  }, {
    key: "nr",
    value: function nr(t) {
      var i = this.ge.zt();
      return null === i ? "" : this.ge.Wt().Zi(t, i.Ft);
    }
  }]);
}(H);
var Mt = /*#__PURE__*/function () {
  function Mt(t, i) {
    _classCallCheck(this, Mt);
    this.ge = t, this.ys = i, this.er = new wt(t, this), this.Wn = new gt(t, this), this.rr = new ht(this.Wn, t, t.Qt());
  }
  return _createClass(Mt, [{
    key: "hr",
    value: function hr(t) {
      f(this.ys, t), this.kt(), this.ge.Qt().ar();
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "lr",
    value: function lr() {
      return this.er;
    }
  }, {
    key: "_r",
    value: function _r() {
      return this.rr;
    }
  }, {
    key: "ur",
    value: function ur() {
      return this.Wn;
    }
  }, {
    key: "kt",
    value: function kt() {
      this.er.kt(), this.Wn.kt();
    }
  }, {
    key: "sr",
    value: function sr() {
      var t = this.ge,
        i = t.Wt();
      if (t.Qt().At().Ki() || i.Ki()) return null;
      var s = t.zt();
      return null === s ? null : i.Nt(this.ys.price, s.Ft);
    }
  }]);
}();
var bt = /*#__PURE__*/function (_j2) {
  function bt(t) {
    var _this14;
    _classCallCheck(this, bt);
    _this14 = _callSuper(this, bt), _this14.ts = t;
    return _this14;
  }
  _inherits(bt, _j2);
  return _createClass(bt, [{
    key: "Qt",
    value: function Qt() {
      return this.ts;
    }
  }]);
}(j);
var St = {
  Bar: function Bar(t, i, s, n) {
    var _h$R;
    var e = i.upColor,
      r = i.downColor,
      h = u(t(s, n)),
      a = c(h.Ft[0]) <= c(h.Ft[3]);
    return {
      cr: (_h$R = h.R) !== null && _h$R !== void 0 ? _h$R : a ? e : r
    };
  },
  Candlestick: function Candlestick(t, i, s, n) {
    var _$R, _$Ht, _$vr;
    var e = i.upColor,
      r = i.downColor,
      h = i.borderUpColor,
      a = i.borderDownColor,
      l = i.wickUpColor,
      o = i.wickDownColor,
      _ = u(t(s, n)),
      d = c(_.Ft[0]) <= c(_.Ft[3]);
    return {
      cr: (_$R = _.R) !== null && _$R !== void 0 ? _$R : d ? e : r,
      dr: (_$Ht = _.Ht) !== null && _$Ht !== void 0 ? _$Ht : d ? h : a,
      pr: (_$vr = _.vr) !== null && _$vr !== void 0 ? _$vr : d ? l : o
    };
  },
  Custom: function Custom(t, i, s, n) {
    var _u$R;
    return {
      cr: (_u$R = u(t(s, n)).R) !== null && _u$R !== void 0 ? _u$R : i.color
    };
  },
  Area: function Area(t, i, s, n) {
    var _e$vt, _e$vt2, _e$mr, _e$wr;
    var e = u(t(s, n));
    return {
      cr: (_e$vt = e.vt) !== null && _e$vt !== void 0 ? _e$vt : i.lineColor,
      vt: (_e$vt2 = e.vt) !== null && _e$vt2 !== void 0 ? _e$vt2 : i.lineColor,
      mr: (_e$mr = e.mr) !== null && _e$mr !== void 0 ? _e$mr : i.topColor,
      wr: (_e$wr = e.wr) !== null && _e$wr !== void 0 ? _e$wr : i.bottomColor
    };
  },
  Baseline: function Baseline(t, i, s, n) {
    var _e$gr, _e$Mr, _e$br, _e$Sr, _e$Cr, _e$yr;
    var e = u(t(s, n));
    return {
      cr: e.Ft[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
      gr: (_e$gr = e.gr) !== null && _e$gr !== void 0 ? _e$gr : i.topLineColor,
      Mr: (_e$Mr = e.Mr) !== null && _e$Mr !== void 0 ? _e$Mr : i.bottomLineColor,
      br: (_e$br = e.br) !== null && _e$br !== void 0 ? _e$br : i.topFillColor1,
      Sr: (_e$Sr = e.Sr) !== null && _e$Sr !== void 0 ? _e$Sr : i.topFillColor2,
      Cr: (_e$Cr = e.Cr) !== null && _e$Cr !== void 0 ? _e$Cr : i.bottomFillColor1,
      yr: (_e$yr = e.yr) !== null && _e$yr !== void 0 ? _e$yr : i.bottomFillColor2
    };
  },
  Line: function Line(t, i, s, n) {
    var _e$R, _e$R2;
    var e = u(t(s, n));
    return {
      cr: (_e$R = e.R) !== null && _e$R !== void 0 ? _e$R : i.color,
      vt: (_e$R2 = e.R) !== null && _e$R2 !== void 0 ? _e$R2 : i.color
    };
  },
  Histogram: function Histogram(t, i, s, n) {
    var _u$R2;
    return {
      cr: (_u$R2 = u(t(s, n)).R) !== null && _u$R2 !== void 0 ? _u$R2 : i.color
    };
  }
};
var xt = /*#__PURE__*/function () {
  function xt(t) {
    var _this15 = this;
    _classCallCheck(this, xt);
    this.kr = function (t, i) {
      return void 0 !== i ? i.Ft : _this15.ge.Xs().Pr(t);
    }, this.ge = t, this.Tr = St[t.Rr()];
  }
  return _createClass(xt, [{
    key: "Dr",
    value: function Dr(t, i) {
      return this.Tr(this.kr, this.ge.N(), t, i);
    }
  }]);
}();
function Ct(t, i, s, n) {
  var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : i.length;
  var h = r - e;
  for (; 0 < h;) {
    var _r4 = h >> 1,
      _a3 = e + _r4;
    n(i[_a3], s) === t ? (e = _a3 + 1, h -= _r4 + 1) : h = _r4;
  }
  return e;
}
var yt = Ct.bind(null, true),
  kt = Ct.bind(null, false);
var Pt;
!function (t) {
  t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight";
}(Pt || (Pt = {}));
var Tt = 30;
var Rt = /*#__PURE__*/function () {
  function Rt() {
    _classCallCheck(this, Rt);
    this.Vr = [], this.Ir = new Map(), this.Br = new Map(), this.Ar = [];
  }
  return _createClass(Rt, [{
    key: "Er",
    value: function Er() {
      return this.zr() > 0 ? this.Vr[this.Vr.length - 1] : null;
    }
  }, {
    key: "Lr",
    value: function Lr() {
      return this.zr() > 0 ? this.Or(0) : null;
    }
  }, {
    key: "Ks",
    value: function Ks() {
      return this.zr() > 0 ? this.Or(this.Vr.length - 1) : null;
    }
  }, {
    key: "zr",
    value: function zr() {
      return this.Vr.length;
    }
  }, {
    key: "Ki",
    value: function Ki() {
      return 0 === this.zr();
    }
  }, {
    key: "Te",
    value: function Te(t) {
      return null !== this.Nr(t, 0);
    }
  }, {
    key: "Pr",
    value: function Pr(t) {
      return this.Wr(t);
    }
  }, {
    key: "Wr",
    value: function Wr(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var s = this.Nr(t, i);
      return null === s ? null : _objectSpread2(_objectSpread2({}, this.Fr(s)), {}, {
        Re: this.Or(s)
      });
    }
  }, {
    key: "Hr",
    value: function Hr() {
      return this.Vr;
    }
  }, {
    key: "Ur",
    value: function Ur(t, i, s) {
      if (this.Ki()) return null;
      var n = null;
      var _iterator3 = _createForOfIteratorHelper(s),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _e2 = _step3.value;
          n = Dt(n, this.$r(t, i, _e2));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return n;
    }
  }, {
    key: "ht",
    value: function ht(t) {
      this.Br.clear(), this.Ir.clear(), this.Vr = t, this.Ar = t.map(function (t) {
        return t.Re;
      });
    }
  }, {
    key: "qr",
    value: function qr() {
      return this.Ar;
    }
  }, {
    key: "Or",
    value: function Or(t) {
      return this.Vr[t].Re;
    }
  }, {
    key: "Fr",
    value: function Fr(t) {
      return this.Vr[t];
    }
  }, {
    key: "Nr",
    value: function Nr(t, i) {
      var s = this.Yr(t);
      if (null === s && 0 !== i) switch (i) {
        case -1:
          return this.jr(t);
        case 1:
          return this.Kr(t);
        default:
          throw new TypeError("Unknown search mode");
      }
      return s;
    }
  }, {
    key: "jr",
    value: function jr(t) {
      var i = this.Xr(t);
      return i > 0 && (i -= 1), i !== this.Vr.length && this.Or(i) < t ? i : null;
    }
  }, {
    key: "Kr",
    value: function Kr(t) {
      var i = this.Zr(t);
      return i !== this.Vr.length && t < this.Or(i) ? i : null;
    }
  }, {
    key: "Yr",
    value: function Yr(t) {
      var i = this.Xr(t);
      return i === this.Vr.length || t < this.Vr[i].Re ? null : i;
    }
  }, {
    key: "Xr",
    value: function Xr(t) {
      return yt(this.Vr, t, function (t, i) {
        return t.Re < i;
      });
    }
  }, {
    key: "Zr",
    value: function Zr(t) {
      return kt(this.Vr, t, function (t, i) {
        return t.Re > i;
      });
    }
  }, {
    key: "Gr",
    value: function Gr(t, i, s) {
      var n = null;
      for (var _e3 = t; _e3 < i; _e3++) {
        var _t7 = this.Vr[_e3].Ft[s];
        Number.isNaN(_t7) || (null === n ? n = {
          Jr: _t7,
          Qr: _t7
        } : (_t7 < n.Jr && (n.Jr = _t7), _t7 > n.Qr && (n.Qr = _t7)));
      }
      return n;
    }
  }, {
    key: "$r",
    value: function $r(t, i, s) {
      if (this.Ki()) return null;
      var n = null;
      var e = u(this.Lr()),
        r = u(this.Ks()),
        h = Math.max(t, e),
        a = Math.min(i, r),
        l = Math.ceil(h / Tt) * Tt,
        o = Math.max(l, Math.floor(a / Tt) * Tt);
      {
        var _t8 = this.Xr(h),
          _e4 = this.Zr(Math.min(a, l, i));
        n = Dt(n, this.Gr(_t8, _e4, s));
      }
      var _ = this.Ir.get(s);
      void 0 === _ && (_ = new Map(), this.Ir.set(s, _));
      for (var _t9 = Math.max(l + 1, h); _t9 < o; _t9 += Tt) {
        var _i1 = Math.floor(_t9 / Tt);
        var _e5 = _.get(_i1);
        if (void 0 === _e5) {
          var _t0 = this.Xr(_i1 * Tt),
            _n3 = this.Zr((_i1 + 1) * Tt - 1);
          _e5 = this.Gr(_t0, _n3, s), _.set(_i1, _e5);
        }
        n = Dt(n, _e5);
      }
      {
        var _t1 = this.Xr(o),
          _i10 = this.Zr(a);
        n = Dt(n, this.Gr(_t1, _i10, s));
      }
      return n;
    }
  }]);
}();
function Dt(t, i) {
  if (null === t) return i;
  if (null === i) return t;
  return {
    Jr: Math.min(t.Jr, i.Jr),
    Qr: Math.max(t.Qr, i.Qr)
  };
}
var Vt = /*#__PURE__*/function () {
  function Vt(t) {
    _classCallCheck(this, Vt);
    this.th = t;
  }
  return _createClass(Vt, [{
    key: "nt",
    value: function nt(t, i, s) {
      this.th.draw(t);
    }
  }, {
    key: "ih",
    value: function ih(t, i, s) {
      var _this$th$drawBackgrou, _this$th;
      (_this$th$drawBackgrou = (_this$th = this.th).drawBackground) === null || _this$th$drawBackgrou === void 0 || _this$th$drawBackgrou.call(_this$th, t);
    }
  }]);
}();
var It = /*#__PURE__*/function () {
  function It(t) {
    _classCallCheck(this, It);
    this.Dn = null, this.sh = t;
  }
  return _createClass(It, [{
    key: "Tt",
    value: function Tt() {
      var _this$Dn;
      var t = this.sh.renderer();
      if (null === t) return null;
      if (((_this$Dn = this.Dn) === null || _this$Dn === void 0 ? void 0 : _this$Dn.nh) === t) return this.Dn.eh;
      var i = new Vt(t);
      return this.Dn = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "rh",
    value: function rh() {
      var _this$sh$zOrder, _this$sh$zOrder2, _this$sh;
      return (_this$sh$zOrder = (_this$sh$zOrder2 = (_this$sh = this.sh).zOrder) === null || _this$sh$zOrder2 === void 0 ? void 0 : _this$sh$zOrder2.call(_this$sh)) !== null && _this$sh$zOrder !== void 0 ? _this$sh$zOrder : "normal";
    }
  }]);
}();
var Bt = /*#__PURE__*/function () {
  function Bt(t) {
    _classCallCheck(this, Bt);
    this.hh = null, this.ah = t;
  }
  return _createClass(Bt, [{
    key: "oh",
    value: function oh() {
      return this.ah;
    }
  }, {
    key: "Ns",
    value: function Ns() {
      var _this$ah$updateAllVie, _this$ah;
      (_this$ah$updateAllVie = (_this$ah = this.ah).updateAllViews) === null || _this$ah$updateAllVie === void 0 || _this$ah$updateAllVie.call(_this$ah);
    }
  }, {
    key: "Ws",
    value: function Ws() {
      var _this$ah$paneViews, _this$ah$paneViews2, _this$ah2, _this$hh;
      var t = (_this$ah$paneViews = (_this$ah$paneViews2 = (_this$ah2 = this.ah).paneViews) === null || _this$ah$paneViews2 === void 0 ? void 0 : _this$ah$paneViews2.call(_this$ah2)) !== null && _this$ah$paneViews !== void 0 ? _this$ah$paneViews : [];
      if (((_this$hh = this.hh) === null || _this$hh === void 0 ? void 0 : _this$hh.nh) === t) return this.hh.eh;
      var i = t.map(function (t) {
        return new It(t);
      });
      return this.hh = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "jn",
    value: function jn(t, i) {
      var _this$ah$hitTest, _this$ah$hitTest2, _this$ah3;
      return (_this$ah$hitTest = (_this$ah$hitTest2 = (_this$ah3 = this.ah).hitTest) === null || _this$ah$hitTest2 === void 0 ? void 0 : _this$ah$hitTest2.call(_this$ah3, t, i)) !== null && _this$ah$hitTest !== void 0 ? _this$ah$hitTest : null;
    }
  }]);
}();
var At = /*#__PURE__*/function (_Bt) {
  function At() {
    _classCallCheck(this, At);
    return _callSuper(this, At, arguments);
  }
  _inherits(At, _Bt);
  return _createClass(At, [{
    key: "us",
    value: function us() {
      return [];
    }
  }]);
}(Bt);
var Et = /*#__PURE__*/function () {
  function Et(t) {
    _classCallCheck(this, Et);
    this.th = t;
  }
  return _createClass(Et, [{
    key: "nt",
    value: function nt(t, i, s) {
      this.th.draw(t);
    }
  }, {
    key: "ih",
    value: function ih(t, i, s) {
      var _this$th$drawBackgrou2, _this$th2;
      (_this$th$drawBackgrou2 = (_this$th2 = this.th).drawBackground) === null || _this$th$drawBackgrou2 === void 0 || _this$th$drawBackgrou2.call(_this$th2, t);
    }
  }]);
}();
var zt = /*#__PURE__*/function () {
  function zt(t) {
    _classCallCheck(this, zt);
    this.Dn = null, this.sh = t;
  }
  return _createClass(zt, [{
    key: "Tt",
    value: function Tt() {
      var _this$Dn2;
      var t = this.sh.renderer();
      if (null === t) return null;
      if (((_this$Dn2 = this.Dn) === null || _this$Dn2 === void 0 ? void 0 : _this$Dn2.nh) === t) return this.Dn.eh;
      var i = new Et(t);
      return this.Dn = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "rh",
    value: function rh() {
      var _this$sh$zOrder3, _this$sh$zOrder4, _this$sh2;
      return (_this$sh$zOrder3 = (_this$sh$zOrder4 = (_this$sh2 = this.sh).zOrder) === null || _this$sh$zOrder4 === void 0 ? void 0 : _this$sh$zOrder4.call(_this$sh2)) !== null && _this$sh$zOrder3 !== void 0 ? _this$sh$zOrder3 : "normal";
    }
  }]);
}();
function Lt(t) {
  var _t$fixedCoordinate, _t$visible, _t$visible2, _t$tickVisible, _t$tickVisible2;
  return {
    ri: t.text(),
    Bi: t.coordinate(),
    Ii: (_t$fixedCoordinate = t.fixedCoordinate) === null || _t$fixedCoordinate === void 0 ? void 0 : _t$fixedCoordinate.call(t),
    R: t.textColor(),
    Z: t.backColor(),
    Vt: (_t$visible = (_t$visible2 = t.visible) === null || _t$visible2 === void 0 ? void 0 : _t$visible2.call(t)) !== null && _t$visible !== void 0 ? _t$visible : true,
    pi: (_t$tickVisible = (_t$tickVisible2 = t.tickVisible) === null || _t$tickVisible2 === void 0 ? void 0 : _t$tickVisible2.call(t)) !== null && _t$tickVisible !== void 0 ? _t$tickVisible : true
  };
}
var Ot = /*#__PURE__*/function () {
  function Ot(t, i) {
    _classCallCheck(this, Ot);
    this.Gt = new q(), this._h = t, this.uh = i;
  }
  return _createClass(Ot, [{
    key: "Tt",
    value: function Tt() {
      return this.Gt.ht(_objectSpread2({
        Qi: this.uh.Qi()
      }, Lt(this._h))), this.Gt;
    }
  }]);
}();
var Nt = /*#__PURE__*/function (_H4) {
  function Nt(t, i) {
    var _this16;
    _classCallCheck(this, Nt);
    _this16 = _callSuper(this, Nt), _this16._h = t, _this16.Yi = i;
    return _this16;
  }
  _inherits(Nt, _H4);
  return _createClass(Nt, [{
    key: "qi",
    value: function qi(t, i, s) {
      var n = Lt(this._h);
      s.Z = n.Z, t.R = n.R;
      var e = 2 / 12 * this.Yi.k();
      s.Ti = e, s.Ri = e, s.Bi = n.Bi, s.Ii = n.Ii, t.ri = n.ri, t.Vt = n.Vt, t.pi = n.pi;
    }
  }]);
}(H);
var Wt = /*#__PURE__*/function (_Bt2) {
  function Wt(t, i) {
    var _this17;
    _classCallCheck(this, Wt);
    _this17 = _callSuper(this, Wt, [t]), _this17.dh = null, _this17.fh = null, _this17.ph = null, _this17.mh = null, _this17.ge = i;
    return _this17;
  }
  _inherits(Wt, _Bt2);
  return _createClass(Wt, [{
    key: "cs",
    value: function cs() {
      var _this$ah$timeAxisView, _this$ah$timeAxisView2, _this$ah4, _this$dh;
      var t = (_this$ah$timeAxisView = (_this$ah$timeAxisView2 = (_this$ah4 = this.ah).timeAxisViews) === null || _this$ah$timeAxisView2 === void 0 ? void 0 : _this$ah$timeAxisView2.call(_this$ah4)) !== null && _this$ah$timeAxisView !== void 0 ? _this$ah$timeAxisView : [];
      if (((_this$dh = this.dh) === null || _this$dh === void 0 ? void 0 : _this$dh.nh) === t) return this.dh.eh;
      var i = this.ge.Qt().At(),
        s = t.map(function (t) {
          return new Ot(t, i);
        });
      return this.dh = {
        nh: t,
        eh: s
      }, s;
    }
  }, {
    key: "Fs",
    value: function Fs() {
      var _this$ah$priceAxisVie, _this$ah$priceAxisVie2, _this$ah5, _this$fh;
      var t = (_this$ah$priceAxisVie = (_this$ah$priceAxisVie2 = (_this$ah5 = this.ah).priceAxisViews) === null || _this$ah$priceAxisVie2 === void 0 ? void 0 : _this$ah$priceAxisVie2.call(_this$ah5)) !== null && _this$ah$priceAxisVie !== void 0 ? _this$ah$priceAxisVie : [];
      if (((_this$fh = this.fh) === null || _this$fh === void 0 ? void 0 : _this$fh.nh) === t) return this.fh.eh;
      var i = this.ge.Wt(),
        s = t.map(function (t) {
          return new Nt(t, i);
        });
      return this.fh = {
        nh: t,
        eh: s
      }, s;
    }
  }, {
    key: "wh",
    value: function wh() {
      var _this$ah$priceAxisPan, _this$ah$priceAxisPan2, _this$ah6, _this$ph;
      var t = (_this$ah$priceAxisPan = (_this$ah$priceAxisPan2 = (_this$ah6 = this.ah).priceAxisPaneViews) === null || _this$ah$priceAxisPan2 === void 0 ? void 0 : _this$ah$priceAxisPan2.call(_this$ah6)) !== null && _this$ah$priceAxisPan !== void 0 ? _this$ah$priceAxisPan : [];
      if (((_this$ph = this.ph) === null || _this$ph === void 0 ? void 0 : _this$ph.nh) === t) return this.ph.eh;
      var i = t.map(function (t) {
        return new zt(t);
      });
      return this.ph = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "gh",
    value: function gh() {
      var _this$ah$timeAxisPane, _this$ah$timeAxisPane2, _this$ah7, _this$mh;
      var t = (_this$ah$timeAxisPane = (_this$ah$timeAxisPane2 = (_this$ah7 = this.ah).timeAxisPaneViews) === null || _this$ah$timeAxisPane2 === void 0 ? void 0 : _this$ah$timeAxisPane2.call(_this$ah7)) !== null && _this$ah$timeAxisPane !== void 0 ? _this$ah$timeAxisPane : [];
      if (((_this$mh = this.mh) === null || _this$mh === void 0 ? void 0 : _this$mh.nh) === t) return this.mh.eh;
      var i = t.map(function (t) {
        return new zt(t);
      });
      return this.mh = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "Mh",
    value: function Mh(t, i) {
      var _this$ah$autoscaleInf, _this$ah$autoscaleInf2, _this$ah8;
      return (_this$ah$autoscaleInf = (_this$ah$autoscaleInf2 = (_this$ah8 = this.ah).autoscaleInfo) === null || _this$ah$autoscaleInf2 === void 0 ? void 0 : _this$ah$autoscaleInf2.call(_this$ah8, t, i)) !== null && _this$ah$autoscaleInf !== void 0 ? _this$ah$autoscaleInf : null;
    }
  }]);
}(Bt);
function Ft(t, i, s, n) {
  t.forEach(function (t) {
    i(t).forEach(function (t) {
      t.rh() === s && n.push(t);
    });
  });
}
function Ht(t) {
  return t.Ws();
}
function Ut(t) {
  return t.wh();
}
function $t(t) {
  return t.gh();
}
var qt = ["Area", "Line", "Baseline"];
var Yt = /*#__PURE__*/function (_bt) {
  function Yt(t, i, s, n, e) {
    var _this18;
    _classCallCheck(this, Yt);
    _this18 = _callSuper(this, Yt, [t]), _this18.Yt = new Rt(), _this18.er = new dt(_assertThisInitialized(_this18)), _this18.bh = [], _this18.Sh = new ot(_assertThisInitialized(_this18)), _this18.xh = null, _this18.Ch = null, _this18.yh = null, _this18.kh = [], _this18.ys = s, _this18.Ph = i;
    var r = new ft(_this18);
    _this18.vs = [r], _this18.rr = new ht(r, _this18, t), qt.includes(_this18.Ph) && (_this18.xh = new ct(_this18)), _this18.Th(), _this18.sh = n(_this18, _this18.Qt(), e);
    return _this18;
  }
  _inherits(Yt, _bt);
  return _createClass(Yt, [{
    key: "m",
    value: function m() {
      null !== this.yh && clearTimeout(this.yh);
    }
  }, {
    key: "Be",
    value: function Be(t) {
      return this.ys.priceLineColor || t;
    }
  }, {
    key: "ke",
    value: function ke(t) {
      var i = {
          Pe: true
        },
        s = this.Wt();
      if (this.Qt().At().Ki() || s.Ki() || this.Yt.Ki()) return i;
      var n = this.Qt().At().ye(),
        e = this.zt();
      if (null === n || null === e) return i;
      var r, h;
      if (t) {
        var _t10 = this.Yt.Er();
        if (null === _t10) return i;
        r = _t10, h = _t10.Re;
      } else {
        var _t11 = this.Yt.Wr(n.bi(), -1);
        if (null === _t11) return i;
        if (r = this.Yt.Pr(_t11.Re), null === r) return i;
        h = _t11.Re;
      }
      var a = r.Ft[3],
        l = this.Rh().Dr(h, {
          Ft: r
        }),
        o = s.Nt(a, e.Ft);
      return {
        Pe: false,
        gt: a,
        ri: s.Zi(a, e.Ft),
        Oe: s.Dh(a),
        Ne: s.Vh(a, e.Ft),
        R: l.cr,
        Bi: o,
        Re: h
      };
    }
  }, {
    key: "Rh",
    value: function Rh() {
      return null !== this.Ch || (this.Ch = new xt(this)), this.Ch;
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "hr",
    value: function hr(t) {
      var i = t.priceScaleId;
      void 0 !== i && i !== this.ys.priceScaleId && this.Qt().Ih(this, i), f(this.ys, t), void 0 !== t.priceFormat && (this.Th(), this.Qt().Bh()), this.Qt().Ah(this), this.Qt().Eh(), this.sh.kt("options");
    }
  }, {
    key: "ht",
    value: function ht(t, i) {
      this.Yt.ht(t), this.sh.kt("data"), null !== this.xh && (i && i.zh ? this.xh.be() : 0 === t.length && this.xh.Me());
      var s = this.Qt().Hn(this);
      this.Qt().Lh(s), this.Qt().Ah(this), this.Qt().Eh(), this.Qt().ar();
    }
  }, {
    key: "Oh",
    value: function Oh(t) {
      var i = new Mt(this, t);
      return this.bh.push(i), this.Qt().Ah(this), i;
    }
  }, {
    key: "Nh",
    value: function Nh(t) {
      var i = this.bh.indexOf(t);
      -1 !== i && this.bh.splice(i, 1), this.Qt().Ah(this);
    }
  }, {
    key: "Wh",
    value: function Wh() {
      return this.bh;
    }
  }, {
    key: "Rr",
    value: function Rr() {
      return this.Ph;
    }
  }, {
    key: "zt",
    value: function zt() {
      var t = this.Fh();
      return null === t ? null : {
        Ft: t.Ft[3],
        Hh: t.wt
      };
    }
  }, {
    key: "Fh",
    value: function Fh() {
      var t = this.Qt().At().ye();
      if (null === t) return null;
      var i = t.Uh();
      return this.Yt.Wr(i, 1);
    }
  }, {
    key: "Xs",
    value: function Xs() {
      return this.Yt;
    }
  }, {
    key: "$h",
    value: function $h(t) {
      var i = this.Yt.Pr(t);
      return null === i ? null : "Bar" === this.Ph || "Candlestick" === this.Ph || "Custom" === this.Ph ? {
        qh: i.Ft[0],
        Yh: i.Ft[1],
        jh: i.Ft[2],
        Kh: i.Ft[3]
      } : i.Ft[3];
    }
  }, {
    key: "Xh",
    value: function Xh(t) {
      var _this19 = this;
      var i = [];
      Ft(this.kh, Ht, "top", i);
      var s = this.xh;
      return null !== s && s.Vt() ? (null === this.yh && s.xe() && (this.yh = setTimeout(function () {
        _this19.yh = null, _this19.Qt().Zh();
      }, 0)), s.Se(), i.unshift(s), i) : i;
    }
  }, {
    key: "Ws",
    value: function Ws() {
      var t = [];
      this.Gh() || t.push(this.Sh), t.push(this.sh, this.er);
      var i = this.bh.map(function (t) {
        return t.lr();
      });
      return t.push.apply(t, _toConsumableArray(i)), Ft(this.kh, Ht, "normal", t), t;
    }
  }, {
    key: "Jh",
    value: function Jh() {
      return this.Qh(Ht, "bottom");
    }
  }, {
    key: "ta",
    value: function ta(t) {
      return this.Qh(Ut, t);
    }
  }, {
    key: "ia",
    value: function ia(t) {
      return this.Qh($t, t);
    }
  }, {
    key: "sa",
    value: function sa(t, i) {
      return this.kh.map(function (s) {
        return s.jn(t, i);
      }).filter(function (t) {
        return null !== t;
      });
    }
  }, {
    key: "us",
    value: function us() {
      return [this.rr].concat(_toConsumableArray(this.bh.map(function (t) {
        return t._r();
      })));
    }
  }, {
    key: "Fs",
    value: function Fs(t, i) {
      if (i !== this.es && !this.Gh()) return [];
      var s = _toConsumableArray(this.vs);
      var _iterator4 = _createForOfIteratorHelper(this.bh),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _t12 = _step4.value;
          s.push(_t12.ur());
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this.kh.forEach(function (t) {
        s.push.apply(s, _toConsumableArray(t.Fs()));
      }), s;
    }
  }, {
    key: "cs",
    value: function cs() {
      var t = [];
      return this.kh.forEach(function (i) {
        t.push.apply(t, _toConsumableArray(i.cs()));
      }), t;
    }
  }, {
    key: "Mh",
    value: function Mh(t, i) {
      var _this20 = this;
      if (void 0 !== this.ys.autoscaleInfoProvider) {
        var _s4 = this.ys.autoscaleInfoProvider(function () {
          var s = _this20.na(t, i);
          return null === s ? null : s.Xe();
        });
        return mt.Ze(_s4);
      }
      return this.na(t, i);
    }
  }, {
    key: "ea",
    value: function ea() {
      return this.ys.priceFormat.minMove;
    }
  }, {
    key: "ra",
    value: function ra() {
      return this.ha;
    }
  }, {
    key: "Ns",
    value: function Ns() {
      var _this$xh;
      this.sh.kt();
      var _iterator5 = _createForOfIteratorHelper(this.vs),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _t13 = _step5.value;
          _t13.kt();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper(this.bh),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t14 = _step6.value;
          _t14.kt();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      this.er.kt(), this.Sh.kt(), (_this$xh = this.xh) !== null && _this$xh !== void 0 && _this$xh.kt(), this.kh.forEach(function (t) {
        return t.Ns();
      });
    }
  }, {
    key: "Wt",
    value: function Wt() {
      return u(_superPropGet(Yt, "Wt", this, 3)([]));
    }
  }, {
    key: "Et",
    value: function Et(t) {
      if (!(("Line" === this.Ph || "Area" === this.Ph || "Baseline" === this.Ph) && this.ys.crosshairMarkerVisible)) return null;
      var i = this.Yt.Pr(t);
      if (null === i) return null;
      return {
        gt: i.Ft[3],
        ft: this.aa(),
        Ht: this.la(),
        Ot: this.oa(),
        Lt: this._a(t)
      };
    }
  }, {
    key: "Ae",
    value: function Ae() {
      return this.ys.title;
    }
  }, {
    key: "Vt",
    value: function Vt() {
      return this.ys.visible;
    }
  }, {
    key: "ua",
    value: function ua(t) {
      this.kh.push(new Wt(t, this));
    }
  }, {
    key: "ca",
    value: function ca(t) {
      this.kh = this.kh.filter(function (i) {
        return i.oh() !== t;
      });
    }
  }, {
    key: "da",
    value: function da() {
      var _this21 = this;
      if ("Custom" === this.Ph) return function (t) {
        return _this21.sh.fa(t);
      };
    }
  }, {
    key: "pa",
    value: function pa() {
      var _this22 = this;
      if ("Custom" === this.Ph) return function (t) {
        return _this22.sh.va(t);
      };
    }
  }, {
    key: "ma",
    value: function ma() {
      return this.Yt.qr();
    }
  }, {
    key: "Gh",
    value: function Gh() {
      return !Z(this.Wt().wa());
    }
  }, {
    key: "na",
    value: function na(t, i) {
      if (!v(t) || !v(i) || this.Yt.Ki()) return null;
      var s = "Line" === this.Ph || "Area" === this.Ph || "Baseline" === this.Ph || "Histogram" === this.Ph ? [3] : [2, 1],
        n = this.Yt.Ur(t, i, s);
      var e = null !== n ? new vt(n.Jr, n.Qr) : null,
        r = null;
      if ("Histogram" === this.Rr()) {
        var _t15 = this.ys.base,
          _i11 = new vt(_t15, _t15);
        e = null !== e ? e.vn(_i11) : _i11;
      }
      return this.kh.forEach(function (s) {
        var n = s.Mh(t, i);
        if (n !== null && n !== void 0 && n.priceRange) {
          var _t16 = new vt(n.priceRange.minValue, n.priceRange.maxValue);
          e = null !== e ? e.vn(_t16) : _t16;
        }
        (n === null || n === void 0 ? void 0 : n.margins) && (r = n.margins);
      }), new mt(e, r);
    }
  }, {
    key: "aa",
    value: function aa() {
      switch (this.Ph) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.ys.crosshairMarkerRadius;
      }
      return 0;
    }
  }, {
    key: "la",
    value: function la() {
      switch (this.Ph) {
        case "Line":
        case "Area":
        case "Baseline":
          {
            var _t17 = this.ys.crosshairMarkerBorderColor;
            if (0 !== _t17.length) return _t17;
          }
      }
      return null;
    }
  }, {
    key: "oa",
    value: function oa() {
      switch (this.Ph) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.ys.crosshairMarkerBorderWidth;
      }
      return 0;
    }
  }, {
    key: "_a",
    value: function _a(t) {
      switch (this.Ph) {
        case "Line":
        case "Area":
        case "Baseline":
          {
            var _t18 = this.ys.crosshairMarkerBackgroundColor;
            if (0 !== _t18.length) return _t18;
          }
      }
      return this.Rh().Dr(t).cr;
    }
  }, {
    key: "Th",
    value: function Th() {
      switch (this.ys.priceFormat.type) {
        case "custom":
          this.ha = {
            format: this.ys.priceFormat.formatter
          };
          break;
        case "volume":
          this.ha = new st(this.ys.priceFormat.precision);
          break;
        case "percent":
          this.ha = new it(this.ys.priceFormat.precision);
          break;
        default:
          {
            var _t19 = Math.pow(10, this.ys.priceFormat.precision);
            this.ha = new tt(_t19, this.ys.priceFormat.minMove * _t19);
          }
      }
      null !== this.es && this.es.ga();
    }
  }, {
    key: "Qh",
    value: function Qh(t, i) {
      var s = [];
      return Ft(this.kh, t, i, s), s;
    }
  }]);
}(bt);
var jt = [3],
  Kt = [0, 1, 2, 3];
var Xt = /*#__PURE__*/function () {
  function Xt(t) {
    _classCallCheck(this, Xt);
    this.ys = t;
  }
  return _createClass(Xt, [{
    key: "Ma",
    value: function Ma(t, i, s) {
      var _this23 = this;
      var n = t;
      if (0 === this.ys.mode) return n;
      var e = s.Ps(),
        r = e.zt();
      if (null === r) return n;
      var h = e.Nt(t, r),
        a = s.ba().filter(function (t) {
          return t instanceof Yt;
        }).reduce(function (t, n) {
          if (s.Un(n) || !n.Vt()) return t;
          var e = n.Wt(),
            r = n.Xs();
          if (e.Ki() || !r.Te(i)) return t;
          var h = r.Pr(i);
          if (null === h) return t;
          var a = c(n.zt()),
            l = 3 === _this23.ys.mode ? Kt : jt;
          return t.concat(l.map(function (t) {
            return e.Nt(h.Ft[t], a.Ft);
          }));
        }, []);
      if (0 === a.length) return n;
      a.sort(function (t, i) {
        return Math.abs(t - h) - Math.abs(i - h);
      });
      var l = a[0];
      return n = e.Ts(l, r), n;
    }
  }]);
}();
function Zt(t, i, s) {
  return Math.min(Math.max(t, i), s);
}
function Gt(t, i, s) {
  return i - t <= s;
}
var Qt = /*#__PURE__*/function (_R5) {
  function Qt() {
    var _this24;
    _classCallCheck(this, Qt);
    _this24 = _callSuper(this, Qt, arguments), _this24.Yt = null;
    return _this24;
  }
  _inherits(Qt, _R5);
  return _createClass(Qt, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "et",
    value: function et(_ref9) {
      var _this25 = this;
      var t = _ref9.context,
        i = _ref9.bitmapSize,
        s = _ref9.horizontalPixelRatio,
        n = _ref9.verticalPixelRatio;
      if (null === this.Yt) return;
      var e = Math.max(1, Math.floor(s));
      t.lineWidth = e, function (t, i) {
        t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore();
      }(t, function () {
        var r = u(_this25.Yt);
        if (r.Sa) {
          t.strokeStyle = r.xa, a(t, r.Ca), t.beginPath();
          var _iterator7 = _createForOfIteratorHelper(r.ya),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _n4 = _step7.value;
              var _r5 = Math.round(_n4.ka * s);
              t.moveTo(_r5, -e), t.lineTo(_r5, i.height + e);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          t.stroke();
        }
        if (r.Pa) {
          t.strokeStyle = r.Ta, a(t, r.Ra), t.beginPath();
          var _iterator8 = _createForOfIteratorHelper(r.Da),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _s5 = _step8.value;
              var _r6 = Math.round(_s5.ka * n);
              t.moveTo(-e, _r6), t.lineTo(i.width + e, _r6);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          t.stroke();
        }
      });
    }
  }]);
}(R);
var ti = /*#__PURE__*/function () {
  function ti(t) {
    _classCallCheck(this, ti);
    this.Gt = new Qt(), this.xt = true, this.yt = t;
  }
  return _createClass(ti, [{
    key: "kt",
    value: function kt() {
      this.xt = true;
    }
  }, {
    key: "Tt",
    value: function Tt() {
      if (this.xt) {
        var _t20 = this.yt.Qt().N().grid,
          _i12 = {
            Pa: _t20.horzLines.visible,
            Sa: _t20.vertLines.visible,
            Ta: _t20.horzLines.color,
            xa: _t20.vertLines.color,
            Ra: _t20.horzLines.style,
            Ca: _t20.vertLines.style,
            Da: this.yt.Ps().Va(),
            ya: (this.yt.Qt().At().Va() || []).map(function (t) {
              return {
                ka: t.coord
              };
            })
          };
        this.Gt.ht(_i12), this.xt = false;
      }
      return this.Gt;
    }
  }]);
}();
var ii = /*#__PURE__*/function () {
  function ii(t) {
    _classCallCheck(this, ii);
    this.sh = new ti(t);
  }
  return _createClass(ii, [{
    key: "lr",
    value: function lr() {
      return this.sh;
    }
  }]);
}();
var si = {
  Ia: 4,
  Ba: 1e-4
};
function ni(t, i) {
  var s = 100 * (t - i) / i;
  return i < 0 ? -s : s;
}
function ei(t, i) {
  var s = ni(t.$e(), i),
    n = ni(t.qe(), i);
  return new vt(s, n);
}
function ri(t, i) {
  var s = 100 * (t - i) / i + 100;
  return i < 0 ? -s : s;
}
function hi(t, i) {
  var s = ri(t.$e(), i),
    n = ri(t.qe(), i);
  return new vt(s, n);
}
function ai(t, i) {
  var s = Math.abs(t);
  if (s < 1e-15) return 0;
  var n = Math.log10(s + i.Ba) + i.Ia;
  return t < 0 ? -n : n;
}
function li(t, i) {
  var s = Math.abs(t);
  if (s < 1e-15) return 0;
  var n = Math.pow(10, s - i.Ia) - i.Ba;
  return t < 0 ? -n : n;
}
function oi(t, i) {
  if (null === t) return null;
  var s = ai(t.$e(), i),
    n = ai(t.qe(), i);
  return new vt(s, n);
}
function _i(t, i) {
  if (null === t) return null;
  var s = li(t.$e(), i),
    n = li(t.qe(), i);
  return new vt(s, n);
}
function ui(t) {
  if (null === t) return si;
  var i = Math.abs(t.qe() - t.$e());
  if (i >= 1 || i < 1e-15) return si;
  var s = Math.ceil(Math.abs(Math.log10(i))),
    n = si.Ia + s;
  return {
    Ia: n,
    Ba: 1 / Math.pow(10, n)
  };
}
var ci = /*#__PURE__*/function () {
  function ci(t, i) {
    _classCallCheck(this, ci);
    if (this.Aa = t, this.Ea = i, function (t) {
      if (t < 0) return false;
      for (var _i13 = t; _i13 > 1; _i13 /= 10) if (_i13 % 10 != 0) return false;
      return true;
    }(this.Aa)) this.za = [2, 2.5, 2];else {
      this.za = [];
      for (var _t21 = this.Aa; 1 !== _t21;) {
        if (_t21 % 2 == 0) this.za.push(2), _t21 /= 2;else {
          if (_t21 % 5 != 0) throw new Error("unexpected base");
          this.za.push(2, 2.5), _t21 /= 5;
        }
        if (this.za.length > 100) throw new Error("something wrong with base");
      }
    }
  }
  return _createClass(ci, [{
    key: "La",
    value: function La(t, i, s) {
      var n = 0 === this.Aa ? 0 : 1 / this.Aa;
      var e = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))),
        r = 0,
        h = this.Ea[0];
      for (;;) {
        var _t22 = Gt(e, n, 1e-14) && e > n + 1e-14,
          _i14 = Gt(e, s * h, 1e-14),
          _a4 = Gt(e, 1, 1e-14);
        if (!(_t22 && _i14 && _a4)) break;
        e /= h, h = this.Ea[++r % this.Ea.length];
      }
      if (e <= n + 1e-14 && (e = n), e = Math.max(1, e), this.za.length > 0 && (a = e, l = 1, o = 1e-14, Math.abs(a - l) < o)) for (r = 0, h = this.za[0]; Gt(e, s * h, 1e-14) && e > n + 1e-14;) e /= h, h = this.za[++r % this.za.length];
      var a, l, o;
      return e;
    }
  }]);
}();
var di = /*#__PURE__*/function () {
  function di(t, i, s, n) {
    _classCallCheck(this, di);
    this.Oa = [], this.Yi = t, this.Aa = i, this.Na = s, this.Wa = n;
  }
  return _createClass(di, [{
    key: "La",
    value: function La(t, i) {
      if (t < i) throw new Error("high < low");
      var s = this.Yi.$t(),
        n = (t - i) * this.Fa() / s,
        e = new ci(this.Aa, [2, 2.5, 2]),
        r = new ci(this.Aa, [2, 2, 2.5]),
        h = new ci(this.Aa, [2.5, 2, 2]),
        a = [];
      return a.push(e.La(t, i, n), r.La(t, i, n), h.La(t, i, n)), function (t) {
        if (t.length < 1) throw Error("array is empty");
        var i = t[0];
        for (var _s6 = 1; _s6 < t.length; ++_s6) t[_s6] < i && (i = t[_s6]);
        return i;
      }(a);
    }
  }, {
    key: "Ha",
    value: function Ha() {
      var t = this.Yi,
        i = t.zt();
      if (null === i) return void (this.Oa = []);
      var s = t.$t(),
        n = this.Na(s - 1, i),
        e = this.Na(0, i),
        r = this.Yi.N().entireTextOnly ? this.Ua() / 2 : 0,
        h = r,
        a = s - 1 - r,
        l = Math.max(n, e),
        o = Math.min(n, e);
      if (l === o) return void (this.Oa = []);
      var _ = this.La(l, o);
      if (this.$a(i, _, l, o, h, a), t.qa() && this.Ya(_, o, l)) {
        var _t23 = this.Yi.ja();
        this.Ka(i, _, h, a, _t23, 2 * _t23);
      }
    }
  }, {
    key: "Va",
    value: function Va() {
      return this.Oa;
    }
  }, {
    key: "Ua",
    value: function Ua() {
      return this.Yi.k();
    }
  }, {
    key: "Fa",
    value: function Fa() {
      return Math.ceil(2.5 * this.Ua());
    }
  }, {
    key: "$a",
    value: function $a(t, i, s, n, e, r) {
      var h = this.Oa,
        a = this.Yi;
      var l = s % i;
      l += l < 0 ? i : 0;
      var o = s >= n ? 1 : -1;
      var _ = null,
        u = 0;
      for (var _c = s - l; _c > n; _c -= i) {
        var _s7 = this.Wa(_c, t, true);
        null !== _ && Math.abs(_s7 - _) < this.Fa() || _s7 < e || _s7 > r || (u < h.length ? (h[u].ka = _s7, h[u].Xa = a.Za(_c)) : h.push({
          ka: _s7,
          Xa: a.Za(_c)
        }), u++, _ = _s7, a.Ga() && (i = this.La(_c * o, n)));
      }
      h.length = u;
    }
  }, {
    key: "Ka",
    value: function Ka(t, i, s, n, e, r) {
      var h = this.Oa,
        a = this.Ja(t, s, e, r),
        l = this.Ja(t, n, -r, -e),
        o = this.Wa(0, t, true) - this.Wa(i, t, true);
      h.length > 0 && h[0].ka - a.ka < o / 2 && h.shift(), h.length > 0 && l.ka - h[h.length - 1].ka < o / 2 && h.pop(), h.unshift(a), h.push(l);
    }
  }, {
    key: "Ja",
    value: function Ja(t, i, s, n) {
      var e = (s + n) / 2,
        r = this.Na(i + s, t),
        h = this.Na(i + n, t),
        a = Math.min(r, h),
        l = Math.max(r, h),
        o = Math.max(.1, this.La(l, a)),
        _ = this.Na(i + e, t),
        u = _ - _ % o,
        c = this.Wa(u, t, true);
      return {
        Xa: this.Yi.Za(u),
        ka: c
      };
    }
  }, {
    key: "Ya",
    value: function Ya(t, i, s) {
      var n = c(this.Yi.Qe());
      return this.Yi.Ga() && (n = _i(n, this.Yi.Qa())), n.$e() - i < t && s - n.qe() < t;
    }
  }]);
}();
function fi(t) {
  return t.slice().sort(function (t, i) {
    return u(t.hs()) - u(i.hs());
  });
}
var pi;
!function (t) {
  t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
}(pi || (pi = {}));
var vi = new it(),
  mi = new tt(100, 1);
var wi = /*#__PURE__*/function () {
  function wi(t, i, s, n, e) {
    _classCallCheck(this, wi);
    this.tl = 0, this.il = null, this.Ge = null, this.sl = null, this.nl = {
      el: false,
      rl: null
    }, this.hl = false, this.al = 0, this.ll = 0, this.ol = new d(), this._l = new d(), this.ul = [], this.cl = null, this.dl = null, this.fl = null, this.pl = null, this.vl = null, this.ha = mi, this.ml = ui(null), this.wl = t, this.ys = i, this.gl = s, this.Ml = n, this.bl = e, this.Sl = new di(this, 100, this.xl.bind(this), this.Cl.bind(this));
  }
  return _createClass(wi, [{
    key: "wa",
    value: function wa() {
      return this.wl;
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "hr",
    value: function hr(t) {
      if (f(this.ys, t), this.ga(), void 0 !== t.mode && this.yl({
        ie: t.mode
      }), void 0 !== t.scaleMargins) {
        var _i15 = _(t.scaleMargins.top),
          _s8 = _(t.scaleMargins.bottom);
        if (_i15 < 0 || _i15 > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=".concat(_i15));
        if (_s8 < 0 || _s8 > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=".concat(_s8));
        if (_i15 + _s8 > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=".concat(_i15 + _s8));
        this.kl(), this.fl = null;
      }
    }
  }, {
    key: "Pl",
    value: function Pl() {
      return this.ys.autoScale;
    }
  }, {
    key: "Tl",
    value: function Tl() {
      return this.hl;
    }
  }, {
    key: "Ga",
    value: function Ga() {
      return 1 === this.ys.mode;
    }
  }, {
    key: "Le",
    value: function Le() {
      return 2 === this.ys.mode;
    }
  }, {
    key: "Rl",
    value: function Rl() {
      return 3 === this.ys.mode;
    }
  }, {
    key: "Qa",
    value: function Qa() {
      return this.ml;
    }
  }, {
    key: "ie",
    value: function ie() {
      return {
        sn: this.ys.autoScale,
        Dl: this.ys.invertScale,
        ie: this.ys.mode
      };
    }
  }, {
    key: "yl",
    value: function yl(t) {
      var i = this.ie();
      var s = null;
      void 0 !== t.sn && (this.ys.autoScale = t.sn), void 0 !== t.ie && (this.ys.mode = t.ie, 2 !== t.ie && 3 !== t.ie || (this.ys.autoScale = true), this.nl.el = false), 1 === i.ie && t.ie !== i.ie && (!function (t, i) {
        if (null === t) return false;
        var s = li(t.$e(), i),
          n = li(t.qe(), i);
        return isFinite(s) && isFinite(n);
      }(this.Ge, this.ml) ? this.ys.autoScale = true : (s = _i(this.Ge, this.ml), null !== s && this.Vl(s))), 1 === t.ie && t.ie !== i.ie && (s = oi(this.Ge, this.ml), null !== s && this.Vl(s));
      var n = i.ie !== this.ys.mode;
      n && (2 === i.ie || this.Le()) && this.ga(), n && (3 === i.ie || this.Rl()) && this.ga(), void 0 !== t.Dl && i.Dl !== t.Dl && (this.ys.invertScale = t.Dl, this.Il()), this._l.p(i, this.ie());
    }
  }, {
    key: "Bl",
    value: function Bl() {
      return this._l;
    }
  }, {
    key: "k",
    value: function k() {
      return this.gl.fontSize;
    }
  }, {
    key: "$t",
    value: function $t() {
      return this.tl;
    }
  }, {
    key: "Al",
    value: function Al(t) {
      this.tl !== t && (this.tl = t, this.kl(), this.fl = null);
    }
  }, {
    key: "El",
    value: function El() {
      if (this.il) return this.il;
      var t = this.$t() - this.zl() - this.Ll();
      return this.il = t, t;
    }
  }, {
    key: "Qe",
    value: function Qe() {
      return this.Ol(), this.Ge;
    }
  }, {
    key: "Vl",
    value: function Vl(t, i) {
      var s = this.Ge;
      (i || null === s && null !== t || null !== s && !s.He(t)) && (this.fl = null, this.Ge = t);
    }
  }, {
    key: "Nl",
    value: function Nl(t) {
      this.Vl(t), this.Wl(null !== t);
    }
  }, {
    key: "Ki",
    value: function Ki() {
      return this.Ol(), 0 === this.tl || !this.Ge || this.Ge.Ki();
    }
  }, {
    key: "Fl",
    value: function Fl(t) {
      return this.Dl() ? t : this.$t() - 1 - t;
    }
  }, {
    key: "Nt",
    value: function Nt(t, i) {
      return this.Le() ? t = ni(t, i) : this.Rl() && (t = ri(t, i)), this.Cl(t, i);
    }
  }, {
    key: "Hl",
    value: function Hl(t, i, s) {
      this.Ol();
      var n = this.Ll(),
        e = u(this.Qe()),
        r = e.$e(),
        h = e.qe(),
        a = this.El() - 1,
        l = this.Dl(),
        o = a / (h - r),
        _ = void 0 === s ? 0 : s.from,
        c = void 0 === s ? t.length : s.to,
        d = this.Ul();
      for (var _s9 = _; _s9 < c; _s9++) {
        var _e6 = t[_s9],
          _h2 = _e6.gt;
        if (isNaN(_h2)) continue;
        var _a5 = _h2;
        null !== d && (_a5 = d(_e6.gt, i));
        var _4 = n + o * (_a5 - r),
          _u = l ? _4 : this.tl - 1 - _4;
        _e6.ut = _u;
      }
    }
  }, {
    key: "$l",
    value: function $l(t, i, s) {
      this.Ol();
      var n = this.Ll(),
        e = u(this.Qe()),
        r = e.$e(),
        h = e.qe(),
        a = this.El() - 1,
        l = this.Dl(),
        o = a / (h - r),
        _ = void 0 === s ? 0 : s.from,
        c = void 0 === s ? t.length : s.to,
        d = this.Ul();
      for (var _s0 = _; _s0 < c; _s0++) {
        var _e7 = t[_s0];
        var _h3 = _e7.qh,
          _a6 = _e7.Yh,
          _5 = _e7.jh,
          _u2 = _e7.Kh;
        null !== d && (_h3 = d(_e7.qh, i), _a6 = d(_e7.Yh, i), _5 = d(_e7.jh, i), _u2 = d(_e7.Kh, i));
        var _c2 = n + o * (_h3 - r),
          _f = l ? _c2 : this.tl - 1 - _c2;
        _e7.ql = _f, _c2 = n + o * (_a6 - r), _f = l ? _c2 : this.tl - 1 - _c2, _e7.Yl = _f, _c2 = n + o * (_5 - r), _f = l ? _c2 : this.tl - 1 - _c2, _e7.jl = _f, _c2 = n + o * (_u2 - r), _f = l ? _c2 : this.tl - 1 - _c2, _e7.Kl = _f;
      }
    }
  }, {
    key: "Ts",
    value: function Ts(t, i) {
      var s = this.xl(t, i);
      return this.Xl(s, i);
    }
  }, {
    key: "Xl",
    value: function Xl(t, i) {
      var s = t;
      return this.Le() ? s = function (t, i) {
        return i < 0 && (t = -t), t / 100 * i + i;
      }(s, i) : this.Rl() && (s = function (t, i) {
        return t -= 100, i < 0 && (t = -t), t / 100 * i + i;
      }(s, i)), s;
    }
  }, {
    key: "ba",
    value: function ba() {
      return this.ul;
    }
  }, {
    key: "Dt",
    value: function Dt() {
      return this.dl || (this.dl = fi(this.ul)), this.dl;
    }
  }, {
    key: "Zl",
    value: function Zl(t) {
      -1 === this.ul.indexOf(t) && (this.ul.push(t), this.ga(), this.Gl());
    }
  }, {
    key: "Jl",
    value: function Jl(t) {
      var i = this.ul.indexOf(t);
      if (-1 === i) throw new Error("source is not attached to scale");
      this.ul.splice(i, 1), 0 === this.ul.length && (this.yl({
        sn: true
      }), this.Vl(null)), this.ga(), this.Gl();
    }
  }, {
    key: "zt",
    value: function zt() {
      var t = null;
      var _iterator9 = _createForOfIteratorHelper(this.ul),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _i16 = _step9.value;
          var _s1 = _i16.zt();
          null !== _s1 && (null === t || _s1.Hh < t.Hh) && (t = _s1);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return null === t ? null : t.Ft;
    }
  }, {
    key: "Dl",
    value: function Dl() {
      return this.ys.invertScale;
    }
  }, {
    key: "Va",
    value: function Va() {
      var t = null === this.zt();
      if (null !== this.fl && (t || this.fl.Ql === t)) return this.fl.Va;
      this.Sl.Ha();
      var i = this.Sl.Va();
      return this.fl = {
        Va: i,
        Ql: t
      }, this.ol.p(), i;
    }
  }, {
    key: "io",
    value: function io() {
      return this.ol;
    }
  }, {
    key: "so",
    value: function so(t) {
      this.Le() || this.Rl() || null === this.pl && null === this.sl && (this.Ki() || (this.pl = this.tl - t, this.sl = u(this.Qe()).Ue()));
    }
  }, {
    key: "no",
    value: function no(t) {
      if (this.Le() || this.Rl()) return;
      if (null === this.pl) return;
      this.yl({
        sn: false
      }), (t = this.tl - t) < 0 && (t = 0);
      var i = (this.pl + .2 * (this.tl - 1)) / (t + .2 * (this.tl - 1));
      var s = u(this.sl).Ue();
      i = Math.max(i, .1), s.je(i), this.Vl(s);
    }
  }, {
    key: "eo",
    value: function eo() {
      this.Le() || this.Rl() || (this.pl = null, this.sl = null);
    }
  }, {
    key: "ro",
    value: function ro(t) {
      this.Pl() || null === this.vl && null === this.sl && (this.Ki() || (this.vl = t, this.sl = u(this.Qe()).Ue()));
    }
  }, {
    key: "ho",
    value: function ho(t) {
      if (this.Pl()) return;
      if (null === this.vl) return;
      var i = u(this.Qe()).Ye() / (this.El() - 1);
      var s = t - this.vl;
      this.Dl() && (s *= -1);
      var n = s * i,
        e = u(this.sl).Ue();
      e.Ke(n), this.Vl(e, true), this.fl = null;
    }
  }, {
    key: "ao",
    value: function ao() {
      this.Pl() || null !== this.vl && (this.vl = null, this.sl = null);
    }
  }, {
    key: "ra",
    value: function ra() {
      return this.ha || this.ga(), this.ha;
    }
  }, {
    key: "Zi",
    value: function Zi(t, i) {
      switch (this.ys.mode) {
        case 2:
          return this.lo(ni(t, i));
        case 3:
          return this.ra().format(ri(t, i));
        default:
          return this.nr(t);
      }
    }
  }, {
    key: "Za",
    value: function Za(t) {
      switch (this.ys.mode) {
        case 2:
          return this.lo(t);
        case 3:
          return this.ra().format(t);
        default:
          return this.nr(t);
      }
    }
  }, {
    key: "Dh",
    value: function Dh(t) {
      return this.nr(t, u(this.cl).ra());
    }
  }, {
    key: "Vh",
    value: function Vh(t, i) {
      return t = ni(t, i), this.lo(t, vi);
    }
  }, {
    key: "oo",
    value: function oo() {
      return this.ul;
    }
  }, {
    key: "_o",
    value: function _o(t) {
      this.nl = {
        rl: t,
        el: false
      };
    }
  }, {
    key: "Ns",
    value: function Ns() {
      this.ul.forEach(function (t) {
        return t.Ns();
      });
    }
  }, {
    key: "qa",
    value: function qa() {
      return this.ys.ensureEdgeTickMarksVisible && this.Pl();
    }
  }, {
    key: "ja",
    value: function ja() {
      return this.k() / 2;
    }
  }, {
    key: "ga",
    value: function ga() {
      this.fl = null;
      var t = 1 / 0;
      this.cl = null;
      var _iterator0 = _createForOfIteratorHelper(this.ul),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var _i17 = _step0.value;
          _i17.hs() < t && (t = _i17.hs(), this.cl = _i17);
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      var i = 100;
      null !== this.cl && (i = Math.round(1 / this.cl.ea())), this.ha = mi, this.Le() ? (this.ha = vi, i = 100) : this.Rl() ? (this.ha = new tt(100, 1), i = 100) : null !== this.cl && (this.ha = this.cl.ra()), this.Sl = new di(this, i, this.xl.bind(this), this.Cl.bind(this)), this.Sl.Ha();
    }
  }, {
    key: "Gl",
    value: function Gl() {
      this.dl = null;
    }
  }, {
    key: "Xi",
    value: function Xi() {
      return this.bl;
    }
  }, {
    key: "Wl",
    value: function Wl(t) {
      this.hl = t;
    }
  }, {
    key: "zl",
    value: function zl() {
      return this.Dl() ? this.ys.scaleMargins.bottom * this.$t() + this.ll : this.ys.scaleMargins.top * this.$t() + this.al;
    }
  }, {
    key: "Ll",
    value: function Ll() {
      return this.Dl() ? this.ys.scaleMargins.top * this.$t() + this.al : this.ys.scaleMargins.bottom * this.$t() + this.ll;
    }
  }, {
    key: "Ol",
    value: function Ol() {
      this.nl.el || (this.nl.el = true, this.uo());
    }
  }, {
    key: "kl",
    value: function kl() {
      this.il = null;
    }
  }, {
    key: "Cl",
    value: function Cl(t, i) {
      if (this.Ol(), this.Ki()) return 0;
      t = this.Ga() && t ? ai(t, this.ml) : t;
      var s = u(this.Qe()),
        n = this.Ll() + (this.El() - 1) * (t - s.$e()) / s.Ye();
      return this.Fl(n);
    }
  }, {
    key: "xl",
    value: function xl(t, i) {
      if (this.Ol(), this.Ki()) return 0;
      var s = this.Fl(t),
        n = u(this.Qe()),
        e = n.$e() + n.Ye() * ((s - this.Ll()) / (this.El() - 1));
      return this.Ga() ? li(e, this.ml) : e;
    }
  }, {
    key: "Il",
    value: function Il() {
      this.fl = null, this.Sl.Ha();
    }
  }, {
    key: "uo",
    value: function uo() {
      if (this.Tl() && !this.Pl()) return;
      var t = this.nl.rl;
      if (null === t) return;
      var i = null;
      var s = this.oo();
      var n = 0,
        e = 0;
      var _iterator1 = _createForOfIteratorHelper(s),
        _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          var _r7 = _step1.value;
          if (!_r7.Vt()) continue;
          var _s12 = _r7.zt();
          if (null === _s12) continue;
          var _h4 = _r7.Mh(t.Uh(), t.bi());
          var _a7 = _h4 && _h4.Qe();
          if (null !== _a7) {
            switch (this.ys.mode) {
              case 1:
                _a7 = oi(_a7, this.ml);
                break;
              case 2:
                _a7 = ei(_a7, _s12.Ft);
                break;
              case 3:
                _a7 = hi(_a7, _s12.Ft);
            }
            if (i = null === i ? _a7 : i.vn(u(_a7)), null !== _h4) {
              var _t26 = _h4.tr();
              null !== _t26 && (n = Math.max(n, _t26.above), e = Math.max(e, _t26.below));
            }
          }
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      if (this.qa() && (n = Math.max(n, this.ja()), e = Math.max(e, this.ja())), n === this.al && e === this.ll || (this.al = n, this.ll = e, this.fl = null, this.kl()), null !== i) {
        if (i.$e() === i.qe()) {
          var _t24 = this.cl,
            _s10 = 5 * (null === _t24 || this.Le() || this.Rl() ? 1 : _t24.ea());
          this.Ga() && (i = _i(i, this.ml)), i = new vt(i.$e() - _s10, i.qe() + _s10), this.Ga() && (i = oi(i, this.ml));
        }
        if (this.Ga()) {
          var _t25 = _i(i, this.ml),
            _s11 = ui(_t25);
          if (r = _s11, h = this.ml, r.Ia !== h.Ia || r.Ba !== h.Ba) {
            var _n5 = null !== this.sl ? _i(this.sl, this.ml) : null;
            this.ml = _s11, i = oi(_t25, _s11), null !== _n5 && (this.sl = oi(_n5, _s11));
          }
        }
        this.Vl(i);
      } else null === this.Ge && (this.Vl(new vt(-0.5, .5)), this.ml = ui(null));
      var r, h;
    }
  }, {
    key: "Ul",
    value: function Ul() {
      var _this26 = this;
      return this.Le() ? ni : this.Rl() ? ri : this.Ga() ? function (t) {
        return ai(t, _this26.ml);
      } : null;
    }
  }, {
    key: "co",
    value: function co(t, i, s) {
      return void 0 === i ? (void 0 === s && (s = this.ra()), s.format(t)) : i(t);
    }
  }, {
    key: "nr",
    value: function nr(t, i) {
      return this.co(t, this.Ml.priceFormatter, i);
    }
  }, {
    key: "lo",
    value: function lo(t, i) {
      return this.co(t, this.Ml.percentageFormatter, i);
    }
  }]);
}();
function gi(t) {
  return t instanceof Yt;
}
var Mi = /*#__PURE__*/function () {
  function Mi(t, i) {
    _classCallCheck(this, Mi);
    this.ul = [], this["do"] = new Map(), this.tl = 0, this.fo = 0, this.po = 1e3, this.dl = null, this.vo = new d(), this.kh = [], this.uh = t, this.ts = i, this.mo = new ii(this);
    var s = i.N();
    this.wo = this.Mo("left", s.leftPriceScale), this.bo = this.Mo("right", s.rightPriceScale), this.wo.Bl().i(this.So.bind(this, this.wo), this), this.bo.Bl().i(this.So.bind(this, this.bo), this), this.xo(s);
  }
  return _createClass(Mi, [{
    key: "xo",
    value: function xo(t) {
      if (t.leftPriceScale && this.wo.hr(t.leftPriceScale), t.rightPriceScale && this.bo.hr(t.rightPriceScale), t.localization && (this.wo.ga(), this.bo.ga()), t.overlayPriceScales) {
        var _i18 = Array.from(this["do"].values());
        for (var _i20 = 0, _i19 = _i18; _i20 < _i19.length; _i20++) {
          var _s13 = _i19[_i20];
          var _i21 = u(_s13[0].Wt());
          _i21.hr(t.overlayPriceScales), t.localization && _i21.ga();
        }
      }
    }
  }, {
    key: "Co",
    value: function Co(t) {
      switch (t) {
        case "left":
          return this.wo;
        case "right":
          return this.bo;
      }
      return this["do"].has(t) ? _(this["do"].get(t))[0].Wt() : null;
    }
  }, {
    key: "m",
    value: function m() {
      this.Qt().yo().u(this), this.wo.Bl().u(this), this.bo.Bl().u(this), this.ul.forEach(function (t) {
        t.m && t.m();
      }), this.kh = this.kh.filter(function (t) {
        var i = t.oh();
        return i.detached && i.detached(), false;
      }), this.vo.p();
    }
  }, {
    key: "ko",
    value: function ko() {
      return this.po;
    }
  }, {
    key: "Po",
    value: function Po(t) {
      this.po = t;
    }
  }, {
    key: "Qt",
    value: function Qt() {
      return this.ts;
    }
  }, {
    key: "Qi",
    value: function Qi() {
      return this.fo;
    }
  }, {
    key: "$t",
    value: function $t() {
      return this.tl;
    }
  }, {
    key: "To",
    value: function To(t) {
      this.fo = t, this.Ro();
    }
  }, {
    key: "Al",
    value: function Al(t) {
      var _this27 = this;
      this.tl = t, this.wo.Al(t), this.bo.Al(t), this.ul.forEach(function (i) {
        if (_this27.Un(i)) {
          var _s14 = i.Wt();
          null !== _s14 && _s14.Al(t);
        }
      }), this.Ro();
    }
  }, {
    key: "Do",
    value: function Do() {
      return this.ul.filter(gi);
    }
  }, {
    key: "ba",
    value: function ba() {
      return this.ul;
    }
  }, {
    key: "Un",
    value: function Un(t) {
      var i = t.Wt();
      return null === i || this.wo !== i && this.bo !== i;
    }
  }, {
    key: "Zl",
    value: function Zl(t, i, s) {
      this.Vo(t, i, s ? t.hs() : this.ul.length);
    }
  }, {
    key: "Jl",
    value: function Jl(t, i) {
      var s = this.ul.indexOf(t);
      o(-1 !== s, "removeDataSource: invalid data source"), this.ul.splice(s, 1), i || this.ul.forEach(function (t, i) {
        return t.ls(i);
      });
      var n = u(t.Wt()).wa();
      if (this["do"].has(n)) {
        var _i22 = _(this["do"].get(n)),
          _s15 = _i22.indexOf(t);
        -1 !== _s15 && (_i22.splice(_s15, 1), 0 === _i22.length && this["do"]["delete"](n));
      }
      var e = t.Wt();
      e && e.ba().indexOf(t) >= 0 && (e.Jl(t), this.Io(e)), this.dl = null;
    }
  }, {
    key: "qn",
    value: function qn(t) {
      return t === this.wo ? "left" : t === this.bo ? "right" : "overlay";
    }
  }, {
    key: "Bo",
    value: function Bo() {
      return this.wo;
    }
  }, {
    key: "Ao",
    value: function Ao() {
      return this.bo;
    }
  }, {
    key: "Eo",
    value: function Eo(t, i) {
      t.so(i);
    }
  }, {
    key: "zo",
    value: function zo(t, i) {
      t.no(i), this.Ro();
    }
  }, {
    key: "Lo",
    value: function Lo(t) {
      t.eo();
    }
  }, {
    key: "Oo",
    value: function Oo(t, i) {
      t.ro(i);
    }
  }, {
    key: "No",
    value: function No(t, i) {
      t.ho(i), this.Ro();
    }
  }, {
    key: "Wo",
    value: function Wo(t) {
      t.ao();
    }
  }, {
    key: "Ro",
    value: function Ro() {
      this.ul.forEach(function (t) {
        t.Ns();
      });
    }
  }, {
    key: "Ps",
    value: function Ps() {
      var t = null;
      return this.ts.N().rightPriceScale.visible && 0 !== this.bo.ba().length ? t = this.bo : this.ts.N().leftPriceScale.visible && 0 !== this.wo.ba().length ? t = this.wo : 0 !== this.ul.length && (t = this.ul[0].Wt()), null === t && (t = this.bo), t;
    }
  }, {
    key: "$n",
    value: function $n() {
      var t = null;
      return this.ts.N().rightPriceScale.visible ? t = this.bo : this.ts.N().leftPriceScale.visible && (t = this.wo), t;
    }
  }, {
    key: "Io",
    value: function Io(t) {
      null !== t && t.Pl() && this.Fo(t);
    }
  }, {
    key: "Ho",
    value: function Ho(t) {
      var i = this.uh.ye();
      t.yl({
        sn: true
      }), null !== i && t._o(i), this.Ro();
    }
  }, {
    key: "Uo",
    value: function Uo() {
      this.Fo(this.wo), this.Fo(this.bo);
    }
  }, {
    key: "$o",
    value: function $o() {
      var _this28 = this;
      this.Io(this.wo), this.Io(this.bo), this.ul.forEach(function (t) {
        _this28.Un(t) && _this28.Io(t.Wt());
      }), this.Ro(), this.ts.ar();
    }
  }, {
    key: "Dt",
    value: function Dt() {
      return null === this.dl && (this.dl = fi(this.ul)), this.dl;
    }
  }, {
    key: "qo",
    value: function qo(t, i) {
      i = Zt(i, 0, this.ul.length - 1);
      var s = this.ul.indexOf(t);
      o(-1 !== s, "setSeriesOrder: invalid data source"), this.ul.splice(s, 1), this.ul.splice(i, 0, t), this.ul.forEach(function (t, i) {
        return t.ls(i);
      }), this.dl = null;
      for (var _i23 = 0, _arr = [this.wo, this.bo]; _i23 < _arr.length; _i23++) {
        var _t27 = _arr[_i23];
        _t27.Gl(), _t27.ga();
      }
      this.ts.ar();
    }
  }, {
    key: "It",
    value: function It() {
      return this.Dt().filter(gi);
    }
  }, {
    key: "Yo",
    value: function Yo() {
      return this.vo;
    }
  }, {
    key: "jo",
    value: function jo() {
      return this.mo;
    }
  }, {
    key: "ua",
    value: function ua(t) {
      this.kh.push(new At(t));
    }
  }, {
    key: "ca",
    value: function ca(t) {
      this.kh = this.kh.filter(function (i) {
        return i.oh() !== t;
      }), t.detached && t.detached(), this.ts.ar();
    }
  }, {
    key: "Ko",
    value: function Ko() {
      return this.kh;
    }
  }, {
    key: "sa",
    value: function sa(t, i) {
      return this.kh.map(function (s) {
        return s.jn(t, i);
      }).filter(function (t) {
        return null !== t;
      });
    }
  }, {
    key: "Fo",
    value: function Fo(t) {
      var i = t.oo();
      if (i && i.length > 0 && !this.uh.Ki()) {
        var _i24 = this.uh.ye();
        null !== _i24 && t._o(_i24);
      }
      t.Ns();
    }
  }, {
    key: "Vo",
    value: function Vo(t, i, s) {
      var n = this.Co(i);
      if (null === n && (n = this.Mo(i, this.ts.N().overlayPriceScales)), this.ul.splice(s, 0, t), !Z(i)) {
        var _s16 = this["do"].get(i) || [];
        _s16.push(t), this["do"].set(i, _s16);
      }
      t.ls(s), n.Zl(t), t._s(n), this.Io(n), this.dl = null;
    }
  }, {
    key: "So",
    value: function So(t, i, s) {
      i.ie !== s.ie && this.Fo(t);
    }
  }, {
    key: "Mo",
    value: function Mo(t, i) {
      var s = _objectSpread2({
          visible: true,
          autoScale: true
        }, g(i)),
        n = new wi(t, s, this.ts.N().layout, this.ts.N().localization, this.ts.Xi());
      return n.Al(this.$t()), n;
    }
  }]);
}();
function bi(t) {
  return {
    Xo: t.Xo,
    Zo: {
      Kn: t.Go.externalId
    },
    Jo: t.Go.cursorStyle
  };
}
function Si(t, i, s, n) {
  var _iterator10 = _createForOfIteratorHelper(t),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var _e8 = _step10.value;
      var _t28 = _e8.Tt(n);
      if (null !== _t28 && _t28.jn) {
        var _n6 = _t28.jn(i, s);
        if (null !== _n6) return {
          Qo: _e8,
          Zo: _n6
        };
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  return null;
}
function xi(t) {
  return void 0 !== t.Ws;
}
function Ci(t, i, s) {
  var n = [t].concat(_toConsumableArray(t.Dt())),
    e = function (t, i, s) {
      var n, e;
      var _iterator11 = _createForOfIteratorHelper(t),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _a8$sa, _a8$sa2;
          var _a8 = _step11.value;
          var _t29 = (_a8$sa = (_a8$sa2 = _a8.sa) === null || _a8$sa2 === void 0 ? void 0 : _a8$sa2.call(_a8, i, s)) !== null && _a8$sa !== void 0 ? _a8$sa : [];
          var _iterator12 = _createForOfIteratorHelper(_t29),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _n7;
              var _i25 = _step12.value;
              r = _i25.zOrder, h = (_n7 = n) === null || _n7 === void 0 ? void 0 : _n7.zOrder, (!h || "top" === r && "top" !== h || "normal" === r && "bottom" === h) && (n = _i25, e = _a8);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      var r, h;
      return n && e ? {
        Go: n,
        Xo: e
      } : null;
    }(n, i, s);
  if ("top" === (e === null || e === void 0 ? void 0 : e.Go.zOrder)) return bi(e);
  var _iterator13 = _createForOfIteratorHelper(n),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var _r8 = _step13.value;
      if (e && e.Xo === _r8 && "bottom" !== e.Go.zOrder && !e.Go.isBackground) return bi(e);
      if (xi(_r8)) {
        var _n8 = Si(_r8.Ws(t), i, s, t);
        if (null !== _n8) return {
          Xo: _r8,
          Qo: _n8.Qo,
          Zo: _n8.Zo
        };
      }
      if (e && e.Xo === _r8 && "bottom" !== e.Go.zOrder && e.Go.isBackground) return bi(e);
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
  return e !== null && e !== void 0 && e.Go ? bi(e) : null;
}
var yi = /*#__PURE__*/function () {
  function yi(t, i) {
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
    _classCallCheck(this, yi);
    this.kn = 0, this.Pn = 1, this.Tn = 1, this.Dn = new Map(), this.Rn = new Map(), this.t_ = t, this.i_ = i, this.Vn = s;
  }
  return _createClass(yi, [{
    key: "s_",
    value: function s_(t) {
      var i = t.time,
        s = this.i_.cacheKey(i),
        n = this.Dn.get(s);
      if (void 0 !== n) return n.n_;
      if (this.kn === this.Vn) {
        var _t30 = this.Rn.get(this.Tn);
        this.Rn["delete"](this.Tn), this.Dn["delete"](_(_t30)), this.Tn++, this.kn--;
      }
      var e = this.t_(t);
      return this.Dn.set(s, {
        n_: e,
        En: this.Pn
      }), this.Rn.set(this.Pn, s), this.kn++, this.Pn++, e;
    }
  }]);
}();
var ki = /*#__PURE__*/function () {
  function ki(t, i) {
    _classCallCheck(this, ki);
    o(t <= i, "right should be >= left"), this.e_ = t, this.r_ = i;
  }
  return _createClass(ki, [{
    key: "Uh",
    value: function Uh() {
      return this.e_;
    }
  }, {
    key: "bi",
    value: function bi() {
      return this.r_;
    }
  }, {
    key: "h_",
    value: function h_() {
      return this.r_ - this.e_ + 1;
    }
  }, {
    key: "Te",
    value: function Te(t) {
      return this.e_ <= t && t <= this.r_;
    }
  }, {
    key: "He",
    value: function He(t) {
      return this.e_ === t.Uh() && this.r_ === t.bi();
    }
  }]);
}();
function Pi(t, i) {
  return null === t || null === i ? t === i : t.He(i);
}
var Ti = /*#__PURE__*/function () {
  function Ti() {
    _classCallCheck(this, Ti);
    this.a_ = new Map(), this.Dn = null, this.l_ = false;
  }
  return _createClass(Ti, [{
    key: "o_",
    value: function o_(t) {
      this.l_ = t, this.Dn = null;
    }
  }, {
    key: "__",
    value: function __(t, i) {
      this.u_(i), this.Dn = null;
      for (var _s17 = i; _s17 < t.length; ++_s17) {
        var _i26 = t[_s17];
        var _n9 = this.a_.get(_i26.timeWeight);
        void 0 === _n9 && (_n9 = [], this.a_.set(_i26.timeWeight, _n9)), _n9.push({
          index: _s17,
          time: _i26.time,
          weight: _i26.timeWeight,
          originalTime: _i26.originalTime
        });
      }
    }
  }, {
    key: "c_",
    value: function c_(t, i, s, n, e) {
      var r = Math.ceil(i / t);
      return null !== this.Dn && this.Dn.d_ === r && e === this.Dn.f_ && s === this.Dn.p_ || (this.Dn = {
        f_: e,
        p_: s,
        Va: this.v_(r, s, n),
        d_: r
      }), this.Dn.Va;
    }
  }, {
    key: "u_",
    value: function u_(t) {
      if (0 === t) return void this.a_.clear();
      var i = [];
      this.a_.forEach(function (s, n) {
        t <= s[0].index ? i.push(n) : s.splice(yt(s, t, function (i) {
          return i.index < t;
        }), 1 / 0);
      });
      for (var _i28 = 0, _i27 = i; _i28 < _i27.length; _i28++) {
        var _t31 = _i27[_i28];
        this.a_["delete"](_t31);
      }
    }
  }, {
    key: "v_",
    value: function v_(t, i, s) {
      var n = [];
      var e = function e(t) {
        return !i || s.has(t.index);
      };
      var _iterator14 = _createForOfIteratorHelper(Array.from(this.a_.keys()).sort(function (t, i) {
          return i - t;
        })),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _i29 = _step14.value;
          if (!this.a_.get(_i29)) continue;
          var _s18 = n;
          n = [];
          var _r9 = _s18.length;
          var _h5 = 0;
          var _a9 = _(this.a_.get(_i29)),
            _l3 = _a9.length;
          var _o3 = 1 / 0,
            _u3 = -1 / 0;
          for (var _i30 = 0; _i30 < _l3; _i30++) {
            var _l4 = _a9[_i30],
              _6 = _l4.index;
            for (; _h5 < _r9;) {
              var _t32 = _s18[_h5],
                _i31 = _t32.index;
              if (!(_i31 < _6 && e(_t32))) {
                _o3 = _i31;
                break;
              }
              _h5++, n.push(_t32), _u3 = _i31, _o3 = 1 / 0;
            }
            if (_o3 - _6 >= t && _6 - _u3 >= t && e(_l4)) n.push(_l4), _u3 = _6;else if (this.l_) return _s18;
          }
          for (; _h5 < _r9; _h5++) e(_s18[_h5]) && n.push(_s18[_h5]);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
      return n;
    }
  }]);
}();
var Ri = /*#__PURE__*/function () {
  function Ri(t) {
    _classCallCheck(this, Ri);
    this.m_ = t;
  }
  return _createClass(Ri, [{
    key: "w_",
    value: function w_() {
      return null === this.m_ ? null : new ki(Math.floor(this.m_.Uh()), Math.ceil(this.m_.bi()));
    }
  }, {
    key: "g_",
    value: function g_() {
      return this.m_;
    }
  }], [{
    key: "M_",
    value: function M_() {
      return new Ri(null);
    }
  }]);
}();
var Vi = /*#__PURE__*/function () {
  function Vi(t, i, s, n) {
    _classCallCheck(this, Vi);
    this.fo = 0, this.b_ = null, this.S_ = [], this.vl = null, this.pl = null, this.x_ = new Ti(), this.C_ = new Map(), this.y_ = Ri.M_(), this.k_ = true, this.P_ = new d(), this.T_ = new d(), this.R_ = new d(), this.D_ = null, this.V_ = null, this.I_ = new Map(), this.B_ = -1, this.A_ = [], this.ys = i, this.Ml = s, this.E_ = i.rightOffset, this.z_ = i.barSpacing, this.ts = t, this.i_ = n, this.L_(), this.x_.o_(i.uniformDistribution), this.O_();
  }
  return _createClass(Vi, [{
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "N_",
    value: function N_(t) {
      f(this.Ml, t), this.W_(), this.L_();
    }
  }, {
    key: "hr",
    value: function hr(t, i) {
      var _t$barSpacing;
      f(this.ys, t), this.ys.fixLeftEdge && this.F_(), this.ys.fixRightEdge && this.H_(), void 0 !== t.barSpacing && this.ts.dn(t.barSpacing), void 0 !== t.rightOffset && this.ts.fn(t.rightOffset), void 0 === t.minBarSpacing && void 0 === t.maxBarSpacing || this.ts.dn((_t$barSpacing = t.barSpacing) !== null && _t$barSpacing !== void 0 ? _t$barSpacing : this.z_), void 0 !== t.ignoreWhitespaceIndices && t.ignoreWhitespaceIndices !== this.ys.ignoreWhitespaceIndices && this.O_(), this.W_(), this.L_(), this.R_.p();
    }
  }, {
    key: "Rs",
    value: function Rs(t) {
      var _this$S_$t$time, _this$S_$t;
      return (_this$S_$t$time = (_this$S_$t = this.S_[t]) === null || _this$S_$t === void 0 ? void 0 : _this$S_$t.time) !== null && _this$S_$t$time !== void 0 ? _this$S_$t$time : null;
    }
  }, {
    key: "ss",
    value: function ss(t) {
      var _this$S_$t2;
      return (_this$S_$t2 = this.S_[t]) !== null && _this$S_$t2 !== void 0 ? _this$S_$t2 : null;
    }
  }, {
    key: "U_",
    value: function U_(t, i) {
      var _this29 = this;
      if (this.S_.length < 1) return null;
      if (this.i_.key(t) > this.i_.key(this.S_[this.S_.length - 1].time)) return i ? this.S_.length - 1 : null;
      var s = yt(this.S_, this.i_.key(t), function (t, i) {
        return _this29.i_.key(t.time) < i;
      });
      return this.i_.key(t) < this.i_.key(this.S_[s].time) ? i ? s : null : s;
    }
  }, {
    key: "Ki",
    value: function Ki() {
      return 0 === this.fo || 0 === this.S_.length || null === this.b_;
    }
  }, {
    key: "q_",
    value: function q_() {
      return this.S_.length > 0;
    }
  }, {
    key: "ye",
    value: function ye() {
      return this.Y_(), this.y_.w_();
    }
  }, {
    key: "j_",
    value: function j_() {
      return this.Y_(), this.y_.g_();
    }
  }, {
    key: "K_",
    value: function K_() {
      var t = this.ye();
      if (null === t) return null;
      var i = {
        from: t.Uh(),
        to: t.bi()
      };
      return this.X_(i);
    }
  }, {
    key: "X_",
    value: function X_(t) {
      var i = Math.round(t.from),
        s = Math.round(t.to),
        n = u(this.Z_()),
        e = u(this.G_());
      return {
        from: u(this.ss(Math.max(n, i))),
        to: u(this.ss(Math.min(e, s)))
      };
    }
  }, {
    key: "J_",
    value: function J_(t) {
      return {
        from: u(this.U_(t.from, true)),
        to: u(this.U_(t.to, true))
      };
    }
  }, {
    key: "Qi",
    value: function Qi() {
      return this.fo;
    }
  }, {
    key: "To",
    value: function To(t) {
      if (!isFinite(t) || t <= 0) return;
      if (this.fo === t) return;
      var i = this.j_(),
        s = this.fo;
      if (this.fo = t, this.k_ = true, this.ys.lockVisibleTimeRangeOnResize && 0 !== s) {
        var _i32 = this.z_ * t / s;
        this.z_ = _i32;
      }
      if (this.ys.fixLeftEdge && null !== i && i.Uh() <= 0) {
        var _i33 = s - t;
        this.E_ -= Math.round(_i33 / this.z_) + 1, this.k_ = true;
      }
      this.Q_(), this.tu();
    }
  }, {
    key: "qt",
    value: function qt(t) {
      if (this.Ki() || !v(t)) return 0;
      var i = this.iu() + this.E_ - t;
      return this.fo - (i + .5) * this.z_ - 1;
    }
  }, {
    key: "su",
    value: function su(t, i) {
      var s = this.iu(),
        n = void 0 === i ? 0 : i.from,
        e = void 0 === i ? t.length : i.to;
      for (var _i34 = n; _i34 < e; _i34++) {
        var _n0 = t[_i34].wt,
          _e9 = s + this.E_ - _n0,
          _r0 = this.fo - (_e9 + .5) * this.z_ - 1;
        t[_i34]._t = _r0;
      }
    }
  }, {
    key: "nu",
    value: function nu(t, i) {
      var s = Math.ceil(this.eu(t));
      return i && this.ys.ignoreWhitespaceIndices && !this.ru(s) ? this.hu(s) : s;
    }
  }, {
    key: "fn",
    value: function fn(t) {
      this.k_ = true, this.E_ = t, this.tu(), this.ts.au(), this.ts.ar();
    }
  }, {
    key: "lu",
    value: function lu() {
      return this.z_;
    }
  }, {
    key: "dn",
    value: function dn(t) {
      this.ou(t), this.tu(), this.ts.au(), this.ts.ar();
    }
  }, {
    key: "_u",
    value: function _u() {
      return this.E_;
    }
  }, {
    key: "Va",
    value: function Va() {
      if (this.Ki()) return null;
      if (null !== this.V_) return this.V_;
      var t = this.z_,
        i = 5 * (this.ts.N().layout.fontSize + 4) / 8 * (this.ys.tickMarkMaxCharacterLength || 8),
        s = Math.round(i / t),
        n = u(this.ye()),
        e = Math.max(n.Uh(), n.Uh() - s),
        r = Math.max(n.bi(), n.bi() - s),
        h = this.x_.c_(t, i, this.ys.ignoreWhitespaceIndices, this.I_, this.B_),
        a = this.Z_() + s,
        l = this.G_() - s,
        o = this.uu(),
        _ = this.ys.fixLeftEdge || o,
        c = this.ys.fixRightEdge || o;
      var d = 0;
      var _iterator15 = _createForOfIteratorHelper(h),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _t33 = _step15.value;
          if (!(e <= _t33.index && _t33.index <= r)) continue;
          var _s19 = void 0;
          d < this.A_.length ? (_s19 = this.A_[d], _s19.coord = this.qt(_t33.index), _s19.label = this.cu(_t33), _s19.weight = _t33.weight) : (_s19 = {
            needAlignCoordinate: !1,
            coord: this.qt(_t33.index),
            label: this.cu(_t33),
            weight: _t33.weight
          }, this.A_.push(_s19)), this.z_ > i / 2 && !o ? _s19.needAlignCoordinate = !1 : _s19.needAlignCoordinate = _ && _t33.index <= a || c && _t33.index >= l, d++;
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      return this.A_.length = d, this.V_ = this.A_, this.A_;
    }
  }, {
    key: "du",
    value: function du() {
      this.k_ = true, this.dn(this.ys.barSpacing), this.fn(this.ys.rightOffset);
    }
  }, {
    key: "fu",
    value: function fu(t) {
      this.k_ = true, this.b_ = t, this.tu(), this.F_();
    }
  }, {
    key: "pu",
    value: function pu(t, i) {
      var s = this.eu(t),
        n = this.lu(),
        e = n + i * (n / 10);
      this.dn(e), this.ys.rightBarStaysOnScroll || this.fn(this._u() + (s - this.eu(t)));
    }
  }, {
    key: "so",
    value: function so(t) {
      this.vl && this.ao(), null === this.pl && null === this.D_ && (this.Ki() || (this.pl = t, this.vu()));
    }
  }, {
    key: "no",
    value: function no(t) {
      if (null === this.D_) return;
      var i = Zt(this.fo - t, 0, this.fo),
        s = Zt(this.fo - u(this.pl), 0, this.fo);
      0 !== i && 0 !== s && this.dn(this.D_.lu * i / s);
    }
  }, {
    key: "eo",
    value: function eo() {
      null !== this.pl && (this.pl = null, this.mu());
    }
  }, {
    key: "ro",
    value: function ro(t) {
      null === this.vl && null === this.D_ && (this.Ki() || (this.vl = t, this.vu()));
    }
  }, {
    key: "ho",
    value: function ho(t) {
      if (null === this.vl) return;
      var i = (this.vl - t) / this.lu();
      this.E_ = u(this.D_)._u + i, this.k_ = true, this.tu();
    }
  }, {
    key: "ao",
    value: function ao() {
      null !== this.vl && (this.vl = null, this.mu());
    }
  }, {
    key: "wu",
    value: function wu() {
      this.gu(this.ys.rightOffset);
    }
  }, {
    key: "gu",
    value: function gu(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
      if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
      if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
      var s = this.E_,
        n = performance.now();
      this.ts._n({
        Mu: function Mu(t) {
          return (t - n) / i >= 1;
        },
        bu: function bu(e) {
          var r = (e - n) / i;
          return r >= 1 ? t : s + (t - s) * r;
        }
      });
    }
  }, {
    key: "kt",
    value: function kt(t, i) {
      this.k_ = true, this.S_ = t, this.x_.__(t, i), this.tu();
    }
  }, {
    key: "Su",
    value: function Su() {
      return this.P_;
    }
  }, {
    key: "xu",
    value: function xu() {
      return this.T_;
    }
  }, {
    key: "Cu",
    value: function Cu() {
      return this.R_;
    }
  }, {
    key: "iu",
    value: function iu() {
      return this.b_ || 0;
    }
  }, {
    key: "yu",
    value: function yu(t) {
      var i = t.h_();
      this.ou(this.fo / i), this.E_ = t.bi() - this.iu(), this.tu(), this.k_ = true, this.ts.au(), this.ts.ar();
    }
  }, {
    key: "ku",
    value: function ku() {
      var t = this.Z_(),
        i = this.G_();
      null !== t && null !== i && this.yu(new ki(t, i + this.ys.rightOffset));
    }
  }, {
    key: "Pu",
    value: function Pu(t) {
      var i = new ki(t.from, t.to);
      this.yu(i);
    }
  }, {
    key: "ns",
    value: function ns(t) {
      return void 0 !== this.Ml.timeFormatter ? this.Ml.timeFormatter(t.originalTime) : this.i_.formatHorzItem(t.time);
    }
  }, {
    key: "O_",
    value: function O_() {
      if (!this.ys.ignoreWhitespaceIndices) return;
      this.I_.clear();
      var t = this.ts.js();
      var _iterator16 = _createForOfIteratorHelper(t),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _i35 = _step16.value;
          var _iterator17 = _createForOfIteratorHelper(_i35.ma()),
            _step17;
          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _t34 = _step17.value;
              this.I_.set(_t34, !0);
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
      this.B_++;
    }
  }, {
    key: "uu",
    value: function uu() {
      var t = this.ts.N().handleScroll,
        i = this.ts.N().handleScale;
      return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch);
    }
  }, {
    key: "Z_",
    value: function Z_() {
      return 0 === this.S_.length ? null : 0;
    }
  }, {
    key: "G_",
    value: function G_() {
      return 0 === this.S_.length ? null : this.S_.length - 1;
    }
  }, {
    key: "Tu",
    value: function Tu(t) {
      return (this.fo - 1 - t) / this.z_;
    }
  }, {
    key: "eu",
    value: function eu(t) {
      var i = this.Tu(t),
        s = this.iu() + this.E_ - i;
      return Math.round(1e6 * s) / 1e6;
    }
  }, {
    key: "ou",
    value: function ou(t) {
      var i = this.z_;
      this.z_ = t, this.Q_(), i !== this.z_ && (this.k_ = true, this.Ru());
    }
  }, {
    key: "Y_",
    value: function Y_() {
      if (!this.k_) return;
      if (this.k_ = false, this.Ki()) return void this.Du(Ri.M_());
      var t = this.iu(),
        i = this.fo / this.z_,
        s = this.E_ + t,
        n = new ki(s - i + 1, s);
      this.Du(new Ri(n));
    }
  }, {
    key: "Q_",
    value: function Q_() {
      var t = Zt(this.z_, this.Vu(), this.Iu());
      this.z_ !== t && (this.z_ = t, this.k_ = true);
    }
  }, {
    key: "Iu",
    value: function Iu() {
      return this.ys.maxBarSpacing > 0 ? this.ys.maxBarSpacing : .5 * this.fo;
    }
  }, {
    key: "Vu",
    value: function Vu() {
      return this.ys.fixLeftEdge && this.ys.fixRightEdge && 0 !== this.S_.length ? this.fo / this.S_.length : this.ys.minBarSpacing;
    }
  }, {
    key: "tu",
    value: function tu() {
      var t = this.Bu();
      null !== t && this.E_ < t && (this.E_ = t, this.k_ = true);
      var i = this.Au();
      this.E_ > i && (this.E_ = i, this.k_ = true);
    }
  }, {
    key: "Bu",
    value: function Bu() {
      var t = this.Z_(),
        i = this.b_;
      if (null === t || null === i) return null;
      return t - i - 1 + (this.ys.fixLeftEdge ? this.fo / this.z_ : Math.min(2, this.S_.length));
    }
  }, {
    key: "Au",
    value: function Au() {
      return this.ys.fixRightEdge ? 0 : this.fo / this.z_ - Math.min(2, this.S_.length);
    }
  }, {
    key: "vu",
    value: function vu() {
      this.D_ = {
        lu: this.lu(),
        _u: this._u()
      };
    }
  }, {
    key: "mu",
    value: function mu() {
      this.D_ = null;
    }
  }, {
    key: "cu",
    value: function cu(t) {
      var _this30 = this;
      var i = this.C_.get(t.weight);
      return void 0 === i && (i = new yi(function (t) {
        return _this30.Eu(t);
      }, this.i_), this.C_.set(t.weight, i)), i.s_(t);
    }
  }, {
    key: "Eu",
    value: function Eu(t) {
      return this.i_.formatTickmark(t, this.Ml);
    }
  }, {
    key: "Du",
    value: function Du(t) {
      var i = this.y_;
      this.y_ = t, Pi(i.w_(), this.y_.w_()) || this.P_.p(), Pi(i.g_(), this.y_.g_()) || this.T_.p(), this.Ru();
    }
  }, {
    key: "Ru",
    value: function Ru() {
      this.V_ = null;
    }
  }, {
    key: "W_",
    value: function W_() {
      this.Ru(), this.C_.clear();
    }
  }, {
    key: "L_",
    value: function L_() {
      this.i_.updateFormatter(this.Ml);
    }
  }, {
    key: "F_",
    value: function F_() {
      if (!this.ys.fixLeftEdge) return;
      var t = this.Z_();
      if (null === t) return;
      var i = this.ye();
      if (null === i) return;
      var s = i.Uh() - t;
      if (s < 0) {
        var _t35 = this.E_ - s - 1;
        this.fn(_t35);
      }
      this.Q_();
    }
  }, {
    key: "H_",
    value: function H_() {
      this.tu(), this.Q_();
    }
  }, {
    key: "ru",
    value: function ru(t) {
      return !this.ys.ignoreWhitespaceIndices || this.I_.get(t) || false;
    }
  }, {
    key: "hu",
    value: function hu(t) {
      var i = /*#__PURE__*/_regenerator().m(function _callee(t) {
          var i, s, n;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                i = Math.round(t), s = i < t;
                n = 1;
              case 1:
                if (!s) {
                  _context.n = 4;
                  break;
                }
                _context.n = 2;
                return i + n;
              case 2:
                _context.n = 3;
                return i - n;
              case 3:
                _context.n = 6;
                break;
              case 4:
                _context.n = 5;
                return i - n;
              case 5:
                _context.n = 6;
                return i + n;
              case 6:
                n++;
              case 7:
                _context.n = 1;
                break;
              case 8:
                return _context.a(2);
            }
          }, _callee);
        })(t),
        s = this.G_();
      for (; s;) {
        var _t36 = i.next().value;
        if (this.I_.get(_t36)) return _t36;
        if (_t36 < 0 || _t36 > s) break;
      }
      return t;
    }
  }]);
}();
var Ii, Bi, Ai, Ei, zi;
!function (t) {
  t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap";
}(Ii || (Ii = {}));
var Li = /*#__PURE__*/function () {
  function Li(t, i, s) {
    _classCallCheck(this, Li);
    this.zu = [], this.Lu = [], this.fo = 0, this.Ou = null, this.Nu = new d(), this.Wu = new d(), this.Fu = null, this.Hu = t, this.ys = i, this.i_ = s, this.bl = new P(this.ys.layout.colorParsers), this.Uu = new C(this), this.uh = new Vi(this, i.timeScale, this.ys.localization, s), this.Ct = new X(this, i.crosshair), this.$u = new Xt(i.crosshair), this.qu(0), this.zu[0].Po(2e3), this.Yu = this.ju(0), this.Ku = this.ju(1);
  }
  return _createClass(Li, [{
    key: "Bh",
    value: function Bh() {
      this.Xu(G.gn());
    }
  }, {
    key: "ar",
    value: function ar() {
      this.Xu(G.wn());
    }
  }, {
    key: "Zh",
    value: function Zh() {
      this.Xu(new G(1));
    }
  }, {
    key: "Ah",
    value: function Ah(t) {
      var i = this.Zu(t);
      this.Xu(i);
    }
  }, {
    key: "Gu",
    value: function Gu() {
      return this.Ou;
    }
  }, {
    key: "Ju",
    value: function Ju(t) {
      var _this$Ou, _this$Ou2, _t$Zo;
      if (((_this$Ou = this.Ou) === null || _this$Ou === void 0 ? void 0 : _this$Ou.Xo) === (t === null || t === void 0 ? void 0 : t.Xo) && ((_this$Ou2 = this.Ou) === null || _this$Ou2 === void 0 || (_this$Ou2 = _this$Ou2.Zo) === null || _this$Ou2 === void 0 ? void 0 : _this$Ou2.Kn) === (t === null || t === void 0 || (_t$Zo = t.Zo) === null || _t$Zo === void 0 ? void 0 : _t$Zo.Kn)) return;
      var i = this.Ou;
      this.Ou = t, null !== i && this.Ah(i.Xo), null !== t && t.Xo !== (i === null || i === void 0 ? void 0 : i.Xo) && this.Ah(t.Xo);
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "hr",
    value: function hr(t) {
      f(this.ys, t), this.zu.forEach(function (i) {
        return i.xo(t);
      }), void 0 !== t.timeScale && this.uh.hr(t.timeScale), void 0 !== t.localization && this.uh.N_(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Nu.p(), this.Yu = this.ju(0), this.Ku = this.ju(1), this.Bh();
    }
  }, {
    key: "Qu",
    value: function Qu(t, i) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var n = this.zu[s];
      if (void 0 === n) return;
      if ("left" === t) return f(this.ys, {
        leftPriceScale: i
      }), n.xo({
        leftPriceScale: i
      }), this.Nu.p(), void this.Bh();
      if ("right" === t) return f(this.ys, {
        rightPriceScale: i
      }), n.xo({
        rightPriceScale: i
      }), this.Nu.p(), void this.Bh();
      var e = this.tc(t, s);
      null !== e && (e.Wt.hr(i), this.Nu.p());
    }
  }, {
    key: "tc",
    value: function tc(t, i) {
      var s = this.zu[i];
      if (void 0 === s) return null;
      var n = s.Co(t);
      return null !== n ? {
        Us: s,
        Wt: n
      } : null;
    }
  }, {
    key: "At",
    value: function At() {
      return this.uh;
    }
  }, {
    key: "$s",
    value: function $s() {
      return this.zu;
    }
  }, {
    key: "sc",
    value: function sc() {
      return this.Ct;
    }
  }, {
    key: "nc",
    value: function nc() {
      return this.Wu;
    }
  }, {
    key: "ec",
    value: function ec(t, i) {
      t.Al(i), this.au();
    }
  }, {
    key: "To",
    value: function To(t) {
      this.fo = t, this.uh.To(this.fo), this.zu.forEach(function (i) {
        return i.To(t);
      }), this.au();
    }
  }, {
    key: "rc",
    value: function rc(t) {
      1 !== this.zu.length && (o(t >= 0 && t < this.zu.length, "Invalid pane index"), this.zu.splice(t, 1), this.Bh());
    }
  }, {
    key: "hc",
    value: function hc(t, i) {
      if (this.zu.length < 2) return;
      o(t >= 0 && t < this.zu.length, "Invalid pane index");
      var s = this.zu[t],
        n = this.zu.reduce(function (t, i) {
          return t + i.ko();
        }, 0),
        e = this.zu.reduce(function (t, i) {
          return t + i.$t();
        }, 0),
        r = e - 30 * (this.zu.length - 1);
      i = Math.min(r, Math.max(30, i));
      var h = n / e,
        a = s.$t();
      s.Po(i * h);
      var l = i - a,
        _ = this.zu.length - 1;
      var _iterator18 = _createForOfIteratorHelper(this.zu),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var _t37 = _step18.value;
          if (_t37 !== s) {
            var _i36 = Math.min(r, Math.max(30, _t37.$t() - l / _));
            l -= _t37.$t() - _i36, _ -= 1;
            var _s20 = _i36 * h;
            _t37.Po(_s20);
          }
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
      this.Bh();
    }
  }, {
    key: "ac",
    value: function ac(t, i) {
      o(t >= 0 && t < this.zu.length && i >= 0 && i < this.zu.length, "Invalid pane index");
      var s = this.zu[t],
        n = this.zu[i];
      this.zu[t] = n, this.zu[i] = s, this.Bh();
    }
  }, {
    key: "Eo",
    value: function Eo(t, i, s) {
      t.Eo(i, s);
    }
  }, {
    key: "zo",
    value: function zo(t, i, s) {
      t.zo(i, s), this.Eh(), this.Xu(this.lc(t, 2));
    }
  }, {
    key: "Lo",
    value: function Lo(t, i) {
      t.Lo(i), this.Xu(this.lc(t, 2));
    }
  }, {
    key: "Oo",
    value: function Oo(t, i, s) {
      i.Pl() || t.Oo(i, s);
    }
  }, {
    key: "No",
    value: function No(t, i, s) {
      i.Pl() || (t.No(i, s), this.Eh(), this.Xu(this.lc(t, 2)));
    }
  }, {
    key: "Wo",
    value: function Wo(t, i) {
      i.Pl() || (t.Wo(i), this.Xu(this.lc(t, 2)));
    }
  }, {
    key: "Ho",
    value: function Ho(t, i) {
      t.Ho(i), this.Xu(this.lc(t, 2));
    }
  }, {
    key: "oc",
    value: function oc(t) {
      this.uh.so(t);
    }
  }, {
    key: "_c",
    value: function _c(t, i) {
      var s = this.At();
      if (s.Ki() || 0 === i) return;
      var n = s.Qi();
      t = Math.max(1, Math.min(t, n)), s.pu(t, i), this.au();
    }
  }, {
    key: "uc",
    value: function uc(t) {
      this.cc(0), this.dc(t), this.fc();
    }
  }, {
    key: "vc",
    value: function vc(t) {
      this.uh.no(t), this.au();
    }
  }, {
    key: "mc",
    value: function mc() {
      this.uh.eo(), this.ar();
    }
  }, {
    key: "cc",
    value: function cc(t) {
      this.uh.ro(t);
    }
  }, {
    key: "dc",
    value: function dc(t) {
      this.uh.ho(t), this.au();
    }
  }, {
    key: "fc",
    value: function fc() {
      this.uh.ao(), this.ar();
    }
  }, {
    key: "js",
    value: function js() {
      return this.Lu;
    }
  }, {
    key: "wc",
    value: function wc(t, i, s, n, e) {
      this.Ct.Vs(t, i);
      var r = NaN,
        h = this.uh.nu(t, true);
      var a = this.uh.ye();
      null !== a && (h = Math.min(Math.max(a.Uh(), h), a.bi()));
      var l = n.Ps(),
        o = l.zt();
      if (null !== o && (r = l.Ts(i, o)), r = this.$u.Ma(r, h, n), this.Ct.Es(h, r, n), this.Zh(), !e) {
        var _e0 = Ci(n, t, i);
        this.Ju(_e0 && {
          Xo: _e0.Xo,
          Zo: _e0.Zo,
          Jo: _e0.Jo || null
        }), this.Wu.p(this.Ct.Bt(), {
          x: t,
          y: i
        }, s);
      }
    }
  }, {
    key: "gc",
    value: function gc(t, i, s) {
      var n = s.Ps(),
        e = n.zt(),
        r = n.Nt(t, u(e)),
        h = this.uh.U_(i, true),
        a = this.uh.qt(u(h));
      this.wc(a, r, null, s, true);
    }
  }, {
    key: "Mc",
    value: function Mc(t) {
      this.sc().Ls(), this.Zh(), t || this.Wu.p(null, null, null);
    }
  }, {
    key: "Eh",
    value: function Eh() {
      var t = this.Ct.Us();
      if (null !== t) {
        var _i37 = this.Ct.Bs(),
          _s21 = this.Ct.As();
        this.wc(_i37, _s21, null, t);
      }
      this.Ct.Ns();
    }
  }, {
    key: "bc",
    value: function bc(t, i, s) {
      var n = this.uh.Rs(0);
      void 0 !== i && void 0 !== s && this.uh.kt(i, s);
      var e = this.uh.Rs(0),
        r = this.uh.iu(),
        h = this.uh.ye();
      if (null !== h && null !== n && null !== e) {
        var _i38 = h.Te(r),
          _a0 = this.i_.key(n) > this.i_.key(e),
          _l5 = null !== t && t > r && !_a0,
          _o4 = this.uh.N().allowShiftVisibleRangeOnWhitespaceReplacement,
          _7 = _i38 && (!(void 0 === s) || _o4) && this.uh.N().shiftVisibleRangeOnNewBar;
        if (_l5 && !_7) {
          var _i39 = t - r;
          this.uh.fn(this.uh._u() - _i39);
        }
      }
      this.uh.fu(t);
    }
  }, {
    key: "Lh",
    value: function Lh(t) {
      null !== t && t.$o();
    }
  }, {
    key: "Hn",
    value: function Hn(t) {
      if (function (t) {
        return t instanceof Mi;
      }(t)) return t;
      var i = this.zu.find(function (i) {
        return i.Dt().includes(t);
      });
      return void 0 === i ? null : i;
    }
  }, {
    key: "au",
    value: function au() {
      this.zu.forEach(function (t) {
        return t.$o();
      }), this.Eh();
    }
  }, {
    key: "m",
    value: function m() {
      this.zu.forEach(function (t) {
        return t.m();
      }), this.zu.length = 0, this.ys.localization.priceFormatter = void 0, this.ys.localization.percentageFormatter = void 0, this.ys.localization.timeFormatter = void 0;
    }
  }, {
    key: "Sc",
    value: function Sc() {
      return this.Uu;
    }
  }, {
    key: "Yn",
    value: function Yn() {
      return this.Uu.N();
    }
  }, {
    key: "yo",
    value: function yo() {
      return this.Nu;
    }
  }, {
    key: "xc",
    value: function xc(t, i) {
      var s = this.qu(i);
      this.Cc(t, s), this.Lu.push(t), 1 === this.Lu.length ? this.Bh() : this.ar();
    }
  }, {
    key: "yc",
    value: function yc(t) {
      var i = this.Hn(t),
        s = this.Lu.indexOf(t);
      o(-1 !== s, "Series not found");
      var n = u(i);
      this.Lu.splice(s, 1), n.Jl(t), t.m && t.m(), this.uh.O_(), this.kc(n);
    }
  }, {
    key: "Ih",
    value: function Ih(t, i) {
      var s = u(this.Hn(t));
      s.Jl(t, true), s.Zl(t, i, true);
    }
  }, {
    key: "ku",
    value: function ku() {
      var t = G.wn();
      t.rn(), this.Xu(t);
    }
  }, {
    key: "Pc",
    value: function Pc(t) {
      var i = G.wn();
      i.ln(t), this.Xu(i);
    }
  }, {
    key: "cn",
    value: function cn() {
      var t = G.wn();
      t.cn(), this.Xu(t);
    }
  }, {
    key: "dn",
    value: function dn(t) {
      var i = G.wn();
      i.dn(t), this.Xu(i);
    }
  }, {
    key: "fn",
    value: function fn(t) {
      var i = G.wn();
      i.fn(t), this.Xu(i);
    }
  }, {
    key: "_n",
    value: function _n(t) {
      var i = G.wn();
      i._n(t), this.Xu(i);
    }
  }, {
    key: "hn",
    value: function hn() {
      var t = G.wn();
      t.hn(), this.Xu(t);
    }
  }, {
    key: "Tc",
    value: function Tc() {
      return this.ys.rightPriceScale.visible ? "right" : "left";
    }
  }, {
    key: "Rc",
    value: function Rc(t, i) {
      o(i >= 0, "Index should be greater or equal to 0");
      if (i === this.Dc(t)) return;
      var s = u(this.Hn(t));
      s.Jl(t);
      var n = this.qu(i);
      this.Cc(t, n), 0 === s.ba().length && this.kc(s);
    }
  }, {
    key: "Vc",
    value: function Vc() {
      return this.Ku;
    }
  }, {
    key: "$",
    value: function $() {
      return this.Yu;
    }
  }, {
    key: "Ut",
    value: function Ut(t) {
      var i = this.Ku,
        s = this.Yu;
      if (i === s) return i;
      if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.Fu || this.Fu.mr !== s || this.Fu.wr !== i) this.Fu = {
        mr: s,
        wr: i,
        Ic: new Map()
      };else {
        var _i40 = this.Fu.Ic.get(t);
        if (void 0 !== _i40) return _i40;
      }
      var n = this.bl.tt(s, i, t / 100);
      return this.Fu.Ic.set(t, n), n;
    }
  }, {
    key: "Bc",
    value: function Bc(t) {
      return this.zu.indexOf(t);
    }
  }, {
    key: "Xi",
    value: function Xi() {
      return this.bl;
    }
  }, {
    key: "qu",
    value: function qu(t) {
      if (o(t >= 0, "Index should be greater or equal to 0"), (t = Math.min(this.zu.length, t)) < this.zu.length) return this.zu[t];
      var i = new Mi(this.uh, this);
      this.zu.push(i);
      var s = G.gn();
      return s.Qs(t, {
        tn: 0,
        sn: true
      }), this.Xu(s), i;
    }
  }, {
    key: "Dc",
    value: function Dc(t) {
      return this.zu.findIndex(function (i) {
        return i.Do().includes(t);
      });
    }
  }, {
    key: "lc",
    value: function lc(t, i) {
      var s = new G(i);
      if (null !== t) {
        var _n1 = this.zu.indexOf(t);
        s.Qs(_n1, {
          tn: i
        });
      }
      return s;
    }
  }, {
    key: "Zu",
    value: function Zu(t, i) {
      return void 0 === i && (i = 2), this.lc(this.Hn(t), i);
    }
  }, {
    key: "Xu",
    value: function Xu(t) {
      this.Hu && this.Hu(t), this.zu.forEach(function (t) {
        return t.jo().lr().kt();
      });
    }
  }, {
    key: "Cc",
    value: function Cc(t, i) {
      var s = t.N().priceScaleId,
        n = void 0 !== s ? s : this.Tc();
      i.Zl(t, n), Z(n) || t.hr(t.N());
    }
  }, {
    key: "ju",
    value: function ju(t) {
      var i = this.ys.layout;
      return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color;
    }
  }, {
    key: "kc",
    value: function kc(t) {
      0 === t.ba().length && this.zu.length > 1 && (this.zu.splice(this.Bc(t), 1), this.Bh());
    }
  }]);
}();
!function (t) {
  t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
}(Bi || (Bi = {})), function (t) {
  t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
}(Ai || (Ai = {})), function (t) {
  t.Solid = "solid", t.VerticalGradient = "gradient";
}(Ei || (Ei = {})), function (t) {
  t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
}(zi || (zi = {}));
var ss = "undefined" != typeof window;
function ns() {
  return !!ss && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function es() {
  return !!ss && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function rs(t) {
  return t + t % 2;
}
function hs(t) {
  ss && void 0 !== window.chrome && t.addEventListener("mousedown", function (t) {
    if (1 === t.button) return t.preventDefault(), false;
  });
}
var as = /*#__PURE__*/function () {
  function as(t, i, s) {
    var _this31 = this;
    _classCallCheck(this, as);
    this.Zc = 0, this.Gc = null, this.Jc = {
      _t: Number.NEGATIVE_INFINITY,
      ut: Number.POSITIVE_INFINITY
    }, this.Qc = 0, this.td = null, this.sd = {
      _t: Number.NEGATIVE_INFINITY,
      ut: Number.POSITIVE_INFINITY
    }, this.nd = null, this.ed = false, this.rd = null, this.hd = null, this.ad = false, this.ld = false, this.od = false, this._d = null, this.ud = null, this.dd = null, this.fd = null, this.pd = null, this.vd = null, this.md = null, this.wd = 0, this.gd = false, this.Md = false, this.bd = false, this.Sd = 0, this.xd = null, this.Cd = !es(), this.yd = function (t) {
      _this31.kd(t);
    }, this.Pd = function (t) {
      if (_this31.Td(t)) {
        var _i43 = _this31.Rd(t);
        if (++_this31.Qc, _this31.td && _this31.Qc > 1) {
          var _this31$Vd = _this31.Vd(_s(t), _this31.sd),
            _s24 = _this31$Vd.Dd;
          _s24 < 30 && !_this31.od && _this31.Id(_i43, _this31.Ad.Bd), _this31.Ed();
        }
      } else {
        var _i44 = _this31.Rd(t);
        if (++_this31.Zc, _this31.Gc && _this31.Zc > 1) {
          var _this31$Vd2 = _this31.Vd(_s(t), _this31.Jc),
            _s25 = _this31$Vd2.Dd;
          _s25 < 5 && !_this31.ld && _this31.zd(_i44, _this31.Ad.Ld), _this31.Od();
        }
      }
    }, this.Nd = t, this.Ad = i, this.ys = s, this.Wd();
  }
  return _createClass(as, [{
    key: "m",
    value: function m() {
      null !== this._d && (this._d(), this._d = null), null !== this.ud && (this.ud(), this.ud = null), null !== this.fd && (this.fd(), this.fd = null), null !== this.pd && (this.pd(), this.pd = null), null !== this.vd && (this.vd(), this.vd = null), null !== this.dd && (this.dd(), this.dd = null), this.Fd(), this.Od();
    }
  }, {
    key: "Hd",
    value: function Hd(t) {
      var _this32 = this;
      this.fd && this.fd();
      var i = this.Ud.bind(this);
      if (this.fd = function () {
        _this32.Nd.removeEventListener("mousemove", i);
      }, this.Nd.addEventListener("mousemove", i), this.Td(t)) return;
      var s = this.Rd(t);
      this.zd(s, this.Ad.$d), this.Cd = true;
    }
  }, {
    key: "Od",
    value: function Od() {
      null !== this.Gc && clearTimeout(this.Gc), this.Zc = 0, this.Gc = null, this.Jc = {
        _t: Number.NEGATIVE_INFINITY,
        ut: Number.POSITIVE_INFINITY
      };
    }
  }, {
    key: "Ed",
    value: function Ed() {
      null !== this.td && clearTimeout(this.td), this.Qc = 0, this.td = null, this.sd = {
        _t: Number.NEGATIVE_INFINITY,
        ut: Number.POSITIVE_INFINITY
      };
    }
  }, {
    key: "Ud",
    value: function Ud(t) {
      if (this.bd || null !== this.hd) return;
      if (this.Td(t)) return;
      var i = this.Rd(t);
      this.zd(i, this.Ad.qd), this.Cd = true;
    }
  }, {
    key: "Yd",
    value: function Yd(t) {
      var i = cs(t.changedTouches, u(this.xd));
      if (null === i) return;
      if (this.Sd = us(t), null !== this.md) return;
      if (this.Md) return;
      this.gd = true;
      var s = this.Vd(_s(i), u(this.hd)),
        n = s.jd,
        e = s.Kd,
        r = s.Dd;
      if (this.ad || !(r < 5)) {
        if (!this.ad) {
          var _t38 = .5 * n,
            _i45 = e >= _t38 && !this.ys.Xd(),
            _s26 = _t38 > e && !this.ys.Zd();
          _i45 || _s26 || (this.Md = true), this.ad = true, this.od = true, this.Fd(), this.Ed();
        }
        if (!this.Md) {
          var _s27 = this.Rd(t, i);
          this.Id(_s27, this.Ad.Gd), os(t);
        }
      }
    }
  }, {
    key: "Jd",
    value: function Jd(t) {
      if (0 !== t.button) return;
      var i = this.Vd(_s(t), u(this.rd)),
        s = i.Dd;
      if (s >= 5 && (this.ld = true, this.Od()), this.ld) {
        var _i46 = this.Rd(t);
        this.zd(_i46, this.Ad.Qd);
      }
    }
  }, {
    key: "Vd",
    value: function Vd(t, i) {
      var s = Math.abs(i._t - t._t),
        n = Math.abs(i.ut - t.ut);
      return {
        jd: s,
        Kd: n,
        Dd: s + n
      };
    }
  }, {
    key: "tf",
    value: function tf(t) {
      var i = cs(t.changedTouches, u(this.xd));
      if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
      this.xd = null, this.Sd = us(t), this.Fd(), this.hd = null, this.vd && (this.vd(), this.vd = null);
      var s = this.Rd(t, i);
      if (this.Id(s, this.Ad["if"]), ++this.Qc, this.td && this.Qc > 1) {
        var _this$Vd = this.Vd(_s(i), this.sd),
          _t39 = _this$Vd.Dd;
        _t39 < 30 && !this.od && this.Id(s, this.Ad.Bd), this.Ed();
      } else this.od || (this.Id(s, this.Ad.sf), this.Ad.sf && os(t));
      0 === this.Qc && os(t), 0 === t.touches.length && this.ed && (this.ed = false, os(t));
    }
  }, {
    key: "kd",
    value: function kd(t) {
      if (0 !== t.button) return;
      var i = this.Rd(t);
      if (this.rd = null, this.bd = false, this.pd && (this.pd(), this.pd = null), ns()) {
        this.Nd.ownerDocument.documentElement.removeEventListener("mouseleave", this.yd);
      }
      if (!this.Td(t)) if (this.zd(i, this.Ad.nf), ++this.Zc, this.Gc && this.Zc > 1) {
        var _this$Vd2 = this.Vd(_s(t), this.Jc),
          _s28 = _this$Vd2.Dd;
        _s28 < 5 && !this.ld && this.zd(i, this.Ad.Ld), this.Od();
      } else this.ld || this.zd(i, this.Ad.ef);
    }
  }, {
    key: "Fd",
    value: function Fd() {
      null !== this.nd && (clearTimeout(this.nd), this.nd = null);
    }
  }, {
    key: "rf",
    value: function rf(t) {
      if (null !== this.xd) return;
      var i = t.changedTouches[0];
      this.xd = i.identifier, this.Sd = us(t);
      var s = this.Nd.ownerDocument.documentElement;
      this.od = false, this.ad = false, this.Md = false, this.hd = _s(i), this.vd && (this.vd(), this.vd = null);
      {
        var _i47 = this.Yd.bind(this),
          _n10 = this.tf.bind(this);
        this.vd = function () {
          s.removeEventListener("touchmove", _i47), s.removeEventListener("touchend", _n10);
        }, s.addEventListener("touchmove", _i47, {
          passive: false
        }), s.addEventListener("touchend", _n10, {
          passive: false
        }), this.Fd(), this.nd = setTimeout(this.hf.bind(this, t), 240);
      }
      var n = this.Rd(t, i);
      this.Id(n, this.Ad.af), this.td || (this.Qc = 0, this.td = setTimeout(this.Ed.bind(this), 500), this.sd = _s(i));
    }
  }, {
    key: "lf",
    value: function lf(t) {
      if (0 !== t.button) return;
      var i = this.Nd.ownerDocument.documentElement;
      ns() && i.addEventListener("mouseleave", this.yd), this.ld = false, this.rd = _s(t), this.pd && (this.pd(), this.pd = null);
      {
        var _t40 = this.Jd.bind(this),
          _s29 = this.kd.bind(this);
        this.pd = function () {
          i.removeEventListener("mousemove", _t40), i.removeEventListener("mouseup", _s29);
        }, i.addEventListener("mousemove", _t40), i.addEventListener("mouseup", _s29);
      }
      if (this.bd = true, this.Td(t)) return;
      var s = this.Rd(t);
      this.zd(s, this.Ad._f), this.Gc || (this.Zc = 0, this.Gc = setTimeout(this.Od.bind(this), 500), this.Jc = _s(t));
    }
  }, {
    key: "Wd",
    value: function Wd() {
      var _this33 = this;
      this.Nd.addEventListener("mouseenter", this.Hd.bind(this)), this.Nd.addEventListener("touchcancel", this.Fd.bind(this));
      {
        var _t41 = this.Nd.ownerDocument,
          _i48 = function _i48(t) {
            _this33.Ad.uf && (t.composed && _this33.Nd.contains(t.composedPath()[0]) || t.target && _this33.Nd.contains(t.target) || _this33.Ad.uf());
          };
        this.ud = function () {
          _t41.removeEventListener("touchstart", _i48);
        }, this._d = function () {
          _t41.removeEventListener("mousedown", _i48);
        }, _t41.addEventListener("mousedown", _i48), _t41.addEventListener("touchstart", _i48, {
          passive: true
        });
      }
      es() && (this.dd = function () {
        _this33.Nd.removeEventListener("dblclick", _this33.Pd);
      }, this.Nd.addEventListener("dblclick", this.Pd)), this.Nd.addEventListener("mouseleave", this.cf.bind(this)), this.Nd.addEventListener("touchstart", this.rf.bind(this), {
        passive: true
      }), hs(this.Nd), this.Nd.addEventListener("mousedown", this.lf.bind(this)), this.df(), this.Nd.addEventListener("touchmove", function () {}, {
        passive: false
      });
    }
  }, {
    key: "df",
    value: function df() {
      var _this34 = this;
      void 0 === this.Ad.ff && void 0 === this.Ad.pf && void 0 === this.Ad.vf || (this.Nd.addEventListener("touchstart", function (t) {
        return _this34.mf(t.touches);
      }, {
        passive: true
      }), this.Nd.addEventListener("touchmove", function (t) {
        if (2 === t.touches.length && null !== _this34.md && void 0 !== _this34.Ad.pf) {
          var _i49 = ls(t.touches[0], t.touches[1]) / _this34.wd;
          _this34.Ad.pf(_this34.md, _i49), os(t);
        }
      }, {
        passive: false
      }), this.Nd.addEventListener("touchend", function (t) {
        _this34.mf(t.touches);
      }));
    }
  }, {
    key: "mf",
    value: function mf(t) {
      1 === t.length && (this.gd = false), 2 !== t.length || this.gd || this.ed ? this.wf() : this.gf(t);
    }
  }, {
    key: "gf",
    value: function gf(t) {
      var i = this.Nd.getBoundingClientRect() || {
        left: 0,
        top: 0
      };
      this.md = {
        _t: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
        ut: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
      }, this.wd = ls(t[0], t[1]), void 0 !== this.Ad.ff && this.Ad.ff(), this.Fd();
    }
  }, {
    key: "wf",
    value: function wf() {
      null !== this.md && (this.md = null, void 0 !== this.Ad.vf && this.Ad.vf());
    }
  }, {
    key: "cf",
    value: function cf(t) {
      if (this.fd && this.fd(), this.Td(t)) return;
      if (!this.Cd) return;
      var i = this.Rd(t);
      this.zd(i, this.Ad.Mf), this.Cd = !es();
    }
  }, {
    key: "hf",
    value: function hf(t) {
      var i = cs(t.touches, u(this.xd));
      if (null === i) return;
      var s = this.Rd(t, i);
      this.Id(s, this.Ad.bf), this.od = true, this.ed = true;
    }
  }, {
    key: "Td",
    value: function Td(t) {
      return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : us(t) < this.Sd + 500;
    }
  }, {
    key: "Id",
    value: function Id(t, i) {
      i && i.call(this.Ad, t);
    }
  }, {
    key: "zd",
    value: function zd(t, i) {
      i && i.call(this.Ad, t);
    }
  }, {
    key: "Rd",
    value: function Rd(t, i) {
      var s = i || t,
        n = this.Nd.getBoundingClientRect() || {
          left: 0,
          top: 0
        };
      return {
        clientX: s.clientX,
        clientY: s.clientY,
        pageX: s.pageX,
        pageY: s.pageY,
        screenX: s.screenX,
        screenY: s.screenY,
        localX: s.clientX - n.left,
        localY: s.clientY - n.top,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        shiftKey: t.shiftKey,
        metaKey: t.metaKey,
        Sf: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
        xf: t.type,
        Cf: s.target,
        Qo: t.view,
        yf: function yf() {
          "touchstart" !== t.type && os(t);
        }
      };
    }
  }]);
}();
function ls(t, i) {
  var s = t.clientX - i.clientX,
    n = t.clientY - i.clientY;
  return Math.sqrt(s * s + n * n);
}
function os(t) {
  t.cancelable && t.preventDefault();
}
function _s(t) {
  return {
    _t: t.pageX,
    ut: t.pageY
  };
}
function us(t) {
  return t.timeStamp || performance.now();
}
function cs(t, i) {
  for (var _s30 = 0; _s30 < t.length; ++_s30) if (t[_s30].identifier === i) return t[_s30];
  return null;
}
var ds = /*#__PURE__*/function () {
  function ds(t, i, s) {
    _classCallCheck(this, ds);
    this.kf = null, this.Pf = null, this.Tf = true, this.Rf = null, this.Df = t, this.Vf = t.If()[i], this.Bf = t.If()[s], this.Af = document.createElement("tr"), this.Af.style.height = "1px", this.Ef = document.createElement("td"), this.Ef.style.position = "relative", this.Ef.style.padding = "0", this.Ef.style.margin = "0", this.Ef.setAttribute("colspan", "3"), this.zf(), this.Af.appendChild(this.Ef), this.Tf = this.Df.N().layout.panes.enableResize, this.Tf ? this.Lf() : (this.kf = null, this.Pf = null);
  }
  return _createClass(ds, [{
    key: "m",
    value: function m() {
      null !== this.Pf && this.Pf.m();
    }
  }, {
    key: "Of",
    value: function Of() {
      return this.Af;
    }
  }, {
    key: "Nf",
    value: function Nf() {
      return size({
        width: this.Vf.Nf().width,
        height: 1
      });
    }
  }, {
    key: "Wf",
    value: function Wf() {
      return size({
        width: this.Vf.Wf().width,
        height: 1 * window.devicePixelRatio
      });
    }
  }, {
    key: "Ff",
    value: function Ff(t, i, s) {
      var n = this.Wf();
      t.fillStyle = this.Df.N().layout.panes.separatorColor, t.fillRect(i, s, n.width, n.height);
    }
  }, {
    key: "kt",
    value: function kt() {
      this.zf(), this.Df.N().layout.panes.enableResize !== this.Tf && (this.Tf = this.Df.N().layout.panes.enableResize, this.Tf ? this.Lf() : (null !== this.kf && (this.Ef.removeChild(this.kf.Hf), this.Ef.removeChild(this.kf.Uf), this.kf = null), null !== this.Pf && (this.Pf.m(), this.Pf = null)));
    }
  }, {
    key: "Lf",
    value: function Lf() {
      var t = document.createElement("div"),
        i = t.style;
      i.position = "fixed", i.display = "none", i.zIndex = "49", i.top = "0", i.left = "0", i.width = "100%", i.height = "100%", i.cursor = "row-resize", this.Ef.appendChild(t);
      var s = document.createElement("div"),
        n = s.style;
      n.position = "absolute", n.zIndex = "50", n.top = "-4px", n.height = "9px", n.width = "100%", n.backgroundColor = "", n.cursor = "row-resize", this.Ef.appendChild(s);
      var e = {
        $d: this.$f.bind(this),
        Mf: this.qf.bind(this),
        _f: this.Yf.bind(this),
        af: this.Yf.bind(this),
        Qd: this.jf.bind(this),
        Gd: this.jf.bind(this),
        nf: this.Kf.bind(this),
        "if": this.Kf.bind(this)
      };
      this.Pf = new as(s, e, {
        Xd: function Xd() {
          return false;
        },
        Zd: function Zd() {
          return true;
        }
      }), this.kf = {
        Uf: s,
        Hf: t
      };
    }
  }, {
    key: "zf",
    value: function zf() {
      this.Ef.style.background = this.Df.N().layout.panes.separatorColor;
    }
  }, {
    key: "$f",
    value: function $f(t) {
      null !== this.kf && (this.kf.Uf.style.backgroundColor = this.Df.N().layout.panes.separatorHoverColor);
    }
  }, {
    key: "qf",
    value: function qf(t) {
      null !== this.kf && null === this.Rf && (this.kf.Uf.style.backgroundColor = "");
    }
  }, {
    key: "Yf",
    value: function Yf(t) {
      if (null === this.kf) return;
      var i = this.Vf.Xf().ko() + this.Bf.Xf().ko(),
        s = i / (this.Vf.Nf().height + this.Bf.Nf().height),
        n = 30 * s;
      i <= 2 * n || (this.Rf = {
        Zf: t.pageY,
        Gf: this.Vf.Xf().ko(),
        Jf: i - n,
        Qf: i,
        tp: s,
        ip: n
      }, this.kf.Hf.style.display = "block");
    }
  }, {
    key: "jf",
    value: function jf(t) {
      var i = this.Rf;
      if (null === i) return;
      var s = (t.pageY - i.Zf) * i.tp,
        n = Zt(i.Gf + s, i.ip, i.Jf);
      this.Vf.Xf().Po(n), this.Bf.Xf().Po(i.Qf - n), this.Df.Qt().Bh();
    }
  }, {
    key: "Kf",
    value: function Kf(t) {
      null !== this.Rf && null !== this.kf && (this.Rf = null, this.kf.Hf.style.display = "none");
    }
  }]);
}();
function fs(t, i) {
  return t.sp - i.sp;
}
function ps(t, i, s) {
  var n = (t.sp - i.sp) / (t.wt - i.wt);
  return Math.sign(n) * Math.min(Math.abs(n), s);
}
var vs = /*#__PURE__*/function () {
  function vs(t, i, s, n) {
    _classCallCheck(this, vs);
    this.np = null, this.ep = null, this.rp = null, this.hp = null, this.ap = null, this.lp = 0, this.op = 0, this._p = t, this.up = i, this.cp = s, this.Mn = n;
  }
  return _createClass(vs, [{
    key: "dp",
    value: function dp(t, i) {
      if (null !== this.np) {
        if (this.np.wt === i) return void (this.np.sp = t);
        if (Math.abs(this.np.sp - t) < this.Mn) return;
      }
      this.hp = this.rp, this.rp = this.ep, this.ep = this.np, this.np = {
        wt: i,
        sp: t
      };
    }
  }, {
    key: "le",
    value: function le(t, i) {
      if (null === this.np || null === this.ep) return;
      if (i - this.np.wt > 50) return;
      var s = 0;
      var n = ps(this.np, this.ep, this.up),
        e = fs(this.np, this.ep),
        r = [n],
        h = [e];
      if (s += e, null !== this.rp) {
        var _t42 = ps(this.ep, this.rp, this.up);
        if (Math.sign(_t42) === Math.sign(n)) {
          var _i50 = fs(this.ep, this.rp);
          if (r.push(_t42), h.push(_i50), s += _i50, null !== this.hp) {
            var _t43 = ps(this.rp, this.hp, this.up);
            if (Math.sign(_t43) === Math.sign(n)) {
              var _i51 = fs(this.rp, this.hp);
              r.push(_t43), h.push(_i51), s += _i51;
            }
          }
        }
      }
      var a = 0;
      for (var _t44 = 0; _t44 < r.length; ++_t44) a += h[_t44] / s * r[_t44];
      Math.abs(a) < this._p || (this.ap = {
        sp: t,
        wt: i
      }, this.op = a, this.lp = function (t, i) {
        var s = Math.log(i);
        return Math.log(1 * s / -t) / s;
      }(Math.abs(a), this.cp));
    }
  }, {
    key: "bu",
    value: function bu(t) {
      var i = u(this.ap),
        s = t - i.wt;
      return i.sp + this.op * (Math.pow(this.cp, s) - 1) / Math.log(this.cp);
    }
  }, {
    key: "Mu",
    value: function Mu(t) {
      return null === this.ap || this.fp(t) === this.lp;
    }
  }, {
    key: "fp",
    value: function fp(t) {
      var i = t - u(this.ap).wt;
      return Math.min(i, this.lp);
    }
  }]);
}();
var ms = /*#__PURE__*/function () {
  function ms(t, i) {
    _classCallCheck(this, ms);
    this.pp = void 0, this.vp = void 0, this.mp = void 0, this.ps = false, this.wp = t, this.gp = i, this.Mp();
  }
  return _createClass(ms, [{
    key: "kt",
    value: function kt() {
      this.Mp();
    }
  }, {
    key: "bp",
    value: function bp() {
      this.pp && this.wp.removeChild(this.pp), this.vp && this.wp.removeChild(this.vp), this.pp = void 0, this.vp = void 0;
    }
  }, {
    key: "Sp",
    value: function Sp() {
      return this.ps !== this.xp() || this.mp !== this.Cp();
    }
  }, {
    key: "Cp",
    value: function Cp() {
      return this.gp.Qt().Xi().J(this.gp.N().layout.textColor) > 160 ? "dark" : "light";
    }
  }, {
    key: "xp",
    value: function xp() {
      return this.gp.N().layout.attributionLogo;
    }
  }, {
    key: "yp",
    value: function yp() {
      var t = new URL(location.href);
      return t.hostname ? "&utm_source=" + t.hostname + t.pathname : "";
    }
  }, {
    key: "Mp",
    value: function Mp() {
      this.Sp() && (this.bp(), this.ps = this.xp(), this.ps && (this.mp = this.Cp(), this.vp = document.createElement("style"), this.vp.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.pp = document.createElement("a"), this.pp.href = "https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart".concat(this.yp()), this.pp.title = "Charting by TradingView", this.pp.id = "tv-attr-logo", this.pp.target = "_blank", this.pp.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.pp.toggleAttribute("data-dark", "dark" === this.mp), this.wp.appendChild(this.vp), this.wp.appendChild(this.pp)));
    }
  }]);
}();
function ws(t, s) {
  var n = u(t.ownerDocument).createElement("canvas");
  t.appendChild(n);
  var e = bindTo(n, {
    options: {
      allowResizeObserver: true
    },
    transform: function transform(t, i) {
      return {
        width: Math.max(t.width, i.width),
        height: Math.max(t.height, i.height)
      };
    }
  });
  return e.resizeCanvasElement(s), e;
}
function gs(t) {
  var _t$getContext;
  t.width = 1, t.height = 1, (_t$getContext = t.getContext("2d")) === null || _t$getContext === void 0 ? void 0 : _t$getContext.clearRect(0, 0, 1, 1);
}
function Ms(t, i, s, n) {
  t.ih && t.ih(i, s, n);
}
function bs(t, i, s, n) {
  t.nt(i, s, n);
}
function Ss(t, i, s, n) {
  var e = t(s, n);
  var _iterator19 = _createForOfIteratorHelper(e),
    _step19;
  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var _t45 = _step19.value;
      var _s31 = _t45.Tt(n);
      null !== _s31 && i(_s31);
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
}
function xs(t, i) {
  return function (s) {
    var _s$Wt$wa, _s$Wt, _s$ta, _s$ta2;
    if (!function (t) {
      return void 0 !== t.Wt;
    }(s)) return [];
    return ((_s$Wt$wa = (_s$Wt = s.Wt()) === null || _s$Wt === void 0 ? void 0 : _s$Wt.wa()) !== null && _s$Wt$wa !== void 0 ? _s$Wt$wa : "") !== i ? [] : (_s$ta = (_s$ta2 = s.ta) === null || _s$ta2 === void 0 ? void 0 : _s$ta2.call(s, t)) !== null && _s$ta !== void 0 ? _s$ta : [];
  };
}
function Cs(t, i, s, n) {
  if (!t.length) return;
  var e = 0;
  var r = t[0].$t(n, true);
  var h = 1 === i ? s / 2 - (t[0].Wi() - r / 2) : t[0].Wi() - r / 2 - s / 2;
  h = Math.max(0, h);
  for (var _r10 = 1; _r10 < t.length; _r10++) {
    var _a1 = t[_r10],
      _l6 = t[_r10 - 1],
      _o5 = _l6.$t(n, false),
      _8 = _a1.Wi(),
      _u4 = _l6.Wi();
    if (1 === i ? _8 > _u4 - _o5 : _8 < _u4 + _o5) {
      var _n11 = _u4 - _o5 * i;
      _a1.Fi(_n11);
      var _r11 = _n11 - i * _o5 / 2;
      if ((1 === i ? _r11 < 0 : _r11 > s) && h > 0) {
        var _n12 = 1 === i ? -1 - _r11 : _r11 - s,
          _a10 = Math.min(_n12, h);
        for (var _s32 = e; _s32 < t.length; _s32++) t[_s32].Fi(t[_s32].Wi() + i * _a10);
        h -= _a10;
      }
    } else e = _r10, h = 1 === i ? _u4 - _o5 - _8 : _8 - (_u4 + _o5);
  }
}
var ys = /*#__PURE__*/function () {
  function ys(i, s, n, e) {
    var _this35 = this;
    _classCallCheck(this, ys);
    this.Yi = null, this.kp = null, this.Pp = false, this.Tp = new et(200), this.Rp = null, this.Dp = 0, this.Vp = false, this.Ip = function () {
      _this35.Vp || _this35.yt.Bp().Qt().ar();
    }, this.Ap = function () {
      _this35.Vp || _this35.yt.Bp().Qt().ar();
    }, this.yt = i, this.ys = s, this.gl = s.layout, this.Uu = n, this.Ep = "left" === e, this.zp = xs("normal", e), this.Lp = xs("top", e), this.Op = xs("bottom", e), this.Ef = document.createElement("div"), this.Ef.style.height = "100%", this.Ef.style.overflow = "hidden", this.Ef.style.width = "25px", this.Ef.style.left = "0", this.Ef.style.position = "relative", this.Np = ws(this.Ef, size({
      width: 16,
      height: 16
    })), this.Np.subscribeSuggestedBitmapSizeChanged(this.Ip);
    var r = this.Np.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.Wp = ws(this.Ef, size({
      width: 16,
      height: 16
    })), this.Wp.subscribeSuggestedBitmapSizeChanged(this.Ap);
    var h = this.Wp.canvasElement;
    h.style.position = "absolute", h.style.zIndex = "2", h.style.left = "0", h.style.top = "0";
    var a = {
      _f: this.Yf.bind(this),
      af: this.Yf.bind(this),
      Qd: this.jf.bind(this),
      Gd: this.jf.bind(this),
      uf: this.Fp.bind(this),
      nf: this.Kf.bind(this),
      "if": this.Kf.bind(this),
      Ld: this.Hp.bind(this),
      Bd: this.Hp.bind(this),
      $d: this.Up.bind(this),
      Mf: this.qf.bind(this)
    };
    this.Pf = new as(this.Wp.canvasElement, a, {
      Xd: function Xd() {
        return !_this35.ys.handleScroll.vertTouchDrag;
      },
      Zd: function Zd() {
        return true;
      }
    });
  }
  return _createClass(ys, [{
    key: "m",
    value: function m() {
      this.Pf.m(), this.Wp.unsubscribeSuggestedBitmapSizeChanged(this.Ap), gs(this.Wp.canvasElement), this.Wp.dispose(), this.Np.unsubscribeSuggestedBitmapSizeChanged(this.Ip), gs(this.Np.canvasElement), this.Np.dispose(), null !== this.Yi && this.Yi.io().u(this), this.Yi = null;
    }
  }, {
    key: "Of",
    value: function Of() {
      return this.Ef;
    }
  }, {
    key: "k",
    value: function k() {
      return this.gl.fontSize;
    }
  }, {
    key: "$p",
    value: function $p() {
      var t = this.Uu.N();
      return this.Rp !== t.P && (this.Tp.In(), this.Rp = t.P), t;
    }
  }, {
    key: "qp",
    value: function qp() {
      if (null === this.Yi) return 0;
      var t = 0;
      var i = this.$p(),
        s = u(this.Np.canvasElement.getContext("2d", {
          colorSpace: this.yt.Bp().N().layout.colorSpace
        }));
      s.save();
      var n = this.Yi.Va();
      s.font = this.Yp(), n.length > 0 && (t = Math.max(this.Tp.Vi(s, n[0].Xa), this.Tp.Vi(s, n[n.length - 1].Xa)));
      var e = this.jp();
      for (var _i52 = e.length; _i52--;) {
        var _n13 = this.Tp.Vi(s, e[_i52].ri());
        _n13 > t && (t = _n13);
      }
      var r = this.Yi.zt();
      if (null !== r && null !== this.kp && 2 !== (h = this.ys.crosshair).mode && h.horzLine.visible && h.horzLine.labelVisible) {
        var _i53 = this.Yi.Ts(1, r),
          _n14 = this.Yi.Ts(this.kp.height - 2, r);
        t = Math.max(t, this.Tp.Vi(s, this.Yi.Zi(Math.floor(Math.min(_i53, _n14)) + .11111111111111, r)), this.Tp.Vi(s, this.Yi.Zi(Math.ceil(Math.max(_i53, _n14)) - .11111111111111, r)));
      }
      var h;
      s.restore();
      var a = t || 34;
      return rs(Math.ceil(i.S + i.C + i.I + i.B + 5 + a));
    }
  }, {
    key: "Kp",
    value: function Kp(t) {
      null !== this.kp && equalSizes(this.kp, t) || (this.kp = t, this.Vp = true, this.Np.resizeCanvasElement(t), this.Wp.resizeCanvasElement(t), this.Vp = false, this.Ef.style.width = "".concat(t.width, "px"), this.Ef.style.height = "".concat(t.height, "px"));
    }
  }, {
    key: "Xp",
    value: function Xp() {
      return u(this.kp).width;
    }
  }, {
    key: "_s",
    value: function _s(t) {
      this.Yi !== t && (null !== this.Yi && this.Yi.io().u(this), this.Yi = t, t.io().i(this.ol.bind(this), this));
    }
  }, {
    key: "Wt",
    value: function Wt() {
      return this.Yi;
    }
  }, {
    key: "In",
    value: function In() {
      var t = this.yt.Xf();
      this.yt.Bp().Qt().Ho(t, u(this.Wt()));
    }
  }, {
    key: "Zp",
    value: function Zp(t) {
      var _this36 = this;
      if (null === this.kp) return;
      var i = {
        colorSpace: this.yt.Bp().N().layout.colorSpace
      };
      if (1 !== t) {
        this.Gp(), this.Np.applySuggestedBitmapSize();
        var _t46 = tryCreateCanvasRenderingTarget2D(this.Np, i);
        null !== _t46 && (_t46.useBitmapCoordinateSpace(function (t) {
          _this36.Jp(t), _this36.Qp(t);
        }), this.yt.tv(_t46, this.Op), this.iv(_t46), this.yt.tv(_t46, this.zp), this.sv(_t46));
      }
      this.Wp.applySuggestedBitmapSize();
      var s = tryCreateCanvasRenderingTarget2D(this.Wp, i);
      null !== s && (s.useBitmapCoordinateSpace(function (_ref0) {
        var t = _ref0.context,
          i = _ref0.bitmapSize;
        t.clearRect(0, 0, i.width, i.height);
      }), this.nv(s), this.yt.tv(s, this.Lp));
    }
  }, {
    key: "Wf",
    value: function Wf() {
      return this.Np.bitmapSize;
    }
  }, {
    key: "Ff",
    value: function Ff(t, i, s) {
      var n = this.Wf();
      n.width > 0 && n.height > 0 && t.drawImage(this.Np.canvasElement, i, s);
    }
  }, {
    key: "kt",
    value: function kt() {
      var _this$Yi;
      (_this$Yi = this.Yi) === null || _this$Yi === void 0 || _this$Yi.Va();
    }
  }, {
    key: "Yf",
    value: function Yf(t) {
      if (null === this.Yi || this.Yi.Ki() || !this.ys.handleScale.axisPressedMouseMove.price) return;
      var i = this.yt.Bp().Qt(),
        s = this.yt.Xf();
      this.Pp = true, i.Eo(s, this.Yi, t.localY);
    }
  }, {
    key: "jf",
    value: function jf(t) {
      if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
      var i = this.yt.Bp().Qt(),
        s = this.yt.Xf(),
        n = this.Yi;
      i.zo(s, n, t.localY);
    }
  }, {
    key: "Fp",
    value: function Fp() {
      if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
      var t = this.yt.Bp().Qt(),
        i = this.yt.Xf(),
        s = this.Yi;
      this.Pp && (this.Pp = false, t.Lo(i, s));
    }
  }, {
    key: "Kf",
    value: function Kf(t) {
      if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
      var i = this.yt.Bp().Qt(),
        s = this.yt.Xf();
      this.Pp = false, i.Lo(s, this.Yi);
    }
  }, {
    key: "Hp",
    value: function Hp(t) {
      this.ys.handleScale.axisDoubleClickReset.price && this.In();
    }
  }, {
    key: "Up",
    value: function Up(t) {
      if (null === this.Yi) return;
      !this.yt.Bp().Qt().N().handleScale.axisPressedMouseMove.price || this.Yi.Le() || this.Yi.Rl() || this.ev(1);
    }
  }, {
    key: "qf",
    value: function qf(t) {
      this.ev(0);
    }
  }, {
    key: "jp",
    value: function jp() {
      var _this37 = this;
      var t = [],
        i = null === this.Yi ? void 0 : this.Yi;
      return function (s) {
        for (var _n15 = 0; _n15 < s.length; ++_n15) {
          var _e10 = s[_n15].Fs(_this37.yt.Xf(), i);
          for (var _i54 = 0; _i54 < _e10.length; _i54++) t.push(_e10[_i54]);
        }
      }(this.yt.Xf().Dt()), t;
    }
  }, {
    key: "Jp",
    value: function Jp(_ref1) {
      var t = _ref1.context,
        i = _ref1.bitmapSize;
      var s = i.width,
        n = i.height,
        e = this.yt.Xf().Qt(),
        r = e.$(),
        h = e.Vc();
      r === h ? L(t, 0, 0, s, n, r) : W(t, 0, 0, s, n, r, h);
    }
  }, {
    key: "Qp",
    value: function Qp(_ref10) {
      var t = _ref10.context,
        i = _ref10.bitmapSize,
        s = _ref10.horizontalPixelRatio;
      if (null === this.kp || null === this.Yi || !this.Yi.N().borderVisible) return;
      t.fillStyle = this.Yi.N().borderColor;
      var n = Math.max(1, Math.floor(this.$p().S * s));
      var e;
      e = this.Ep ? i.width - n : 0, t.fillRect(e, 0, n, i.height);
    }
  }, {
    key: "iv",
    value: function iv(t) {
      var _this38 = this;
      if (null === this.kp || null === this.Yi) return;
      var i = this.Yi.Va(),
        s = this.Yi.N(),
        n = this.$p(),
        e = this.Ep ? this.kp.width - n.C : 0;
      s.borderVisible && s.ticksVisible && t.useBitmapCoordinateSpace(function (_ref11) {
        var t = _ref11.context,
          r = _ref11.horizontalPixelRatio,
          h = _ref11.verticalPixelRatio;
        t.fillStyle = s.borderColor;
        var a = Math.max(1, Math.floor(h)),
          l = Math.floor(.5 * h),
          o = Math.round(n.C * r);
        t.beginPath();
        var _iterator20 = _createForOfIteratorHelper(i),
          _step20;
        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _s33 = _step20.value;
            t.rect(Math.floor(e * r), Math.round(_s33.ka * h) - l, o, a);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
        t.fill();
      }), t.useMediaCoordinateSpace(function (_ref12) {
        var _s$textColor;
        var t = _ref12.context;
        t.font = _this38.Yp(), t.fillStyle = (_s$textColor = s.textColor) !== null && _s$textColor !== void 0 ? _s$textColor : _this38.gl.textColor, t.textAlign = _this38.Ep ? "right" : "left", t.textBaseline = "middle";
        var r = _this38.Ep ? Math.round(e - n.I) : Math.round(e + n.C + n.I),
          h = i.map(function (i) {
            return _this38.Tp.Di(t, i.Xa);
          });
        for (var _s34 = i.length; _s34--;) {
          var _n16 = i[_s34];
          t.fillText(_n16.Xa, r, _n16.ka + h[_s34]);
        }
      });
    }
  }, {
    key: "Gp",
    value: function Gp() {
      if (null === this.kp || null === this.Yi) return;
      var t = this.kp.height / 2;
      var i = [],
        s = this.Yi.Dt().slice(),
        n = this.yt.Xf(),
        e = this.$p();
      this.Yi === n.$n() && this.yt.Xf().Dt().forEach(function (t) {
        n.Un(t) && s.push(t);
      });
      var r = this.Yi.ba()[0],
        h = this.Yi;
      s.forEach(function (s) {
        var e = s.Fs(n, h);
        e.forEach(function (t) {
          t.Fi(null), t.Hi() && i.push(t);
        }), r === s && e.length > 0 && (t = e[0].Bi());
      }), i.forEach(function (t) {
        return t.Fi(t.Bi());
      });
      this.Yi.N().alignLabels && this.rv(i, e, t);
    }
  }, {
    key: "rv",
    value: function rv(t, i, s) {
      if (null === this.kp) return;
      var n = t.filter(function (t) {
          return t.Bi() <= s;
        }),
        e = t.filter(function (t) {
          return t.Bi() > s;
        });
      n.sort(function (t, i) {
        return i.Bi() - t.Bi();
      }), n.length && e.length && e.push(n[0]), e.sort(function (t, i) {
        return t.Bi() - i.Bi();
      });
      var _iterator21 = _createForOfIteratorHelper(t),
        _step21;
      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var _s35 = _step21.value;
          var _t47 = Math.floor(_s35.$t(i) / 2),
            _n17 = _s35.Bi();
          _n17 > -_t47 && _n17 < _t47 && _s35.Fi(_t47), _n17 > this.kp.height - _t47 && _n17 < this.kp.height + _t47 && _s35.Fi(this.kp.height - _t47);
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
      Cs(n, 1, this.kp.height, i), Cs(e, -1, this.kp.height, i);
    }
  }, {
    key: "sv",
    value: function sv(t) {
      var _this39 = this;
      if (null === this.kp) return;
      var i = this.jp(),
        s = this.$p(),
        n = this.Ep ? "right" : "left";
      i.forEach(function (i) {
        if (i.Ui()) {
          i.Tt(u(_this39.Yi)).nt(t, s, _this39.Tp, n);
        }
      });
    }
  }, {
    key: "nv",
    value: function nv(t) {
      var _this40 = this;
      if (null === this.kp || null === this.Yi) return;
      var i = this.yt.Bp().Qt(),
        s = [],
        n = this.yt.Xf(),
        e = i.sc().Fs(n, this.Yi);
      e.length && s.push(e);
      var r = this.$p(),
        h = this.Ep ? "right" : "left";
      s.forEach(function (i) {
        i.forEach(function (i) {
          i.Tt(u(_this40.Yi)).nt(t, r, _this40.Tp, h);
        });
      });
    }
  }, {
    key: "ev",
    value: function ev(t) {
      this.Ef.style.cursor = 1 === t ? "ns-resize" : "default";
    }
  }, {
    key: "ol",
    value: function ol() {
      var t = this.qp();
      this.Dp < t && this.yt.Bp().Qt().Bh(), this.Dp = t;
    }
  }, {
    key: "Yp",
    value: function Yp() {
      return x(this.gl.fontSize, this.gl.fontFamily);
    }
  }]);
}();
function ks(t, i) {
  var _t$Jh, _t$Jh2;
  return (_t$Jh = (_t$Jh2 = t.Jh) === null || _t$Jh2 === void 0 ? void 0 : _t$Jh2.call(t, i)) !== null && _t$Jh !== void 0 ? _t$Jh : [];
}
function Ps(t, i) {
  var _t$Ws, _t$Ws2;
  return (_t$Ws = (_t$Ws2 = t.Ws) === null || _t$Ws2 === void 0 ? void 0 : _t$Ws2.call(t, i)) !== null && _t$Ws !== void 0 ? _t$Ws : [];
}
function Ts(t, i) {
  var _t$us, _t$us2;
  return (_t$us = (_t$us2 = t.us) === null || _t$us2 === void 0 ? void 0 : _t$us2.call(t, i)) !== null && _t$us !== void 0 ? _t$us : [];
}
function Rs(t, i) {
  var _t$Xh, _t$Xh2;
  return (_t$Xh = (_t$Xh2 = t.Xh) === null || _t$Xh2 === void 0 ? void 0 : _t$Xh2.call(t, i)) !== null && _t$Xh !== void 0 ? _t$Xh : [];
}
var Ds = /*#__PURE__*/function () {
  function Ds(i, s) {
    var _this41 = this;
    _classCallCheck(this, Ds);
    this.kp = size({
      width: 0,
      height: 0
    }), this.hv = null, this.av = null, this.lv = null, this.ov = null, this._v = false, this.uv = new d(), this.cv = new d(), this.dv = 0, this.fv = false, this.pv = null, this.vv = false, this.mv = null, this.wv = null, this.Vp = false, this.Ip = function () {
      _this41.Vp || null === _this41.gv || _this41.ts().ar();
    }, this.Ap = function () {
      _this41.Vp || null === _this41.gv || _this41.ts().ar();
    }, this.gp = i, this.gv = s, this.gv.Yo().i(this.Mv.bind(this), this, true), this.bv = document.createElement("td"), this.bv.style.padding = "0", this.bv.style.position = "relative";
    var n = document.createElement("div");
    n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.Sv = document.createElement("td"), this.Sv.style.padding = "0", this.xv = document.createElement("td"), this.xv.style.padding = "0", this.bv.appendChild(n), this.Np = ws(n, size({
      width: 16,
      height: 16
    })), this.Np.subscribeSuggestedBitmapSizeChanged(this.Ip);
    var e = this.Np.canvasElement;
    e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Wp = ws(n, size({
      width: 16,
      height: 16
    })), this.Wp.subscribeSuggestedBitmapSizeChanged(this.Ap);
    var r = this.Wp.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.Af = document.createElement("tr"), this.Af.appendChild(this.Sv), this.Af.appendChild(this.bv), this.Af.appendChild(this.xv), this.Cv(), this.Pf = new as(this.Wp.canvasElement, this, {
      Xd: function Xd() {
        return null === _this41.pv && !_this41.gp.N().handleScroll.vertTouchDrag;
      },
      Zd: function Zd() {
        return null === _this41.pv && !_this41.gp.N().handleScroll.horzTouchDrag;
      }
    });
  }
  return _createClass(Ds, [{
    key: "m",
    value: function m() {
      null !== this.hv && this.hv.m(), null !== this.av && this.av.m(), this.lv = null, this.Wp.unsubscribeSuggestedBitmapSizeChanged(this.Ap), gs(this.Wp.canvasElement), this.Wp.dispose(), this.Np.unsubscribeSuggestedBitmapSizeChanged(this.Ip), gs(this.Np.canvasElement), this.Np.dispose(), null !== this.gv && (this.gv.Yo().u(this), this.gv.m()), this.Pf.m();
    }
  }, {
    key: "Xf",
    value: function Xf() {
      return u(this.gv);
    }
  }, {
    key: "yv",
    value: function yv(t) {
      var _this$lv, _this$lv2;
      null !== this.gv && this.gv.Yo().u(this), this.gv = t, null !== this.gv && this.gv.Yo().i(Ds.prototype.Mv.bind(this), this, true), this.Cv(), this.gp.If().indexOf(this) === this.gp.If().length - 1 ? (this.lv = (_this$lv = this.lv) !== null && _this$lv !== void 0 ? _this$lv : new ms(this.bv, this.gp), this.lv.kt()) : ((_this$lv2 = this.lv) !== null && _this$lv2 !== void 0 && _this$lv2.bp(), this.lv = null);
    }
  }, {
    key: "Bp",
    value: function Bp() {
      return this.gp;
    }
  }, {
    key: "Of",
    value: function Of() {
      return this.Af;
    }
  }, {
    key: "Cv",
    value: function Cv() {
      if (null !== this.gv && (this.kv(), 0 !== this.ts().js().length)) {
        if (null !== this.hv) {
          var _t48 = this.gv.Bo();
          this.hv._s(u(_t48));
        }
        if (null !== this.av) {
          var _t49 = this.gv.Ao();
          this.av._s(u(_t49));
        }
      }
    }
  }, {
    key: "Pv",
    value: function Pv() {
      null !== this.hv && this.hv.kt(), null !== this.av && this.av.kt();
    }
  }, {
    key: "ko",
    value: function ko() {
      return null !== this.gv ? this.gv.ko() : 0;
    }
  }, {
    key: "Po",
    value: function Po(t) {
      this.gv && this.gv.Po(t);
    }
  }, {
    key: "$d",
    value: function $d(t) {
      if (!this.gv) return;
      this.Tv();
      var i = t.localX,
        s = t.localY;
      this.Rv(i, s, t);
    }
  }, {
    key: "_f",
    value: function _f(t) {
      this.Tv(), this.Dv(), this.Rv(t.localX, t.localY, t);
    }
  }, {
    key: "qd",
    value: function qd(t) {
      if (!this.gv) return;
      this.Tv();
      var i = t.localX,
        s = t.localY;
      this.Rv(i, s, t);
    }
  }, {
    key: "ef",
    value: function ef(t) {
      null !== this.gv && (this.Tv(), this.Vv(t));
    }
  }, {
    key: "Ld",
    value: function Ld(t) {
      null !== this.gv && this.Iv(this.cv, t);
    }
  }, {
    key: "Bd",
    value: function Bd(t) {
      this.Ld(t);
    }
  }, {
    key: "Qd",
    value: function Qd(t) {
      this.Tv(), this.Bv(t), this.Rv(t.localX, t.localY, t);
    }
  }, {
    key: "nf",
    value: function nf(t) {
      null !== this.gv && (this.Tv(), this.fv = false, this.Av(t));
    }
  }, {
    key: "sf",
    value: function sf(t) {
      null !== this.gv && this.Vv(t);
    }
  }, {
    key: "bf",
    value: function bf(t) {
      if (this.fv = true, null === this.pv) {
        var _i55 = {
          x: t.localX,
          y: t.localY
        };
        this.Ev(_i55, _i55, t);
      }
    }
  }, {
    key: "Mf",
    value: function Mf(t) {
      null !== this.gv && (this.Tv(), this.gv.Qt().Ju(null), this.zv());
    }
  }, {
    key: "Lv",
    value: function Lv() {
      return this.uv;
    }
  }, {
    key: "Ov",
    value: function Ov() {
      return this.cv;
    }
  }, {
    key: "ff",
    value: function ff() {
      this.dv = 1, this.ts().hn();
    }
  }, {
    key: "pf",
    value: function pf(t, i) {
      if (!this.gp.N().handleScale.pinch) return;
      var s = 5 * (i - this.dv);
      this.dv = i, this.ts()._c(t._t, s);
    }
  }, {
    key: "af",
    value: function af(t) {
      this.fv = false, this.vv = null !== this.pv, this.Dv();
      var i = this.ts().sc();
      null !== this.pv && i.Vt() && (this.mv = {
        x: i.si(),
        y: i.ni()
      }, this.pv = {
        x: t.localX,
        y: t.localY
      });
    }
  }, {
    key: "Gd",
    value: function Gd(t) {
      if (null === this.gv) return;
      var i = t.localX,
        s = t.localY;
      if (null === this.pv) this.Bv(t);else {
        this.vv = false;
        var _n18 = u(this.mv),
          _e11 = _n18.x + (i - this.pv.x),
          _r12 = _n18.y + (s - this.pv.y);
        this.Rv(_e11, _r12, t);
      }
    }
  }, {
    key: "if",
    value: function _if(t) {
      0 === this.Bp().N().trackingMode.exitMode && (this.vv = true), this.Nv(), this.Av(t);
    }
  }, {
    key: "jn",
    value: function jn(t, i) {
      var s = this.gv;
      return null === s ? null : Ci(s, t, i);
    }
  }, {
    key: "Wv",
    value: function Wv(i, s) {
      u("left" === s ? this.hv : this.av).Kp(size({
        width: i,
        height: this.kp.height
      }));
    }
  }, {
    key: "Nf",
    value: function Nf() {
      return this.kp;
    }
  }, {
    key: "Kp",
    value: function Kp(t) {
      equalSizes(this.kp, t) || (this.kp = t, this.Vp = true, this.Np.resizeCanvasElement(t), this.Wp.resizeCanvasElement(t), this.Vp = false, this.bv.style.width = t.width + "px", this.bv.style.height = t.height + "px");
    }
  }, {
    key: "Fv",
    value: function Fv() {
      var t = u(this.gv);
      t.Io(t.Bo()), t.Io(t.Ao());
      var _iterator22 = _createForOfIteratorHelper(t.ba()),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var _i56 = _step22.value;
          if (t.Un(_i56)) {
            var _s36 = _i56.Wt();
            null !== _s36 && t.Io(_s36), _i56.Ns();
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      var _iterator23 = _createForOfIteratorHelper(t.Ko()),
        _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var _i57 = _step23.value;
          _i57.Ns();
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
    }
  }, {
    key: "Wf",
    value: function Wf() {
      return this.Np.bitmapSize;
    }
  }, {
    key: "Ff",
    value: function Ff(t, i, s) {
      var n = this.Wf();
      n.width > 0 && n.height > 0 && t.drawImage(this.Np.canvasElement, i, s);
    }
  }, {
    key: "Zp",
    value: function Zp(t) {
      var _this42 = this;
      if (0 === t) return;
      if (null === this.gv) return;
      t > 1 && this.Fv(), null !== this.hv && this.hv.Zp(t), null !== this.av && this.av.Zp(t);
      var i = {
        colorSpace: this.gp.N().layout.colorSpace
      };
      if (1 !== t) {
        this.Np.applySuggestedBitmapSize();
        var _t50 = tryCreateCanvasRenderingTarget2D(this.Np, i);
        null !== _t50 && (_t50.useBitmapCoordinateSpace(function (t) {
          _this42.Jp(t);
        }), this.gv && (this.Hv(_t50, ks), this.Uv(_t50), this.Hv(_t50, Ps), this.Hv(_t50, Ts)));
      }
      this.Wp.applySuggestedBitmapSize();
      var s = tryCreateCanvasRenderingTarget2D(this.Wp, i);
      null !== s && (s.useBitmapCoordinateSpace(function (_ref13) {
        var t = _ref13.context,
          i = _ref13.bitmapSize;
        t.clearRect(0, 0, i.width, i.height);
      }), this.$v(s), this.Hv(s, Rs), this.Hv(s, Ts));
    }
  }, {
    key: "qv",
    value: function qv() {
      return this.hv;
    }
  }, {
    key: "Yv",
    value: function Yv() {
      return this.av;
    }
  }, {
    key: "tv",
    value: function tv(t, i) {
      this.Hv(t, i);
    }
  }, {
    key: "Mv",
    value: function Mv() {
      null !== this.gv && this.gv.Yo().u(this), this.gv = null;
    }
  }, {
    key: "Vv",
    value: function Vv(t) {
      this.Iv(this.uv, t);
    }
  }, {
    key: "Iv",
    value: function Iv(t, i) {
      var s = i.localX,
        n = i.localY;
      t.v() && t.p(this.ts().At().nu(s), {
        x: s,
        y: n
      }, i);
    }
  }, {
    key: "Jp",
    value: function Jp(_ref14) {
      var t = _ref14.context,
        i = _ref14.bitmapSize;
      var s = i.width,
        n = i.height,
        e = this.ts(),
        r = e.$(),
        h = e.Vc();
      r === h ? L(t, 0, 0, s, n, h) : W(t, 0, 0, s, n, r, h);
    }
  }, {
    key: "Uv",
    value: function Uv(t) {
      var i = u(this.gv),
        s = i.jo().lr().Tt(i);
      null !== s && s.nt(t, false);
    }
  }, {
    key: "$v",
    value: function $v(t) {
      this.jv(t, Ps, bs, this.ts().sc());
    }
  }, {
    key: "Hv",
    value: function Hv(t, i) {
      var s = u(this.gv),
        n = s.Dt(),
        e = s.Ko();
      var _iterator24 = _createForOfIteratorHelper(e),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _s37 = _step24.value;
          this.jv(t, i, Ms, _s37);
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
      var _iterator25 = _createForOfIteratorHelper(n),
        _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var _s38 = _step25.value;
          this.jv(t, i, Ms, _s38);
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
      var _iterator26 = _createForOfIteratorHelper(e),
        _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var _s39 = _step26.value;
          this.jv(t, i, bs, _s39);
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
      var _iterator27 = _createForOfIteratorHelper(n),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var _s40 = _step27.value;
          this.jv(t, i, bs, _s40);
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }
  }, {
    key: "jv",
    value: function jv(t, i, s, n) {
      var e = u(this.gv),
        r = e.Qt().Gu(),
        h = null !== r && r.Xo === n,
        a = null !== r && h && void 0 !== r.Zo ? r.Zo.Xn : void 0;
      Ss(i, function (i) {
        return s(i, t, h, a);
      }, n, e);
    }
  }, {
    key: "kv",
    value: function kv() {
      if (null === this.gv) return;
      var t = this.gp,
        i = this.gv.Bo().N().visible,
        s = this.gv.Ao().N().visible;
      i || null === this.hv || (this.Sv.removeChild(this.hv.Of()), this.hv.m(), this.hv = null), s || null === this.av || (this.xv.removeChild(this.av.Of()), this.av.m(), this.av = null);
      var n = t.Qt().Sc();
      i && null === this.hv && (this.hv = new ys(this, t.N(), n, "left"), this.Sv.appendChild(this.hv.Of())), s && null === this.av && (this.av = new ys(this, t.N(), n, "right"), this.xv.appendChild(this.av.Of()));
    }
  }, {
    key: "Kv",
    value: function Kv(t) {
      return t.Sf && this.fv || null !== this.pv;
    }
  }, {
    key: "Xv",
    value: function Xv(t) {
      return Math.max(0, Math.min(t, this.kp.width - 1));
    }
  }, {
    key: "Zv",
    value: function Zv(t) {
      return Math.max(0, Math.min(t, this.kp.height - 1));
    }
  }, {
    key: "Rv",
    value: function Rv(t, i, s) {
      this.ts().wc(this.Xv(t), this.Zv(i), s, u(this.gv));
    }
  }, {
    key: "zv",
    value: function zv() {
      this.ts().Mc();
    }
  }, {
    key: "Nv",
    value: function Nv() {
      this.vv && (this.pv = null, this.zv());
    }
  }, {
    key: "Ev",
    value: function Ev(t, i, s) {
      this.pv = t, this.vv = false, this.Rv(i.x, i.y, s);
      var n = this.ts().sc();
      this.mv = {
        x: n.si(),
        y: n.ni()
      };
    }
  }, {
    key: "ts",
    value: function ts() {
      return this.gp.Qt();
    }
  }, {
    key: "Av",
    value: function Av(t) {
      if (!this._v) return;
      var i = this.ts(),
        s = this.Xf();
      if (i.Wo(s, s.Ps()), this.ov = null, this._v = false, i.fc(), null !== this.wv) {
        var _t51 = performance.now(),
          _s41 = i.At();
        this.wv.le(_s41._u(), _t51), this.wv.Mu(_t51) || i._n(this.wv);
      }
    }
  }, {
    key: "Tv",
    value: function Tv() {
      this.pv = null;
    }
  }, {
    key: "Dv",
    value: function Dv() {
      if (!this.gv) return;
      if (this.ts().hn(), document.activeElement !== document.body && document.activeElement !== document.documentElement) u(document.activeElement).blur();else {
        var _t52 = document.getSelection();
        null !== _t52 && _t52.removeAllRanges();
      }
      !this.gv.Ps().Ki() && this.ts().At().Ki();
    }
  }, {
    key: "Bv",
    value: function Bv(t) {
      if (null === this.gv) return;
      var i = this.ts(),
        s = i.At();
      if (s.Ki()) return;
      var n = this.gp.N(),
        e = n.handleScroll,
        r = n.kineticScroll;
      if ((!e.pressedMouseMove || t.Sf) && (!e.horzTouchDrag && !e.vertTouchDrag || !t.Sf)) return;
      var h = this.gv.Ps(),
        a = performance.now();
      if (null !== this.ov || this.Kv(t) || (this.ov = {
        x: t.clientX,
        y: t.clientY,
        Yc: a,
        Gv: t.localX,
        Jv: t.localY
      }), null !== this.ov && !this._v && (this.ov.x !== t.clientX || this.ov.y !== t.clientY)) {
        if (t.Sf && r.touch || !t.Sf && r.mouse) {
          var _t53 = s.lu();
          this.wv = new vs(.2 / _t53, 7 / _t53, .997, 15 / _t53), this.wv.dp(s._u(), this.ov.Yc);
        } else this.wv = null;
        h.Ki() || i.Oo(this.gv, h, t.localY), i.cc(t.localX), this._v = true;
      }
      this._v && (h.Ki() || i.No(this.gv, h, t.localY), i.dc(t.localX), null !== this.wv && this.wv.dp(s._u(), a));
    }
  }]);
}();
var Vs = /*#__PURE__*/function () {
  function Vs(i, s, n, e, r) {
    var _this43 = this;
    _classCallCheck(this, Vs);
    this.xt = true, this.kp = size({
      width: 0,
      height: 0
    }), this.Ip = function () {
      return _this43.Zp(3);
    }, this.Ep = "left" === i, this.Uu = n.Sc, this.ys = s, this.Qv = e, this.tm = r, this.Ef = document.createElement("div"), this.Ef.style.width = "25px", this.Ef.style.height = "100%", this.Ef.style.overflow = "hidden", this.Np = ws(this.Ef, size({
      width: 16,
      height: 16
    })), this.Np.subscribeSuggestedBitmapSizeChanged(this.Ip);
  }
  return _createClass(Vs, [{
    key: "m",
    value: function m() {
      this.Np.unsubscribeSuggestedBitmapSizeChanged(this.Ip), gs(this.Np.canvasElement), this.Np.dispose();
    }
  }, {
    key: "Of",
    value: function Of() {
      return this.Ef;
    }
  }, {
    key: "Nf",
    value: function Nf() {
      return this.kp;
    }
  }, {
    key: "Kp",
    value: function Kp(t) {
      equalSizes(this.kp, t) || (this.kp = t, this.Np.resizeCanvasElement(t), this.Ef.style.width = "".concat(t.width, "px"), this.Ef.style.height = "".concat(t.height, "px"), this.xt = true);
    }
  }, {
    key: "Zp",
    value: function Zp(t) {
      var _this44 = this;
      if (t < 3 && !this.xt) return;
      if (0 === this.kp.width || 0 === this.kp.height) return;
      this.xt = false, this.Np.applySuggestedBitmapSize();
      var i = tryCreateCanvasRenderingTarget2D(this.Np, {
        colorSpace: this.ys.layout.colorSpace
      });
      null !== i && i.useBitmapCoordinateSpace(function (t) {
        _this44.Jp(t), _this44.Qp(t);
      });
    }
  }, {
    key: "Wf",
    value: function Wf() {
      return this.Np.bitmapSize;
    }
  }, {
    key: "Ff",
    value: function Ff(t, i, s) {
      var n = this.Wf();
      n.width > 0 && n.height > 0 && t.drawImage(this.Np.canvasElement, i, s);
    }
  }, {
    key: "Qp",
    value: function Qp(_ref15) {
      var t = _ref15.context,
        i = _ref15.bitmapSize,
        s = _ref15.horizontalPixelRatio,
        n = _ref15.verticalPixelRatio;
      if (!this.Qv()) return;
      t.fillStyle = this.ys.timeScale.borderColor;
      var e = Math.floor(this.Uu.N().S * s),
        r = Math.floor(this.Uu.N().S * n),
        h = this.Ep ? i.width - e : 0;
      t.fillRect(h, 0, e, r);
    }
  }, {
    key: "Jp",
    value: function Jp(_ref16) {
      var t = _ref16.context,
        i = _ref16.bitmapSize;
      L(t, 0, 0, i.width, i.height, this.tm());
    }
  }]);
}();
function Is(t) {
  return function (i) {
    var _i$ia, _i$ia2;
    return (_i$ia = (_i$ia2 = i.ia) === null || _i$ia2 === void 0 ? void 0 : _i$ia2.call(i, t)) !== null && _i$ia !== void 0 ? _i$ia : [];
  };
}
var Bs = Is("normal"),
  As = Is("top"),
  Es = Is("bottom");
var zs = /*#__PURE__*/function () {
  function zs(i, s) {
    var _this45 = this;
    _classCallCheck(this, zs);
    this.im = null, this.sm = null, this.M = null, this.nm = false, this.kp = size({
      width: 0,
      height: 0
    }), this.rm = new d(), this.Tp = new et(5), this.Vp = false, this.Ip = function () {
      _this45.Vp || _this45.gp.Qt().ar();
    }, this.Ap = function () {
      _this45.Vp || _this45.gp.Qt().ar();
    }, this.gp = i, this.i_ = s, this.ys = i.N().layout, this.pp = document.createElement("tr"), this.hm = document.createElement("td"), this.hm.style.padding = "0", this.am = document.createElement("td"), this.am.style.padding = "0", this.Ef = document.createElement("td"), this.Ef.style.height = "25px", this.Ef.style.padding = "0", this.lm = document.createElement("div"), this.lm.style.width = "100%", this.lm.style.height = "100%", this.lm.style.position = "relative", this.lm.style.overflow = "hidden", this.Ef.appendChild(this.lm), this.Np = ws(this.lm, size({
      width: 16,
      height: 16
    })), this.Np.subscribeSuggestedBitmapSizeChanged(this.Ip);
    var n = this.Np.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Wp = ws(this.lm, size({
      width: 16,
      height: 16
    })), this.Wp.subscribeSuggestedBitmapSizeChanged(this.Ap);
    var e = this.Wp.canvasElement;
    e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0", this.pp.appendChild(this.hm), this.pp.appendChild(this.Ef), this.pp.appendChild(this.am), this.om(), this.gp.Qt().yo().i(this.om.bind(this), this), this.Pf = new as(this.Wp.canvasElement, this, {
      Xd: function Xd() {
        return true;
      },
      Zd: function Zd() {
        return !_this45.gp.N().handleScroll.horzTouchDrag;
      }
    });
  }
  return _createClass(zs, [{
    key: "m",
    value: function m() {
      this.Pf.m(), null !== this.im && this.im.m(), null !== this.sm && this.sm.m(), this.Wp.unsubscribeSuggestedBitmapSizeChanged(this.Ap), gs(this.Wp.canvasElement), this.Wp.dispose(), this.Np.unsubscribeSuggestedBitmapSizeChanged(this.Ip), gs(this.Np.canvasElement), this.Np.dispose();
    }
  }, {
    key: "Of",
    value: function Of() {
      return this.pp;
    }
  }, {
    key: "_m",
    value: function _m() {
      return this.im;
    }
  }, {
    key: "um",
    value: function um() {
      return this.sm;
    }
  }, {
    key: "_f",
    value: function _f(t) {
      if (this.nm) return;
      this.nm = true;
      var i = this.gp.Qt();
      !i.At().Ki() && this.gp.N().handleScale.axisPressedMouseMove.time && i.oc(t.localX);
    }
  }, {
    key: "af",
    value: function af(t) {
      this._f(t);
    }
  }, {
    key: "uf",
    value: function uf() {
      var t = this.gp.Qt();
      !t.At().Ki() && this.nm && (this.nm = false, this.gp.N().handleScale.axisPressedMouseMove.time && t.mc());
    }
  }, {
    key: "Qd",
    value: function Qd(t) {
      var i = this.gp.Qt();
      !i.At().Ki() && this.gp.N().handleScale.axisPressedMouseMove.time && i.vc(t.localX);
    }
  }, {
    key: "Gd",
    value: function Gd(t) {
      this.Qd(t);
    }
  }, {
    key: "nf",
    value: function nf() {
      this.nm = false;
      var t = this.gp.Qt();
      t.At().Ki() && !this.gp.N().handleScale.axisPressedMouseMove.time || t.mc();
    }
  }, {
    key: "if",
    value: function _if() {
      this.nf();
    }
  }, {
    key: "Ld",
    value: function Ld() {
      this.gp.N().handleScale.axisDoubleClickReset.time && this.gp.Qt().cn();
    }
  }, {
    key: "Bd",
    value: function Bd() {
      this.Ld();
    }
  }, {
    key: "$d",
    value: function $d() {
      this.gp.Qt().N().handleScale.axisPressedMouseMove.time && this.ev(1);
    }
  }, {
    key: "Mf",
    value: function Mf() {
      this.ev(0);
    }
  }, {
    key: "Nf",
    value: function Nf() {
      return this.kp;
    }
  }, {
    key: "dm",
    value: function dm() {
      return this.rm;
    }
  }, {
    key: "fm",
    value: function fm(i, n, e) {
      equalSizes(this.kp, i) || (this.kp = i, this.Vp = true, this.Np.resizeCanvasElement(i), this.Wp.resizeCanvasElement(i), this.Vp = false, this.Ef.style.width = "".concat(i.width, "px"), this.Ef.style.height = "".concat(i.height, "px"), this.rm.p(i)), null !== this.im && this.im.Kp(size({
        width: n,
        height: i.height
      })), null !== this.sm && this.sm.Kp(size({
        width: e,
        height: i.height
      }));
    }
  }, {
    key: "pm",
    value: function pm() {
      var t = this.vm();
      return Math.ceil(t.S + t.C + t.k + t.A + t.V + t.wm);
    }
  }, {
    key: "kt",
    value: function kt() {
      this.gp.Qt().At().Va();
    }
  }, {
    key: "Wf",
    value: function Wf() {
      return this.Np.bitmapSize;
    }
  }, {
    key: "Ff",
    value: function Ff(t, i, s) {
      var n = this.Wf();
      n.width > 0 && n.height > 0 && t.drawImage(this.Np.canvasElement, i, s);
    }
  }, {
    key: "Zp",
    value: function Zp(t) {
      var _this46 = this;
      if (0 === t) return;
      var i = {
        colorSpace: this.ys.colorSpace
      };
      if (1 !== t) {
        this.Np.applySuggestedBitmapSize();
        var _s42 = tryCreateCanvasRenderingTarget2D(this.Np, i);
        null !== _s42 && (_s42.useBitmapCoordinateSpace(function (t) {
          _this46.Jp(t), _this46.Qp(t), _this46.gm(_s42, Es);
        }), this.iv(_s42), this.gm(_s42, Bs)), null !== this.im && this.im.Zp(t), null !== this.sm && this.sm.Zp(t);
      }
      this.Wp.applySuggestedBitmapSize();
      var s = tryCreateCanvasRenderingTarget2D(this.Wp, i);
      null !== s && (s.useBitmapCoordinateSpace(function (_ref17) {
        var t = _ref17.context,
          i = _ref17.bitmapSize;
        t.clearRect(0, 0, i.width, i.height);
      }), this.Mm([].concat(_toConsumableArray(this.gp.Qt().js()), [this.gp.Qt().sc()]), s), this.gm(s, As));
    }
  }, {
    key: "gm",
    value: function gm(t, i) {
      var s = this.gp.Qt().js();
      var _iterator28 = _createForOfIteratorHelper(s),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var _n19 = _step28.value;
          Ss(i, function (i) {
            return Ms(i, t, !1, void 0);
          }, _n19, void 0);
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
      var _iterator29 = _createForOfIteratorHelper(s),
        _step29;
      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var _n20 = _step29.value;
          Ss(i, function (i) {
            return bs(i, t, !1, void 0);
          }, _n20, void 0);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
    }
  }, {
    key: "Jp",
    value: function Jp(_ref18) {
      var t = _ref18.context,
        i = _ref18.bitmapSize;
      L(t, 0, 0, i.width, i.height, this.gp.Qt().Vc());
    }
  }, {
    key: "Qp",
    value: function Qp(_ref19) {
      var t = _ref19.context,
        i = _ref19.bitmapSize,
        s = _ref19.verticalPixelRatio;
      if (this.gp.N().timeScale.borderVisible) {
        t.fillStyle = this.bm();
        var _n21 = Math.max(1, Math.floor(this.vm().S * s));
        t.fillRect(0, 0, i.width, _n21);
      }
    }
  }, {
    key: "iv",
    value: function iv(t) {
      var _this47 = this;
      var i = this.gp.Qt().At(),
        s = i.Va();
      if (!s || 0 === s.length) return;
      var n = this.i_.maxTickMarkWeight(s),
        e = this.vm(),
        r = i.N();
      r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace(function (_ref20) {
        var t = _ref20.context,
          i = _ref20.horizontalPixelRatio,
          n = _ref20.verticalPixelRatio;
        t.strokeStyle = _this47.bm(), t.fillStyle = _this47.bm();
        var r = Math.max(1, Math.floor(i)),
          h = Math.floor(.5 * i);
        t.beginPath();
        var a = Math.round(e.C * n);
        for (var _n22 = s.length; _n22--;) {
          var _e12 = Math.round(s[_n22].coord * i);
          t.rect(_e12 - h, 0, r, a);
        }
        t.fill();
      }), t.useMediaCoordinateSpace(function (_ref21) {
        var t = _ref21.context;
        var i = e.S + e.C + e.A + e.k / 2;
        t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = _this47.H(), t.font = _this47.Yp();
        var _iterator30 = _createForOfIteratorHelper(s),
          _step30;
        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var _e13 = _step30.value;
            if (_e13.weight < n) {
              var _s43 = _e13.needAlignCoordinate ? _this47.Sm(t, _e13.coord, _e13.label) : _e13.coord;
              t.fillText(_e13.label, _s43, i);
            }
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
        _this47.gp.N().timeScale.allowBoldLabels && (t.font = _this47.xm());
        var _iterator31 = _createForOfIteratorHelper(s),
          _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _e14 = _step31.value;
            if (_e14.weight >= n) {
              var _s44 = _e14.needAlignCoordinate ? _this47.Sm(t, _e14.coord, _e14.label) : _e14.coord;
              t.fillText(_e14.label, _s44, i);
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
      });
    }
  }, {
    key: "Sm",
    value: function Sm(t, i, s) {
      var n = this.Tp.Vi(t, s),
        e = n / 2,
        r = Math.floor(i - e) + .5;
      return r < 0 ? i += Math.abs(0 - r) : r + n > this.kp.width && (i -= Math.abs(this.kp.width - (r + n))), i;
    }
  }, {
    key: "Mm",
    value: function Mm(t, i) {
      var s = this.vm();
      var _iterator32 = _createForOfIteratorHelper(t),
        _step32;
      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var _n23 = _step32.value;
          var _iterator33 = _createForOfIteratorHelper(_n23.cs()),
            _step33;
          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
              var _t54 = _step33.value;
              _t54.Tt().nt(i, s);
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
    }
  }, {
    key: "bm",
    value: function bm() {
      return this.gp.N().timeScale.borderColor;
    }
  }, {
    key: "H",
    value: function H() {
      return this.ys.textColor;
    }
  }, {
    key: "W",
    value: function W() {
      return this.ys.fontSize;
    }
  }, {
    key: "Yp",
    value: function Yp() {
      return x(this.W(), this.ys.fontFamily);
    }
  }, {
    key: "xm",
    value: function xm() {
      return x(this.W(), this.ys.fontFamily, "bold");
    }
  }, {
    key: "vm",
    value: function vm() {
      null === this.M && (this.M = {
        S: 1,
        L: NaN,
        A: NaN,
        V: NaN,
        Ji: NaN,
        C: 5,
        k: NaN,
        P: "",
        Gi: new et(),
        wm: 0
      });
      var t = this.M,
        i = this.Yp();
      if (t.P !== i) {
        var _s45 = this.W();
        t.k = _s45, t.P = i, t.A = 3 * _s45 / 12, t.V = 3 * _s45 / 12, t.Ji = 9 * _s45 / 12, t.L = 0, t.wm = 4 * _s45 / 12, t.Gi.In();
      }
      return this.M;
    }
  }, {
    key: "ev",
    value: function ev(t) {
      this.Ef.style.cursor = 1 === t ? "ew-resize" : "default";
    }
  }, {
    key: "om",
    value: function om() {
      var t = this.gp.Qt(),
        i = t.N();
      i.leftPriceScale.visible || null === this.im || (this.hm.removeChild(this.im.Of()), this.im.m(), this.im = null), i.rightPriceScale.visible || null === this.sm || (this.am.removeChild(this.sm.Of()), this.sm.m(), this.sm = null);
      var s = {
          Sc: this.gp.Qt().Sc()
        },
        n = function n() {
          return i.leftPriceScale.borderVisible && t.At().N().borderVisible;
        },
        e = function e() {
          return t.Vc();
        };
      i.leftPriceScale.visible && null === this.im && (this.im = new Vs("left", i, s, n, e), this.hm.appendChild(this.im.Of())), i.rightPriceScale.visible && null === this.sm && (this.sm = new Vs("right", i, s, n, e), this.am.appendChild(this.sm.Of()));
    }
  }]);
}();
var Ls = !!ss && !!navigator.userAgentData && navigator.userAgentData.brands.some(function (t) {
  return t.brand.includes("Chromium");
}) && !!ss && ((_navigator = navigator) !== null && _navigator !== void 0 && (_navigator = _navigator.userAgentData) !== null && _navigator !== void 0 && _navigator.platform ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var Os = /*#__PURE__*/function () {
  function Os(t, i, s) {
    _classCallCheck(this, Os);
    var n;
    this.Cm = [], this.ym = [], this.km = 0, this.tl = 0, this.fo = 0, this.Pm = 0, this.Tm = 0, this.Rm = null, this.Dm = false, this.uv = new d(), this.cv = new d(), this.Wu = new d(), this.Vm = null, this.Im = null, this.wp = t, this.ys = i, this.i_ = s, this.pp = document.createElement("div"), this.pp.classList.add("tv-lightweight-charts"), this.pp.style.overflow = "hidden", this.pp.style.direction = "ltr", this.pp.style.width = "100%", this.pp.style.height = "100%", (n = this.pp).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.Bm = document.createElement("table"), this.Bm.setAttribute("cellspacing", "0"), this.pp.appendChild(this.Bm), this.Am = this.Em.bind(this), Ns(this.ys) && this.zm(true), this.ts = new Li(this.Hu.bind(this), this.ys, s), this.Qt().nc().i(this.Lm.bind(this), this), this.Om = new zs(this, this.i_), this.Bm.appendChild(this.Om.Of());
    var e = i.autoSize && this.Nm();
    var r = this.ys.width,
      h = this.ys.height;
    if (e || 0 === r || 0 === h) {
      var _i58 = t.getBoundingClientRect();
      r = r || _i58.width, h = h || _i58.height;
    }
    this.Wm(r, h), this.Fm(), t.appendChild(this.pp), this.Hm(), this.ts.At().Cu().i(this.ts.Bh.bind(this.ts), this), this.ts.yo().i(this.ts.Bh.bind(this.ts), this);
  }
  return _createClass(Os, [{
    key: "Qt",
    value: function Qt() {
      return this.ts;
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "If",
    value: function If() {
      return this.Cm;
    }
  }, {
    key: "Um",
    value: function Um() {
      return this.Om;
    }
  }, {
    key: "m",
    value: function m() {
      this.zm(false), 0 !== this.km && window.cancelAnimationFrame(this.km), this.ts.nc().u(this), this.ts.At().Cu().u(this), this.ts.yo().u(this), this.ts.m();
      var _iterator34 = _createForOfIteratorHelper(this.Cm),
        _step34;
      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var _t55 = _step34.value;
          this.Bm.removeChild(_t55.Of()), _t55.Lv().u(this), _t55.Ov().u(this), _t55.m();
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
      this.Cm = [];
      var _iterator35 = _createForOfIteratorHelper(this.ym),
        _step35;
      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var _t56 = _step35.value;
          this.$m(_t56);
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
      this.ym = [], u(this.Om).m(), null !== this.pp.parentElement && this.pp.parentElement.removeChild(this.pp), this.Wu.m(), this.uv.m(), this.cv.m(), this.qm();
    }
  }, {
    key: "Wm",
    value: function Wm(i, s) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.tl === s && this.fo === i) return;
      var e = function (i) {
        var s = Math.floor(i.width),
          n = Math.floor(i.height);
        return size({
          width: s - s % 2,
          height: n - n % 2
        });
      }(size({
        width: i,
        height: s
      }));
      this.tl = e.height, this.fo = e.width;
      var r = this.tl + "px",
        h = this.fo + "px";
      u(this.pp).style.height = r, u(this.pp).style.width = h, this.Bm.style.height = r, this.Bm.style.width = h, n ? this.Ym(G.gn(), performance.now()) : this.ts.Bh();
    }
  }, {
    key: "Zp",
    value: function Zp(t) {
      void 0 === t && (t = G.gn());
      for (var _i59 = 0; _i59 < this.Cm.length; _i59++) this.Cm[_i59].Zp(t.en(_i59).tn);
      this.ys.timeScale.visible && this.Om.Zp(t.nn());
    }
  }, {
    key: "hr",
    value: function hr(t) {
      var _t$layout;
      var i = Ns(this.ys);
      this.ts.hr(t);
      var s = Ns(this.ys);
      s !== i && this.zm(s), (_t$layout = t.layout) !== null && _t$layout !== void 0 && _t$layout.panes && this.jm(), this.Hm(), this.Km(t);
    }
  }, {
    key: "Lv",
    value: function Lv() {
      return this.uv;
    }
  }, {
    key: "Ov",
    value: function Ov() {
      return this.cv;
    }
  }, {
    key: "nc",
    value: function nc() {
      return this.Wu;
    }
  }, {
    key: "Xm",
    value: function Xm() {
      null !== this.Rm && (this.Ym(this.Rm, performance.now()), this.Rm = null);
      var t = this.Zm(null),
        i = document.createElement("canvas");
      i.width = t.width, i.height = t.height;
      var s = u(i.getContext("2d"));
      return this.Zm(s), i;
    }
  }, {
    key: "Gm",
    value: function Gm(t) {
      if ("left" === t && !this.Jm()) return 0;
      if ("right" === t && !this.Qm()) return 0;
      if (0 === this.Cm.length) return 0;
      return u("left" === t ? this.Cm[0].qv() : this.Cm[0].Yv()).Xp();
    }
  }, {
    key: "tw",
    value: function tw() {
      return this.ys.autoSize && null !== this.Vm;
    }
  }, {
    key: "Uf",
    value: function Uf() {
      return this.pp;
    }
  }, {
    key: "iw",
    value: function iw(t) {
      this.Im = t, this.Im ? this.Uf().style.setProperty("cursor", t) : this.Uf().style.removeProperty("cursor");
    }
  }, {
    key: "sw",
    value: function sw() {
      return this.Im;
    }
  }, {
    key: "nw",
    value: function nw(t) {
      return _(this.Cm[t]).Nf();
    }
  }, {
    key: "jm",
    value: function jm() {
      this.ym.forEach(function (t) {
        t.kt();
      });
    }
  }, {
    key: "Km",
    value: function Km(t) {
      (void 0 !== t.autoSize || !this.Vm || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.Vm && this.Nm(), false === t.autoSize && null !== this.Vm && this.qm(), t.autoSize || void 0 === t.width && void 0 === t.height || this.Wm(t.width || this.fo, t.height || this.tl));
    }
  }, {
    key: "Zm",
    value: function Zm(i) {
      var _this48 = this;
      var s = 0,
        n = 0;
      var e = this.Cm[0],
        r = function r(t, s) {
          var n = 0;
          for (var _e15 = 0; _e15 < _this48.Cm.length; _e15++) {
            var _r13 = _this48.Cm[_e15],
              _h7 = u("left" === t ? _r13.qv() : _r13.Yv()),
              _a11 = _h7.Wf();
            if (null !== i && _h7.Ff(i, s, n), n += _a11.height, _e15 < _this48.Cm.length - 1) {
              var _t57 = _this48.ym[_e15],
                _r14 = _t57.Wf();
              null !== i && _t57.Ff(i, s, n), n += _r14.height;
            }
          }
        };
      if (this.Jm()) {
        r("left", 0);
        s += u(e.qv()).Wf().width;
      }
      for (var _t58 = 0; _t58 < this.Cm.length; _t58++) {
        var _e16 = this.Cm[_t58],
          _r15 = _e16.Wf();
        if (null !== i && _e16.Ff(i, s, n), n += _r15.height, _t58 < this.Cm.length - 1) {
          var _e17 = this.ym[_t58],
            _r16 = _e17.Wf();
          null !== i && _e17.Ff(i, s, n), n += _r16.height;
        }
      }
      if (s += e.Wf().width, this.Qm()) {
        r("right", s);
        s += u(e.Yv()).Wf().width;
      }
      var h = function h(t, s, n) {
        u("left" === t ? _this48.Om._m() : _this48.Om.um()).Ff(u(i), s, n);
      };
      if (this.ys.timeScale.visible) {
        var _t59 = this.Om.Wf();
        if (null !== i) {
          var _s46 = 0;
          this.Jm() && (h("left", _s46, n), _s46 = u(e.qv()).Wf().width), this.Om.Ff(i, _s46, n), _s46 += _t59.width, this.Qm() && h("right", _s46, n);
        }
        n += _t59.height;
      }
      return size({
        width: s,
        height: n
      });
    }
  }, {
    key: "ew",
    value: function ew() {
      var i = 0,
        s = 0,
        n = 0;
      var _iterator36 = _createForOfIteratorHelper(this.Cm),
        _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var _t60 = _step36.value;
          this.Jm() && (s = Math.max(s, u(_t60.qv()).qp(), this.ys.leftPriceScale.minimumWidth)), this.Qm() && (n = Math.max(n, u(_t60.Yv()).qp(), this.ys.rightPriceScale.minimumWidth)), i += _t60.ko();
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
      s = rs(s), n = rs(n);
      var e = this.fo,
        r = this.tl,
        h = Math.max(e - s - n, 0),
        a = 1 * this.ym.length,
        l = this.ys.timeScale.visible;
      var o = l ? Math.max(this.Om.pm(), this.ys.timeScale.minimumHeight) : 0;
      var _;
      o = (_ = o) + _ % 2;
      var c = a + o,
        d = r < c ? 0 : r - c,
        f = d / i;
      var p = 0;
      var v = window.devicePixelRatio || 1;
      for (var _i60 = 0; _i60 < this.Cm.length; ++_i60) {
        var _e18 = this.Cm[_i60];
        _e18.yv(this.ts.$s()[_i60]);
        var _r17 = 0,
          _a12 = 0;
        _a12 = _i60 === this.Cm.length - 1 ? Math.ceil((d - p) * v) / v : Math.round(_e18.ko() * f * v) / v, _r17 = Math.max(_a12, 2), p += _r17, _e18.Kp(size({
          width: h,
          height: _r17
        })), this.Jm() && _e18.Wv(s, "left"), this.Qm() && _e18.Wv(n, "right"), _e18.Xf() && this.ts.ec(_e18.Xf(), _r17);
      }
      this.Om.fm(size({
        width: l ? h : 0,
        height: o
      }), l ? s : 0, l ? n : 0), this.ts.To(h), this.Pm !== s && (this.Pm = s), this.Tm !== n && (this.Tm = n);
    }
  }, {
    key: "zm",
    value: function zm(t) {
      t ? this.pp.addEventListener("wheel", this.Am, {
        passive: false
      }) : this.pp.removeEventListener("wheel", this.Am);
    }
  }, {
    key: "rw",
    value: function rw(t) {
      switch (t.deltaMode) {
        case t.DOM_DELTA_PAGE:
          return 120;
        case t.DOM_DELTA_LINE:
          return 32;
      }
      return Ls ? 1 / window.devicePixelRatio : 1;
    }
  }, {
    key: "Em",
    value: function Em(t) {
      if (!(0 !== t.deltaX && this.ys.handleScroll.mouseWheel || 0 !== t.deltaY && this.ys.handleScale.mouseWheel)) return;
      var i = this.rw(t),
        s = i * t.deltaX / 100,
        n = -i * t.deltaY / 100;
      if (t.cancelable && t.preventDefault(), 0 !== n && this.ys.handleScale.mouseWheel) {
        var _i61 = Math.sign(n) * Math.min(1, Math.abs(n)),
          _s47 = t.clientX - this.pp.getBoundingClientRect().left;
        this.Qt()._c(_s47, _i61);
      }
      0 !== s && this.ys.handleScroll.mouseWheel && this.Qt().uc(-80 * s);
    }
  }, {
    key: "Ym",
    value: function Ym(t, i) {
      var _this$Rm;
      var s = t.nn();
      3 === s && this.hw(), 3 !== s && 2 !== s || (this.aw(t), this.lw(t, i), this.Om.kt(), this.Cm.forEach(function (t) {
        t.Pv();
      }), 3 === ((_this$Rm = this.Rm) === null || _this$Rm === void 0 ? void 0 : _this$Rm.nn()) && (this.Rm.vn(t), this.hw(), this.aw(this.Rm), this.lw(this.Rm, i), t = this.Rm, this.Rm = null)), this.Zp(t);
    }
  }, {
    key: "lw",
    value: function lw(t, i) {
      var _iterator37 = _createForOfIteratorHelper(t.pn()),
        _step37;
      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var _s48 = _step37.value;
          this.mn(_s48, i);
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }
    }
  }, {
    key: "aw",
    value: function aw(t) {
      var i = this.ts.$s();
      for (var _s49 = 0; _s49 < i.length; _s49++) t.en(_s49).sn && i[_s49].Uo();
    }
  }, {
    key: "mn",
    value: function mn(t, i) {
      var s = this.ts.At();
      switch (t.an) {
        case 0:
          s.ku();
          break;
        case 1:
          s.Pu(t.Ft);
          break;
        case 2:
          s.dn(t.Ft);
          break;
        case 3:
          s.fn(t.Ft);
          break;
        case 4:
          s.du();
          break;
        case 5:
          t.Ft.Mu(i) || s.fn(t.Ft.bu(i));
      }
    }
  }, {
    key: "Hu",
    value: function Hu(t) {
      var _this49 = this;
      null !== this.Rm ? this.Rm.vn(t) : this.Rm = t, this.Dm || (this.Dm = true, this.km = window.requestAnimationFrame(function (t) {
        if (_this49.Dm = false, _this49.km = 0, null !== _this49.Rm) {
          var _i62 = _this49.Rm;
          _this49.Rm = null, _this49.Ym(_i62, t);
          var _iterator38 = _createForOfIteratorHelper(_i62.pn()),
            _step38;
          try {
            for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
              var _s50 = _step38.value;
              if (5 === _s50.an && !_s50.Ft.Mu(t)) {
                _this49.Qt()._n(_s50.Ft);
                break;
              }
            }
          } catch (err) {
            _iterator38.e(err);
          } finally {
            _iterator38.f();
          }
        }
      }));
    }
  }, {
    key: "hw",
    value: function hw() {
      this.Fm();
    }
  }, {
    key: "$m",
    value: function $m(t) {
      this.Bm.removeChild(t.Of()), t.m();
    }
  }, {
    key: "Fm",
    value: function Fm() {
      var t = this.ts.$s(),
        i = t.length,
        s = this.Cm.length;
      for (var _t61 = i; _t61 < s; _t61++) {
        var _t62 = _(this.Cm.pop());
        this.Bm.removeChild(_t62.Of()), _t62.Lv().u(this), _t62.Ov().u(this), _t62.m();
        var _i63 = this.ym.pop();
        void 0 !== _i63 && this.$m(_i63);
      }
      for (var _n24 = s; _n24 < i; _n24++) {
        var _i64 = new Ds(this, t[_n24]);
        if (_i64.Lv().i(this.ow.bind(this, _i64), this), _i64.Ov().i(this._w.bind(this, _i64), this), this.Cm.push(_i64), _n24 > 0) {
          var _t63 = new ds(this, _n24 - 1, _n24);
          this.ym.push(_t63), this.Bm.insertBefore(_t63.Of(), this.Om.Of());
        }
        this.Bm.insertBefore(_i64.Of(), this.Om.Of());
      }
      for (var _s51 = 0; _s51 < i; _s51++) {
        var _i65 = t[_s51],
          _n25 = this.Cm[_s51];
        _n25.Xf() !== _i65 ? _n25.yv(_i65) : _n25.Cv();
      }
      this.Hm(), this.ew();
    }
  }, {
    key: "uw",
    value: function uw(t, i, s, n) {
      var e = new Map();
      if (null !== t) {
        this.ts.js().forEach(function (i) {
          var s = i.Xs().Wr(t);
          null !== s && e.set(i, s);
        });
      }
      var r;
      if (null !== t) {
        var _this$ts$At$ss;
        var _i66 = (_this$ts$At$ss = this.ts.At().ss(t)) === null || _this$ts$At$ss === void 0 ? void 0 : _this$ts$At$ss.originalTime;
        void 0 !== _i66 && (r = _i66);
      }
      var h = this.Qt().Gu(),
        a = null !== h && h.Xo instanceof Yt ? h.Xo : void 0,
        l = null !== h && void 0 !== h.Zo ? h.Zo.Kn : void 0,
        o = this.cw(n);
      return {
        dw: r,
        Re: t !== null && t !== void 0 ? t : void 0,
        fw: i !== null && i !== void 0 ? i : void 0,
        pw: -1 !== o ? o : void 0,
        mw: a,
        ww: e,
        gw: l,
        Mw: s !== null && s !== void 0 ? s : void 0
      };
    }
  }, {
    key: "cw",
    value: function cw(t) {
      var i = -1;
      if (t) i = this.Cm.indexOf(t);else {
        var _t64 = this.Qt().sc().Us();
        null !== _t64 && (i = this.Qt().$s().indexOf(_t64));
      }
      return i;
    }
  }, {
    key: "ow",
    value: function ow(t, i, s, n) {
      var _this50 = this;
      this.uv.p(function () {
        return _this50.uw(i, s, n, t);
      });
    }
  }, {
    key: "_w",
    value: function _w(t, i, s, n) {
      var _this51 = this;
      this.cv.p(function () {
        return _this51.uw(i, s, n, t);
      });
    }
  }, {
    key: "Lm",
    value: function Lm(t, i, s) {
      var _this$Qt$Gu$Jo,
        _this$Qt$Gu,
        _this52 = this;
      this.iw((_this$Qt$Gu$Jo = (_this$Qt$Gu = this.Qt().Gu()) === null || _this$Qt$Gu === void 0 ? void 0 : _this$Qt$Gu.Jo) !== null && _this$Qt$Gu$Jo !== void 0 ? _this$Qt$Gu$Jo : null), this.Wu.p(function () {
        return _this52.uw(t, i, s);
      });
    }
  }, {
    key: "Hm",
    value: function Hm() {
      var t = this.ys.timeScale.visible ? "" : "none";
      this.Om.Of().style.display = t;
    }
  }, {
    key: "Jm",
    value: function Jm() {
      return this.Cm[0].Xf().Bo().N().visible;
    }
  }, {
    key: "Qm",
    value: function Qm() {
      return this.Cm[0].Xf().Ao().N().visible;
    }
  }, {
    key: "Nm",
    value: function Nm() {
      var _this53 = this;
      return "ResizeObserver" in window && (this.Vm = new ResizeObserver(function (t) {
        var i = t[t.length - 1];
        i && _this53.Wm(i.contentRect.width, i.contentRect.height);
      }), this.Vm.observe(this.wp, {
        box: "border-box"
      }), true);
    }
  }, {
    key: "qm",
    value: function qm() {
      null !== this.Vm && this.Vm.disconnect(), this.Vm = null;
    }
  }]);
}();
function Ns(t) {
  return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
}
function Ws(t) {
  return void 0 === t.open && void 0 === t.value;
}
function Fs(t) {
  return function (t) {
    return void 0 !== t.open;
  }(t) || function (t) {
    return void 0 !== t.value;
  }(t);
}
function Hs(t, i, s, n) {
  var e = s.value,
    r = {
      Re: i,
      wt: t,
      Ft: [e, e, e, e],
      dw: n
    };
  return void 0 !== s.color && (r.R = s.color), r;
}
function Us(t, i, s, n) {
  var e = s.value,
    r = {
      Re: i,
      wt: t,
      Ft: [e, e, e, e],
      dw: n
    };
  return void 0 !== s.lineColor && (r.vt = s.lineColor), void 0 !== s.topColor && (r.mr = s.topColor), void 0 !== s.bottomColor && (r.wr = s.bottomColor), r;
}
function $s(t, i, s, n) {
  var e = s.value,
    r = {
      Re: i,
      wt: t,
      Ft: [e, e, e, e],
      dw: n
    };
  return void 0 !== s.topLineColor && (r.gr = s.topLineColor), void 0 !== s.bottomLineColor && (r.Mr = s.bottomLineColor), void 0 !== s.topFillColor1 && (r.br = s.topFillColor1), void 0 !== s.topFillColor2 && (r.Sr = s.topFillColor2), void 0 !== s.bottomFillColor1 && (r.Cr = s.bottomFillColor1), void 0 !== s.bottomFillColor2 && (r.yr = s.bottomFillColor2), r;
}
function qs(t, i, s, n) {
  var e = {
    Re: i,
    wt: t,
    Ft: [s.open, s.high, s.low, s.close],
    dw: n
  };
  return void 0 !== s.color && (e.R = s.color), e;
}
function Ys(t, i, s, n) {
  var e = {
    Re: i,
    wt: t,
    Ft: [s.open, s.high, s.low, s.close],
    dw: n
  };
  return void 0 !== s.color && (e.R = s.color), void 0 !== s.borderColor && (e.Ht = s.borderColor), void 0 !== s.wickColor && (e.vr = s.wickColor), e;
}
function js(t, i, s, n, e) {
  var r = _(e)(s),
    h = Math.max.apply(Math, _toConsumableArray(r)),
    a = Math.min.apply(Math, _toConsumableArray(r)),
    l = r[r.length - 1],
    o = [l, h, a, l];
    s.time;
    var c = s.color,
    d = _objectWithoutProperties(s, _excluded);
  return {
    Re: i,
    wt: t,
    Ft: o,
    dw: n,
    se: d,
    R: c
  };
}
function Ks(t) {
  return void 0 !== t.Ft;
}
function Xs(t, i) {
  return void 0 !== i.customValues && (t.bw = i.customValues), t;
}
function Zs(t) {
  return function (i, s, n, e, r, h) {
    return function (t, i) {
      return i ? i(t) : Ws(t);
    }(n, h) ? Xs({
      wt: i,
      Re: s,
      dw: e
    }, n) : Xs(t(i, s, n, e, r), n);
  };
}
function Gs(t) {
  return {
    Candlestick: Zs(Ys),
    Bar: Zs(qs),
    Area: Zs(Us),
    Baseline: Zs($s),
    Histogram: Zs(Hs),
    Line: Zs(Hs),
    Custom: Zs(js)
  }[t];
}
function Js(t) {
  return {
    Re: 0,
    Sw: new Map(),
    Hh: t
  };
}
function Qs(t, i) {
  if (void 0 !== t && 0 !== t.length) return {
    xw: i.key(t[0].wt),
    Cw: i.key(t[t.length - 1].wt)
  };
}
function tn(t) {
  var i;
  return t.forEach(function (t) {
    void 0 === i && (i = t.dw);
  }), _(i);
}
var sn = /*#__PURE__*/function () {
  function sn(t) {
    _classCallCheck(this, sn);
    this.yw = new Map(), this.kw = new Map(), this.Pw = new Map(), this.Tw = [], this.i_ = t;
  }
  return _createClass(sn, [{
    key: "m",
    value: function m() {
      this.yw.clear(), this.kw.clear(), this.Pw.clear(), this.Tw = [];
    }
  }, {
    key: "Rw",
    value: function Rw(t, i) {
      var _this54 = this;
      var s = 0 !== this.yw.size,
        n = false;
      var e = this.kw.get(t);
      if (void 0 !== e) if (1 === this.kw.size) s = false, n = true, this.yw.clear();else {
        var _iterator39 = _createForOfIteratorHelper(this.Tw),
          _step39;
        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
            var _i67 = _step39.value;
            _i67.pointData.Sw["delete"](t) && (n = !0);
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }
      }
      var r = [];
      if (0 !== i.length) {
        var _s52 = i.map(function (t) {
            return t.time;
          }),
          _e19 = this.i_.createConverterToInternalObj(i),
          _h8 = Gs(t.Rr()),
          _a13 = t.da(),
          _l7 = t.pa();
        r = i.map(function (i, r) {
          var o = _e19(i.time),
            _ = _this54.i_.key(o);
          var u = _this54.yw.get(_);
          void 0 === u && (u = Js(o), _this54.yw.set(_, u), n = true);
          var c = _h8(o, u.Re, i, _s52[r], _a13, _l7);
          return u.Sw.set(t, c), c;
        });
      }
      s && this.Dw(), this.Vw(t, r);
      var h = -1;
      if (n) {
        var _t65 = [];
        this.yw.forEach(function (i) {
          _t65.push({
            timeWeight: 0,
            time: i.Hh,
            pointData: i,
            originalTime: tn(i.Sw)
          });
        }), _t65.sort(function (t, i) {
          return _this54.i_.key(t.time) - _this54.i_.key(i.time);
        }), h = this.Iw(_t65);
      }
      return this.Bw(t, h, function (t, i, s) {
        var n = Qs(t, s),
          e = Qs(i, s);
        if (void 0 !== n && void 0 !== e) return {
          Aw: false,
          zh: n.Cw >= e.Cw && n.xw >= e.xw
        };
      }(this.kw.get(t), e, this.i_));
    }
  }, {
    key: "yc",
    value: function yc(t) {
      return this.Rw(t, []);
    }
  }, {
    key: "Ew",
    value: function Ew(t, i, s) {
      var _this55 = this;
      var n = i;
      !function (t) {
        void 0 === t.dw && (t.dw = t.time);
      }(n), this.i_.preprocessData(i);
      var e = this.i_.createConverterToInternalObj([i])(i.time),
        r = this.Pw.get(t);
      if (!s && void 0 !== r && this.i_.key(e) < this.i_.key(r)) throw new Error("Cannot update oldest data, last time=".concat(r, ", new time=").concat(e));
      var h = this.yw.get(this.i_.key(e));
      if (s && void 0 === h) throw new Error("Cannot update non-existing data point when historicalUpdate is true");
      var a = void 0 === h;
      void 0 === h && (h = Js(e), this.yw.set(this.i_.key(e), h));
      var l = Gs(t.Rr()),
        o = t.da(),
        _ = t.pa(),
        u = l(e, h.Re, i, n.dw, o, _);
      h.Sw.set(t, u), s ? this.zw(t, u, h.Re) : this.Lw(t, u);
      var c = {
        zh: Ks(u),
        Aw: s
      };
      if (!a) return this.Bw(t, -1, c);
      var d = {
          timeWeight: 0,
          time: h.Hh,
          pointData: h,
          originalTime: tn(h.Sw)
        },
        f = yt(this.Tw, this.i_.key(d.time), function (t, i) {
          return _this55.i_.key(t.time) < i;
        });
      this.Tw.splice(f, 0, d);
      for (var _t66 = f; _t66 < this.Tw.length; ++_t66) nn(this.Tw[_t66].pointData, _t66);
      return this.i_.fillWeightsForPoints(this.Tw, f), this.Bw(t, f, c);
    }
  }, {
    key: "Lw",
    value: function Lw(t, i) {
      var s = this.kw.get(t);
      void 0 === s && (s = [], this.kw.set(t, s));
      var n = 0 !== s.length ? s[s.length - 1] : null;
      null === n || this.i_.key(i.wt) > this.i_.key(n.wt) ? Ks(i) && s.push(i) : Ks(i) ? s[s.length - 1] = i : s.splice(-1, 1), this.Pw.set(t, i.wt);
    }
  }, {
    key: "zw",
    value: function zw(t, i, s) {
      var n = this.kw.get(t);
      if (void 0 === n) return;
      var e = yt(n, s, function (t, i) {
        return t.Re < i;
      });
      Ks(i) ? n[e] = i : n.splice(e, 1);
    }
  }, {
    key: "Vw",
    value: function Vw(t, i) {
      0 !== i.length ? (this.kw.set(t, i.filter(Ks)), this.Pw.set(t, i[i.length - 1].wt)) : (this.kw["delete"](t), this.Pw["delete"](t));
    }
  }, {
    key: "Dw",
    value: function Dw() {
      var _iterator40 = _createForOfIteratorHelper(this.Tw),
        _step40;
      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var _t67 = _step40.value;
          0 === _t67.pointData.Sw.size && this.yw["delete"](this.i_.key(_t67.time));
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }
    }
  }, {
    key: "Iw",
    value: function Iw(t) {
      var i = -1;
      for (var _s53 = 0; _s53 < this.Tw.length && _s53 < t.length; ++_s53) {
        var _n26 = this.Tw[_s53],
          _e20 = t[_s53];
        if (this.i_.key(_n26.time) !== this.i_.key(_e20.time)) {
          i = _s53;
          break;
        }
        _e20.timeWeight = _n26.timeWeight, nn(_e20.pointData, _s53);
      }
      if (-1 === i && this.Tw.length !== t.length && (i = Math.min(this.Tw.length, t.length)), -1 === i) return -1;
      for (var _s54 = i; _s54 < t.length; ++_s54) nn(t[_s54].pointData, _s54);
      return this.i_.fillWeightsForPoints(t, i), this.Tw = t, i;
    }
  }, {
    key: "Ow",
    value: function Ow() {
      if (0 === this.kw.size) return null;
      var t = 0;
      return this.kw.forEach(function (i) {
        0 !== i.length && (t = Math.max(t, i[i.length - 1].Re));
      }), t;
    }
  }, {
    key: "Bw",
    value: function Bw(t, i, s) {
      var n = {
        Do: new Map(),
        At: {
          iu: this.Ow()
        }
      };
      if (-1 !== i) this.kw.forEach(function (i, e) {
        n.Do.set(e, {
          se: i,
          Nw: e === t ? s : void 0
        });
      }), this.kw.has(t) || n.Do.set(t, {
        se: [],
        Nw: s
      }), n.At.Ww = this.Tw, n.At.Fw = i;else {
        var _i68 = this.kw.get(t);
        n.Do.set(t, {
          se: _i68 || [],
          Nw: s
        });
      }
      return n;
    }
  }]);
}();
function nn(t, i) {
  t.Re = i, t.Sw.forEach(function (t) {
    t.Re = i;
  });
}
function en(t, i) {
  return t.wt < i;
}
function rn(t, i) {
  return i < t.wt;
}
function hn(t, i, s) {
  var n = i.Uh(),
    e = i.bi(),
    r = yt(t, n, en),
    h = kt(t, e, rn);
  if (!s) return {
    from: r,
    to: h
  };
  var a = r,
    l = h;
  return r > 0 && r < t.length && t[r].wt >= n && (a = r - 1), h > 0 && h < t.length && t[h - 1].wt <= e && (l = h + 1), {
    from: a,
    to: l
  };
}
var an = /*#__PURE__*/function () {
  function an(t, i, s) {
    _classCallCheck(this, an);
    this.Hw = true, this.Uw = true, this.$w = true, this.qw = [], this.Yw = null, this.Jn = t, this.Qn = i, this.jw = s;
  }
  return _createClass(an, [{
    key: "kt",
    value: function kt(t) {
      this.Hw = true, "data" === t && (this.Uw = true), "options" === t && (this.$w = true);
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.Jn.Vt() ? (this.Kw(), null === this.Yw ? null : this.Xw) : null;
    }
  }, {
    key: "Zw",
    value: function Zw() {
      var _this56 = this;
      this.qw = this.qw.map(function (t) {
        return _objectSpread2(_objectSpread2({}, t), _this56.Jn.Rh().Dr(t.wt));
      });
    }
  }, {
    key: "Gw",
    value: function Gw() {
      this.Yw = null;
    }
  }, {
    key: "Kw",
    value: function Kw() {
      this.Uw && (this.Jw(), this.Uw = false), this.$w && (this.Zw(), this.$w = false), this.Hw && (this.Qw(), this.Hw = false);
    }
  }, {
    key: "Qw",
    value: function Qw() {
      var t = this.Jn.Wt(),
        i = this.Qn.At();
      if (this.Gw(), i.Ki() || t.Ki()) return;
      var s = i.ye();
      if (null === s) return;
      if (0 === this.Jn.Xs().zr()) return;
      var n = this.Jn.zt();
      null !== n && (this.Yw = hn(this.qw, s, this.jw), this.tg(t, i, n.Ft), this.ig());
    }
  }]);
}();
var ln = /*#__PURE__*/function () {
  function ln(t, i) {
    _classCallCheck(this, ln);
    this.sg = t, this.Yi = i;
  }
  return _createClass(ln, [{
    key: "nt",
    value: function nt(t, i, s) {
      this.sg.draw(t, this.Yi, i, s);
    }
  }]);
}();
var on = /*#__PURE__*/function (_an) {
  function on(t, i, s) {
    var _this57;
    _classCallCheck(this, on);
    _this57 = _callSuper(this, on, [t, i, false]), _this57.sh = s, _this57.Xw = new ln(_this57.sh.renderer(), function (i) {
      var s = t.zt();
      return null === s ? null : t.Wt().Nt(i, s.Ft);
    });
    return _this57;
  }
  _inherits(on, _an);
  return _createClass(on, [{
    key: "fa",
    value: function fa(t) {
      return this.sh.priceValueBuilder(t);
    }
  }, {
    key: "va",
    value: function va(t) {
      return this.sh.isWhitespace(t);
    }
  }, {
    key: "Jw",
    value: function Jw() {
      var t = this.Jn.Rh();
      this.qw = this.Jn.Xs().Hr().map(function (i) {
        return _objectSpread2(_objectSpread2({
          wt: i.Re,
          _t: NaN
        }, t.Dr(i.Re)), {}, {
          ng: i.se
        });
      });
    }
  }, {
    key: "tg",
    value: function tg(t, i) {
      i.su(this.qw, b(this.Yw));
    }
  }, {
    key: "ig",
    value: function ig() {
      this.sh.update({
        bars: this.qw.map(_n),
        barSpacing: this.Qn.At().lu(),
        visibleRange: this.Yw
      }, this.Jn.N());
    }
  }]);
}(an);
function _n(t) {
  return {
    x: t._t,
    time: t.wt,
    originalData: t.ng,
    barColor: t.cr
  };
}
var un = {
    color: "#2196f3"
  },
  cn = function cn(t, i, s) {
    var n = c(s);
    return new on(t, i, n);
  };
function dn(t) {
  var i = {
    value: t.Ft[3],
    time: t.dw
  };
  return void 0 !== t.bw && (i.customValues = t.bw), i;
}
function fn(t) {
  var i = dn(t);
  return void 0 !== t.R && (i.color = t.R), i;
}
function pn(t) {
  var i = dn(t);
  return void 0 !== t.vt && (i.lineColor = t.vt), void 0 !== t.mr && (i.topColor = t.mr), void 0 !== t.wr && (i.bottomColor = t.wr), i;
}
function vn(t) {
  var i = dn(t);
  return void 0 !== t.gr && (i.topLineColor = t.gr), void 0 !== t.Mr && (i.bottomLineColor = t.Mr), void 0 !== t.br && (i.topFillColor1 = t.br), void 0 !== t.Sr && (i.topFillColor2 = t.Sr), void 0 !== t.Cr && (i.bottomFillColor1 = t.Cr), void 0 !== t.yr && (i.bottomFillColor2 = t.yr), i;
}
function mn(t) {
  var i = {
    open: t.Ft[0],
    high: t.Ft[1],
    low: t.Ft[2],
    close: t.Ft[3],
    time: t.dw
  };
  return void 0 !== t.bw && (i.customValues = t.bw), i;
}
function wn(t) {
  var i = mn(t);
  return void 0 !== t.R && (i.color = t.R), i;
}
function gn(t) {
  var i = mn(t),
    s = t.R,
    n = t.Ht,
    e = t.vr;
  return void 0 !== s && (i.color = s), void 0 !== n && (i.borderColor = n), void 0 !== e && (i.wickColor = e), i;
}
function Mn(t) {
  return {
    Area: pn,
    Line: fn,
    Baseline: vn,
    Histogram: fn,
    Bar: wn,
    Candlestick: gn,
    Custom: bn
  }[t];
}
function bn(t) {
  var i = t.dw;
  return _objectSpread2(_objectSpread2({}, t.se), {}, {
    time: i
  });
}
var Sn = {
    vertLine: {
      color: "#9598A1",
      width: 1,
      style: 3,
      visible: true,
      labelVisible: true,
      labelBackgroundColor: "#131722"
    },
    horzLine: {
      color: "#9598A1",
      width: 1,
      style: 3,
      visible: true,
      labelVisible: true,
      labelBackgroundColor: "#131722"
    },
    mode: 1
  },
  xn = {
    vertLines: {
      color: "#D6DCDE",
      style: 0,
      visible: true
    },
    horzLines: {
      color: "#D6DCDE",
      style: 0,
      visible: true
    }
  },
  Cn = {
    background: {
      type: "solid",
      color: "#FFFFFF"
    },
    textColor: "#191919",
    fontSize: 12,
    fontFamily: S,
    panes: {
      enableResize: true,
      separatorColor: "#E0E3EB",
      separatorHoverColor: "rgba(178, 181, 189, 0.2)"
    },
    attributionLogo: true,
    colorSpace: "srgb",
    colorParsers: []
  },
  yn = {
    autoScale: true,
    mode: 0,
    invertScale: false,
    alignLabels: true,
    borderVisible: true,
    borderColor: "#2B2B43",
    entireTextOnly: false,
    visible: false,
    ticksVisible: false,
    scaleMargins: {
      bottom: .1,
      top: .2
    },
    minimumWidth: 0,
    ensureEdgeTickMarksVisible: false
  },
  kn = {
    rightOffset: 0,
    barSpacing: 6,
    minBarSpacing: .5,
    maxBarSpacing: 0,
    fixLeftEdge: false,
    fixRightEdge: false,
    lockVisibleTimeRangeOnResize: false,
    rightBarStaysOnScroll: false,
    borderVisible: true,
    borderColor: "#2B2B43",
    visible: true,
    timeVisible: false,
    secondsVisible: true,
    shiftVisibleRangeOnNewBar: true,
    allowShiftVisibleRangeOnWhitespaceReplacement: false,
    ticksVisible: false,
    uniformDistribution: false,
    minimumHeight: 0,
    allowBoldLabels: true,
    ignoreWhitespaceIndices: false
  };
function Pn() {
  return {
    width: 0,
    height: 0,
    autoSize: false,
    layout: Cn,
    crosshair: Sn,
    grid: xn,
    overlayPriceScales: _objectSpread2({}, yn),
    leftPriceScale: _objectSpread2(_objectSpread2({}, yn), {}, {
      visible: false
    }),
    rightPriceScale: _objectSpread2(_objectSpread2({}, yn), {}, {
      visible: true
    }),
    timeScale: kn,
    localization: {
      locale: ss ? navigator.language : "",
      dateFormat: "dd MMM 'yy"
    },
    handleScroll: {
      mouseWheel: true,
      pressedMouseMove: true,
      horzTouchDrag: true,
      vertTouchDrag: true
    },
    handleScale: {
      axisPressedMouseMove: {
        time: true,
        price: true
      },
      axisDoubleClickReset: {
        time: true,
        price: true
      },
      mouseWheel: true,
      pinch: true
    },
    kineticScroll: {
      mouse: false,
      touch: true
    },
    trackingMode: {
      exitMode: 1
    }
  };
}
var Tn = /*#__PURE__*/function () {
  function Tn(t, i, s) {
    _classCallCheck(this, Tn);
    this.Df = t, this.eg = i, this.rg = s !== null && s !== void 0 ? s : 0;
  }
  return _createClass(Tn, [{
    key: "applyOptions",
    value: function applyOptions(t) {
      this.Df.Qt().Qu(this.eg, t, this.rg);
    }
  }, {
    key: "options",
    value: function options() {
      return this.Yi().N();
    }
  }, {
    key: "width",
    value: function width() {
      return Z(this.eg) ? this.Df.Gm(this.eg) : 0;
    }
  }, {
    key: "setVisibleRange",
    value: function setVisibleRange(t) {
      this.setAutoScale(false), this.Yi().Nl(new vt(t.from, t.to));
    }
  }, {
    key: "getVisibleRange",
    value: function getVisibleRange() {
      var t = this.Yi().Qe();
      return null === t ? null : {
        from: t.$e(),
        to: t.qe()
      };
    }
  }, {
    key: "setAutoScale",
    value: function setAutoScale(t) {
      this.applyOptions({
        autoScale: t
      });
    }
  }, {
    key: "Yi",
    value: function Yi() {
      return u(this.Df.Qt().tc(this.eg, this.rg)).Wt;
    }
  }]);
}();
var Rn = /*#__PURE__*/function () {
  function Rn(t, i, s, n) {
    _classCallCheck(this, Rn);
    this.Df = t, this.yt = s, this.hg = i, this.ag = n;
  }
  return _createClass(Rn, [{
    key: "getHeight",
    value: function getHeight() {
      return this.yt.$t();
    }
  }, {
    key: "setHeight",
    value: function setHeight(t) {
      var i = this.Df.Qt(),
        s = i.Bc(this.yt);
      i.hc(s, t);
    }
  }, {
    key: "paneIndex",
    value: function paneIndex() {
      return this.Df.Qt().Bc(this.yt);
    }
  }, {
    key: "moveTo",
    value: function moveTo(t) {
      var i = this.paneIndex();
      i !== t && (o(t >= 0 && t < this.Df.If().length, "Invalid pane index"), this.Df.Qt().ac(i, t));
    }
  }, {
    key: "getSeries",
    value: function getSeries() {
      var _this$yt$Do$map,
        _this58 = this;
      return (_this$yt$Do$map = this.yt.Do().map(function (t) {
        return _this58.hg(t);
      })) !== null && _this$yt$Do$map !== void 0 ? _this$yt$Do$map : [];
    }
  }, {
    key: "getHTMLElement",
    value: function getHTMLElement() {
      return this.Df.If()[this.paneIndex()].Of();
    }
  }, {
    key: "attachPrimitive",
    value: function attachPrimitive(t) {
      var _this59 = this;
      this.yt.ua(t), t.attached && t.attached({
        chart: this.ag,
        requestUpdate: function requestUpdate() {
          return _this59.yt.Qt().Bh();
        }
      });
    }
  }, {
    key: "detachPrimitive",
    value: function detachPrimitive(t) {
      this.yt.ca(t);
    }
  }, {
    key: "priceScale",
    value: function priceScale(t) {
      if (null === this.yt.Co(t)) throw new Error("Cannot find price scale with id: ".concat(t));
      return new Tn(this.Df, t, this.paneIndex());
    }
  }]);
}();
var Dn = {
  color: "#FF0000",
  price: 0,
  lineStyle: 2,
  lineWidth: 1,
  lineVisible: true,
  axisLabelVisible: true,
  title: "",
  axisLabelColor: "",
  axisLabelTextColor: ""
};
var Vn = /*#__PURE__*/function () {
  function Vn(t) {
    _classCallCheck(this, Vn);
    this.ir = t;
  }
  return _createClass(Vn, [{
    key: "applyOptions",
    value: function applyOptions(t) {
      this.ir.hr(t);
    }
  }, {
    key: "options",
    value: function options() {
      return this.ir.N();
    }
  }, {
    key: "lg",
    value: function lg() {
      return this.ir;
    }
  }]);
}();
var In = /*#__PURE__*/function () {
  function In(t, i, s, n, e, r) {
    _classCallCheck(this, In);
    this.og = new d(), this.Jn = t, this._g = i, this.ug = s, this.i_ = e, this.ag = n, this.cg = r;
  }
  return _createClass(In, [{
    key: "m",
    value: function m() {
      this.og.m();
    }
  }, {
    key: "priceFormatter",
    value: function priceFormatter() {
      return this.Jn.ra();
    }
  }, {
    key: "priceToCoordinate",
    value: function priceToCoordinate(t) {
      var i = this.Jn.zt();
      return null === i ? null : this.Jn.Wt().Nt(t, i.Ft);
    }
  }, {
    key: "coordinateToPrice",
    value: function coordinateToPrice(t) {
      var i = this.Jn.zt();
      return null === i ? null : this.Jn.Wt().Ts(t, i.Ft);
    }
  }, {
    key: "barsInLogicalRange",
    value: function barsInLogicalRange(t) {
      if (null === t) return null;
      var i = new Ri(new ki(t.from, t.to)).w_(),
        s = this.Jn.Xs();
      if (s.Ki()) return null;
      var n = s.Wr(i.Uh(), 1),
        e = s.Wr(i.bi(), -1),
        r = u(s.Lr()),
        h = u(s.Ks());
      if (null !== n && null !== e && n.Re > e.Re) return {
        barsBefore: t.from - r,
        barsAfter: h - t.to
      };
      var a = {
        barsBefore: null === n || n.Re === r ? t.from - r : n.Re - r,
        barsAfter: null === e || e.Re === h ? h - t.to : h - e.Re
      };
      return null !== n && null !== e && (a.from = n.dw, a.to = e.dw), a;
    }
  }, {
    key: "setData",
    value: function setData(t) {
      this.i_, this.Jn.Rr(), this._g.dg(this.Jn, t), this.fg("full");
    }
  }, {
    key: "update",
    value: function update(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.Jn.Rr(), this._g.pg(this.Jn, t, i), this.fg("update");
    }
  }, {
    key: "dataByIndex",
    value: function dataByIndex(t, i) {
      var s = this.Jn.Xs().Wr(t, i);
      if (null === s) return null;
      return Mn(this.seriesType())(s);
    }
  }, {
    key: "data",
    value: function data() {
      var t = Mn(this.seriesType());
      return this.Jn.Xs().Hr().map(function (i) {
        return t(i);
      });
    }
  }, {
    key: "subscribeDataChanged",
    value: function subscribeDataChanged(t) {
      this.og.i(t);
    }
  }, {
    key: "unsubscribeDataChanged",
    value: function unsubscribeDataChanged(t) {
      this.og._(t);
    }
  }, {
    key: "applyOptions",
    value: function applyOptions(t) {
      this.Jn.hr(t);
    }
  }, {
    key: "options",
    value: function options() {
      return g(this.Jn.N());
    }
  }, {
    key: "priceScale",
    value: function priceScale() {
      return this.ug.priceScale(this.Jn.Wt().wa(), this.getPane().paneIndex());
    }
  }, {
    key: "createPriceLine",
    value: function createPriceLine(t) {
      var i = f(g(Dn), t),
        s = this.Jn.Oh(i);
      return new Vn(s);
    }
  }, {
    key: "removePriceLine",
    value: function removePriceLine(t) {
      this.Jn.Nh(t.lg());
    }
  }, {
    key: "priceLines",
    value: function priceLines() {
      return this.Jn.Wh().map(function (t) {
        return new Vn(t);
      });
    }
  }, {
    key: "seriesType",
    value: function seriesType() {
      return this.Jn.Rr();
    }
  }, {
    key: "attachPrimitive",
    value: function attachPrimitive(t) {
      var _this60 = this;
      this.Jn.ua(t), t.attached && t.attached({
        chart: this.ag,
        series: this,
        requestUpdate: function requestUpdate() {
          return _this60.Jn.Qt().Bh();
        },
        horzScaleBehavior: this.i_
      });
    }
  }, {
    key: "detachPrimitive",
    value: function detachPrimitive(t) {
      this.Jn.ca(t), t.detached && t.detached(), this.Jn.Qt().Bh();
    }
  }, {
    key: "getPane",
    value: function getPane() {
      var t = this.Jn,
        i = u(this.Jn.Qt().Hn(t));
      return this.cg(i);
    }
  }, {
    key: "moveToPane",
    value: function moveToPane(t) {
      this.Jn.Qt().Rc(this.Jn, t);
    }
  }, {
    key: "seriesOrder",
    value: function seriesOrder() {
      var t = this.Jn.Qt().Hn(this.Jn);
      return null === t ? -1 : t.Do().indexOf(this.Jn);
    }
  }, {
    key: "setSeriesOrder",
    value: function setSeriesOrder(t) {
      var i = this.Jn.Qt().Hn(this.Jn);
      null !== i && i.qo(this.Jn, t);
    }
  }, {
    key: "fg",
    value: function fg(t) {
      this.og.v() && this.og.p(t);
    }
  }]);
}();
var Bn = /*#__PURE__*/function () {
  function Bn(t, i, s) {
    _classCallCheck(this, Bn);
    this.vg = new d(), this.T_ = new d(), this.rm = new d(), this.ts = t, this.uh = t.At(), this.Om = i, this.uh.Su().i(this.mg.bind(this)), this.uh.xu().i(this.wg.bind(this)), this.Om.dm().i(this.gg.bind(this)), this.i_ = s;
  }
  return _createClass(Bn, [{
    key: "m",
    value: function m() {
      this.uh.Su().u(this), this.uh.xu().u(this), this.Om.dm().u(this), this.vg.m(), this.T_.m(), this.rm.m();
    }
  }, {
    key: "scrollPosition",
    value: function scrollPosition() {
      return this.uh._u();
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(t, i) {
      i ? this.uh.gu(t, 1e3) : this.ts.fn(t);
    }
  }, {
    key: "scrollToRealTime",
    value: function scrollToRealTime() {
      this.uh.wu();
    }
  }, {
    key: "getVisibleRange",
    value: function getVisibleRange() {
      var t = this.uh.K_();
      return null === t ? null : {
        from: t.from.originalTime,
        to: t.to.originalTime
      };
    }
  }, {
    key: "setVisibleRange",
    value: function setVisibleRange(t) {
      var i = {
          from: this.i_.convertHorzItemToInternal(t.from),
          to: this.i_.convertHorzItemToInternal(t.to)
        },
        s = this.uh.J_(i);
      this.ts.Pc(s);
    }
  }, {
    key: "getVisibleLogicalRange",
    value: function getVisibleLogicalRange() {
      var t = this.uh.j_();
      return null === t ? null : {
        from: t.Uh(),
        to: t.bi()
      };
    }
  }, {
    key: "setVisibleLogicalRange",
    value: function setVisibleLogicalRange(t) {
      o(t.from <= t.to, "The from index cannot be after the to index."), this.ts.Pc(t);
    }
  }, {
    key: "resetTimeScale",
    value: function resetTimeScale() {
      this.ts.cn();
    }
  }, {
    key: "fitContent",
    value: function fitContent() {
      this.ts.ku();
    }
  }, {
    key: "logicalToCoordinate",
    value: function logicalToCoordinate(t) {
      var i = this.ts.At();
      return i.Ki() ? null : i.qt(t);
    }
  }, {
    key: "coordinateToLogical",
    value: function coordinateToLogical(t) {
      return this.uh.Ki() ? null : this.uh.nu(t);
    }
  }, {
    key: "timeToIndex",
    value: function timeToIndex(t, i) {
      var s = this.i_.convertHorzItemToInternal(t);
      return this.uh.U_(s, i);
    }
  }, {
    key: "timeToCoordinate",
    value: function timeToCoordinate(t) {
      var i = this.timeToIndex(t, false);
      return null === i ? null : this.uh.qt(i);
    }
  }, {
    key: "coordinateToTime",
    value: function coordinateToTime(t) {
      var i = this.ts.At(),
        s = i.nu(t),
        n = i.ss(s);
      return null === n ? null : n.originalTime;
    }
  }, {
    key: "width",
    value: function width() {
      return this.Om.Nf().width;
    }
  }, {
    key: "height",
    value: function height() {
      return this.Om.Nf().height;
    }
  }, {
    key: "subscribeVisibleTimeRangeChange",
    value: function subscribeVisibleTimeRangeChange(t) {
      this.vg.i(t);
    }
  }, {
    key: "unsubscribeVisibleTimeRangeChange",
    value: function unsubscribeVisibleTimeRangeChange(t) {
      this.vg._(t);
    }
  }, {
    key: "subscribeVisibleLogicalRangeChange",
    value: function subscribeVisibleLogicalRangeChange(t) {
      this.T_.i(t);
    }
  }, {
    key: "unsubscribeVisibleLogicalRangeChange",
    value: function unsubscribeVisibleLogicalRangeChange(t) {
      this.T_._(t);
    }
  }, {
    key: "subscribeSizeChange",
    value: function subscribeSizeChange(t) {
      this.rm.i(t);
    }
  }, {
    key: "unsubscribeSizeChange",
    value: function unsubscribeSizeChange(t) {
      this.rm._(t);
    }
  }, {
    key: "applyOptions",
    value: function applyOptions(t) {
      this.uh.hr(t);
    }
  }, {
    key: "options",
    value: function options() {
      return _objectSpread2(_objectSpread2({}, g(this.uh.N())), {}, {
        barSpacing: this.uh.lu()
      });
    }
  }, {
    key: "mg",
    value: function mg() {
      this.vg.v() && this.vg.p(this.getVisibleRange());
    }
  }, {
    key: "wg",
    value: function wg() {
      this.T_.v() && this.T_.p(this.getVisibleLogicalRange());
    }
  }, {
    key: "gg",
    value: function gg(t) {
      this.rm.p(t.width, t.height);
    }
  }]);
}();
function An(t) {
  if (void 0 === t || "custom" === t.type) return;
  var i = t;
  void 0 !== i.minMove && void 0 === i.precision && (i.precision = function (t) {
    if (t >= 1) return 0;
    var i = 0;
    for (; i < 8; i++) {
      var _s55 = Math.round(t);
      if (Math.abs(_s55 - t) < 1e-8) return i;
      t *= 10;
    }
    return i;
  }(i.minMove));
}
function En(t) {
  return function (t) {
    if (w(t.handleScale)) {
      var _i69 = t.handleScale;
      t.handleScale = {
        axisDoubleClickReset: {
          time: _i69,
          price: _i69
        },
        axisPressedMouseMove: {
          time: _i69,
          price: _i69
        },
        mouseWheel: _i69,
        pinch: _i69
      };
    } else if (void 0 !== t.handleScale) {
      var _t$handleScale = t.handleScale,
        _i70 = _t$handleScale.axisPressedMouseMove,
        _s56 = _t$handleScale.axisDoubleClickReset;
      w(_i70) && (t.handleScale.axisPressedMouseMove = {
        time: _i70,
        price: _i70
      }), w(_s56) && (t.handleScale.axisDoubleClickReset = {
        time: _s56,
        price: _s56
      });
    }
    var i = t.handleScroll;
    w(i) && (t.handleScroll = {
      horzTouchDrag: i,
      vertTouchDrag: i,
      mouseWheel: i,
      pressedMouseMove: i
    });
  }(t), t;
}
var zn = /*#__PURE__*/function () {
  function zn(t, i, s) {
    var _this61 = this;
    _classCallCheck(this, zn);
    this.Mg = new Map(), this.bg = new Map(), this.Sg = new d(), this.xg = new d(), this.Cg = new d(), this.zu = new WeakMap(), this.yg = new sn(i);
    var n = void 0 === s ? g(Pn()) : f(g(Pn()), En(s));
    this.kg = i, this.Df = new Os(t, n, i), this.Df.Lv().i(function (t) {
      _this61.Sg.v() && _this61.Sg.p(_this61.Pg(t()));
    }, this), this.Df.Ov().i(function (t) {
      _this61.xg.v() && _this61.xg.p(_this61.Pg(t()));
    }, this), this.Df.nc().i(function (t) {
      _this61.Cg.v() && _this61.Cg.p(_this61.Pg(t()));
    }, this);
    var e = this.Df.Qt();
    this.Tg = new Bn(e, this.Df.Um(), this.kg);
  }
  return _createClass(zn, [{
    key: "remove",
    value: function remove() {
      this.Df.Lv().u(this), this.Df.Ov().u(this), this.Df.nc().u(this), this.Tg.m(), this.Df.m(), this.Mg.clear(), this.bg.clear(), this.Sg.m(), this.xg.m(), this.Cg.m(), this.yg.m();
    }
  }, {
    key: "resize",
    value: function resize(t, i, s) {
      this.autoSizeActive() || this.Df.Wm(t, i, s);
    }
  }, {
    key: "addCustomSeries",
    value: function addCustomSeries(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var n = function (t) {
        return {
          type: "Custom",
          isBuiltIn: false,
          defaultOptions: _objectSpread2(_objectSpread2({}, un), t.defaultOptions()),
          Rg: cn,
          Dg: t
        };
      }(c(t));
      return this.Vg(n, i, s);
    }
  }, {
    key: "addSeries",
    value: function addSeries(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return this.Vg(t, i, s);
    }
  }, {
    key: "removeSeries",
    value: function removeSeries(t) {
      var i = _(this.Mg.get(t)),
        s = this.yg.yc(i);
      this.Df.Qt().yc(i), this.Ig(s), this.Mg["delete"](t), this.bg["delete"](i);
    }
  }, {
    key: "dg",
    value: function dg(t, i) {
      this.Ig(this.yg.Rw(t, i));
    }
  }, {
    key: "pg",
    value: function pg(t, i, s) {
      this.Ig(this.yg.Ew(t, i, s));
    }
  }, {
    key: "subscribeClick",
    value: function subscribeClick(t) {
      this.Sg.i(t);
    }
  }, {
    key: "unsubscribeClick",
    value: function unsubscribeClick(t) {
      this.Sg._(t);
    }
  }, {
    key: "subscribeCrosshairMove",
    value: function subscribeCrosshairMove(t) {
      this.Cg.i(t);
    }
  }, {
    key: "unsubscribeCrosshairMove",
    value: function unsubscribeCrosshairMove(t) {
      this.Cg._(t);
    }
  }, {
    key: "subscribeDblClick",
    value: function subscribeDblClick(t) {
      this.xg.i(t);
    }
  }, {
    key: "unsubscribeDblClick",
    value: function unsubscribeDblClick(t) {
      this.xg._(t);
    }
  }, {
    key: "priceScale",
    value: function priceScale(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return new Tn(this.Df, t, i);
    }
  }, {
    key: "timeScale",
    value: function timeScale() {
      return this.Tg;
    }
  }, {
    key: "applyOptions",
    value: function applyOptions(t) {
      this.Df.hr(En(t));
    }
  }, {
    key: "options",
    value: function options() {
      return this.Df.N();
    }
  }, {
    key: "takeScreenshot",
    value: function takeScreenshot() {
      return this.Df.Xm();
    }
  }, {
    key: "removePane",
    value: function removePane(t) {
      this.Df.Qt().rc(t);
    }
  }, {
    key: "swapPanes",
    value: function swapPanes(t, i) {
      this.Df.Qt().ac(t, i);
    }
  }, {
    key: "autoSizeActive",
    value: function autoSizeActive() {
      return this.Df.tw();
    }
  }, {
    key: "chartElement",
    value: function chartElement() {
      return this.Df.Uf();
    }
  }, {
    key: "panes",
    value: function panes() {
      var _this62 = this;
      return this.Df.Qt().$s().map(function (t) {
        return _this62.Bg(t);
      });
    }
  }, {
    key: "paneSize",
    value: function paneSize() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var i = this.Df.nw(t);
      return {
        height: i.height,
        width: i.width
      };
    }
  }, {
    key: "setCrosshairPosition",
    value: function setCrosshairPosition(t, i, s) {
      var n = this.Mg.get(s);
      if (void 0 === n) return;
      var e = this.Df.Qt().Hn(n);
      null !== e && this.Df.Qt().gc(t, i, e);
    }
  }, {
    key: "clearCrosshairPosition",
    value: function clearCrosshairPosition() {
      this.Df.Qt().Mc(true);
    }
  }, {
    key: "horzBehaviour",
    value: function horzBehaviour() {
      return this.kg;
    }
  }, {
    key: "Vg",
    value: function Vg(t) {
      var _this63 = this;
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      o(void 0 !== t.Rg), An(i.priceFormat), "Candlestick" === t.type && function (t) {
        void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor);
      }(i);
      var n = f(g(e), g(t.defaultOptions), i),
        r = t.Rg,
        h = new Yt(this.Df.Qt(), t.type, n, r, t.Dg);
      this.Df.Qt().xc(h, s);
      var a = new In(h, this, this, this, this.kg, function (t) {
        return _this63.Bg(t);
      });
      return this.Mg.set(a, h), this.bg.set(h, a), a;
    }
  }, {
    key: "Ig",
    value: function Ig(t) {
      var i = this.Df.Qt();
      i.bc(t.At.iu, t.At.Ww, t.At.Fw), t.Do.forEach(function (t, i) {
        return i.ht(t.se, t.Nw);
      }), i.At().O_(), i.au();
    }
  }, {
    key: "Ag",
    value: function Ag(t) {
      return _(this.bg.get(t));
    }
  }, {
    key: "Pg",
    value: function Pg(t) {
      var _this64 = this;
      var i = new Map();
      t.ww.forEach(function (t, s) {
        var n = s.Rr(),
          e = Mn(n)(t);
        if ("Custom" !== n) o(Fs(e));else {
          var _t68 = s.pa();
          o(!_t68 || false === _t68(e));
        }
        i.set(_this64.Ag(s), e);
      });
      var s = void 0 !== t.mw && this.bg.has(t.mw) ? this.Ag(t.mw) : void 0;
      return {
        time: t.dw,
        logical: t.Re,
        point: t.fw,
        paneIndex: t.pw,
        hoveredSeries: s,
        hoveredObjectId: t.gw,
        seriesData: i,
        sourceEvent: t.Mw
      };
    }
  }, {
    key: "Bg",
    value: function Bg(t) {
      var _this65 = this;
      var i = this.zu.get(t);
      return i || (i = new Rn(this.Df, function (t) {
        return _this65.Ag(t);
      }, t, this), this.zu.set(t, i)), i;
    }
  }]);
}();
function Ln(t) {
  if (m(t)) {
    var _i71 = document.getElementById(t);
    return o(null !== _i71, "Cannot find element in DOM with id=".concat(t)), _i71;
  }
  return t;
}
function On(t, i, s) {
  var n = Ln(t),
    e = new zn(n, i, s);
  return i.setOptions(e.options()), e;
}
var Fn = /*#__PURE__*/function (_an2) {
  function Fn(t, i) {
    _classCallCheck(this, Fn);
    return _callSuper(this, Fn, [t, i, true]);
  }
  _inherits(Fn, _an2);
  return _createClass(Fn, [{
    key: "tg",
    value: function tg(t, i, s) {
      i.su(this.qw, b(this.Yw)), t.Hl(this.qw, s, b(this.Yw));
    }
  }, {
    key: "Eg",
    value: function Eg(t, i) {
      return {
        wt: t,
        gt: i,
        _t: NaN,
        ut: NaN
      };
    }
  }, {
    key: "Jw",
    value: function Jw() {
      var _this66 = this;
      var t = this.Jn.Rh();
      this.qw = this.Jn.Xs().Hr().map(function (i) {
        var s = i.Ft[3];
        return _this66.zg(i.Re, s, t);
      });
    }
  }]);
}(an);
function Hn(t, i, s, n, e, r, h) {
  if (0 === i.length || n.from >= i.length || n.to <= 0) return;
  var a = t.context,
    l = t.horizontalPixelRatio,
    o = t.verticalPixelRatio,
    _ = i[n.from];
  var u = r(t, _),
    c = _;
  if (n.to - n.from < 2) {
    var _i72 = e / 2;
    a.beginPath();
    var _s57 = {
        _t: _._t - _i72,
        ut: _.ut
      },
      _n27 = {
        _t: _._t + _i72,
        ut: _.ut
      };
    a.moveTo(_s57._t * l, _s57.ut * o), a.lineTo(_n27._t * l, _n27.ut * o), h(t, u, _s57, _n27);
  } else {
    var _e21 = function _e21(i, s) {
      h(t, u, c, s), a.beginPath(), u = i, c = s;
    };
    var _d = c;
    a.beginPath(), a.moveTo(_._t * l, _.ut * o);
    for (var _h9 = n.from + 1; _h9 < n.to; ++_h9) {
      _d = i[_h9];
      var _n28 = r(t, _d);
      switch (s) {
        case 0:
          a.lineTo(_d._t * l, _d.ut * o);
          break;
        case 1:
          a.lineTo(_d._t * l, i[_h9 - 1].ut * o), _n28 !== u && (_e21(_n28, _d), a.lineTo(_d._t * l, i[_h9 - 1].ut * o)), a.lineTo(_d._t * l, _d.ut * o);
          break;
        case 2:
          {
            var _Yn = Yn(i, _h9 - 1, _h9),
              _Yn2 = _slicedToArray(_Yn, 2),
              _t69 = _Yn2[0],
              _s58 = _Yn2[1];
            a.bezierCurveTo(_t69._t * l, _t69.ut * o, _s58._t * l, _s58.ut * o, _d._t * l, _d.ut * o);
            break;
          }
      }
      1 !== s && _n28 !== u && (_e21(_n28, _d), a.moveTo(_d._t * l, _d.ut * o));
    }
    (c !== _d || c === _d && 1 === s) && h(t, u, c, _d);
  }
}
var Un = 6;
function $n(t, i) {
  return {
    _t: t._t - i._t,
    ut: t.ut - i.ut
  };
}
function qn(t, i) {
  return {
    _t: t._t / i,
    ut: t.ut / i
  };
}
function Yn(t, i, s) {
  var n = Math.max(0, i - 1),
    e = Math.min(t.length - 1, s + 1);
  var r, h;
  return [(r = t[i], h = qn($n(t[s], t[n]), Un), {
    _t: r._t + h._t,
    ut: r.ut + h.ut
  }), $n(t[s], qn($n(t[e], t[i]), Un))];
}
function jn(t, i) {
  var s = t.context;
  s.strokeStyle = i, s.stroke();
}
var Kn = /*#__PURE__*/function (_R6) {
  function Kn() {
    var _this67;
    _classCallCheck(this, Kn);
    _this67 = _callSuper(this, Kn, arguments), _this67.rt = null;
    return _this67;
  }
  _inherits(Kn, _R6);
  return _createClass(Kn, [{
    key: "ht",
    value: function ht(t) {
      this.rt = t;
    }
  }, {
    key: "et",
    value: function et(t) {
      if (null === this.rt) return;
      var _this$rt = this.rt,
        i = _this$rt.ot,
        s = _this$rt.lt,
        n = _this$rt.Lg,
        e = _this$rt.Og,
        r = _this$rt.ct,
        h = _this$rt.Xt,
        l = _this$rt.Ng;
      if (null === s) return;
      var o = t.context;
      o.lineCap = "butt", o.lineWidth = r * t.verticalPixelRatio, a(o, h), o.lineJoin = "round";
      var _ = this.Wg.bind(this);
      void 0 !== e && Hn(t, i, e, s, n, _, jn), l && function (t, i, s, n, e) {
        if (n.to - n.from <= 0) return;
        var r = t.horizontalPixelRatio,
          h = t.verticalPixelRatio,
          a = t.context;
        var l = null;
        var o = Math.max(1, Math.floor(r)) % 2 / 2,
          _ = s * h + o;
        for (var _s59 = n.to - 1; _s59 >= n.from; --_s59) {
          var _n29 = i[_s59];
          if (_n29) {
            var _i73 = e(t, _n29);
            _i73 !== l && (a.beginPath(), null !== l && a.fill(), a.fillStyle = _i73, l = _i73);
            var _s60 = Math.round(_n29._t * r) + o,
              _u5 = _n29.ut * h;
            a.moveTo(_s60, _u5), a.arc(_s60, _u5, _, 0, 2 * Math.PI);
          }
        }
        a.fill();
      }(t, i, l, s, _);
    }
  }]);
}(R);
function ee(t, i) {
  return t.weight > i.weight ? t : i;
}
var re = /*#__PURE__*/function () {
  function re() {
    _classCallCheck(this, re);
  }
  return _createClass(re, [{
    key: "options",
    value: function options() {
      return this.ys;
    }
  }, {
    key: "setOptions",
    value: function setOptions(t) {
      this.ys = t;
    }
  }, {
    key: "preprocessData",
    value: function preprocessData(t) {}
  }, {
    key: "updateFormatter",
    value: function updateFormatter(t) {
      this.ys && (this.ys.localization = t);
    }
  }, {
    key: "createConverterToInternalObj",
    value: function createConverterToInternalObj(t) {
      return function (t) {
        return t;
      };
    }
  }, {
    key: "key",
    value: function key(t) {
      return t;
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(t) {
      return t;
    }
  }, {
    key: "convertHorzItemToInternal",
    value: function convertHorzItemToInternal(t) {
      return t;
    }
  }, {
    key: "formatHorzItem",
    value: function formatHorzItem(t) {
      return t.toFixed(this.Cn());
    }
  }, {
    key: "formatTickmark",
    value: function formatTickmark(t, i) {
      return t.time.toFixed(this.Cn());
    }
  }, {
    key: "maxTickMarkWeight",
    value: function maxTickMarkWeight(t) {
      return t.reduce(ee, t[0]).weight;
    }
  }, {
    key: "fillWeightsForPoints",
    value: function fillWeightsForPoints(t, i) {
      for (var _n31 = i; _n31 < t.length; ++_n31) t[_n31].timeWeight = (s = t[_n31].time) === 100 * Math.ceil(s / 100) ? 8 : s === 50 * Math.ceil(s / 50) ? 7 : s === 25 * Math.ceil(s / 25) ? 6 : s === 10 * Math.ceil(s / 10) ? 5 : s === 5 * Math.ceil(s / 5) ? 4 : s === Math.ceil(s) ? 3 : 2 * s === Math.ceil(2 * s) ? 1 : 0;
      var s;
    }
  }, {
    key: "Cn",
    value: function Cn() {
      return this.ys.localization.precision;
    }
  }]);
}();
function he(t, i) {
  return On(t, new re(), i);
}
function ae(t, i, s, n, e) {
  var r = i.context,
    h = i.horizontalPixelRatio,
    a = i.verticalPixelRatio;
  r.lineTo(e._t * h, t * a), r.lineTo(n._t * h, t * a), r.closePath(), r.fillStyle = s, r.fill();
}
var le = /*#__PURE__*/function (_R7) {
  function le() {
    var _this72;
    _classCallCheck(this, le);
    _this72 = _callSuper(this, le, arguments), _this72.rt = null;
    return _this72;
  }
  _inherits(le, _R7);
  return _createClass(le, [{
    key: "ht",
    value: function ht(t) {
      this.rt = t;
    }
  }, {
    key: "et",
    value: function et(t) {
      var _this$rt$jg;
      if (null === this.rt) return;
      var _this$rt2 = this.rt,
        i = _this$rt2.ot,
        s = _this$rt2.lt,
        n = _this$rt2.Lg,
        e = _this$rt2.ct,
        r = _this$rt2.Xt,
        h = _this$rt2.Og,
        l = (_this$rt$jg = this.rt.jg) !== null && _this$rt$jg !== void 0 ? _this$rt$jg : this.rt.Kg ? 0 : t.mediaSize.height;
      if (null === s) return;
      var o = t.context;
      o.lineCap = "butt", o.lineJoin = "round", o.lineWidth = e, a(o, r), o.lineWidth = 1, Hn(t, i, h, s, n, this.Xg.bind(this), ae.bind(null, l));
    }
  }]);
}(R);
var oe = /*#__PURE__*/function () {
  function oe() {
    _classCallCheck(this, oe);
  }
  return _createClass(oe, [{
    key: "Zg",
    value: function Zg(t, i) {
      var s = this.Gg,
        n = i.Jg,
        e = i.Qg,
        r = i.tM,
        h = i.iM,
        a = i.jg,
        l = i.sM,
        o = i.nM;
      if (void 0 === this.eM || void 0 === s || s.Jg !== n || s.Qg !== e || s.tM !== r || s.iM !== h || s.jg !== a || s.sM !== l || s.nM !== o) {
        var _s61 = t.verticalPixelRatio,
          _9 = a || l > 0 ? _s61 : 1,
          _u6 = l * _9,
          _c3 = o === t.bitmapSize.height ? o : o * _9,
          _d2 = (a !== null && a !== void 0 ? a : 0) * _9,
          _f2 = t.context.createLinearGradient(0, _u6, 0, _c3);
        if (_f2.addColorStop(0, n), null != a) {
          var _t70 = Zt((_d2 - _u6) / (_c3 - _u6), 0, 1);
          _f2.addColorStop(_t70, e), _f2.addColorStop(_t70, r);
        }
        _f2.addColorStop(1, h), this.eM = _f2, this.Gg = i;
      }
      return this.eM;
    }
  }]);
}();
var _e = /*#__PURE__*/function (_le) {
  function _e() {
    var _this73;
    _classCallCheck(this, _e);
    _this73 = _callSuper(this, _e, arguments), _this73.rM = new oe();
    return _this73;
  }
  _inherits(_e, _le);
  return _createClass(_e, [{
    key: "Xg",
    value: function Xg(t, i) {
      var _s$sM, _s$nM;
      var s = this.rt;
      return this.rM.Zg(t, {
        Jg: i.br,
        Qg: i.Sr,
        tM: i.Cr,
        iM: i.yr,
        jg: s.jg,
        sM: (_s$sM = s.sM) !== null && _s$sM !== void 0 ? _s$sM : 0,
        nM: (_s$nM = s.nM) !== null && _s$nM !== void 0 ? _s$nM : t.bitmapSize.height
      });
    }
  }]);
}(le);
var ue = /*#__PURE__*/function (_Kn2) {
  function ue() {
    var _this74;
    _classCallCheck(this, ue);
    _this74 = _callSuper(this, ue, arguments), _this74.hM = new oe();
    return _this74;
  }
  _inherits(ue, _Kn2);
  return _createClass(ue, [{
    key: "Wg",
    value: function Wg(t, i) {
      var _s$sM2, _s$nM2;
      var s = this.rt;
      return this.hM.Zg(t, {
        Jg: i.gr,
        Qg: i.gr,
        tM: i.Mr,
        iM: i.Mr,
        jg: s.jg,
        sM: (_s$sM2 = s.sM) !== null && _s$sM2 !== void 0 ? _s$sM2 : 0,
        nM: (_s$nM2 = s.nM) !== null && _s$nM2 !== void 0 ? _s$nM2 : t.bitmapSize.height
      });
    }
  }]);
}(Kn);
var ce = /*#__PURE__*/function (_Fn2) {
  function ce(t, i) {
    var _this75;
    _classCallCheck(this, ce);
    _this75 = _callSuper(this, ce, [t, i]), _this75.Xw = new T(), _this75.aM = new _e(), _this75.lM = new ue(), _this75.Xw.st([_this75.aM, _this75.lM]);
    return _this75;
  }
  _inherits(ce, _Fn2);
  return _createClass(ce, [{
    key: "zg",
    value: function zg(t, i, s) {
      return _objectSpread2(_objectSpread2({}, this.Eg(t, i)), s.Dr(t));
    }
  }, {
    key: "ig",
    value: function ig() {
      var t = this.Jn.zt();
      if (null === t) return;
      var i = this.Jn.N(),
        s = this.Jn.Wt().Nt(i.baseValue.price, t.Ft),
        n = this.Qn.At().lu();
      if (null === this.Yw || 0 === this.qw.length) return;
      var e, r;
      if (i.relativeGradient) {
        e = this.qw[this.Yw.from].ut, r = this.qw[this.Yw.from].ut;
        for (var _t71 = this.Yw.from; _t71 < this.Yw.to; _t71++) {
          var _i74 = this.qw[_t71];
          _i74.ut < e && (e = _i74.ut), _i74.ut > r && (r = _i74.ut);
        }
      }
      this.aM.ht({
        ot: this.qw,
        ct: i.lineWidth,
        Xt: i.lineStyle,
        Og: i.lineType,
        jg: s,
        sM: e,
        nM: r,
        Kg: false,
        lt: this.Yw,
        Lg: n
      }), this.lM.ht({
        ot: this.qw,
        ct: i.lineWidth,
        Xt: i.lineStyle,
        Og: i.lineVisible ? i.lineType : void 0,
        Ng: i.pointMarkersVisible ? i.pointMarkersRadius || i.lineWidth / 2 + 2 : void 0,
        jg: s,
        sM: e,
        nM: r,
        lt: this.Yw,
        Lg: n
      });
    }
  }]);
}(Fn);
var de = {
  type: "Baseline",
  isBuiltIn: true,
  defaultOptions: {
    baseValue: {
      type: "price",
      price: 0
    },
    relativeGradient: false,
    topFillColor1: "rgba(38, 166, 154, 0.28)",
    topFillColor2: "rgba(38, 166, 154, 0.05)",
    topLineColor: "rgba(38, 166, 154, 1)",
    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
    bottomLineColor: "rgba(239, 83, 80, 1)",
    lineWidth: 3,
    lineStyle: 0,
    lineType: 0,
    lineVisible: true,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: false
  },
  Rg: function Rg(t, i) {
    return new ce(t, i);
  }
};
_objectSpread2(_objectSpread2({}, e), {}, {
  color: "#2196f3"
});

function centreOffset(lineBitmapWidth) {
  return Math.floor(lineBitmapWidth * 0.5);
}
function positionsLine(positionMedia, pixelRatio, desiredWidthMedia, widthIsBitmap) {
  var scaledPosition = Math.round(pixelRatio * positionMedia);
  var lineBitmapWidth = Math.round(desiredWidthMedia * pixelRatio);
  var offset = centreOffset(lineBitmapWidth);
  var position = scaledPosition - offset;
  return {
    position: position,
    length: lineBitmapWidth
  };
}
var VertLinePaneRenderer = /*#__PURE__*/function () {
  function VertLinePaneRenderer(x, options, y) {
    _classCallCheck(this, VertLinePaneRenderer);
    this._x = x;
    this._y = y;
    this._options = options;
  }
  return _createClass(VertLinePaneRenderer, [{
    key: "draw",
    value: function draw(target) {
      var _this = this;
      target.useBitmapCoordinateSpace(function (scope) {
        if (_this._x === null) return;
        var ctx = scope.context;
        var position = positionsLine(_this._x, scope.horizontalPixelRatio, _this._options.width);
        var positionY = positionsLine(_this._y, scope.verticalPixelRatio, _this._options.width);
        ctx.fillStyle = _this._options.color;
        ctx.beginPath();
        ctx.setLineDash([4 * scope.verticalPixelRatio, 2 * scope.verticalPixelRatio]);
        ctx.moveTo(position.position, 0);
        ctx.lineTo(position.position, scope.bitmapSize.height);
        ctx.strokeStyle = _this._options.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        _this._drawTextLabel(scope, _this._options.labelText, position.position, positionY.position, _this._options);
      });
    }
  }, {
    key: "_drawTextLabel",
    value: function _drawTextLabel(scope, text, x, y, options) {
      scope.context.font = '24px Arial';
      scope.context.beginPath();
      var offset = 5 * scope.horizontalPixelRatio;
      var textWidth = scope.context.measureText(text);
      var leftAdjustment = options.left ? textWidth.width + offset * 4 : 0;
      if (this._options.labelBackgroundColor) {
        scope.context.fillStyle = this._options.labelBackgroundColor;
        scope.context.roundRect(x + offset - leftAdjustment, y - 24, textWidth.width + offset * 2, 24 + offset, 5);
        scope.context.fill();
      }
      scope.context.beginPath();
      scope.context.fillStyle = options.labelTextColor;
      scope.context.fillText(text, x + offset * 2 - leftAdjustment, y);
    }
  }]);
}();
var VertLinePaneView = /*#__PURE__*/function () {
  function VertLinePaneView(source, options) {
    _classCallCheck(this, VertLinePaneView);
    this._source = source;
    this._options = options;
  }
  return _createClass(VertLinePaneView, [{
    key: "update",
    value: function update() {
      var series = this._source._series;
      var timeScale = this._source._chart.timeScale();
      this._y = series.priceToCoordinate(this._source._value);
      this._x = timeScale.timeToCoordinate(this._source._time);
    }
  }, {
    key: "renderer",
    value: function renderer() {
      return new VertLinePaneRenderer(this._x, this._options, this._y);
    }
  }]);
}();
var defaultOptions$1 = {
  color: '#777',
  labelText: '',
  width: 2,
  labelTextColor: 'white',
  showLabel: false
};
var VertLine = /*#__PURE__*/function () {
  function VertLine(chart, series, time, value, options) {
    _classCallCheck(this, VertLine);
    var vertLineOptions = _objectSpread2(_objectSpread2({}, defaultOptions$1), options);
    this._chart = chart;
    this._series = series;
    this._time = time;
    this._value = value;
    this._paneViews = [new VertLinePaneView(this, vertLineOptions)];
    this._timeAxisViews = [new VertLineTimeAxisView(this, vertLineOptions)];
  }
  return _createClass(VertLine, [{
    key: "updateAllViews",
    value: function updateAllViews() {
      this._paneViews.forEach(function (pw) {
        return pw.update();
      });
      this._timeAxisViews.forEach(function (tw) {
        return tw.update();
      });
    }
  }, {
    key: "timeAxisViews",
    value: function timeAxisViews() {
      return this._timeAxisViews;
    }
  }, {
    key: "paneViews",
    value: function paneViews() {
      return this._paneViews;
    }
  }]);
}();
var VertLineTimeAxisView = /*#__PURE__*/function () {
  function VertLineTimeAxisView(source, options) {
    _classCallCheck(this, VertLineTimeAxisView);
    this._source = source;
    this._options = options;
  }
  return _createClass(VertLineTimeAxisView, [{
    key: "update",
    value: function update() {
      var timeScale = this._source._chart.timeScale();
      this._x = timeScale.timeToCoordinate(this._source._time);
    }
  }, {
    key: "visible",
    value: function visible() {
      return this._options.showLabel;
    }
  }, {
    key: "tickVisible",
    value: function tickVisible() {
      return this._options.showLabel;
    }
  }, {
    key: "coordinate",
    value: function coordinate() {
      var _this$_x;
      return (_this$_x = this._x) !== null && _this$_x !== void 0 ? _this$_x : 0;
    }
  }, {
    key: "text",
    value: function text() {
      return this._options.labelText;
    }
  }, {
    key: "textColor",
    value: function textColor() {
      return this._options.labelTextColor;
    }
  }, {
    key: "backColor",
    value: function backColor() {
      return this._options.labelBackgroundColor;
    }
  }]);
}();

var Tooltip = /*#__PURE__*/function () {
  function Tooltip(chartContainer) {
    _classCallCheck(this, Tooltip);
    this.toolTipMargin = 20;
    this.chartContainer = chartContainer;
    this.toolTipElement = document.createElement('div');
    this.toolTipElement.classList.add('payoff-tooltip');
    this.toolTipElement.style.cssText = "\n          width: 140px;\n          position: absolute;\n          display: none;\n          padding: 8px;\n          color: #555555;\n          box-sizing: border-box;\n          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n          font-size: 12px;\n          text-align: left;\n          line-height: 20px;\n          z-index: 1000;\n          top: 0px;\n          left: 0px;\n          pointer-events: none;\n          border-radius: 5px;\n          font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          background-color: #fff;";
    this.chartContainer.appendChild(this.toolTipElement);
  }
  return _createClass(Tooltip, [{
    key: "update",
    value: function update(param, expiryPriceLine, todayPriceLine) {
      if (param.point === undefined || !param.time || param.point.x < 0 || param.point.x > this.chartContainer.clientWidth || param.point.y < 0 || param.point.y > this.chartContainer.clientHeight) {
        this.toolTipElement.style.display = 'none';
      } else {
        var expiryPriceData = param.seriesData.get(expiryPriceLine);
        var todayPriceData = param.seriesData.get(todayPriceLine);
        if (expiryPriceData === undefined && todayPriceData === undefined) return;
        var dateStr = new Date(param.time).getTime();
        this.toolTipElement.style.display = 'block';
        var expiryPrice = (expiryPriceData === null || expiryPriceData === void 0 ? void 0 : expiryPriceData.value) !== undefined ? expiryPriceData.value : NaN;
        var todayPrice = (todayPriceData === null || todayPriceData === void 0 ? void 0 : todayPriceData.value) !== undefined ? todayPriceData.value : NaN;
        var expiryPriceElement = isNaN(expiryPrice) ? '' : "<br/><span style=\"float: left\">Expiry:</span><span style=\"float: right; color: ".concat(expiryPrice > 0 ? 'green' : 'red', "\">").concat(expiryPrice.toLocaleString(), "</span>");
        var todayPriceElement = isNaN(todayPrice) ? '' : "<br/><span style=\"float: left\">Today:</span><span style=\"float: right; color: ".concat(todayPrice > 0 ? 'green' : 'red', "\">").concat(todayPrice.toLocaleString(), "</span>");
        this.toolTipElement.innerHTML = "\n          <span style=\"float: left\">Price:</span>\n          <span style=\"float: right\">".concat(dateStr.toLocaleString(), "</span>\n          ").concat(expiryPriceElement, "\n          ").concat(todayPriceElement, "\n      ");
        var y = param.point.y;
        var left = param.point.x + this.toolTipMargin;
        var toolTipWidth = this.toolTipElement.clientWidth;
        var toolTipHeight = this.toolTipElement.clientHeight;
        if (left > this.chartContainer.clientWidth - toolTipWidth) {
          left = param.point.x - this.toolTipMargin - toolTipWidth;
        }
        var top = y + this.toolTipMargin;
        if (top > this.chartContainer.clientHeight - toolTipHeight) {
          top = y - toolTipHeight - this.toolTipMargin;
        }
        this.toolTipElement.style.left = left + 'px';
        this.toolTipElement.style.top = top + 'px';
      }
    }
  }]);
}();

var defaultOptions = {
  rightPriceScale: {
    visible: false
  },
  leftPriceScale: {
    visible: true,
    borderVisible: false
  },
  timeScale: {
    borderVisible: false,
    textColor: '#ddd'
  },
  crosshair: {
    mode: 0
  }
};
var Payoffchart = /*#__PURE__*/function () {
  function Payoffchart(elementId, chartOptions) {
    var _this = this;
    _classCallCheck(this, Payoffchart);
    this.chartContainer = document.getElementById(elementId);
    this.chartContainer.innerHTML = '';
    this.chartContainer.style.position = 'relative';
    var options = _objectSpread2(_objectSpread2({}, defaultOptions), chartOptions);
    this.chart = he(this.chartContainer, options);
    this.expiryPriceLine = this.chart.addSeries(de, {
      baseValue: {
        type: 'price',
        price: 0
      },
      lineWidth: 2,
      //lineStyle: LineStyle.Dashed,
      topLineColor: 'rgba( 38, 166, 154, 1)',
      topFillColor1: 'rgba( 38, 166, 154, 0.2)',
      topFillColor2: 'rgba( 38, 166, 154, 0.2)',
      bottomLineColor: 'rgba( 239, 83, 80, 1)',
      bottomFillColor1: 'rgba( 239, 83, 80, 0.2)',
      bottomFillColor2: 'rgba( 239, 83, 80, 0.2)',
      lastValueVisible: false,
      // Show last value on scale
      priceLineVisible: false // Hide default price line
    });
    this.todayPriceLine = this.chart.addSeries(de, {
      baseValue: {
        type: 'price',
        price: 0
      },
      lineWidth: 2,
      lineStyle: h.Dashed,
      topLineColor: 'rgba( 38, 166, 154, 1)',
      topFillColor1: 'rgba( 38, 166, 154, 0)',
      topFillColor2: 'rgba( 38, 166, 154, 0)',
      bottomLineColor: 'rgba( 239, 83, 80, 1)',
      bottomFillColor1: 'rgba( 239, 83, 80, 0)',
      bottomFillColor2: 'rgba( 239, 83, 80, 0)',
      lastValueVisible: false,
      // Show last value on scale
      priceLineVisible: false // Hide default price line
    });

    /* hide trading-view logo */
    document.getElementById('tv-attr-logo').style.display = 'none';
    this.tooltip = new Tooltip(this.chartContainer, this.expiryPriceLine);
    this.chart.subscribeCrosshairMove(function (param) {
      _this.tooltip.update(param, _this.expiryPriceLine, _this.todayPriceLine);
    });
  }
  return _createClass(Payoffchart, [{
    key: "setExpiryPriceLine",
    value: function setExpiryPriceLine(data) {
      var converted = data.map(function (_ref) {
        var strike = _ref.strike,
          value = _ref.value;
        return {
          time: strike,
          value: value
        };
      });
      this.expiryPriceLine.setData(converted);
      this.expiryPriceLine.priceScale().applyOptions({
        autoScale: true
      });
      this.chart.timeScale().fitContent();
    }
  }, {
    key: "setTodayPriceLine",
    value: function setTodayPriceLine(data) {
      var converted = data.map(function (_ref2) {
        var strike = _ref2.strike,
          value = _ref2.value;
        return {
          time: strike,
          value: value
        };
      });
      this.todayPriceLine.setData(converted);
      this.todayPriceLine.priceScale().applyOptions({
        autoScale: true
      });
      this.chart.timeScale().fitContent();
    }
  }, {
    key: "addVertLine",
    value: function addVertLine(_ref3) {
      var strikePrice = _ref3.strikePrice,
        value = _ref3.value,
        options = _ref3.options;
      var vertLine = new VertLine(this.chart, this.expiryPriceLine, strikePrice, value, options);
      this.expiryPriceLine.attachPrimitive(vertLine);
      return vertLine;
    }
  }, {
    key: "removeVertLine",
    value: function removeVertLine(primitive) {
      this.expiryPriceLine.detachPrimitive(primitive);
    }
  }]);
}();

export { Payoffchart as default };
