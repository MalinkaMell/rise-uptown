/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lozad/dist/lozad.min.js":
/*!**********************************************!*\
  !*** ./node_modules/lozad/dist/lozad.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";
  /**
     * Detect IE browser
     * @const {boolean}
     * @private
     */

  var g = "undefined" != typeof document && document.documentMode,
      f = {
    rootMargin: "0px",
    threshold: 0,
    load: function load(t) {
      if ("picture" === t.nodeName.toLowerCase()) {
        var e = t.querySelector("img"),
            r = !1;
        null === e && (e = document.createElement("img"), r = !0), g && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), r && t.append(e);
      }

      if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
        for (var a = t.children, o = void 0, i = 0; i <= a.length - 1; i++) {
          (o = a[i].getAttribute("data-src")) && (a[i].src = o);
        }

        t.load();
      }

      t.getAttribute("data-poster") && (t.poster = t.getAttribute("data-poster")), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset"));
      var n = ",";
      if (t.getAttribute("data-background-delimiter") && (n = t.getAttribute("data-background-delimiter")), t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(n).join("'),url('") + "')";else if (t.getAttribute("data-background-image-set")) {
        var d = t.getAttribute("data-background-image-set").split(n),
            u = d[0].substr(0, d[0].indexOf(" ")) || d[0]; // Substring before ... 1x

        u = -1 === u.indexOf("url(") ? "url(" + u + ")" : u, 1 === d.length ? t.style.backgroundImage = u : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + u + "; background-image: -webkit-image-set(" + d + "); background-image: image-set(" + d + ")");
      }
      t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"));
    },
    loaded: function loaded() {}
  };

  function A(t) {
    t.setAttribute("data-loaded", !0);
  }

  var m = function m(t) {
    return "true" === t.getAttribute("data-loaded");
  },
      v = function v(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
    return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t);
  };

  return function () {
    var r,
        a,
        o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        e = Object.assign({}, f, t),
        i = e.root,
        n = e.rootMargin,
        d = e.threshold,
        u = e.load,
        g = e.loaded,
        s = void 0;
    "undefined" != typeof window && window.IntersectionObserver && (s = new IntersectionObserver((r = u, a = g, function (t, e) {
      t.forEach(function (t) {
        (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), m(t.target) || (r(t.target), A(t.target), a(t.target)));
      });
    }), {
      root: i,
      rootMargin: n,
      threshold: d
    }));

    for (var c, l = v(o, i), b = 0; b < l.length; b++) {
      (c = l[b]).getAttribute("data-placeholder-background") && (c.style.background = c.getAttribute("data-placeholder-background"));
    }

    return {
      observe: function observe() {
        for (var t = v(o, i), e = 0; e < t.length; e++) {
          m(t[e]) || (s ? s.observe(t[e]) : (u(t[e]), A(t[e]), g(t[e])));
        }
      },
      triggerLoad: function triggerLoad(t) {
        m(t) || (u(t), A(t), g(t));
      },
      observer: s
    };
  };
});

/***/ }),

/***/ "./node_modules/simplelightbox/dist/simple-lightbox.modules.js":
/*!*********************************************************************!*\
  !*** ./node_modules/simplelightbox/dist/simple-lightbox.modules.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.7.2
*/


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var SimpleLightbox = /*#__PURE__*/function () {
  function SimpleLightbox(elements, options) {
    var _this = this;

    _classCallCheck(this, SimpleLightbox);

    _defineProperty(this, "defaultOptions", {
      sourceAttr: 'href',
      overlay: true,
      spinner: true,
      nav: true,
      navText: ['&lsaquo;', '&rsaquo;'],
      captions: true,
      captionDelay: 0,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'title',
      captionPosition: 'bottom',
      captionClass: '',
      close: true,
      closeText: '&times;',
      swipeClose: true,
      showCounter: true,
      fileExt: 'png|jpg|jpeg|gif|webp',
      animationSlide: true,
      animationSpeed: 250,
      preloading: true,
      enableKeyboard: true,
      loop: true,
      rel: false,
      docClose: true,
      swipeTolerance: 50,
      className: 'simple-lightbox',
      widthRatio: 0.8,
      heightRatio: 0.9,
      scaleImageToRatio: false,
      disableRightClick: false,
      disableScroll: true,
      alertError: true,
      alertErrorMessage: 'Image not found, next image will be loaded',
      additionalHtml: false,
      history: true,
      throttleInterval: 0,
      doubleTapZoom: 2,
      maxZoom: 10,
      htmlClass: 'has-lightbox',
      rtl: false,
      fixedClass: 'sl-fixed',
      fadeSpeed: 300,
      uniqueImages: true,
      focus: true
    });

    _defineProperty(this, "transitionPrefix", void 0);

    _defineProperty(this, "transitionCapable", false);

    _defineProperty(this, "isTouchDevice", 'ontouchstart' in window);

    _defineProperty(this, "initialLocationHash", void 0);

    _defineProperty(this, "pushStateSupport", 'pushState' in history);

    _defineProperty(this, "isOpen", false);

    _defineProperty(this, "isAnimating", false);

    _defineProperty(this, "isClosing", false);

    _defineProperty(this, "isFadeIn", false);

    _defineProperty(this, "urlChangedOnce", false);

    _defineProperty(this, "hashReseted", false);

    _defineProperty(this, "historyHasChanges", false);

    _defineProperty(this, "historyUpdateTimeout", null);

    _defineProperty(this, "currentImage", void 0);

    _defineProperty(this, "eventNamespace", 'simplelightbox');

    _defineProperty(this, "domNodes", {});

    _defineProperty(this, "loadedImages", []);

    _defineProperty(this, "initialImageIndex", 0);

    _defineProperty(this, "currentImageIndex", 0);

    _defineProperty(this, "initialSelector", null);

    _defineProperty(this, "globalScrollbarWidth", 0);

    _defineProperty(this, "controlCoordinates", {
      swipeDiff: 0,
      swipeYDiff: 0,
      swipeStart: 0,
      swipeEnd: 0,
      swipeYStart: 0,
      swipeYEnd: 0,
      mousedown: false,
      imageLeft: 0,
      zoomed: false,
      containerHeight: 0,
      containerWidth: 0,
      containerOffsetX: 0,
      containerOffsetY: 0,
      imgHeight: 0,
      imgWidth: 0,
      capture: false,
      initialOffsetX: 0,
      initialOffsetY: 0,
      initialPointerOffsetX: 0,
      initialPointerOffsetY: 0,
      initialPointerOffsetX2: 0,
      initialPointerOffsetY2: 0,
      initialScale: 1,
      initialPinchDistance: 0,
      pointerOffsetX: 0,
      pointerOffsetY: 0,
      pointerOffsetX2: 0,
      pointerOffsetY2: 0,
      targetOffsetX: 0,
      targetOffsetY: 0,
      targetScale: 0,
      pinchOffsetX: 0,
      pinchOffsetY: 0,
      limitOffsetX: 0,
      limitOffsetY: 0,
      scaleDifference: 0,
      targetPinchDistance: 0,
      touchCount: 0,
      doubleTapped: false,
      touchmoveCount: 0
    });

    this.options = Object.assign(this.defaultOptions, options);

    if (typeof elements === 'string') {
      this.initialSelector = elements;
      this.elements = Array.from(document.querySelectorAll(elements));
    } else {
      this.elements = typeof elements.length !== 'undefined' && elements.length > 0 ? Array.from(elements) : [elements];
    }

    this.relatedElements = [];
    this.transitionPrefix = this.calculateTransitionPrefix();
    this.transitionCapable = this.transitionPrefix !== false;
    this.initialLocationHash = this.hash; // this should be handled by attribute selector IMHO! => 'a[rel=bla]'...

    if (this.options.rel) {
      this.elements = this.getRelated(this.options.rel);
    }

    if (this.options.uniqueImages) {
      var imgArr = [];
      this.elements = Array.from(this.elements).filter(function (element) {
        var src = element.getAttribute(_this.options.sourceAttr);

        if (imgArr.indexOf(src) === -1) {
          imgArr.push(src);
          return true;
        }

        return false;
      });
    }

    this.createDomNodes();

    if (this.options.close) {
      this.domNodes.wrapper.appendChild(this.domNodes.closeButton);
    }

    if (this.options.nav) {
      this.domNodes.wrapper.appendChild(this.domNodes.navigation);
    }

    if (this.options.spinner) {
      this.domNodes.wrapper.appendChild(this.domNodes.spinner);
    }

    this.addEventListener(this.elements, 'click.' + this.eventNamespace, function (event) {
      if (_this.isValidLink(event.currentTarget)) {
        event.preventDefault();

        if (_this.isAnimating) {
          return false;
        }

        _this.initialImageIndex = _this.elements.indexOf(event.currentTarget);

        _this.openImage(event.currentTarget);
      }
    }); // close addEventListener click addEventListener doc

    if (this.options.docClose) {
      this.addEventListener(this.domNodes.wrapper, ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace], function (event) {
        if (_this.isOpen && event.target === event.currentTarget) {
          _this.close();
        }
      });
    } // disable rightclick


    if (this.options.disableRightClick) {
      this.addEventListener(document.body, 'contextmenu.' + this.eventNamespace, function (event) {
        if (event.target.parentElement.classList.contains("sl-image")) {
          event.preventDefault();
        }
      });
    } // keyboard-control


    if (this.options.enableKeyboard) {
      this.addEventListener(document.body, 'keyup.' + this.eventNamespace, this.throttle(function (event) {
        _this.controlCoordinates.swipeDiff = 0; // keyboard control only if lightbox is open

        if (_this.isAnimating && event.key === 'Escape') {
          _this.currentImage.setAttribute('src', '');

          _this.isAnimating = false;
          return _this.close();
        }

        if (_this.isOpen) {
          event.preventDefault();

          if (event.key === 'Escape') {
            _this.close();
          }

          if (!_this.isAnimating && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) > -1) {
            _this.loadImage(event.key === 'ArrowRight' ? 1 : -1);
          }
        }
      }, this.options.throttleInterval));
    }

    this.addEvents();
  }

  _createClass(SimpleLightbox, [{
    key: "createDomNodes",
    value: function createDomNodes() {
      this.domNodes.overlay = document.createElement('div');
      this.domNodes.overlay.classList.add('sl-overlay');
      this.domNodes.overlay.dataset.opacityTarget = ".7";
      this.domNodes.closeButton = document.createElement('button');
      this.domNodes.closeButton.classList.add('sl-close');
      this.domNodes.closeButton.innerHTML = this.options.closeText;
      this.domNodes.spinner = document.createElement('div');
      this.domNodes.spinner.classList.add('sl-spinner');
      this.domNodes.spinner.innerHTML = '<div></div>';
      this.domNodes.navigation = document.createElement('div');
      this.domNodes.navigation.classList.add('sl-navigation');
      this.domNodes.navigation.innerHTML = "<button class=\"sl-prev\">".concat(this.options.navText[0], "</button><button class=\"sl-next\">").concat(this.options.navText[1], "</button>");
      this.domNodes.counter = document.createElement('div');
      this.domNodes.counter.classList.add('sl-counter');
      this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>';
      this.domNodes.caption = document.createElement('div');
      this.domNodes.caption.classList.add('sl-caption', 'pos-' + this.options.captionPosition);

      if (this.options.captionClass) {
        this.domNodes.caption.classList.add(this.options.captionClass);
      }

      this.domNodes.image = document.createElement('div');
      this.domNodes.image.classList.add('sl-image');
      this.domNodes.wrapper = document.createElement('div');
      this.domNodes.wrapper.classList.add('sl-wrapper');
      this.domNodes.wrapper.setAttribute('tabindex', -1);
      this.domNodes.wrapper.setAttribute('role', 'dialog');
      this.domNodes.wrapper.setAttribute('aria-hidden', false);

      if (this.options.className) {
        this.domNodes.wrapper.classList.add(this.options.className);
      }

      if (this.options.rtl) {
        this.domNodes.wrapper.classList.add('sl-dir-rtl');
      }
    }
  }, {
    key: "throttle",
    value: function throttle(func, limit) {
      var inThrottle;
      return function () {
        if (!inThrottle) {
          func.apply(this, arguments);
          inThrottle = true;
          setTimeout(function () {
            return inThrottle = false;
          }, limit);
        }
      };
    }
  }, {
    key: "isValidLink",
    value: function isValidLink(element) {
      return !this.options.fileExt || 'pathname' in element && new RegExp('(' + this.options.fileExt + ')$', 'i').test(element.pathname);
    }
  }, {
    key: "calculateTransitionPrefix",
    value: function calculateTransitionPrefix() {
      var s = (document.body || document.documentElement).style;
      return 'transition' in s ? '' : 'WebkitTransition' in s ? '-webkit-' : 'MozTransition' in s ? '-moz-' : 'OTransition' in s ? '-o' : false;
    }
  }, {
    key: "toggleScrollbar",
    value: function toggleScrollbar(type) {
      var scrollbarWidth = 0;
      var fixedElements = [].slice.call(document.querySelectorAll('.' + this.options.fixedClass));

      if (type === 'hide') {
        var fullWindowWidth = window.innerWidth;

        if (!fullWindowWidth) {
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }

        if (document.body.clientWidth < fullWindowWidth) {
          var scrollDiv = document.createElement('div'),
              paddingRight = parseInt(document.body.style.paddingRight || 0, 10);
          scrollDiv.classList.add('sl-scrollbar-measure');
          document.body.appendChild(scrollDiv);
          scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          document.body.dataset.originalPaddingRight = paddingRight;

          if (scrollbarWidth > 0) {
            document.body.classList.add('hidden-scroll');
            document.body.style.paddingRight = paddingRight + scrollbarWidth + 'px';
            fixedElements.forEach(function (element) {
              var actualPadding = element.style.paddingRight;
              var calculatedPadding = window.getComputedStyle(element)['padding-right'];
              element.dataset.originalPaddingRight = actualPadding;
              element.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
            });
          }
        }
      } else {
        document.body.classList.remove('hidden-scroll');
        document.body.style.paddingRight = document.body.dataset.originalPaddingRight;
        fixedElements.forEach(function (element) {
          var padding = element.dataset.originalPaddingRight;

          if (typeof padding !== 'undefined') {
            element.style.paddingRight = padding;
          }
        });
      }

      return scrollbarWidth;
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      if (!this.isOpen || this.isAnimating || this.isClosing) {
        return false;
      }

      this.isClosing = true;
      var element = this.relatedElements[this.currentImageIndex];
      element.dispatchEvent(new Event('close.simplelightbox'));

      if (this.options.history) {
        this.historyHasChanges = false;

        if (!this.hashReseted) {
          this.resetHash();
        }
      }

      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.fadeOut(document.querySelectorAll('.sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter'), this.options.fadeSpeed, function () {
        if (_this2.options.disableScroll) {
          _this2.toggleScrollbar('show');
        }

        if (_this2.options.htmlClass && _this2.options.htmlClass !== '') {
          document.querySelector('html').classList.remove(_this2.options.htmlClass);
        }

        document.body.removeChild(_this2.domNodes.wrapper);
        document.body.removeChild(_this2.domNodes.overlay);
        _this2.domNodes.additionalHtml = null;
        element.dispatchEvent(new Event('closed.simplelightbox'));
        _this2.isClosing = false;
      });
      this.currentImage = null;
      this.isOpen = false;
      this.isAnimating = false; // reset touchcontrol coordinates

      for (var key in this.controlCoordinates) {
        this.controlCoordinates[key] = 0;
      }

      this.controlCoordinates.mousedown = false;
      this.controlCoordinates.zoomed = false;
      this.controlCoordinates.capture = false;
      this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom);
      this.controlCoordinates.doubleTapped = false;
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this3 = this;

      var index = this.currentImageIndex,
          length = this.relatedElements.length,
          next = index + 1 < 0 ? length - 1 : index + 1 >= length - 1 ? 0 : index + 1,
          prev = index - 1 < 0 ? length - 1 : index - 1 >= length - 1 ? 0 : index - 1,
          nextImage = new Image(),
          prevImage = new Image();
      nextImage.addEventListener('load', function (event) {
        var src = event.target.getAttribute('src');

        if (_this3.loadedImages.indexOf(src) === -1) {
          //is this condition even required... setting multiple times will not change usage...
          _this3.loadedImages.push(src);
        }

        _this3.relatedElements[index].dispatchEvent(new Event('nextImageLoaded.' + _this3.eventNamespace));
      });
      nextImage.setAttribute('src', this.relatedElements[next].getAttribute(this.options.sourceAttr));
      prevImage.addEventListener('load', function (event) {
        var src = event.target.getAttribute('src');

        if (_this3.loadedImages.indexOf(src) === -1) {
          _this3.loadedImages.push(src);
        }

        _this3.relatedElements[index].dispatchEvent(new Event('prevImageLoaded.' + _this3.eventNamespace));
      });
      prevImage.setAttribute('src', this.relatedElements[prev].getAttribute(this.options.sourceAttr));
    }
  }, {
    key: "loadImage",
    value: function loadImage(direction) {
      var _this4 = this;

      var slideDirection = direction;

      if (this.options.rtl) {
        direction = -direction;
      }

      this.relatedElements[this.currentImageIndex].dispatchEvent(new Event('change.' + this.eventNamespace));
      this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'next' : 'prev') + '.' + this.eventNamespace));
      var newIndex = this.currentImageIndex + direction;

      if (this.isAnimating || (newIndex < 0 || newIndex >= this.relatedElements.length) && this.options.loop === false) {
        return false;
      }

      this.currentImageIndex = newIndex < 0 ? this.relatedElements.length - 1 : newIndex > this.relatedElements.length - 1 ? 0 : newIndex;
      this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;

      if (this.options.animationSlide) {
        this.slide(this.options.animationSpeed / 1000, -100 * slideDirection - this.controlCoordinates.swipeDiff + 'px');
      }

      this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function () {
        _this4.isAnimating = true;

        if (!_this4.isClosing) {
          setTimeout(function () {
            var element = _this4.relatedElements[_this4.currentImageIndex];

            _this4.currentImage.setAttribute('src', element.getAttribute(_this4.options.sourceAttr));

            if (_this4.loadedImages.indexOf(element.getAttribute(_this4.options.sourceAttr)) === -1) {
              _this4.show(_this4.domNodes.spinner);
            }

            if (_this4.domNodes.image.contains(_this4.domNodes.caption)) {
              _this4.domNodes.image.removeChild(_this4.domNodes.caption);
            }

            _this4.adjustImage(slideDirection);

            if (_this4.options.preloading) _this4.preload();
          }, 100);
        } else {
          _this4.isAnimating = false;
        }
      });
    }
  }, {
    key: "adjustImage",
    value: function adjustImage(direction) {
      var _this5 = this;

      if (!this.currentImage) {
        return false;
      }

      var tmpImage = new Image(),
          windowWidth = window.innerWidth * this.options.widthRatio,
          windowHeight = window.innerHeight * this.options.heightRatio;
      tmpImage.setAttribute('src', this.currentImage.getAttribute('src'));
      this.currentImage.dataset.scale = 1;
      this.currentImage.dataset.translateX = 0;
      this.currentImage.dataset.translateY = 0;
      this.zoomPanElement(0, 0, 1);
      tmpImage.addEventListener('error', function (event) {
        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('error.' + _this5.eventNamespace));

        _this5.isAnimating = false;
        _this5.isOpen = false;
        _this5.domNodes.spinner.style.display = 'none';
        var dirIsDefined = direction === 1 || direction === -1;

        if (_this5.initialImageIndex === _this5.currentImageIndex && dirIsDefined) {
          return _this5.close();
        }

        if (_this5.options.alertError) {
          alert(_this5.options.alertErrorMessage);
        }

        _this5.loadImage(dirIsDefined ? direction : 1);
      });
      tmpImage.addEventListener('load', function (event) {
        if (typeof direction !== 'undefined') {
          _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('changed.' + _this5.eventNamespace));

          _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'nextDone' : 'prevDone') + '.' + _this5.eventNamespace));
        } // history


        if (_this5.options.history) {
          _this5.updateURL();
        }

        if (_this5.loadedImages.indexOf(_this5.currentImage.getAttribute('src')) === -1) {
          _this5.loadedImages.push(_this5.currentImage.getAttribute('src'));
        }

        var imageWidth = event.target.width,
            imageHeight = event.target.height;

        if (_this5.options.scaleImageToRatio || imageWidth > windowWidth || imageHeight > windowHeight) {
          var ratio = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;
          imageWidth /= ratio;
          imageHeight /= ratio;
        }

        _this5.domNodes.image.style.top = (window.innerHeight - imageHeight) / 2 + 'px';
        _this5.domNodes.image.style.left = (window.innerWidth - imageWidth - _this5.globalScrollbarWidth) / 2 + 'px';
        _this5.domNodes.image.style.width = imageWidth + 'px';
        _this5.domNodes.image.style.height = imageHeight + 'px';
        _this5.domNodes.spinner.style.display = 'none';

        if (_this5.options.focus) {
          _this5.forceFocus();
        }

        _this5.fadeIn(_this5.currentImage, _this5.options.fadeSpeed, function () {
          if (_this5.options.focus) {
            _this5.domNodes.wrapper.focus();
          }
        });

        _this5.isOpen = true;
        var captionContainer, captionText;

        if (typeof _this5.options.captionSelector === 'string') {
          captionContainer = _this5.options.captionSelector === 'self' ? _this5.relatedElements[_this5.currentImageIndex] : _this5.relatedElements[_this5.currentImageIndex].querySelector(_this5.options.captionSelector);
        } else if (typeof _this5.options.captionSelector === 'function') {
          captionContainer = _this5.options.captionSelector(_this5.relatedElements[_this5.currentImageIndex]);
        }

        if (_this5.options.captions && captionContainer) {
          if (_this5.options.captionType === 'data') {
            captionText = captionContainer.dataset[_this5.options.captionsData];
          } else if (_this5.options.captionType === 'text') {
            captionText = captionContainer.innerHTML;
          } else {
            captionText = captionContainer.getAttribute(_this5.options.captionsData);
          }
        }

        if (!_this5.options.loop) {
          if (_this5.currentImageIndex === 0) {
            _this5.hide(_this5.domNodes.navigation.querySelector('.sl-prev'));
          }

          if (_this5.currentImageIndex >= _this5.relatedElements.length - 1) {
            _this5.hide(_this5.domNodes.navigation.querySelector('.sl-next'));
          }

          if (_this5.currentImageIndex > 0) {
            _this5.show(_this5.domNodes.navigation.querySelector('.sl-prev'));
          }

          if (_this5.currentImageIndex < _this5.relatedElements.length - 1) {
            _this5.show(_this5.domNodes.navigation.querySelector('.sl-next'));
          }
        }

        if (_this5.relatedElements.length === 1) {
          _this5.hide(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));
        } else {
          _this5.show(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));
        }

        if (direction === 1 || direction === -1) {
          if (_this5.options.animationSlide) {
            _this5.slide(0, 100 * direction + 'px');

            setTimeout(function () {
              _this5.slide(_this5.options.animationSpeed / 1000, 0 + 'px');
            }, 50);
          }

          _this5.fadeIn(_this5.domNodes.image, _this5.options.fadeSpeed, function () {
            _this5.isAnimating = false;

            _this5.setCaption(captionText, imageWidth);
          });
        } else {
          _this5.isAnimating = false;

          _this5.setCaption(captionText, imageWidth);
        }

        if (_this5.options.additionalHtml && !_this5.domNodes.additionalHtml) {
          _this5.domNodes.additionalHtml = document.createElement('div');

          _this5.domNodes.additionalHtml.classList.add('sl-additional-html');

          _this5.domNodes.additionalHtml.innerHTML = _this5.options.additionalHtml;

          _this5.domNodes.image.appendChild(_this5.domNodes.additionalHtml);
        }
      });
    }
  }, {
    key: "zoomPanElement",
    value: function zoomPanElement(targetOffsetX, targetOffsetY, targetScale) {
      this.currentImage.style[this.transitionPrefix + 'transform'] = 'translate(' + targetOffsetX + ',' + targetOffsetY + ') scale(' + targetScale + ')';
    }
  }, {
    key: "minMax",
    value: function minMax(value, min, max) {
      return value < min ? min : value > max ? max : value;
    }
  }, {
    key: "setZoomData",
    value: function setZoomData(initialScale, targetOffsetX, targetOffsetY) {
      this.currentImage.dataset.scale = initialScale;
      this.currentImage.dataset.translateX = targetOffsetX;
      this.currentImage.dataset.translateY = targetOffsetY;
    }
  }, {
    key: "hashchangeHandler",
    value: function hashchangeHandler() {
      if (this.isOpen && this.hash === this.initialLocationHash) {
        this.hashReseted = true;
        this.close();
      }
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this6 = this; // resize/responsive


      this.addEventListener(window, 'resize.' + this.eventNamespace, function (event) {
        //this.adjustImage.bind(this)
        if (_this6.isOpen) {
          _this6.adjustImage();
        }
      });
      this.addEventListener(this.domNodes.closeButton, ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace], this.close.bind(this));

      if (this.options.history) {
        setTimeout(function () {
          _this6.addEventListener(window, 'hashchange.' + _this6.eventNamespace, function (event) {
            if (_this6.isOpen) {
              _this6.hashchangeHandler();
            }
          });
        }, 40);
      }

      this.addEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace, function (event) {
        if (!event.currentTarget.tagName.match(/button/i)) {
          return true;
        }

        event.preventDefault();
        _this6.controlCoordinates.swipeDiff = 0;

        _this6.loadImage(event.currentTarget.classList.contains('sl-next') ? 1 : -1);
      });
      this.addEventListener(this.domNodes.image, ['touchstart.' + this.eventNamespace, 'mousedown.' + this.eventNamespace], function (event) {
        if (event.target.tagName === 'A' && event.type === 'touchstart') {
          return true;
        }

        event.preventDefault();

        if (event.type === 'mousedown') {
          _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
          _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
          _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
          _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
          _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
          _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
          _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
          _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
          _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
          _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
          _this6.controlCoordinates.capture = true;
        } else {
          _this6.controlCoordinates.touchCount = event.touches.length;
          _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
          _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
          _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
          _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
          _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
          _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
          _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
          _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;

          if (_this6.controlCoordinates.touchCount === 1)
            /* Single touch */
            {
              if (!_this6.controlCoordinates.doubleTapped) {
                _this6.controlCoordinates.doubleTapped = true;
                setTimeout(function () {
                  _this6.controlCoordinates.doubleTapped = false;
                }, 300);
              } else {
                _this6.currentImage.classList.add('sl-transition');

                if (!_this6.controlCoordinates.zoomed) {
                  _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;

                  _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);

                  _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);

                  if (!_this6.domNodes.caption.style.opacity && _this6.domNodes.caption.style.display !== 'none') {
                    _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                  }

                  _this6.controlCoordinates.zoomed = true;
                } else {
                  _this6.controlCoordinates.initialScale = 1;

                  _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);

                  _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);

                  _this6.controlCoordinates.zoomed = false;
                }

                setTimeout(function () {
                  if (_this6.currentImage) {
                    _this6.currentImage.classList.remove('sl-transition');
                  }
                }, 200);
                return false;
              }

              _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
              _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
            } else if (_this6.controlCoordinates.touchCount === 2)
            /* Pinch */
            {
              _this6.controlCoordinates.initialPointerOffsetX2 = event.touches[1].clientX;
              _this6.controlCoordinates.initialPointerOffsetY2 = event.touches[1].clientY;
              _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
              _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
              _this6.controlCoordinates.pinchOffsetX = (_this6.controlCoordinates.initialPointerOffsetX + _this6.controlCoordinates.initialPointerOffsetX2) / 2;
              _this6.controlCoordinates.pinchOffsetY = (_this6.controlCoordinates.initialPointerOffsetY + _this6.controlCoordinates.initialPointerOffsetY2) / 2;
              _this6.controlCoordinates.initialPinchDistance = Math.sqrt((_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) * (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) + (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2) * (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2));
            }

          _this6.controlCoordinates.capture = true;
        }

        if (_this6.controlCoordinates.mousedown) return true;

        if (_this6.transitionCapable) {
          _this6.controlCoordinates.imageLeft = parseInt(_this6.domNodes.image.style.left, 10);
        }

        _this6.controlCoordinates.mousedown = true;
        _this6.controlCoordinates.swipeDiff = 0;
        _this6.controlCoordinates.swipeYDiff = 0;
        _this6.controlCoordinates.swipeStart = event.pageX || event.touches[0].pageX;
        _this6.controlCoordinates.swipeYStart = event.pageY || event.touches[0].pageY;
        return false;
      });
      this.addEventListener(this.domNodes.image, ['touchmove.' + this.eventNamespace, 'mousemove.' + this.eventNamespace, 'MSPointerMove'], function (event) {
        if (!_this6.controlCoordinates.mousedown) {
          return true;
        }

        event.preventDefault();

        if (event.type === 'touchmove') {
          if (_this6.controlCoordinates.capture === false) {
            return false;
          }

          _this6.controlCoordinates.pointerOffsetX = event.touches[0].clientX;
          _this6.controlCoordinates.pointerOffsetY = event.touches[0].clientY;
          _this6.controlCoordinates.touchCount = event.touches.length;
          _this6.controlCoordinates.touchmoveCount++;

          if (_this6.controlCoordinates.touchCount > 1)
            /* Pinch */
            {
              _this6.controlCoordinates.pointerOffsetX2 = event.touches[1].clientX;
              _this6.controlCoordinates.pointerOffsetY2 = event.touches[1].clientY;
              _this6.controlCoordinates.targetPinchDistance = Math.sqrt((_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) * (_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) + (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2) * (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2));

              if (_this6.controlCoordinates.initialPinchDistance === null) {
                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
              }

              if (Math.abs(_this6.controlCoordinates.initialPinchDistance - _this6.controlCoordinates.targetPinchDistance) >= 1) {
                /* Initialize helpers */
                _this6.controlCoordinates.targetScale = _this6.minMax(_this6.controlCoordinates.targetPinchDistance / _this6.controlCoordinates.initialPinchDistance * _this6.controlCoordinates.initialScale, 1, _this6.options.maxZoom);
                _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);

                _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);

                if (_this6.controlCoordinates.targetScale > 1) {
                  _this6.controlCoordinates.zoomed = true;

                  if (!_this6.domNodes.caption.style.opacity && _this6.domNodes.caption.style.display !== 'none') {
                    _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                  }
                }

                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
              }
            } else {
            _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
            _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
            _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
            _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
            _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);

            if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
              _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
              _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
            }

            if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
              _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
              _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
            }

            _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);

            _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
          }
        }
        /* Mouse Move implementation */


        if (event.type === 'mousemove' && _this6.controlCoordinates.mousedown) {
          if (event.type == 'touchmove') return true;
          if (_this6.controlCoordinates.capture === false) return false;
          _this6.controlCoordinates.pointerOffsetX = event.clientX;
          _this6.controlCoordinates.pointerOffsetY = event.clientY;
          _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
          _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
          _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
          _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
          _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);

          if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
            _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
            _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
          }

          if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
            _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
            _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
          }

          _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);

          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
        }

        if (!_this6.controlCoordinates.zoomed) {
          _this6.controlCoordinates.swipeEnd = event.pageX || event.touches[0].pageX;
          _this6.controlCoordinates.swipeYEnd = event.pageY || event.touches[0].pageY;
          _this6.controlCoordinates.swipeDiff = _this6.controlCoordinates.swipeStart - _this6.controlCoordinates.swipeEnd;
          _this6.controlCoordinates.swipeYDiff = _this6.controlCoordinates.swipeYStart - _this6.controlCoordinates.swipeYEnd;

          if (_this6.options.animationSlide) {
            _this6.slide(0, -_this6.controlCoordinates.swipeDiff + 'px');
          }
        }
      });
      this.addEventListener(this.domNodes.image, ['touchend.' + this.eventNamespace, 'mouseup.' + this.eventNamespace, 'touchcancel.' + this.eventNamespace, 'mouseleave.' + this.eventNamespace, 'pointerup', 'pointercancel', 'MSPointerUp', 'MSPointerCancel'], function (event) {
        if (_this6.isTouchDevice && event.type === 'touchend') {
          _this6.controlCoordinates.touchCount = event.touches.length;

          if (_this6.controlCoordinates.touchCount === 0)
            /* No touch */
            {
              /* Set attributes */
              if (_this6.currentImage) {
                _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
              }

              if (_this6.controlCoordinates.initialScale === 1) {
                _this6.controlCoordinates.zoomed = false;

                if (_this6.domNodes.caption.style.display === 'none') {
                  _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                }
              }

              _this6.controlCoordinates.initialPinchDistance = null;
              _this6.controlCoordinates.capture = false;
            } else if (_this6.controlCoordinates.touchCount === 1)
            /* Single touch */
            {
              _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
              _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
            } else if (_this6.controlCoordinates.touchCount > 1)
            /* Pinch */
            {
              _this6.controlCoordinates.initialPinchDistance = null;
            }
        }

        if (_this6.controlCoordinates.mousedown) {
          _this6.controlCoordinates.mousedown = false;
          var possibleDir = true;

          if (!_this6.options.loop) {
            if (_this6.currentImageIndex === 0 && _this6.controlCoordinates.swipeDiff < 0) {
              possibleDir = false;
            }

            if (_this6.currentImageIndex >= _this6.relatedElements.length - 1 && _this6.controlCoordinates.swipeDiff > 0) {
              possibleDir = false;
            }
          }

          if (Math.abs(_this6.controlCoordinates.swipeDiff) > _this6.options.swipeTolerance && possibleDir) {
            _this6.loadImage(_this6.controlCoordinates.swipeDiff > 0 ? 1 : -1);
          } else if (_this6.options.animationSlide) {
            _this6.slide(_this6.options.animationSpeed / 1000, 0 + 'px');
          }

          if (_this6.options.swipeClose && Math.abs(_this6.controlCoordinates.swipeYDiff) > 50 && Math.abs(_this6.controlCoordinates.swipeDiff) < _this6.options.swipeTolerance) {
            _this6.close();
          }
        }
      });
      this.addEventListener(this.domNodes.image, ['dblclick'], function (event) {
        if (_this6.isTouchDevice) return;
        _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
        _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;

        _this6.currentImage.classList.add('sl-transition');

        if (!_this6.controlCoordinates.zoomed) {
          _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;

          _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);

          _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);

          if (!_this6.domNodes.caption.style.opacity && _this6.domNodes.caption.style.display !== 'none') {
            _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
          }

          _this6.controlCoordinates.zoomed = true;
        } else {
          _this6.controlCoordinates.initialScale = 1;

          _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);

          _this6.zoomPanElement(0 + "px", 0 + "px", _this6.controlCoordinates.initialScale);

          _this6.controlCoordinates.zoomed = false;

          if (_this6.domNodes.caption.style.display === 'none') {
            _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
          }
        }

        setTimeout(function () {
          if (_this6.currentImage) {
            _this6.currentImage.classList.remove('sl-transition');
          }
        }, 200);
        _this6.controlCoordinates.capture = true;
        return false;
      });
    }
  }, {
    key: "getDimensions",
    value: function getDimensions(element) {
      var styles = window.getComputedStyle(element),
          height = element.offsetHeight,
          width = element.offsetWidth,
          borderTopWidth = parseFloat(styles.borderTopWidth),
          borderBottomWidth = parseFloat(styles.borderBottomWidth),
          paddingTop = parseFloat(styles.paddingTop),
          paddingBottom = parseFloat(styles.paddingBottom),
          borderLeftWidth = parseFloat(styles.borderLeftWidth),
          borderRightWidth = parseFloat(styles.borderRightWidth),
          paddingLeft = parseFloat(styles.paddingLeft),
          paddingRight = parseFloat(styles.paddingRight);
      return {
        height: height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom,
        width: width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight
      };
    }
  }, {
    key: "updateHash",
    value: function updateHash() {
      var newHash = 'pid=' + (this.currentImageIndex + 1),
          newURL = window.location.href.split('#')[0] + '#' + newHash;
      this.hashReseted = false;

      if (this.pushStateSupport) {
        window.history[this.historyHasChanges ? 'replaceState' : 'pushState']('', document.title, newURL);
      } else {
        // what is the browser target of this?
        if (this.historyHasChanges) {
          window.location.replace(newURL);
        } else {
          window.location.hash = newHash;
        }
      }

      if (!this.historyHasChanges) {
        this.urlChangedOnce = true;
      }

      this.historyHasChanges = true;
    }
  }, {
    key: "resetHash",
    value: function resetHash() {
      this.hashReseted = true;

      if (this.urlChangedOnce) {
        history.back();
      } else {
        if (this.pushStateSupport) {
          history.pushState('', document.title, window.location.pathname + window.location.search);
        } else {
          window.location.hash = '';
        }
      } //
      //in case an history operation is still pending


      clearTimeout(this.historyUpdateTimeout);
    }
  }, {
    key: "updateURL",
    value: function updateURL() {
      clearTimeout(this.historyUpdateTimeout);

      if (!this.historyHasChanges) {
        this.updateHash(); // first time
      } else {
        this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800);
      }
    }
  }, {
    key: "setCaption",
    value: function setCaption(captionText, imageWidth) {
      var _this7 = this;

      if (this.options.captions && captionText && captionText !== '' && typeof captionText !== "undefined") {
        this.hide(this.domNodes.caption);
        this.domNodes.caption.style.width = imageWidth + 'px';
        this.domNodes.caption.innerHTML = captionText;
        this.domNodes.image.appendChild(this.domNodes.caption);
        setTimeout(function () {
          _this7.fadeIn(_this7.domNodes.caption, _this7.options.fadeSpeed);
        }, this.options.captionDelay);
      }
    }
  }, {
    key: "slide",
    value: function slide(speed, pos) {
      if (!this.transitionCapable) {
        return this.domNodes.image.style.left = pos;
      }

      this.domNodes.image.style[this.transitionPrefix + 'transform'] = 'translateX(' + pos + ')';
      this.domNodes.image.style[this.transitionPrefix + 'transition'] = this.transitionPrefix + 'transform ' + speed + 's linear';
    }
  }, {
    key: "getRelated",
    value: function getRelated(rel) {
      var elems;

      if (rel && rel !== false && rel !== 'nofollow') {
        elems = Array.from(this.elements).filter(function (element) {
          return element.getAttribute('rel') === rel;
        });
      } else {
        elems = this.elements;
      }

      return elems;
    }
  }, {
    key: "openImage",
    value: function openImage(element) {
      var _this8 = this;

      element.dispatchEvent(new Event('show.' + this.eventNamespace));

      if (this.options.disableScroll) {
        this.globalScrollbarWidth = this.toggleScrollbar('hide');
      }

      if (this.options.htmlClass && this.options.htmlClass !== '') {
        document.querySelector('html').classList.add(this.options.htmlClass);
      }

      document.body.appendChild(this.domNodes.wrapper);
      this.domNodes.wrapper.appendChild(this.domNodes.image);

      if (this.options.overlay) {
        document.body.appendChild(this.domNodes.overlay);
      }

      this.relatedElements = this.getRelated(element.rel);

      if (this.options.showCounter) {
        if (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter)) {
          this.domNodes.wrapper.removeChild(this.domNodes.counter);
        } else if (this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter)) {
          this.domNodes.wrapper.appendChild(this.domNodes.counter);
        }
      }

      this.isAnimating = true;
      this.currentImageIndex = this.relatedElements.indexOf(element);
      var targetURL = element.getAttribute(this.options.sourceAttr);
      this.currentImage = document.createElement('img');
      this.currentImage.style.display = 'none';
      this.currentImage.setAttribute('src', targetURL);
      this.currentImage.dataset.scale = 1;
      this.currentImage.dataset.translateX = 0;
      this.currentImage.dataset.translateY = 0;

      if (this.loadedImages.indexOf(targetURL) === -1) {
        this.loadedImages.push(targetURL);
      }

      this.domNodes.image.innerHTML = '';
      this.domNodes.image.setAttribute('style', '');
      this.domNodes.image.appendChild(this.currentImage);
      this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed);
      this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton], this.options.fadeSpeed);
      this.show(this.domNodes.spinner);
      this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;
      this.domNodes.counter.querySelector('.sl-total').innerHTML = this.relatedElements.length;
      this.adjustImage();

      if (this.options.preloading) {
        this.preload();
      }

      setTimeout(function () {
        element.dispatchEvent(new Event('shown.' + _this8.eventNamespace));
      }, this.options.animationSpeed);
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this9 = this;

      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.addEventListener(document, 'focusin.' + this.eventNamespace, function (event) {
        if (document !== event.target && _this9.domNodes.wrapper !== event.target && !_this9.domNodes.wrapper.contains(event.target)) {
          _this9.domNodes.wrapper.focus();
        }
      });
    } // utility

  }, {
    key: "addEventListener",
    value: function addEventListener(elements, events, callback, opts) {
      elements = this.wrap(elements);
      events = this.wrap(events);

      var _iterator = _createForOfIteratorHelper(elements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;

          if (!element.namespaces) {
            element.namespaces = {};
          } // save the namespaces addEventListener the DOM element itself


          var _iterator2 = _createForOfIteratorHelper(events),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var event = _step2.value;
              var options = opts || false;
              element.namespaces[event] = callback;
              element.addEventListener(event.split('.')[0], callback, options);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(elements, events) {
      elements = this.wrap(elements);
      events = this.wrap(events);

      var _iterator3 = _createForOfIteratorHelper(elements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;

          var _iterator4 = _createForOfIteratorHelper(events),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var event = _step4.value;

              if (element.namespaces && element.namespaces[event]) {
                element.removeEventListener(event.split('.')[0], element.namespaces[event]);
                delete element.namespaces[event];
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(elements, duration, callback) {
      var _this10 = this;

      elements = this.wrap(elements);

      var _iterator5 = _createForOfIteratorHelper(elements),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var element = _step5.value;
          element.style.opacity = 1;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      this.isFadeIn = false;

      var step = 16.66666 / (duration || this.options.fadeSpeed),
          fade = function fade() {
        var currentOpacity = parseFloat(elements[0].style.opacity);

        if ((currentOpacity -= step) < 0) {
          var _iterator6 = _createForOfIteratorHelper(elements),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var element = _step6.value;
              element.style.display = "none";
              element.style.opacity = '';
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          callback && callback.call(_this10, elements);
        } else {
          var _iterator7 = _createForOfIteratorHelper(elements),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _element = _step7.value;
              _element.style.opacity = currentOpacity;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          requestAnimationFrame(fade);
        }
      };

      fade();
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(elements, duration, callback, display) {
      var _this11 = this;

      elements = this.wrap(elements);

      var _iterator8 = _createForOfIteratorHelper(elements),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var element = _step8.value;
          element.style.opacity = 0;
          element.style.display = display || "block";
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.isFadeIn = true;

      var opacityTarget = parseFloat(elements[0].dataset.opacityTarget || 1),
          step = 16.66666 * opacityTarget / (duration || this.options.fadeSpeed),
          fade = function fade() {
        var currentOpacity = parseFloat(elements[0].style.opacity);

        if (!((currentOpacity += step) > opacityTarget)) {
          var _iterator9 = _createForOfIteratorHelper(elements),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var element = _step9.value;
              element.style.opacity = currentOpacity;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          if (!_this11.isFadeIn) return;
          requestAnimationFrame(fade);
        } else {
          var _iterator10 = _createForOfIteratorHelper(elements),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _element2 = _step10.value;
              _element2.style.opacity = '';
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          callback && callback.call(_this11, elements);
        }
      };

      fade();
    }
  }, {
    key: "hide",
    value: function hide(elements) {
      elements = this.wrap(elements);

      var _iterator11 = _createForOfIteratorHelper(elements),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var element = _step11.value;
          element.dataset.initialDisplay = element.style.display;
          element.style.display = 'none';
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }, {
    key: "show",
    value: function show(elements, display) {
      elements = this.wrap(elements);

      var _iterator12 = _createForOfIteratorHelper(elements),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var element = _step12.value;
          element.style.display = element.dataset.initialDisplay || display || 'block';
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }, {
    key: "wrap",
    value: function wrap(input) {
      return typeof input[Symbol.iterator] === 'function' && typeof input !== 'string' ? input : [input];
    }
  }, {
    key: "on",
    value: function on(events, callback) {
      events = this.wrap(events);

      var _iterator13 = _createForOfIteratorHelper(this.elements),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var element = _step13.value;

          if (!element.fullyNamespacedEvents) {
            element.fullyNamespacedEvents = {};
          }

          var _iterator14 = _createForOfIteratorHelper(events),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var event = _step14.value;
              element.fullyNamespacedEvents[event] = callback;
              element.addEventListener(event, callback);
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(events) {
      events = this.wrap(events);

      var _iterator15 = _createForOfIteratorHelper(this.elements),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var element = _step15.value;

          var _iterator16 = _createForOfIteratorHelper(events),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var event = _step16.value;

              if (typeof element.fullyNamespacedEvents !== 'undefined' && event in element.fullyNamespacedEvents) {
                element.removeEventListener(event, element.fullyNamespacedEvents[event]);
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return this;
    } // api

  }, {
    key: "open",
    value: function open(elem) {
      elem = elem || this.elements[0];

      if (typeof jQuery !== "undefined" && elem instanceof jQuery) {
        elem = elem.get(0);
      }

      this.initialImageIndex = this.elements.indexOf(elem);

      if (this.initialImageIndex > -1) {
        this.openImage(elem);
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.loadImage(1);
    }
  }, {
    key: "prev",
    value: function prev() {
      this.loadImage(-1);
    } //close is exposed anyways..

  }, {
    key: "destroy",
    value: function destroy() {
      //remove all custom event listeners from elements
      this.off(['close.' + this.eventNamespace, 'closed.' + this.eventNamespace, 'nextImageLoaded.' + this.eventNamespace, 'prevImageLoaded.' + this.eventNamespace, 'change.' + this.eventNamespace, 'nextDone.' + this.eventNamespace, 'prevDone.' + this.eventNamespace, 'error.' + this.eventNamespace, 'changed.' + this.eventNamespace, 'next.' + this.eventNamespace, 'prev.' + this.eventNamespace, 'show.' + this.eventNamespace, 'shown.' + this.eventNamespace]);
      this.removeEventListener(this.elements, 'click.' + this.eventNamespace);
      this.removeEventListener(document, 'focusin.' + this.eventNamespace);
      this.removeEventListener(document.body, 'contextmenu.' + this.eventNamespace);
      this.removeEventListener(document.body, 'keyup.' + this.eventNamespace);
      this.removeEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace);
      this.removeEventListener(this.domNodes.closeButton, 'click.' + this.eventNamespace);
      this.removeEventListener(window, 'resize.' + this.eventNamespace);
      this.removeEventListener(window, 'hashchange.' + this.eventNamespace);
      this.close();

      if (this.isOpen) {
        document.body.removeChild(this.domNodes.wrapper);
        document.body.removeChild(this.domNodes.overlay);
      }

      this.elements = null;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!this.initialSelector) {
        throw 'refreshing only works when you initialize using a selector!';
      }

      var options = this.options,
          selector = this.initialSelector;
      this.destroy();
      this.constructor(selector, options);
      return this;
    }
  }, {
    key: "hash",
    get: function get() {
      return window.location.hash.substring(1);
    }
  }]);

  return SimpleLightbox;
}();

var _default = SimpleLightbox;
exports["default"] = _default;
global.SimpleLightbox = SimpleLightbox;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simplelightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplelightbox */ "./node_modules/simplelightbox/dist/simple-lightbox.modules.js");
/* harmony import */ var simplelightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplelightbox__WEBPACK_IMPORTED_MODULE_1__);


var gallery = new simplelightbox__WEBPACK_IMPORTED_MODULE_1___default.a('.gallery a');
gallery.on('show.simplelightbox', function (e) {
  console.log(e); // some usefull information
});
gallery.on('error.simplelightbox', function (e) {
  console.log(e); // some usefull information
}); //if javascript isn't active

document.documentElement.classList.remove('no-js'); // lazy loads elements with default selector as '.lozad'

var observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()();
observer.observe();

window.onscroll = function () {
  var topNav = document.getElementById('top-navbar');
  scrollY > 20 ? topNav.classList.add('scrolling') : topNav.classList.remove('scrolling');
}; // var container = document.getElementById('toggleMe');
// document.getElementById('mini').addEventListener('click', toggleFcn);
// const toggleFcn = event => {
// 	event.preventDefault();
// 	console.log('click');
// 	if (!container.classList.contains('active')) {
// 		container.classList.add('active');
// 		container.style.height = 'auto';
// 		var height = container.clientHeight + 'px';
// 		container.style.height = '0px';
// 		setTimeout(function () {
// 			container.style.height = height;
// 		}, 0);
// 	} else {
// 		container.style.height = '0px';
// 		container.addEventListener(
// 			'transitionend',
// 			function () {
// 				container.classList.remove('active');
// 			},
// 			{
// 				once: true,
// 			}
// 		);
// 	}
// };

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/irina/Local Sites/riseuptown/app/public/wp-content/themes/riseuptown/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvemFkL2Rpc3QvbG96YWQubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGVsaWdodGJveC9kaXN0L3NpbXBsZS1saWdodGJveC5tb2R1bGVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJ0IiwiZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJnIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJmIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImxvYWQiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwicXVlcnlTZWxlY3RvciIsInIiLCJjcmVhdGVFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwic3JjIiwiYWx0IiwiYXBwZW5kIiwiY2hpbGRyZW4iLCJhIiwibyIsImkiLCJsZW5ndGgiLCJwb3N0ZXIiLCJzZXRBdHRyaWJ1dGUiLCJuIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzcGxpdCIsImpvaW4iLCJkIiwidSIsInN1YnN0ciIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsb2FkZWQiLCJBIiwibSIsInYiLCJhcmd1bWVudHMiLCJFbGVtZW50IiwiTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiT2JqZWN0IiwiYXNzaWduIiwicm9vdCIsInMiLCJ3aW5kb3ciLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImZvckVhY2giLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwidGFyZ2V0IiwiYyIsImwiLCJiIiwiYmFja2dyb3VuZCIsIm9ic2VydmUiLCJ0cmlnZ2VyTG9hZCIsIm9ic2VydmVyIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiYWxsb3dBcnJheUxpa2UiLCJpdCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsImRvbmUiLCJfZSIsIlR5cGVFcnJvciIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJlcnIiLCJzdGVwIiwibmV4dCIsIl9lMiIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsImFyciIsImxlbiIsImFycjIiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJTaW1wbGVMaWdodGJveCIsImVsZW1lbnRzIiwib3B0aW9ucyIsIl90aGlzIiwic291cmNlQXR0ciIsIm92ZXJsYXkiLCJzcGlubmVyIiwibmF2IiwibmF2VGV4dCIsImNhcHRpb25zIiwiY2FwdGlvbkRlbGF5IiwiY2FwdGlvblNlbGVjdG9yIiwiY2FwdGlvblR5cGUiLCJjYXB0aW9uc0RhdGEiLCJjYXB0aW9uUG9zaXRpb24iLCJjYXB0aW9uQ2xhc3MiLCJjbG9zZSIsImNsb3NlVGV4dCIsInN3aXBlQ2xvc2UiLCJzaG93Q291bnRlciIsImZpbGVFeHQiLCJhbmltYXRpb25TbGlkZSIsImFuaW1hdGlvblNwZWVkIiwicHJlbG9hZGluZyIsImVuYWJsZUtleWJvYXJkIiwibG9vcCIsInJlbCIsImRvY0Nsb3NlIiwic3dpcGVUb2xlcmFuY2UiLCJjbGFzc05hbWUiLCJ3aWR0aFJhdGlvIiwiaGVpZ2h0UmF0aW8iLCJzY2FsZUltYWdlVG9SYXRpbyIsImRpc2FibGVSaWdodENsaWNrIiwiZGlzYWJsZVNjcm9sbCIsImFsZXJ0RXJyb3IiLCJhbGVydEVycm9yTWVzc2FnZSIsImFkZGl0aW9uYWxIdG1sIiwiaGlzdG9yeSIsInRocm90dGxlSW50ZXJ2YWwiLCJkb3VibGVUYXBab29tIiwibWF4Wm9vbSIsImh0bWxDbGFzcyIsInJ0bCIsImZpeGVkQ2xhc3MiLCJmYWRlU3BlZWQiLCJ1bmlxdWVJbWFnZXMiLCJmb2N1cyIsInN3aXBlRGlmZiIsInN3aXBlWURpZmYiLCJzd2lwZVN0YXJ0Iiwic3dpcGVFbmQiLCJzd2lwZVlTdGFydCIsInN3aXBlWUVuZCIsIm1vdXNlZG93biIsImltYWdlTGVmdCIsInpvb21lZCIsImNvbnRhaW5lckhlaWdodCIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVyT2Zmc2V0WCIsImNvbnRhaW5lck9mZnNldFkiLCJpbWdIZWlnaHQiLCJpbWdXaWR0aCIsImNhcHR1cmUiLCJpbml0aWFsT2Zmc2V0WCIsImluaXRpYWxPZmZzZXRZIiwiaW5pdGlhbFBvaW50ZXJPZmZzZXRYIiwiaW5pdGlhbFBvaW50ZXJPZmZzZXRZIiwiaW5pdGlhbFBvaW50ZXJPZmZzZXRYMiIsImluaXRpYWxQb2ludGVyT2Zmc2V0WTIiLCJpbml0aWFsU2NhbGUiLCJpbml0aWFsUGluY2hEaXN0YW5jZSIsInBvaW50ZXJPZmZzZXRYIiwicG9pbnRlck9mZnNldFkiLCJwb2ludGVyT2Zmc2V0WDIiLCJwb2ludGVyT2Zmc2V0WTIiLCJ0YXJnZXRPZmZzZXRYIiwidGFyZ2V0T2Zmc2V0WSIsInRhcmdldFNjYWxlIiwicGluY2hPZmZzZXRYIiwicGluY2hPZmZzZXRZIiwibGltaXRPZmZzZXRYIiwibGltaXRPZmZzZXRZIiwic2NhbGVEaWZmZXJlbmNlIiwidGFyZ2V0UGluY2hEaXN0YW5jZSIsInRvdWNoQ291bnQiLCJkb3VibGVUYXBwZWQiLCJ0b3VjaG1vdmVDb3VudCIsImRlZmF1bHRPcHRpb25zIiwiaW5pdGlhbFNlbGVjdG9yIiwicmVsYXRlZEVsZW1lbnRzIiwidHJhbnNpdGlvblByZWZpeCIsImNhbGN1bGF0ZVRyYW5zaXRpb25QcmVmaXgiLCJ0cmFuc2l0aW9uQ2FwYWJsZSIsImluaXRpYWxMb2NhdGlvbkhhc2giLCJoYXNoIiwiZ2V0UmVsYXRlZCIsImltZ0FyciIsImZpbHRlciIsImVsZW1lbnQiLCJwdXNoIiwiY3JlYXRlRG9tTm9kZXMiLCJkb21Ob2RlcyIsIndyYXBwZXIiLCJhcHBlbmRDaGlsZCIsImNsb3NlQnV0dG9uIiwibmF2aWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudE5hbWVzcGFjZSIsImV2ZW50IiwiaXNWYWxpZExpbmsiLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJpc0FuaW1hdGluZyIsImluaXRpYWxJbWFnZUluZGV4Iiwib3BlbkltYWdlIiwiaXNPcGVuIiwiYm9keSIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsInRocm90dGxlIiwiY29udHJvbENvb3JkaW5hdGVzIiwiY3VycmVudEltYWdlIiwibG9hZEltYWdlIiwiYWRkRXZlbnRzIiwiYWRkIiwiZGF0YXNldCIsIm9wYWNpdHlUYXJnZXQiLCJpbm5lckhUTUwiLCJjb25jYXQiLCJjb3VudGVyIiwiY2FwdGlvbiIsImltYWdlIiwiZnVuYyIsImxpbWl0IiwiaW5UaHJvdHRsZSIsImFwcGx5Iiwic2V0VGltZW91dCIsIlJlZ0V4cCIsInBhdGhuYW1lIiwiZG9jdW1lbnRFbGVtZW50IiwidG9nZ2xlU2Nyb2xsYmFyIiwidHlwZSIsInNjcm9sbGJhcldpZHRoIiwiZml4ZWRFbGVtZW50cyIsImZ1bGxXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJNYXRoIiwiYWJzIiwibGVmdCIsImNsaWVudFdpZHRoIiwic2Nyb2xsRGl2IiwicGFkZGluZ1JpZ2h0IiwicGFyc2VJbnQiLCJvZmZzZXRXaWR0aCIsInJlbW92ZUNoaWxkIiwib3JpZ2luYWxQYWRkaW5nUmlnaHQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VGbG9hdCIsInJlbW92ZSIsInBhZGRpbmciLCJfdGhpczIiLCJpc0Nsb3NpbmciLCJjdXJyZW50SW1hZ2VJbmRleCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImhpc3RvcnlIYXNDaGFuZ2VzIiwiaGFzaFJlc2V0ZWQiLCJyZXNldEhhc2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmFkZU91dCIsIm1pbk1heCIsInByZWxvYWQiLCJfdGhpczMiLCJpbmRleCIsInByZXYiLCJuZXh0SW1hZ2UiLCJJbWFnZSIsInByZXZJbWFnZSIsImxvYWRlZEltYWdlcyIsImRpcmVjdGlvbiIsIl90aGlzNCIsInNsaWRlRGlyZWN0aW9uIiwibmV3SW5kZXgiLCJzbGlkZSIsInNob3ciLCJhZGp1c3RJbWFnZSIsIl90aGlzNSIsInRtcEltYWdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsInNjYWxlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ6b29tUGFuRWxlbWVudCIsImRpc3BsYXkiLCJkaXJJc0RlZmluZWQiLCJhbGVydCIsInVwZGF0ZVVSTCIsImltYWdlV2lkdGgiLCJ3aWR0aCIsImltYWdlSGVpZ2h0IiwiaGVpZ2h0IiwicmF0aW8iLCJ0b3AiLCJnbG9iYWxTY3JvbGxiYXJXaWR0aCIsImZvcmNlRm9jdXMiLCJmYWRlSW4iLCJjYXB0aW9uQ29udGFpbmVyIiwiY2FwdGlvblRleHQiLCJoaWRlIiwic2V0Q2FwdGlvbiIsIm1pbiIsIm1heCIsInNldFpvb21EYXRhIiwiaGFzaGNoYW5nZUhhbmRsZXIiLCJfdGhpczYiLCJiaW5kIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0YWdOYW1lIiwibWF0Y2giLCJjbGllbnRYIiwiY2xpZW50WSIsImdldERpbWVuc2lvbnMiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwidG91Y2hlcyIsIm9wYWNpdHkiLCJzcXJ0IiwicGFnZVgiLCJwYWdlWSIsImlzVG91Y2hEZXZpY2UiLCJwb3NzaWJsZURpciIsInN0eWxlcyIsIm9mZnNldEhlaWdodCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJwYWRkaW5nTGVmdCIsInVwZGF0ZUhhc2giLCJuZXdIYXNoIiwibmV3VVJMIiwibG9jYXRpb24iLCJocmVmIiwicHVzaFN0YXRlU3VwcG9ydCIsInRpdGxlIiwicmVwbGFjZSIsInVybENoYW5nZWRPbmNlIiwiYmFjayIsInB1c2hTdGF0ZSIsInNlYXJjaCIsImNsZWFyVGltZW91dCIsImhpc3RvcnlVcGRhdGVUaW1lb3V0IiwiX3RoaXM3Iiwic3BlZWQiLCJwb3MiLCJlbGVtcyIsIl90aGlzOCIsInRhcmdldFVSTCIsIl90aGlzOSIsImV2ZW50cyIsImNhbGxiYWNrIiwib3B0cyIsIndyYXAiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIm5hbWVzcGFjZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJkdXJhdGlvbiIsIl90aGlzMTAiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwiaXNGYWRlSW4iLCJmYWRlIiwiY3VycmVudE9wYWNpdHkiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2IiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsIl9lbGVtZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMxMSIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJfaXRlcmF0b3I5IiwiX3N0ZXA5IiwiX2l0ZXJhdG9yMTAiLCJfc3RlcDEwIiwiX2VsZW1lbnQyIiwiX2l0ZXJhdG9yMTEiLCJfc3RlcDExIiwiaW5pdGlhbERpc3BsYXkiLCJfaXRlcmF0b3IxMiIsIl9zdGVwMTIiLCJpbnB1dCIsIm9uIiwiX2l0ZXJhdG9yMTMiLCJfc3RlcDEzIiwiZnVsbHlOYW1lc3BhY2VkRXZlbnRzIiwiX2l0ZXJhdG9yMTQiLCJfc3RlcDE0Iiwib2ZmIiwiX2l0ZXJhdG9yMTUiLCJfc3RlcDE1IiwiX2l0ZXJhdG9yMTYiLCJfc3RlcDE2Iiwib3BlbiIsImVsZW0iLCJqUXVlcnkiLCJnZXQiLCJkZXN0cm95IiwicmVmcmVzaCIsInNlbGVjdG9yIiwic3Vic3RyaW5nIiwiX2RlZmF1bHQiLCJnbG9iYWwiLCJGdW5jdGlvbiIsImdhbGxlcnkiLCJjb25zb2xlIiwibG9nIiwibG96YWQiLCJvbnNjcm9sbCIsInRvcE5hdiIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsWSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFD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akIsQ0FBd0IsV0FBeEIsQ0FGSDtBQUdBLENBTEQsQyxDQU9BO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiEgbG96YWQuanMgLSB2MS4xNi4wIC0gMjAyMC0wOS0wNlxuKiBodHRwczovL2dpdGh1Yi5jb20vQXBvb3J2U2F4ZW5hL2xvemFkLmpzXG4qIENvcHlyaWdodCAoYykgMjAyMCBBcG9vcnYgU2F4ZW5hOyBMaWNlbnNlZCBNSVQgKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOnQubG96YWQ9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAgICogRGV0ZWN0IElFIGJyb3dzZXJcbiAgICogQGNvbnN0IHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi92YXIgZz1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50TW9kZSxmPXtyb290TWFyZ2luOlwiMHB4XCIsdGhyZXNob2xkOjAsbG9hZDpmdW5jdGlvbih0KXtpZihcInBpY3R1cmVcIj09PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7dmFyIGU9dC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLHI9ITE7bnVsbD09PWUmJihlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikscj0hMCksZyYmdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWllc3JjXCIpJiYoZS5zcmM9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWllc3JjXCIpKSx0LmdldEF0dHJpYnV0ZShcImRhdGEtYWx0XCIpJiYoZS5hbHQ9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFsdFwiKSksciYmdC5hcHBlbmQoZSl9aWYoXCJ2aWRlb1wiPT09dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiYhdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKSYmdC5jaGlsZHJlbil7Zm9yKHZhciBhPXQuY2hpbGRyZW4sbz12b2lkIDAsaT0wO2k8PWEubGVuZ3RoLTE7aSsrKShvPWFbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIikpJiYoYVtpXS5zcmM9byk7dC5sb2FkKCl9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc3RlclwiKSYmKHQucG9zdGVyPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3N0ZXJcIikpLHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIikmJih0LnNyYz10LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpKSx0LmdldEF0dHJpYnV0ZShcImRhdGEtc3Jjc2V0XCIpJiZ0LnNldEF0dHJpYnV0ZShcInNyY3NldFwiLHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNzZXRcIikpO3ZhciBuPVwiLFwiO2lmKHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kLWRlbGltaXRlclwiKSYmKG49dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmQtZGVsaW1pdGVyXCIpKSx0LmdldEF0dHJpYnV0ZShcImRhdGEtYmFja2dyb3VuZC1pbWFnZVwiKSl0LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybCgnXCIrdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmQtaW1hZ2VcIikuc3BsaXQobikuam9pbihcIicpLHVybCgnXCIpK1wiJylcIjtlbHNlIGlmKHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kLWltYWdlLXNldFwiKSl7dmFyIGQ9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmQtaW1hZ2Utc2V0XCIpLnNwbGl0KG4pLHU9ZFswXS5zdWJzdHIoMCxkWzBdLmluZGV4T2YoXCIgXCIpKXx8ZFswXTsvLyBTdWJzdHJpbmcgYmVmb3JlIC4uLiAxeFxudT0tMT09PXUuaW5kZXhPZihcInVybChcIik/XCJ1cmwoXCIrdStcIilcIjp1LDE9PT1kLmxlbmd0aD90LnN0eWxlLmJhY2tncm91bmRJbWFnZT11OnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwodC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKXx8XCJcIikrXCJiYWNrZ3JvdW5kLWltYWdlOiBcIit1K1wiOyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWltYWdlLXNldChcIitkK1wiKTsgYmFja2dyb3VuZC1pbWFnZTogaW1hZ2Utc2V0KFwiK2QrXCIpXCIpfXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGUtY2xhc3NcIikmJnQuY2xhc3NMaXN0LnRvZ2dsZSh0LmdldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlLWNsYXNzXCIpKX0sbG9hZGVkOmZ1bmN0aW9uKCl7fX07ZnVuY3Rpb24gQSh0KXt0LnNldEF0dHJpYnV0ZShcImRhdGEtbG9hZGVkXCIsITApfXZhciBtPWZ1bmN0aW9uKHQpe3JldHVyblwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxvYWRlZFwiKX0sdj1mdW5jdGlvbih0KXt2YXIgZT0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06ZG9jdW1lbnQ7cmV0dXJuIHQgaW5zdGFuY2VvZiBFbGVtZW50P1t0XTp0IGluc3RhbmNlb2YgTm9kZUxpc3Q/dDplLnF1ZXJ5U2VsZWN0b3JBbGwodCl9O3JldHVybiBmdW5jdGlvbigpe3ZhciByLGEsbz0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCIubG96YWRcIix0PTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxlPU9iamVjdC5hc3NpZ24oe30sZix0KSxpPWUucm9vdCxuPWUucm9vdE1hcmdpbixkPWUudGhyZXNob2xkLHU9ZS5sb2FkLGc9ZS5sb2FkZWQscz12b2lkIDA7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyJiYocz1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKHI9dSxhPWcsZnVuY3Rpb24odCxlKXt0LmZvckVhY2goZnVuY3Rpb24odCl7KDA8dC5pbnRlcnNlY3Rpb25SYXRpb3x8dC5pc0ludGVyc2VjdGluZykmJihlLnVub2JzZXJ2ZSh0LnRhcmdldCksbSh0LnRhcmdldCl8fChyKHQudGFyZ2V0KSxBKHQudGFyZ2V0KSxhKHQudGFyZ2V0KSkpfSl9KSx7cm9vdDppLHJvb3RNYXJnaW46bix0aHJlc2hvbGQ6ZH0pKTtmb3IodmFyIGMsbD12KG8saSksYj0wO2I8bC5sZW5ndGg7YisrKShjPWxbYl0pLmdldEF0dHJpYnV0ZShcImRhdGEtcGxhY2Vob2xkZXItYmFja2dyb3VuZFwiKSYmKGMuc3R5bGUuYmFja2dyb3VuZD1jLmdldEF0dHJpYnV0ZShcImRhdGEtcGxhY2Vob2xkZXItYmFja2dyb3VuZFwiKSk7cmV0dXJue29ic2VydmU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dihvLGkpLGU9MDtlPHQubGVuZ3RoO2UrKyltKHRbZV0pfHwocz9zLm9ic2VydmUodFtlXSk6KHUodFtlXSksQSh0W2VdKSxnKHRbZV0pKSl9LHRyaWdnZXJMb2FkOmZ1bmN0aW9uKHQpe20odCl8fCh1KHQpLEEodCksZyh0KSl9LG9ic2VydmVyOnN9fX0pO1xuIiwiLyohXG5cdEJ5IEFuZHLDqSBSaW5hcywgd3d3LmFuZHJlcmluYXMuZGVcblx0RG9jdW1lbnRhdGlvbiwgd3d3LnNpbXBsZWxpZ2h0Ym94LmRlXG5cdEF2YWlsYWJsZSBmb3IgdXNlIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuXHRWZXJzaW9uIDIuNy4yXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgU2ltcGxlTGlnaHRib3ggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaW1wbGVMaWdodGJveChlbGVtZW50cywgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2ltcGxlTGlnaHRib3gpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGVmYXVsdE9wdGlvbnNcIiwge1xuICAgICAgc291cmNlQXR0cjogJ2hyZWYnLFxuICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgIHNwaW5uZXI6IHRydWUsXG4gICAgICBuYXY6IHRydWUsXG4gICAgICBuYXZUZXh0OiBbJyZsc2FxdW87JywgJyZyc2FxdW87J10sXG4gICAgICBjYXB0aW9uczogdHJ1ZSxcbiAgICAgIGNhcHRpb25EZWxheTogMCxcbiAgICAgIGNhcHRpb25TZWxlY3RvcjogJ2ltZycsXG4gICAgICBjYXB0aW9uVHlwZTogJ2F0dHInLFxuICAgICAgY2FwdGlvbnNEYXRhOiAndGl0bGUnLFxuICAgICAgY2FwdGlvblBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGNhcHRpb25DbGFzczogJycsXG4gICAgICBjbG9zZTogdHJ1ZSxcbiAgICAgIGNsb3NlVGV4dDogJyZ0aW1lczsnLFxuICAgICAgc3dpcGVDbG9zZTogdHJ1ZSxcbiAgICAgIHNob3dDb3VudGVyOiB0cnVlLFxuICAgICAgZmlsZUV4dDogJ3BuZ3xqcGd8anBlZ3xnaWZ8d2VicCcsXG4gICAgICBhbmltYXRpb25TbGlkZTogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvblNwZWVkOiAyNTAsXG4gICAgICBwcmVsb2FkaW5nOiB0cnVlLFxuICAgICAgZW5hYmxlS2V5Ym9hcmQ6IHRydWUsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcmVsOiBmYWxzZSxcbiAgICAgIGRvY0Nsb3NlOiB0cnVlLFxuICAgICAgc3dpcGVUb2xlcmFuY2U6IDUwLFxuICAgICAgY2xhc3NOYW1lOiAnc2ltcGxlLWxpZ2h0Ym94JyxcbiAgICAgIHdpZHRoUmF0aW86IDAuOCxcbiAgICAgIGhlaWdodFJhdGlvOiAwLjksXG4gICAgICBzY2FsZUltYWdlVG9SYXRpbzogZmFsc2UsXG4gICAgICBkaXNhYmxlUmlnaHRDbGljazogZmFsc2UsXG4gICAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlLFxuICAgICAgYWxlcnRFcnJvcjogdHJ1ZSxcbiAgICAgIGFsZXJ0RXJyb3JNZXNzYWdlOiAnSW1hZ2Ugbm90IGZvdW5kLCBuZXh0IGltYWdlIHdpbGwgYmUgbG9hZGVkJyxcbiAgICAgIGFkZGl0aW9uYWxIdG1sOiBmYWxzZSxcbiAgICAgIGhpc3Rvcnk6IHRydWUsXG4gICAgICB0aHJvdHRsZUludGVydmFsOiAwLFxuICAgICAgZG91YmxlVGFwWm9vbTogMixcbiAgICAgIG1heFpvb206IDEwLFxuICAgICAgaHRtbENsYXNzOiAnaGFzLWxpZ2h0Ym94JyxcbiAgICAgIHJ0bDogZmFsc2UsXG4gICAgICBmaXhlZENsYXNzOiAnc2wtZml4ZWQnLFxuICAgICAgZmFkZVNwZWVkOiAzMDAsXG4gICAgICB1bmlxdWVJbWFnZXM6IHRydWUsXG4gICAgICBmb2N1czogdHJ1ZVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidHJhbnNpdGlvblByZWZpeFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidHJhbnNpdGlvbkNhcGFibGVcIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNUb3VjaERldmljZVwiLCAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW5pdGlhbExvY2F0aW9uSGFzaFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicHVzaFN0YXRlU3VwcG9ydFwiLCAncHVzaFN0YXRlJyBpbiBoaXN0b3J5KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzT3BlblwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0FuaW1hdGluZ1wiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0Nsb3NpbmdcIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaXNGYWRlSW5cIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXJsQ2hhbmdlZE9uY2VcIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFzaFJlc2V0ZWRcIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGlzdG9yeUhhc0NoYW5nZXNcIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGlzdG9yeVVwZGF0ZVRpbWVvdXRcIiwgbnVsbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjdXJyZW50SW1hZ2VcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50TmFtZXNwYWNlXCIsICdzaW1wbGVsaWdodGJveCcpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZG9tTm9kZXNcIiwge30pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibG9hZGVkSW1hZ2VzXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImluaXRpYWxJbWFnZUluZGV4XCIsIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY3VycmVudEltYWdlSW5kZXhcIiwgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbml0aWFsU2VsZWN0b3JcIiwgbnVsbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnbG9iYWxTY3JvbGxiYXJXaWR0aFwiLCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbnRyb2xDb29yZGluYXRlc1wiLCB7XG4gICAgICBzd2lwZURpZmY6IDAsXG4gICAgICBzd2lwZVlEaWZmOiAwLFxuICAgICAgc3dpcGVTdGFydDogMCxcbiAgICAgIHN3aXBlRW5kOiAwLFxuICAgICAgc3dpcGVZU3RhcnQ6IDAsXG4gICAgICBzd2lwZVlFbmQ6IDAsXG4gICAgICBtb3VzZWRvd246IGZhbHNlLFxuICAgICAgaW1hZ2VMZWZ0OiAwLFxuICAgICAgem9vbWVkOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5lckhlaWdodDogMCxcbiAgICAgIGNvbnRhaW5lcldpZHRoOiAwLFxuICAgICAgY29udGFpbmVyT2Zmc2V0WDogMCxcbiAgICAgIGNvbnRhaW5lck9mZnNldFk6IDAsXG4gICAgICBpbWdIZWlnaHQ6IDAsXG4gICAgICBpbWdXaWR0aDogMCxcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgaW5pdGlhbE9mZnNldFg6IDAsXG4gICAgICBpbml0aWFsT2Zmc2V0WTogMCxcbiAgICAgIGluaXRpYWxQb2ludGVyT2Zmc2V0WDogMCxcbiAgICAgIGluaXRpYWxQb2ludGVyT2Zmc2V0WTogMCxcbiAgICAgIGluaXRpYWxQb2ludGVyT2Zmc2V0WDI6IDAsXG4gICAgICBpbml0aWFsUG9pbnRlck9mZnNldFkyOiAwLFxuICAgICAgaW5pdGlhbFNjYWxlOiAxLFxuICAgICAgaW5pdGlhbFBpbmNoRGlzdGFuY2U6IDAsXG4gICAgICBwb2ludGVyT2Zmc2V0WDogMCxcbiAgICAgIHBvaW50ZXJPZmZzZXRZOiAwLFxuICAgICAgcG9pbnRlck9mZnNldFgyOiAwLFxuICAgICAgcG9pbnRlck9mZnNldFkyOiAwLFxuICAgICAgdGFyZ2V0T2Zmc2V0WDogMCxcbiAgICAgIHRhcmdldE9mZnNldFk6IDAsXG4gICAgICB0YXJnZXRTY2FsZTogMCxcbiAgICAgIHBpbmNoT2Zmc2V0WDogMCxcbiAgICAgIHBpbmNoT2Zmc2V0WTogMCxcbiAgICAgIGxpbWl0T2Zmc2V0WDogMCxcbiAgICAgIGxpbWl0T2Zmc2V0WTogMCxcbiAgICAgIHNjYWxlRGlmZmVyZW5jZTogMCxcbiAgICAgIHRhcmdldFBpbmNoRGlzdGFuY2U6IDAsXG4gICAgICB0b3VjaENvdW50OiAwLFxuICAgICAgZG91YmxlVGFwcGVkOiBmYWxzZSxcbiAgICAgIHRvdWNobW92ZUNvdW50OiAwXG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFNlbGVjdG9yID0gZWxlbWVudHM7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0eXBlb2YgZWxlbWVudHMubGVuZ3RoICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50cy5sZW5ndGggPiAwID8gQXJyYXkuZnJvbShlbGVtZW50cykgOiBbZWxlbWVudHNdO1xuICAgIH1cblxuICAgIHRoaXMucmVsYXRlZEVsZW1lbnRzID0gW107XG4gICAgdGhpcy50cmFuc2l0aW9uUHJlZml4ID0gdGhpcy5jYWxjdWxhdGVUcmFuc2l0aW9uUHJlZml4KCk7XG4gICAgdGhpcy50cmFuc2l0aW9uQ2FwYWJsZSA9IHRoaXMudHJhbnNpdGlvblByZWZpeCAhPT0gZmFsc2U7XG4gICAgdGhpcy5pbml0aWFsTG9jYXRpb25IYXNoID0gdGhpcy5oYXNoOyAvLyB0aGlzIHNob3VsZCBiZSBoYW5kbGVkIGJ5IGF0dHJpYnV0ZSBzZWxlY3RvciBJTUhPISA9PiAnYVtyZWw9YmxhXScuLi5cblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVsKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5nZXRSZWxhdGVkKHRoaXMub3B0aW9ucy5yZWwpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudW5pcXVlSW1hZ2VzKSB7XG4gICAgICB2YXIgaW1nQXJyID0gW107XG4gICAgICB0aGlzLmVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnRzKS5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKF90aGlzLm9wdGlvbnMuc291cmNlQXR0cik7XG5cbiAgICAgICAgaWYgKGltZ0Fyci5pbmRleE9mKHNyYykgPT09IC0xKSB7XG4gICAgICAgICAgaW1nQXJyLnB1c2goc3JjKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlRG9tTm9kZXMoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2UpIHtcbiAgICAgIHRoaXMuZG9tTm9kZXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmRvbU5vZGVzLmNsb3NlQnV0dG9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm5hdikge1xuICAgICAgdGhpcy5kb21Ob2Rlcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZG9tTm9kZXMubmF2aWdhdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zcGlubmVyKSB7XG4gICAgICB0aGlzLmRvbU5vZGVzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5kb21Ob2Rlcy5zcGlubmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5lbGVtZW50cywgJ2NsaWNrLicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5pc1ZhbGlkTGluayhldmVudC5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChfdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmluaXRpYWxJbWFnZUluZGV4ID0gX3RoaXMuZWxlbWVudHMuaW5kZXhPZihldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICBfdGhpcy5vcGVuSW1hZ2UoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7IC8vIGNsb3NlIGFkZEV2ZW50TGlzdGVuZXIgY2xpY2sgYWRkRXZlbnRMaXN0ZW5lciBkb2NcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZG9jQ2xvc2UpIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvbU5vZGVzLndyYXBwZXIsIFsnY2xpY2suJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICd0b3VjaHN0YXJ0LicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlXSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpcy5pc09wZW4gJiYgZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyBkaXNhYmxlIHJpZ2h0Y2xpY2tcblxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlUmlnaHRDbGljaykge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LmJvZHksICdjb250ZXh0bWVudS4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbC1pbWFnZVwiKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8ga2V5Ym9hcmQtY29udHJvbFxuXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUtleWJvYXJkKSB7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQuYm9keSwgJ2tleXVwLicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlLCB0aGlzLnRocm90dGxlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpcy5jb250cm9sQ29vcmRpbmF0ZXMuc3dpcGVEaWZmID0gMDsgLy8ga2V5Ym9hcmQgY29udHJvbCBvbmx5IGlmIGxpZ2h0Ym94IGlzIG9wZW5cblxuICAgICAgICBpZiAoX3RoaXMuaXNBbmltYXRpbmcgJiYgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIF90aGlzLmN1cnJlbnRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKTtcblxuICAgICAgICAgIF90aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXMuaXNBbmltYXRpbmcgJiYgWydBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCddLmluZGV4T2YoZXZlbnQua2V5KSA+IC0xKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkSW1hZ2UoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgPyAxIDogLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5vcHRpb25zLnRocm90dGxlSW50ZXJ2YWwpKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNpbXBsZUxpZ2h0Ym94LCBbe1xuICAgIGtleTogXCJjcmVhdGVEb21Ob2Rlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVEb21Ob2RlcygpIHtcbiAgICAgIHRoaXMuZG9tTm9kZXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5kb21Ob2Rlcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3NsLW92ZXJsYXknKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMub3ZlcmxheS5kYXRhc2V0Lm9wYWNpdHlUYXJnZXQgPSBcIi43XCI7XG4gICAgICB0aGlzLmRvbU5vZGVzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICB0aGlzLmRvbU5vZGVzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NsLWNsb3NlJyk7XG4gICAgICB0aGlzLmRvbU5vZGVzLmNsb3NlQnV0dG9uLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5jbG9zZVRleHQ7XG4gICAgICB0aGlzLmRvbU5vZGVzLnNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMuc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdzbC1zcGlubmVyJyk7XG4gICAgICB0aGlzLmRvbU5vZGVzLnNwaW5uZXIuaW5uZXJIVE1MID0gJzxkaXY+PC9kaXY+JztcbiAgICAgIHRoaXMuZG9tTm9kZXMubmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5kb21Ob2Rlcy5uYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3NsLW5hdmlnYXRpb24nKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMubmF2aWdhdGlvbi5pbm5lckhUTUwgPSBcIjxidXR0b24gY2xhc3M9XFxcInNsLXByZXZcXFwiPlwiLmNvbmNhdCh0aGlzLm9wdGlvbnMubmF2VGV4dFswXSwgXCI8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVxcXCJzbC1uZXh0XFxcIj5cIikuY29uY2F0KHRoaXMub3B0aW9ucy5uYXZUZXh0WzFdLCBcIjwvYnV0dG9uPlwiKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMuY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5kb21Ob2Rlcy5jb3VudGVyLmNsYXNzTGlzdC5hZGQoJ3NsLWNvdW50ZXInKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMuY291bnRlci5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJzbC1jdXJyZW50XCI+PC9zcGFuPi88c3BhbiBjbGFzcz1cInNsLXRvdGFsXCI+PC9zcGFuPic7XG4gICAgICB0aGlzLmRvbU5vZGVzLmNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMuY2FwdGlvbi5jbGFzc0xpc3QuYWRkKCdzbC1jYXB0aW9uJywgJ3Bvcy0nICsgdGhpcy5vcHRpb25zLmNhcHRpb25Qb3NpdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2FwdGlvbkNsYXNzKSB7XG4gICAgICAgIHRoaXMuZG9tTm9kZXMuY2FwdGlvbi5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5jYXB0aW9uQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRvbU5vZGVzLmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmRvbU5vZGVzLmltYWdlLmNsYXNzTGlzdC5hZGQoJ3NsLWltYWdlJyk7XG4gICAgICB0aGlzLmRvbU5vZGVzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzbC13cmFwcGVyJyk7XG4gICAgICB0aGlzLmRvbU5vZGVzLndyYXBwZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMud3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgICB0aGlzLmRvbU5vZGVzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5kb21Ob2Rlcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG4gICAgICAgIHRoaXMuZG9tTm9kZXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzbC1kaXItcnRsJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRocm90dGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XG4gICAgICB2YXIgaW5UaHJvdHRsZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaW5UaHJvdHRsZSkge1xuICAgICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBpblRocm90dGxlID0gZmFsc2U7XG4gICAgICAgICAgfSwgbGltaXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkTGlua1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZhbGlkTGluayhlbGVtZW50KSB7XG4gICAgICByZXR1cm4gIXRoaXMub3B0aW9ucy5maWxlRXh0IHx8ICdwYXRobmFtZScgaW4gZWxlbWVudCAmJiBuZXcgUmVnRXhwKCcoJyArIHRoaXMub3B0aW9ucy5maWxlRXh0ICsgJykkJywgJ2knKS50ZXN0KGVsZW1lbnQucGF0aG5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYWxjdWxhdGVUcmFuc2l0aW9uUHJlZml4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGN1bGF0ZVRyYW5zaXRpb25QcmVmaXgoKSB7XG4gICAgICB2YXIgcyA9IChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc3R5bGU7XG4gICAgICByZXR1cm4gJ3RyYW5zaXRpb24nIGluIHMgPyAnJyA6ICdXZWJraXRUcmFuc2l0aW9uJyBpbiBzID8gJy13ZWJraXQtJyA6ICdNb3pUcmFuc2l0aW9uJyBpbiBzID8gJy1tb3otJyA6ICdPVHJhbnNpdGlvbicgaW4gcyA/ICctbycgOiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9nZ2xlU2Nyb2xsYmFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZVNjcm9sbGJhcih0eXBlKSB7XG4gICAgICB2YXIgc2Nyb2xsYmFyV2lkdGggPSAwO1xuICAgICAgdmFyIGZpeGVkRWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5vcHRpb25zLmZpeGVkQ2xhc3MpKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdoaWRlJykge1xuICAgICAgICB2YXIgZnVsbFdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgaWYgKCFmdWxsV2luZG93V2lkdGgpIHtcbiAgICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50UmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBmdWxsV2luZG93V2lkdGggPSBkb2N1bWVudEVsZW1lbnRSZWN0LnJpZ2h0IC0gTWF0aC5hYnMoZG9jdW1lbnRFbGVtZW50UmVjdC5sZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgZnVsbFdpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCB8fCAwLCAxMCk7XG4gICAgICAgICAgc2Nyb2xsRGl2LmNsYXNzTGlzdC5hZGQoJ3NsLXNjcm9sbGJhci1tZWFzdXJlJyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgICAgIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQub3JpZ2luYWxQYWRkaW5nUmlnaHQgPSBwYWRkaW5nUmlnaHQ7XG5cbiAgICAgICAgICBpZiAoc2Nyb2xsYmFyV2lkdGggPiAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1zY3JvbGwnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZ1JpZ2h0ICsgc2Nyb2xsYmFyV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgZml4ZWRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHZhciBhY3R1YWxQYWRkaW5nID0gZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICAgICAgICAgIHZhciBjYWxjdWxhdGVkUGFkZGluZyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydwYWRkaW5nLXJpZ2h0J107XG4gICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbFBhZGRpbmdSaWdodCA9IGFjdHVhbFBhZGRpbmc7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQocGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyBzY3JvbGxiYXJXaWR0aCwgXCJweFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tc2Nyb2xsJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gZG9jdW1lbnQuYm9keS5kYXRhc2V0Lm9yaWdpbmFsUGFkZGluZ1JpZ2h0O1xuICAgICAgICBmaXhlZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgcGFkZGluZyA9IGVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbFBhZGRpbmdSaWdodDtcblxuICAgICAgICAgIGlmICh0eXBlb2YgcGFkZGluZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgdGhpcy5pc0FuaW1hdGluZyB8fCB0aGlzLmlzQ2xvc2luZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNDbG9zaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5yZWxhdGVkRWxlbWVudHNbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF07XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbG9zZS5zaW1wbGVsaWdodGJveCcpKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeUhhc0NoYW5nZXMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzaFJlc2V0ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0SGFzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ2ZvY3VzaW4uJyArIHRoaXMuZXZlbnROYW1lc3BhY2UpO1xuICAgICAgdGhpcy5mYWRlT3V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbC1pbWFnZSBpbWcsIC5zbC1vdmVybGF5LCAuc2wtY2xvc2UsIC5zbC1uYXZpZ2F0aW9uLCAuc2wtaW1hZ2UgLnNsLWNhcHRpb24sIC5zbC1jb3VudGVyJyksIHRoaXMub3B0aW9ucy5mYWRlU3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgICAgICBfdGhpczIudG9nZ2xlU2Nyb2xsYmFyKCdzaG93Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuaHRtbENsYXNzICYmIF90aGlzMi5vcHRpb25zLmh0bWxDbGFzcyAhPT0gJycpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NMaXN0LnJlbW92ZShfdGhpczIub3B0aW9ucy5odG1sQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChfdGhpczIuZG9tTm9kZXMud3JhcHBlcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoX3RoaXMyLmRvbU5vZGVzLm92ZXJsYXkpO1xuICAgICAgICBfdGhpczIuZG9tTm9kZXMuYWRkaXRpb25hbEh0bWwgPSBudWxsO1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbG9zZWQuc2ltcGxlbGlnaHRib3gnKSk7XG4gICAgICAgIF90aGlzMi5pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBudWxsO1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTsgLy8gcmVzZXQgdG91Y2hjb250cm9sIGNvb3JkaW5hdGVzXG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNvbnRyb2xDb29yZGluYXRlcykge1xuICAgICAgICB0aGlzLmNvbnRyb2xDb29yZGluYXRlc1trZXldID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250cm9sQ29vcmRpbmF0ZXMubW91c2Vkb3duID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRyb2xDb29yZGluYXRlcy56b29tZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udHJvbENvb3JkaW5hdGVzLmNhcHR1cmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxTY2FsZSA9IHRoaXMubWluTWF4KDEsIDEsIHRoaXMub3B0aW9ucy5tYXhab29tKTtcbiAgICAgIHRoaXMuY29udHJvbENvb3JkaW5hdGVzLmRvdWJsZVRhcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcmVsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5jdXJyZW50SW1hZ2VJbmRleCxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLnJlbGF0ZWRFbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgbmV4dCA9IGluZGV4ICsgMSA8IDAgPyBsZW5ndGggLSAxIDogaW5kZXggKyAxID49IGxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxLFxuICAgICAgICAgIHByZXYgPSBpbmRleCAtIDEgPCAwID8gbGVuZ3RoIC0gMSA6IGluZGV4IC0gMSA+PSBsZW5ndGggLSAxID8gMCA6IGluZGV4IC0gMSxcbiAgICAgICAgICBuZXh0SW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBwcmV2SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG5leHRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBzcmMgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgICAgICBpZiAoX3RoaXMzLmxvYWRlZEltYWdlcy5pbmRleE9mKHNyYykgPT09IC0xKSB7XG4gICAgICAgICAgLy9pcyB0aGlzIGNvbmRpdGlvbiBldmVuIHJlcXVpcmVkLi4uIHNldHRpbmcgbXVsdGlwbGUgdGltZXMgd2lsbCBub3QgY2hhbmdlIHVzYWdlLi4uXG4gICAgICAgICAgX3RoaXMzLmxvYWRlZEltYWdlcy5wdXNoKHNyYyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczMucmVsYXRlZEVsZW1lbnRzW2luZGV4XS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbmV4dEltYWdlTG9hZGVkLicgKyBfdGhpczMuZXZlbnROYW1lc3BhY2UpKTtcbiAgICAgIH0pO1xuICAgICAgbmV4dEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5yZWxhdGVkRWxlbWVudHNbbmV4dF0uZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5zb3VyY2VBdHRyKSk7XG4gICAgICBwcmV2SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgc3JjID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICAgICAgaWYgKF90aGlzMy5sb2FkZWRJbWFnZXMuaW5kZXhPZihzcmMpID09PSAtMSkge1xuICAgICAgICAgIF90aGlzMy5sb2FkZWRJbWFnZXMucHVzaChzcmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMzLnJlbGF0ZWRFbGVtZW50c1tpbmRleF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ByZXZJbWFnZUxvYWRlZC4nICsgX3RoaXMzLmV2ZW50TmFtZXNwYWNlKSk7XG4gICAgICB9KTtcbiAgICAgIHByZXZJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMucmVsYXRlZEVsZW1lbnRzW3ByZXZdLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuc291cmNlQXR0cikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkSW1hZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZEltYWdlKGRpcmVjdGlvbikge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBzbGlkZURpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gLWRpcmVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWxhdGVkRWxlbWVudHNbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZS4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSkpO1xuICAgICAgdGhpcy5yZWxhdGVkRWxlbWVudHNbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoKGRpcmVjdGlvbiA9PT0gMSA/ICduZXh0JyA6ICdwcmV2JykgKyAnLicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlKSk7XG4gICAgICB2YXIgbmV3SW5kZXggPSB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ICsgZGlyZWN0aW9uO1xuXG4gICAgICBpZiAodGhpcy5pc0FuaW1hdGluZyB8fCAobmV3SW5kZXggPCAwIHx8IG5ld0luZGV4ID49IHRoaXMucmVsYXRlZEVsZW1lbnRzLmxlbmd0aCkgJiYgdGhpcy5vcHRpb25zLmxvb3AgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IG5ld0luZGV4IDwgMCA/IHRoaXMucmVsYXRlZEVsZW1lbnRzLmxlbmd0aCAtIDEgOiBuZXdJbmRleCA+IHRoaXMucmVsYXRlZEVsZW1lbnRzLmxlbmd0aCAtIDEgPyAwIDogbmV3SW5kZXg7XG4gICAgICB0aGlzLmRvbU5vZGVzLmNvdW50ZXIucXVlcnlTZWxlY3RvcignLnNsLWN1cnJlbnQnKS5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ICsgMTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb25TbGlkZSkge1xuICAgICAgICB0aGlzLnNsaWRlKHRoaXMub3B0aW9ucy5hbmltYXRpb25TcGVlZCAvIDEwMDAsIC0xMDAgKiBzbGlkZURpcmVjdGlvbiAtIHRoaXMuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlRGlmZiArICdweCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZhZGVPdXQodGhpcy5kb21Ob2Rlcy5pbWFnZSwgdGhpcy5vcHRpb25zLmZhZGVTcGVlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczQuaXNBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICghX3RoaXM0LmlzQ2xvc2luZykge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpczQucmVsYXRlZEVsZW1lbnRzW190aGlzNC5jdXJyZW50SW1hZ2VJbmRleF07XG5cbiAgICAgICAgICAgIF90aGlzNC5jdXJyZW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBlbGVtZW50LmdldEF0dHJpYnV0ZShfdGhpczQub3B0aW9ucy5zb3VyY2VBdHRyKSk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpczQubG9hZGVkSW1hZ2VzLmluZGV4T2YoZWxlbWVudC5nZXRBdHRyaWJ1dGUoX3RoaXM0Lm9wdGlvbnMuc291cmNlQXR0cikpID09PSAtMSkge1xuICAgICAgICAgICAgICBfdGhpczQuc2hvdyhfdGhpczQuZG9tTm9kZXMuc3Bpbm5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfdGhpczQuZG9tTm9kZXMuaW1hZ2UuY29udGFpbnMoX3RoaXM0LmRvbU5vZGVzLmNhcHRpb24pKSB7XG4gICAgICAgICAgICAgIF90aGlzNC5kb21Ob2Rlcy5pbWFnZS5yZW1vdmVDaGlsZChfdGhpczQuZG9tTm9kZXMuY2FwdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzNC5hZGp1c3RJbWFnZShzbGlkZURpcmVjdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChfdGhpczQub3B0aW9ucy5wcmVsb2FkaW5nKSBfdGhpczQucHJlbG9hZCgpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM0LmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGp1c3RJbWFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGp1c3RJbWFnZShkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuY3VycmVudEltYWdlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRtcEltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMub3B0aW9ucy53aWR0aFJhdGlvLFxuICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHRoaXMub3B0aW9ucy5oZWlnaHRSYXRpbztcbiAgICAgIHRtcEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5jdXJyZW50SW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKSk7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZS5kYXRhc2V0LnNjYWxlID0gMTtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlLmRhdGFzZXQudHJhbnNsYXRlWCA9IDA7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZS5kYXRhc2V0LnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgdGhpcy56b29tUGFuRWxlbWVudCgwLCAwLCAxKTtcbiAgICAgIHRtcEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzNS5yZWxhdGVkRWxlbWVudHNbX3RoaXM1LmN1cnJlbnRJbWFnZUluZGV4XS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnZXJyb3IuJyArIF90aGlzNS5ldmVudE5hbWVzcGFjZSkpO1xuXG4gICAgICAgIF90aGlzNS5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBfdGhpczUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIF90aGlzNS5kb21Ob2Rlcy5zcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHZhciBkaXJJc0RlZmluZWQgPSBkaXJlY3Rpb24gPT09IDEgfHwgZGlyZWN0aW9uID09PSAtMTtcblxuICAgICAgICBpZiAoX3RoaXM1LmluaXRpYWxJbWFnZUluZGV4ID09PSBfdGhpczUuY3VycmVudEltYWdlSW5kZXggJiYgZGlySXNEZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNS5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzNS5vcHRpb25zLmFsZXJ0RXJyb3IpIHtcbiAgICAgICAgICBhbGVydChfdGhpczUub3B0aW9ucy5hbGVydEVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczUubG9hZEltYWdlKGRpcklzRGVmaW5lZCA/IGRpcmVjdGlvbiA6IDEpO1xuICAgICAgfSk7XG4gICAgICB0bXBJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGlyZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIF90aGlzNS5yZWxhdGVkRWxlbWVudHNbX3RoaXM1LmN1cnJlbnRJbWFnZUluZGV4XS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlZC4nICsgX3RoaXM1LmV2ZW50TmFtZXNwYWNlKSk7XG5cbiAgICAgICAgICBfdGhpczUucmVsYXRlZEVsZW1lbnRzW190aGlzNS5jdXJyZW50SW1hZ2VJbmRleF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoKGRpcmVjdGlvbiA9PT0gMSA/ICduZXh0RG9uZScgOiAncHJldkRvbmUnKSArICcuJyArIF90aGlzNS5ldmVudE5hbWVzcGFjZSkpO1xuICAgICAgICB9IC8vIGhpc3RvcnlcblxuXG4gICAgICAgIGlmIChfdGhpczUub3B0aW9ucy5oaXN0b3J5KSB7XG4gICAgICAgICAgX3RoaXM1LnVwZGF0ZVVSTCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzNS5sb2FkZWRJbWFnZXMuaW5kZXhPZihfdGhpczUuY3VycmVudEltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJykpID09PSAtMSkge1xuICAgICAgICAgIF90aGlzNS5sb2FkZWRJbWFnZXMucHVzaChfdGhpczUuY3VycmVudEltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGltYWdlV2lkdGggPSBldmVudC50YXJnZXQud2lkdGgsXG4gICAgICAgICAgICBpbWFnZUhlaWdodCA9IGV2ZW50LnRhcmdldC5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKF90aGlzNS5vcHRpb25zLnNjYWxlSW1hZ2VUb1JhdGlvIHx8IGltYWdlV2lkdGggPiB3aW5kb3dXaWR0aCB8fCBpbWFnZUhlaWdodCA+IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgIHZhciByYXRpbyA9IGltYWdlV2lkdGggLyBpbWFnZUhlaWdodCA+IHdpbmRvd1dpZHRoIC8gd2luZG93SGVpZ2h0ID8gaW1hZ2VXaWR0aCAvIHdpbmRvd1dpZHRoIDogaW1hZ2VIZWlnaHQgLyB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgaW1hZ2VXaWR0aCAvPSByYXRpbztcbiAgICAgICAgICBpbWFnZUhlaWdodCAvPSByYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzNS5kb21Ob2Rlcy5pbWFnZS5zdHlsZS50b3AgPSAod2luZG93LmlubmVySGVpZ2h0IC0gaW1hZ2VIZWlnaHQpIC8gMiArICdweCc7XG4gICAgICAgIF90aGlzNS5kb21Ob2Rlcy5pbWFnZS5zdHlsZS5sZWZ0ID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gaW1hZ2VXaWR0aCAtIF90aGlzNS5nbG9iYWxTY3JvbGxiYXJXaWR0aCkgLyAyICsgJ3B4JztcbiAgICAgICAgX3RoaXM1LmRvbU5vZGVzLmltYWdlLnN0eWxlLndpZHRoID0gaW1hZ2VXaWR0aCArICdweCc7XG4gICAgICAgIF90aGlzNS5kb21Ob2Rlcy5pbWFnZS5zdHlsZS5oZWlnaHQgPSBpbWFnZUhlaWdodCArICdweCc7XG4gICAgICAgIF90aGlzNS5kb21Ob2Rlcy5zcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKF90aGlzNS5vcHRpb25zLmZvY3VzKSB7XG4gICAgICAgICAgX3RoaXM1LmZvcmNlRm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzNS5mYWRlSW4oX3RoaXM1LmN1cnJlbnRJbWFnZSwgX3RoaXM1Lm9wdGlvbnMuZmFkZVNwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzNS5vcHRpb25zLmZvY3VzKSB7XG4gICAgICAgICAgICBfdGhpczUuZG9tTm9kZXMud3JhcHBlci5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXM1LmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHZhciBjYXB0aW9uQ29udGFpbmVyLCBjYXB0aW9uVGV4dDtcblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzNS5vcHRpb25zLmNhcHRpb25TZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjYXB0aW9uQ29udGFpbmVyID0gX3RoaXM1Lm9wdGlvbnMuY2FwdGlvblNlbGVjdG9yID09PSAnc2VsZicgPyBfdGhpczUucmVsYXRlZEVsZW1lbnRzW190aGlzNS5jdXJyZW50SW1hZ2VJbmRleF0gOiBfdGhpczUucmVsYXRlZEVsZW1lbnRzW190aGlzNS5jdXJyZW50SW1hZ2VJbmRleF0ucXVlcnlTZWxlY3RvcihfdGhpczUub3B0aW9ucy5jYXB0aW9uU2VsZWN0b3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpczUub3B0aW9ucy5jYXB0aW9uU2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYXB0aW9uQ29udGFpbmVyID0gX3RoaXM1Lm9wdGlvbnMuY2FwdGlvblNlbGVjdG9yKF90aGlzNS5yZWxhdGVkRWxlbWVudHNbX3RoaXM1LmN1cnJlbnRJbWFnZUluZGV4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXM1Lm9wdGlvbnMuY2FwdGlvbnMgJiYgY2FwdGlvbkNvbnRhaW5lcikge1xuICAgICAgICAgIGlmIChfdGhpczUub3B0aW9ucy5jYXB0aW9uVHlwZSA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICBjYXB0aW9uVGV4dCA9IGNhcHRpb25Db250YWluZXIuZGF0YXNldFtfdGhpczUub3B0aW9ucy5jYXB0aW9uc0RhdGFdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXM1Lm9wdGlvbnMuY2FwdGlvblR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgY2FwdGlvblRleHQgPSBjYXB0aW9uQ29udGFpbmVyLmlubmVySFRNTDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FwdGlvblRleHQgPSBjYXB0aW9uQ29udGFpbmVyLmdldEF0dHJpYnV0ZShfdGhpczUub3B0aW9ucy5jYXB0aW9uc0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXM1Lm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgIGlmIChfdGhpczUuY3VycmVudEltYWdlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF90aGlzNS5oaWRlKF90aGlzNS5kb21Ob2Rlcy5uYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zbC1wcmV2JykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfdGhpczUuY3VycmVudEltYWdlSW5kZXggPj0gX3RoaXM1LnJlbGF0ZWRFbGVtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBfdGhpczUuaGlkZShfdGhpczUuZG9tTm9kZXMubmF2aWdhdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2wtbmV4dCcpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXM1LmN1cnJlbnRJbWFnZUluZGV4ID4gMCkge1xuICAgICAgICAgICAgX3RoaXM1LnNob3coX3RoaXM1LmRvbU5vZGVzLm5hdmlnYXRpb24ucXVlcnlTZWxlY3RvcignLnNsLXByZXYnKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzNS5jdXJyZW50SW1hZ2VJbmRleCA8IF90aGlzNS5yZWxhdGVkRWxlbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgX3RoaXM1LnNob3coX3RoaXM1LmRvbU5vZGVzLm5hdmlnYXRpb24ucXVlcnlTZWxlY3RvcignLnNsLW5leHQnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzNS5yZWxhdGVkRWxlbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgX3RoaXM1LmhpZGUoX3RoaXM1LmRvbU5vZGVzLm5hdmlnYXRpb24ucXVlcnlTZWxlY3RvckFsbCgnLnNsLXByZXYsIC5zbC1uZXh0JykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzNS5zaG93KF90aGlzNS5kb21Ob2Rlcy5uYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbC1wcmV2LCAuc2wtbmV4dCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEgfHwgZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgIGlmIChfdGhpczUub3B0aW9ucy5hbmltYXRpb25TbGlkZSkge1xuICAgICAgICAgICAgX3RoaXM1LnNsaWRlKDAsIDEwMCAqIGRpcmVjdGlvbiArICdweCcpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXM1LnNsaWRlKF90aGlzNS5vcHRpb25zLmFuaW1hdGlvblNwZWVkIC8gMTAwMCwgMCArICdweCcpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzNS5mYWRlSW4oX3RoaXM1LmRvbU5vZGVzLmltYWdlLCBfdGhpczUub3B0aW9ucy5mYWRlU3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzNS5pc0FuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBfdGhpczUuc2V0Q2FwdGlvbihjYXB0aW9uVGV4dCwgaW1hZ2VXaWR0aCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM1LmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBfdGhpczUuc2V0Q2FwdGlvbihjYXB0aW9uVGV4dCwgaW1hZ2VXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXM1Lm9wdGlvbnMuYWRkaXRpb25hbEh0bWwgJiYgIV90aGlzNS5kb21Ob2Rlcy5hZGRpdGlvbmFsSHRtbCkge1xuICAgICAgICAgIF90aGlzNS5kb21Ob2Rlcy5hZGRpdGlvbmFsSHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgX3RoaXM1LmRvbU5vZGVzLmFkZGl0aW9uYWxIdG1sLmNsYXNzTGlzdC5hZGQoJ3NsLWFkZGl0aW9uYWwtaHRtbCcpO1xuXG4gICAgICAgICAgX3RoaXM1LmRvbU5vZGVzLmFkZGl0aW9uYWxIdG1sLmlubmVySFRNTCA9IF90aGlzNS5vcHRpb25zLmFkZGl0aW9uYWxIdG1sO1xuXG4gICAgICAgICAgX3RoaXM1LmRvbU5vZGVzLmltYWdlLmFwcGVuZENoaWxkKF90aGlzNS5kb21Ob2Rlcy5hZGRpdGlvbmFsSHRtbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ6b29tUGFuRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB6b29tUGFuRWxlbWVudCh0YXJnZXRPZmZzZXRYLCB0YXJnZXRPZmZzZXRZLCB0YXJnZXRTY2FsZSkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2Uuc3R5bGVbdGhpcy50cmFuc2l0aW9uUHJlZml4ICsgJ3RyYW5zZm9ybSddID0gJ3RyYW5zbGF0ZSgnICsgdGFyZ2V0T2Zmc2V0WCArICcsJyArIHRhcmdldE9mZnNldFkgKyAnKSBzY2FsZSgnICsgdGFyZ2V0U2NhbGUgKyAnKSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1pbk1heFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtaW5NYXgodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRab29tRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRab29tRGF0YShpbml0aWFsU2NhbGUsIHRhcmdldE9mZnNldFgsIHRhcmdldE9mZnNldFkpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlLmRhdGFzZXQuc2NhbGUgPSBpbml0aWFsU2NhbGU7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZS5kYXRhc2V0LnRyYW5zbGF0ZVggPSB0YXJnZXRPZmZzZXRYO1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2UuZGF0YXNldC50cmFuc2xhdGVZID0gdGFyZ2V0T2Zmc2V0WTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzaGNoYW5nZUhhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzaGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgdGhpcy5oYXNoID09PSB0aGlzLmluaXRpYWxMb2NhdGlvbkhhc2gpIHtcbiAgICAgICAgdGhpcy5oYXNoUmVzZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAvLyByZXNpemUvcmVzcG9uc2l2ZVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZS4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vdGhpcy5hZGp1c3RJbWFnZS5iaW5kKHRoaXMpXG4gICAgICAgIGlmIChfdGhpczYuaXNPcGVuKSB7XG4gICAgICAgICAgX3RoaXM2LmFkanVzdEltYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHRoaXMuZG9tTm9kZXMuY2xvc2VCdXR0b24sIFsnY2xpY2suJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICd0b3VjaHN0YXJ0LicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlXSwgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaXN0b3J5KSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzNi5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UuJyArIF90aGlzNi5ldmVudE5hbWVzcGFjZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXM2LmlzT3Blbikge1xuICAgICAgICAgICAgICBfdGhpczYuaGFzaGNoYW5nZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb21Ob2Rlcy5uYXZpZ2F0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKSwgJ2NsaWNrLicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5jdXJyZW50VGFyZ2V0LnRhZ05hbWUubWF0Y2goL2J1dHRvbi9pKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5zd2lwZURpZmYgPSAwO1xuXG4gICAgICAgIF90aGlzNi5sb2FkSW1hZ2UoZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsLW5leHQnKSA/IDEgOiAtMSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvbU5vZGVzLmltYWdlLCBbJ3RvdWNoc3RhcnQuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICdtb3VzZWRvd24uJyArIHRoaXMuZXZlbnROYW1lc3BhY2VdLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgJiYgZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQb2ludGVyT2Zmc2V0WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJIZWlnaHQgPSBfdGhpczYuZ2V0RGltZW5zaW9ucyhfdGhpczYuZG9tTm9kZXMuaW1hZ2UpLmhlaWdodDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lcldpZHRoID0gX3RoaXM2LmdldERpbWVuc2lvbnMoX3RoaXM2LmRvbU5vZGVzLmltYWdlKS53aWR0aDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmltZ0hlaWdodCA9IF90aGlzNi5nZXREaW1lbnNpb25zKF90aGlzNi5jdXJyZW50SW1hZ2UpLmhlaWdodDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmltZ1dpZHRoID0gX3RoaXM2LmdldERpbWVuc2lvbnMoX3RoaXM2LmN1cnJlbnRJbWFnZSkud2lkdGg7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJPZmZzZXRYID0gX3RoaXM2LmRvbU5vZGVzLmltYWdlLm9mZnNldExlZnQ7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJPZmZzZXRZID0gX3RoaXM2LmRvbU5vZGVzLmltYWdlLm9mZnNldFRvcDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxPZmZzZXRYID0gcGFyc2VGbG9hdChfdGhpczYuY3VycmVudEltYWdlLmRhdGFzZXQudHJhbnNsYXRlWCk7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsT2Zmc2V0WSA9IHBhcnNlRmxvYXQoX3RoaXM2LmN1cnJlbnRJbWFnZS5kYXRhc2V0LnRyYW5zbGF0ZVkpO1xuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuY2FwdHVyZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50b3VjaENvdW50ID0gZXZlbnQudG91Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJIZWlnaHQgPSBfdGhpczYuZ2V0RGltZW5zaW9ucyhfdGhpczYuZG9tTm9kZXMuaW1hZ2UpLmhlaWdodDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lcldpZHRoID0gX3RoaXM2LmdldERpbWVuc2lvbnMoX3RoaXM2LmRvbU5vZGVzLmltYWdlKS53aWR0aDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmltZ0hlaWdodCA9IF90aGlzNi5nZXREaW1lbnNpb25zKF90aGlzNi5jdXJyZW50SW1hZ2UpLmhlaWdodDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmltZ1dpZHRoID0gX3RoaXM2LmdldERpbWVuc2lvbnMoX3RoaXM2LmN1cnJlbnRJbWFnZSkud2lkdGg7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJPZmZzZXRYID0gX3RoaXM2LmRvbU5vZGVzLmltYWdlLm9mZnNldExlZnQ7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJPZmZzZXRZID0gX3RoaXM2LmRvbU5vZGVzLmltYWdlLm9mZnNldFRvcDtcblxuICAgICAgICAgIGlmIChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRvdWNoQ291bnQgPT09IDEpXG4gICAgICAgICAgICAvKiBTaW5nbGUgdG91Y2ggKi9cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWYgKCFfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmRvdWJsZVRhcHBlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuZG91YmxlVGFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuZG91YmxlVGFwcGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpczYuY3VycmVudEltYWdlLmNsYXNzTGlzdC5hZGQoJ3NsLXRyYW5zaXRpb24nKTtcblxuICAgICAgICAgICAgICAgIGlmICghX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy56b29tZWQpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFNjYWxlID0gX3RoaXM2Lm9wdGlvbnMuZG91YmxlVGFwWm9vbTtcblxuICAgICAgICAgICAgICAgICAgX3RoaXM2LnNldFpvb21EYXRhKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFNjYWxlLCAwLCAwKTtcblxuICAgICAgICAgICAgICAgICAgX3RoaXM2Lnpvb21QYW5FbGVtZW50KDAgKyBcInB4XCIsIDAgKyBcInB4XCIsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFNjYWxlKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpczYuZG9tTm9kZXMuY2FwdGlvbi5zdHlsZS5vcGFjaXR5ICYmIF90aGlzNi5kb21Ob2Rlcy5jYXB0aW9uLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczYuZmFkZU91dChfdGhpczYuZG9tTm9kZXMuY2FwdGlvbiwgX3RoaXM2Lm9wdGlvbnMuZmFkZVNwZWVkKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy56b29tZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxTY2FsZSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgIF90aGlzNi5zZXRab29tRGF0YShfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxTY2FsZSwgMCwgMCk7XG5cbiAgICAgICAgICAgICAgICAgIF90aGlzNi56b29tUGFuRWxlbWVudCgwICsgXCJweFwiLCAwICsgXCJweFwiLCBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxTY2FsZSk7XG5cbiAgICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuem9vbWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoX3RoaXM2LmN1cnJlbnRJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczYuY3VycmVudEltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3NsLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbE9mZnNldFggPSBwYXJzZUZsb2F0KF90aGlzNi5jdXJyZW50SW1hZ2UuZGF0YXNldC50cmFuc2xhdGVYKTtcbiAgICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsT2Zmc2V0WSA9IHBhcnNlRmxvYXQoX3RoaXM2LmN1cnJlbnRJbWFnZS5kYXRhc2V0LnRyYW5zbGF0ZVkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRvdWNoQ291bnQgPT09IDIpXG4gICAgICAgICAgICAvKiBQaW5jaCAqL1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQb2ludGVyT2Zmc2V0WDIgPSBldmVudC50b3VjaGVzWzFdLmNsaWVudFg7XG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRZMiA9IGV2ZW50LnRvdWNoZXNbMV0uY2xpZW50WTtcbiAgICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsT2Zmc2V0WCA9IHBhcnNlRmxvYXQoX3RoaXM2LmN1cnJlbnRJbWFnZS5kYXRhc2V0LnRyYW5zbGF0ZVgpO1xuICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxPZmZzZXRZID0gcGFyc2VGbG9hdChfdGhpczYuY3VycmVudEltYWdlLmRhdGFzZXQudHJhbnNsYXRlWSk7XG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucGluY2hPZmZzZXRYID0gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRYICsgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFgyKSAvIDI7XG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucGluY2hPZmZzZXRZID0gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRZICsgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFkyKSAvIDI7XG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBpbmNoRGlzdGFuY2UgPSBNYXRoLnNxcnQoKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRYIC0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFgyKSAqIChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQb2ludGVyT2Zmc2V0WCAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRYMikgKyAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFkgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQb2ludGVyT2Zmc2V0WTIpICogKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRZIC0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFkyKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNhcHR1cmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubW91c2Vkb3duKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBpZiAoX3RoaXM2LnRyYW5zaXRpb25DYXBhYmxlKSB7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbWFnZUxlZnQgPSBwYXJzZUludChfdGhpczYuZG9tTm9kZXMuaW1hZ2Uuc3R5bGUubGVmdCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlRGlmZiA9IDA7XG4gICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuc3dpcGVZRGlmZiA9IDA7XG4gICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuc3dpcGVTdGFydCA9IGV2ZW50LnBhZ2VYIHx8IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuc3dpcGVZU3RhcnQgPSBldmVudC5wYWdlWSB8fCBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvbU5vZGVzLmltYWdlLCBbJ3RvdWNobW92ZS4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSwgJ21vdXNlbW92ZS4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSwgJ01TUG9pbnRlck1vdmUnXSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5tb3VzZWRvd24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XG4gICAgICAgICAgaWYgKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuY2FwdHVyZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnBvaW50ZXJPZmZzZXRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucG9pbnRlck9mZnNldFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50b3VjaENvdW50ID0gZXZlbnQudG91Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50b3VjaG1vdmVDb3VudCsrO1xuXG4gICAgICAgICAgaWYgKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudG91Y2hDb3VudCA+IDEpXG4gICAgICAgICAgICAvKiBQaW5jaCAqL1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnBvaW50ZXJPZmZzZXRYMiA9IGV2ZW50LnRvdWNoZXNbMV0uY2xpZW50WDtcbiAgICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5wb2ludGVyT2Zmc2V0WTIgPSBldmVudC50b3VjaGVzWzFdLmNsaWVudFk7XG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0UGluY2hEaXN0YW5jZSA9IE1hdGguc3FydCgoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5wb2ludGVyT2Zmc2V0WCAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucG9pbnRlck9mZnNldFgyKSAqIChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnBvaW50ZXJPZmZzZXRYIC0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5wb2ludGVyT2Zmc2V0WDIpICsgKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucG9pbnRlck9mZnNldFkgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnBvaW50ZXJPZmZzZXRZMikgKiAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5wb2ludGVyT2Zmc2V0WSAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucG9pbnRlck9mZnNldFkyKSk7XG5cbiAgICAgICAgICAgICAgaWYgKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBpbmNoRGlzdGFuY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQaW5jaERpc3RhbmNlID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRQaW5jaERpc3RhbmNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBpbmNoRGlzdGFuY2UgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFBpbmNoRGlzdGFuY2UpID49IDEpIHtcbiAgICAgICAgICAgICAgICAvKiBJbml0aWFsaXplIGhlbHBlcnMgKi9cbiAgICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFNjYWxlID0gX3RoaXM2Lm1pbk1heChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFBpbmNoRGlzdGFuY2UgLyBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQaW5jaERpc3RhbmNlICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsU2NhbGUsIDEsIF90aGlzNi5vcHRpb25zLm1heFpvb20pO1xuICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRYID0gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW1nV2lkdGggKiBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFNjYWxlIC0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJXaWR0aCkgLyAyO1xuICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRZID0gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW1nSGVpZ2h0ICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuY29udGFpbmVySGVpZ2h0KSAvIDI7XG4gICAgICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5zY2FsZURpZmZlcmVuY2UgPSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFNjYWxlIC0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsU2NhbGU7XG4gICAgICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRYID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbWdXaWR0aCAqIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0U2NhbGUgPD0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJXaWR0aCA/IDAgOiBfdGhpczYubWluTWF4KF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbE9mZnNldFggLSAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5waW5jaE9mZnNldFggLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lck9mZnNldFggLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lcldpZHRoIC8gMiAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbE9mZnNldFgpIC8gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0U2NhbGUgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnNjYWxlRGlmZmVyZW5jZSkgKiBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnNjYWxlRGlmZmVyZW5jZSwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5saW1pdE9mZnNldFggKiAtMSwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5saW1pdE9mZnNldFgpO1xuICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WSA9IF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW1nSGVpZ2h0ICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSA8PSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lckhlaWdodCA/IDAgOiBfdGhpczYubWluTWF4KF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbE9mZnNldFkgLSAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5waW5jaE9mZnNldFkgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lck9mZnNldFkgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lckhlaWdodCAvIDIgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxPZmZzZXRZKSAvIChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFNjYWxlIC0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5zY2FsZURpZmZlcmVuY2UpICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5zY2FsZURpZmZlcmVuY2UsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRZICogLTEsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRZKTtcblxuICAgICAgICAgICAgICAgIF90aGlzNi56b29tUGFuRWxlbWVudChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldE9mZnNldFggKyBcInB4XCIsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WSArIFwicHhcIiwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuem9vbWVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpczYuZG9tTm9kZXMuY2FwdGlvbi5zdHlsZS5vcGFjaXR5ICYmIF90aGlzNi5kb21Ob2Rlcy5jYXB0aW9uLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczYuZmFkZU91dChfdGhpczYuZG9tTm9kZXMuY2FwdGlvbiwgX3RoaXM2Lm9wdGlvbnMuZmFkZVNwZWVkKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQaW5jaERpc3RhbmNlID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRQaW5jaERpc3RhbmNlO1xuICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFNjYWxlID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZTtcbiAgICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxPZmZzZXRYID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRYO1xuICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbE9mZnNldFkgPSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldE9mZnNldFk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFNjYWxlID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsU2NhbGU7XG4gICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmxpbWl0T2Zmc2V0WCA9IChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmltZ1dpZHRoICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuY29udGFpbmVyV2lkdGgpIC8gMjtcbiAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRZID0gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW1nSGVpZ2h0ICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuY29udGFpbmVySGVpZ2h0KSAvIDI7XG4gICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldE9mZnNldFggPSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmltZ1dpZHRoICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSA8PSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lcldpZHRoID8gMCA6IF90aGlzNi5taW5NYXgoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5wb2ludGVyT2Zmc2V0WCAtIChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQb2ludGVyT2Zmc2V0WCAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbE9mZnNldFgpLCBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmxpbWl0T2Zmc2V0WCAqIC0xLCBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmxpbWl0T2Zmc2V0WCk7XG4gICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldE9mZnNldFkgPSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmltZ0hlaWdodCAqIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0U2NhbGUgPD0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJIZWlnaHQgPyAwIDogX3RoaXM2Lm1pbk1heChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnBvaW50ZXJPZmZzZXRZIC0gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRZIC0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsT2Zmc2V0WSksIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRZICogLTEsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRZKTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WCkgPT09IE1hdGguYWJzKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRYKSkge1xuICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxPZmZzZXRYID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRYO1xuICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQb2ludGVyT2Zmc2V0WCA9IF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucG9pbnRlck9mZnNldFg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldE9mZnNldFkpID09PSBNYXRoLmFicyhfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmxpbWl0T2Zmc2V0WSkpIHtcbiAgICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsT2Zmc2V0WSA9IF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WTtcbiAgICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFkgPSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnBvaW50ZXJPZmZzZXRZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpczYuc2V0Wm9vbURhdGEoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsU2NhbGUsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WCwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRZKTtcblxuICAgICAgICAgICAgX3RoaXM2Lnpvb21QYW5FbGVtZW50KF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WCArIFwicHhcIiwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRZICsgXCJweFwiLCBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFNjYWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogTW91c2UgTW92ZSBpbXBsZW1lbnRhdGlvbiAqL1xuXG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnICYmIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubW91c2Vkb3duKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ3RvdWNobW92ZScpIHJldHVybiB0cnVlO1xuICAgICAgICAgIGlmIChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNhcHR1cmUgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5wb2ludGVyT2Zmc2V0WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5wb2ludGVyT2Zmc2V0WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSA9IF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFNjYWxlO1xuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRYID0gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW1nV2lkdGggKiBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFNjYWxlIC0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJXaWR0aCkgLyAyO1xuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRZID0gKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW1nSGVpZ2h0ICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSAtIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuY29udGFpbmVySGVpZ2h0KSAvIDI7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRYID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbWdXaWR0aCAqIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0U2NhbGUgPD0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJXaWR0aCA/IDAgOiBfdGhpczYubWluTWF4KF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucG9pbnRlck9mZnNldFggLSAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFggLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxPZmZzZXRYKSwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5saW1pdE9mZnNldFggKiAtMSwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5saW1pdE9mZnNldFgpO1xuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WSA9IF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW1nSGVpZ2h0ICogX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRTY2FsZSA8PSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lckhlaWdodCA/IDAgOiBfdGhpczYubWluTWF4KF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMucG9pbnRlck9mZnNldFkgLSAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFkgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxPZmZzZXRZKSwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5saW1pdE9mZnNldFkgKiAtMSwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5saW1pdE9mZnNldFkpO1xuXG4gICAgICAgICAgaWYgKE1hdGguYWJzKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WCkgPT09IE1hdGguYWJzKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubGltaXRPZmZzZXRYKSkge1xuICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsT2Zmc2V0WCA9IF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WDtcbiAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRYID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5wb2ludGVyT2Zmc2V0WDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoTWF0aC5hYnMoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRZKSA9PT0gTWF0aC5hYnMoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5saW1pdE9mZnNldFkpKSB7XG4gICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxPZmZzZXRZID0gX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRZO1xuICAgICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsUG9pbnRlck9mZnNldFkgPSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnBvaW50ZXJPZmZzZXRZO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzNi5zZXRab29tRGF0YShfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxTY2FsZSwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRYLCBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldE9mZnNldFkpO1xuXG4gICAgICAgICAgX3RoaXM2Lnpvb21QYW5FbGVtZW50KF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WCArIFwicHhcIiwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRZICsgXCJweFwiLCBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnRhcmdldFNjYWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy56b29tZWQpIHtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlRW5kID0gZXZlbnQucGFnZVggfHwgZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlWUVuZCA9IGV2ZW50LnBhZ2VZIHx8IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5zd2lwZURpZmYgPSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlU3RhcnQgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlRW5kO1xuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuc3dpcGVZRGlmZiA9IF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuc3dpcGVZU3RhcnQgLSBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlWUVuZDtcblxuICAgICAgICAgIGlmIChfdGhpczYub3B0aW9ucy5hbmltYXRpb25TbGlkZSkge1xuICAgICAgICAgICAgX3RoaXM2LnNsaWRlKDAsIC1fdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlRGlmZiArICdweCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb21Ob2Rlcy5pbWFnZSwgWyd0b3VjaGVuZC4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSwgJ21vdXNldXAuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICd0b3VjaGNhbmNlbC4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSwgJ21vdXNlbGVhdmUuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICdwb2ludGVydXAnLCAncG9pbnRlcmNhbmNlbCcsICdNU1BvaW50ZXJVcCcsICdNU1BvaW50ZXJDYW5jZWwnXSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpczYuaXNUb3VjaERldmljZSAmJiBldmVudC50eXBlID09PSAndG91Y2hlbmQnKSB7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50b3VjaENvdW50ID0gZXZlbnQudG91Y2hlcy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50b3VjaENvdW50ID09PSAwKVxuICAgICAgICAgICAgLyogTm8gdG91Y2ggKi9cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLyogU2V0IGF0dHJpYnV0ZXMgKi9cbiAgICAgICAgICAgICAgaWYgKF90aGlzNi5jdXJyZW50SW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpczYuc2V0Wm9vbURhdGEoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsU2NhbGUsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMudGFyZ2V0T2Zmc2V0WCwgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50YXJnZXRPZmZzZXRZKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxTY2FsZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuem9vbWVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoX3RoaXM2LmRvbU5vZGVzLmNhcHRpb24uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczYuZmFkZUluKF90aGlzNi5kb21Ob2Rlcy5jYXB0aW9uLCBfdGhpczYub3B0aW9ucy5mYWRlU3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBpbmNoRGlzdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNhcHR1cmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50b3VjaENvdW50ID09PSAxKVxuICAgICAgICAgICAgLyogU2luZ2xlIHRvdWNoICovXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQb2ludGVyT2Zmc2V0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy50b3VjaENvdW50ID4gMSlcbiAgICAgICAgICAgIC8qIFBpbmNoICovXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBpbmNoRGlzdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMubW91c2Vkb3duKSB7XG4gICAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5tb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICAgICB2YXIgcG9zc2libGVEaXIgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKCFfdGhpczYub3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXM2LmN1cnJlbnRJbWFnZUluZGV4ID09PSAwICYmIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuc3dpcGVEaWZmIDwgMCkge1xuICAgICAgICAgICAgICBwb3NzaWJsZURpciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3RoaXM2LmN1cnJlbnRJbWFnZUluZGV4ID49IF90aGlzNi5yZWxhdGVkRWxlbWVudHMubGVuZ3RoIC0gMSAmJiBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLnN3aXBlRGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgcG9zc2libGVEaXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoTWF0aC5hYnMoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5zd2lwZURpZmYpID4gX3RoaXM2Lm9wdGlvbnMuc3dpcGVUb2xlcmFuY2UgJiYgcG9zc2libGVEaXIpIHtcbiAgICAgICAgICAgIF90aGlzNi5sb2FkSW1hZ2UoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5zd2lwZURpZmYgPiAwID8gMSA6IC0xKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzNi5vcHRpb25zLmFuaW1hdGlvblNsaWRlKSB7XG4gICAgICAgICAgICBfdGhpczYuc2xpZGUoX3RoaXM2Lm9wdGlvbnMuYW5pbWF0aW9uU3BlZWQgLyAxMDAwLCAwICsgJ3B4Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzNi5vcHRpb25zLnN3aXBlQ2xvc2UgJiYgTWF0aC5hYnMoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5zd2lwZVlEaWZmKSA+IDUwICYmIE1hdGguYWJzKF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuc3dpcGVEaWZmKSA8IF90aGlzNi5vcHRpb25zLnN3aXBlVG9sZXJhbmNlKSB7XG4gICAgICAgICAgICBfdGhpczYuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHRoaXMuZG9tTm9kZXMuaW1hZ2UsIFsnZGJsY2xpY2snXSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpczYuaXNUb3VjaERldmljZSkgcmV0dXJuO1xuICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxQb2ludGVyT2Zmc2V0WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFBvaW50ZXJPZmZzZXRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJIZWlnaHQgPSBfdGhpczYuZ2V0RGltZW5zaW9ucyhfdGhpczYuZG9tTm9kZXMuaW1hZ2UpLmhlaWdodDtcbiAgICAgICAgX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5jb250YWluZXJXaWR0aCA9IF90aGlzNi5nZXREaW1lbnNpb25zKF90aGlzNi5kb21Ob2Rlcy5pbWFnZSkud2lkdGg7XG4gICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW1nSGVpZ2h0ID0gX3RoaXM2LmdldERpbWVuc2lvbnMoX3RoaXM2LmN1cnJlbnRJbWFnZSkuaGVpZ2h0O1xuICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmltZ1dpZHRoID0gX3RoaXM2LmdldERpbWVuc2lvbnMoX3RoaXM2LmN1cnJlbnRJbWFnZSkud2lkdGg7XG4gICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuY29udGFpbmVyT2Zmc2V0WCA9IF90aGlzNi5kb21Ob2Rlcy5pbWFnZS5vZmZzZXRMZWZ0O1xuICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmNvbnRhaW5lck9mZnNldFkgPSBfdGhpczYuZG9tTm9kZXMuaW1hZ2Uub2Zmc2V0VG9wO1xuXG4gICAgICAgIF90aGlzNi5jdXJyZW50SW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2wtdHJhbnNpdGlvbicpO1xuXG4gICAgICAgIGlmICghX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy56b29tZWQpIHtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxTY2FsZSA9IF90aGlzNi5vcHRpb25zLmRvdWJsZVRhcFpvb207XG5cbiAgICAgICAgICBfdGhpczYuc2V0Wm9vbURhdGEoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsU2NhbGUsIDAsIDApO1xuXG4gICAgICAgICAgX3RoaXM2Lnpvb21QYW5FbGVtZW50KDAgKyBcInB4XCIsIDAgKyBcInB4XCIsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFNjYWxlKTtcblxuICAgICAgICAgIGlmICghX3RoaXM2LmRvbU5vZGVzLmNhcHRpb24uc3R5bGUub3BhY2l0eSAmJiBfdGhpczYuZG9tTm9kZXMuY2FwdGlvbi5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIF90aGlzNi5mYWRlT3V0KF90aGlzNi5kb21Ob2Rlcy5jYXB0aW9uLCBfdGhpczYub3B0aW9ucy5mYWRlU3BlZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuem9vbWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczYuY29udHJvbENvb3JkaW5hdGVzLmluaXRpYWxTY2FsZSA9IDE7XG5cbiAgICAgICAgICBfdGhpczYuc2V0Wm9vbURhdGEoX3RoaXM2LmNvbnRyb2xDb29yZGluYXRlcy5pbml0aWFsU2NhbGUsIDAsIDApO1xuXG4gICAgICAgICAgX3RoaXM2Lnpvb21QYW5FbGVtZW50KDAgKyBcInB4XCIsIDAgKyBcInB4XCIsIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuaW5pdGlhbFNjYWxlKTtcblxuICAgICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuem9vbWVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoX3RoaXM2LmRvbU5vZGVzLmNhcHRpb24uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBfdGhpczYuZmFkZUluKF90aGlzNi5kb21Ob2Rlcy5jYXB0aW9uLCBfdGhpczYub3B0aW9ucy5mYWRlU3BlZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpczYuY3VycmVudEltYWdlKSB7XG4gICAgICAgICAgICBfdGhpczYuY3VycmVudEltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3NsLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgIF90aGlzNi5jb250cm9sQ29vcmRpbmF0ZXMuY2FwdHVyZSA9IHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXREaW1lbnNpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWxlbWVudCkge1xuICAgICAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckJvdHRvbVdpZHRoKSxcbiAgICAgICAgICBwYWRkaW5nVG9wID0gcGFyc2VGbG9hdChzdHlsZXMucGFkZGluZ1RvcCksXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGVzLnBhZGRpbmdCb3R0b20pLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCksXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclJpZ2h0V2lkdGgpLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMucGFkZGluZ0xlZnQpLFxuICAgICAgICAgIHBhZGRpbmdSaWdodCA9IHBhcnNlRmxvYXQoc3R5bGVzLnBhZGRpbmdSaWdodCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IGhlaWdodCAtIGJvcmRlckJvdHRvbVdpZHRoIC0gYm9yZGVyVG9wV2lkdGggLSBwYWRkaW5nVG9wIC0gcGFkZGluZ0JvdHRvbSxcbiAgICAgICAgd2lkdGg6IHdpZHRoIC0gYm9yZGVyTGVmdFdpZHRoIC0gYm9yZGVyUmlnaHRXaWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVIYXNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUhhc2goKSB7XG4gICAgICB2YXIgbmV3SGFzaCA9ICdwaWQ9JyArICh0aGlzLmN1cnJlbnRJbWFnZUluZGV4ICsgMSksXG4gICAgICAgICAgbmV3VVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXSArICcjJyArIG5ld0hhc2g7XG4gICAgICB0aGlzLmhhc2hSZXNldGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLnB1c2hTdGF0ZVN1cHBvcnQpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnlbdGhpcy5oaXN0b3J5SGFzQ2hhbmdlcyA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSddKCcnLCBkb2N1bWVudC50aXRsZSwgbmV3VVJMKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoYXQgaXMgdGhlIGJyb3dzZXIgdGFyZ2V0IG9mIHRoaXM/XG4gICAgICAgIGlmICh0aGlzLmhpc3RvcnlIYXNDaGFuZ2VzKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UobmV3VVJMKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IG5ld0hhc2g7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhpc3RvcnlIYXNDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMudXJsQ2hhbmdlZE9uY2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmhpc3RvcnlIYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRIYXNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0SGFzaCgpIHtcbiAgICAgIHRoaXMuaGFzaFJlc2V0ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy51cmxDaGFuZ2VkT25jZSkge1xuICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnB1c2hTdGF0ZVN1cHBvcnQpIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gLy9cbiAgICAgIC8vaW4gY2FzZSBhbiBoaXN0b3J5IG9wZXJhdGlvbiBpcyBzdGlsbCBwZW5kaW5nXG5cblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlzdG9yeVVwZGF0ZVRpbWVvdXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVVUkxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVVJMKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlzdG9yeVVwZGF0ZVRpbWVvdXQpO1xuXG4gICAgICBpZiAoIXRoaXMuaGlzdG9yeUhhc0NoYW5nZXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVIYXNoKCk7IC8vIGZpcnN0IHRpbWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeVVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMudXBkYXRlSGFzaC5iaW5kKHRoaXMpLCA4MDApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRDYXB0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENhcHRpb24oY2FwdGlvblRleHQsIGltYWdlV2lkdGgpIHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNhcHRpb25zICYmIGNhcHRpb25UZXh0ICYmIGNhcHRpb25UZXh0ICE9PSAnJyAmJiB0eXBlb2YgY2FwdGlvblRleHQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdGhpcy5oaWRlKHRoaXMuZG9tTm9kZXMuY2FwdGlvbik7XG4gICAgICAgIHRoaXMuZG9tTm9kZXMuY2FwdGlvbi5zdHlsZS53aWR0aCA9IGltYWdlV2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmRvbU5vZGVzLmNhcHRpb24uaW5uZXJIVE1MID0gY2FwdGlvblRleHQ7XG4gICAgICAgIHRoaXMuZG9tTm9kZXMuaW1hZ2UuYXBwZW5kQ2hpbGQodGhpcy5kb21Ob2Rlcy5jYXB0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM3LmZhZGVJbihfdGhpczcuZG9tTm9kZXMuY2FwdGlvbiwgX3RoaXM3Lm9wdGlvbnMuZmFkZVNwZWVkKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmNhcHRpb25EZWxheSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNsaWRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNsaWRlKHNwZWVkLCBwb3MpIHtcbiAgICAgIGlmICghdGhpcy50cmFuc2l0aW9uQ2FwYWJsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb21Ob2Rlcy5pbWFnZS5zdHlsZS5sZWZ0ID0gcG9zO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRvbU5vZGVzLmltYWdlLnN0eWxlW3RoaXMudHJhbnNpdGlvblByZWZpeCArICd0cmFuc2Zvcm0nXSA9ICd0cmFuc2xhdGVYKCcgKyBwb3MgKyAnKSc7XG4gICAgICB0aGlzLmRvbU5vZGVzLmltYWdlLnN0eWxlW3RoaXMudHJhbnNpdGlvblByZWZpeCArICd0cmFuc2l0aW9uJ10gPSB0aGlzLnRyYW5zaXRpb25QcmVmaXggKyAndHJhbnNmb3JtICcgKyBzcGVlZCArICdzIGxpbmVhcic7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFJlbGF0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVsYXRlZChyZWwpIHtcbiAgICAgIHZhciBlbGVtcztcblxuICAgICAgaWYgKHJlbCAmJiByZWwgIT09IGZhbHNlICYmIHJlbCAhPT0gJ25vZm9sbG93Jykge1xuICAgICAgICBlbGVtcyA9IEFycmF5LmZyb20odGhpcy5lbGVtZW50cykuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gcmVsO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1zID0gdGhpcy5lbGVtZW50cztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1zO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvcGVuSW1hZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbkltYWdlKGVsZW1lbnQpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzaG93LicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlKSk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZVNjcm9sbCkge1xuICAgICAgICB0aGlzLmdsb2JhbFNjcm9sbGJhcldpZHRoID0gdGhpcy50b2dnbGVTY3JvbGxiYXIoJ2hpZGUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5odG1sQ2xhc3MgJiYgdGhpcy5vcHRpb25zLmh0bWxDbGFzcyAhPT0gJycpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmh0bWxDbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21Ob2Rlcy53cmFwcGVyKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmRvbU5vZGVzLmltYWdlKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21Ob2Rlcy5vdmVybGF5KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWxhdGVkRWxlbWVudHMgPSB0aGlzLmdldFJlbGF0ZWQoZWxlbWVudC5yZWwpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dDb3VudGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRFbGVtZW50cy5sZW5ndGggPT0gMSAmJiB0aGlzLmRvbU5vZGVzLndyYXBwZXIuY29udGFpbnModGhpcy5kb21Ob2Rlcy5jb3VudGVyKSkge1xuICAgICAgICAgIHRoaXMuZG9tTm9kZXMud3JhcHBlci5yZW1vdmVDaGlsZCh0aGlzLmRvbU5vZGVzLmNvdW50ZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVsYXRlZEVsZW1lbnRzLmxlbmd0aCA+IDEgJiYgIXRoaXMuZG9tTm9kZXMud3JhcHBlci5jb250YWlucyh0aGlzLmRvbU5vZGVzLmNvdW50ZXIpKSB7XG4gICAgICAgICAgdGhpcy5kb21Ob2Rlcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZG9tTm9kZXMuY291bnRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gdGhpcy5yZWxhdGVkRWxlbWVudHMuaW5kZXhPZihlbGVtZW50KTtcbiAgICAgIHZhciB0YXJnZXRVUkwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuc291cmNlQXR0cik7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuY3VycmVudEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgdGFyZ2V0VVJMKTtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlLmRhdGFzZXQuc2NhbGUgPSAxO1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2UuZGF0YXNldC50cmFuc2xhdGVYID0gMDtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlLmRhdGFzZXQudHJhbnNsYXRlWSA9IDA7XG5cbiAgICAgIGlmICh0aGlzLmxvYWRlZEltYWdlcy5pbmRleE9mKHRhcmdldFVSTCkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMubG9hZGVkSW1hZ2VzLnB1c2godGFyZ2V0VVJMKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kb21Ob2Rlcy5pbWFnZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuZG9tTm9kZXMuaW1hZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICcnKTtcbiAgICAgIHRoaXMuZG9tTm9kZXMuaW1hZ2UuYXBwZW5kQ2hpbGQodGhpcy5jdXJyZW50SW1hZ2UpO1xuICAgICAgdGhpcy5mYWRlSW4odGhpcy5kb21Ob2Rlcy5vdmVybGF5LCB0aGlzLm9wdGlvbnMuZmFkZVNwZWVkKTtcbiAgICAgIHRoaXMuZmFkZUluKFt0aGlzLmRvbU5vZGVzLmNvdW50ZXIsIHRoaXMuZG9tTm9kZXMubmF2aWdhdGlvbiwgdGhpcy5kb21Ob2Rlcy5jbG9zZUJ1dHRvbl0sIHRoaXMub3B0aW9ucy5mYWRlU3BlZWQpO1xuICAgICAgdGhpcy5zaG93KHRoaXMuZG9tTm9kZXMuc3Bpbm5lcik7XG4gICAgICB0aGlzLmRvbU5vZGVzLmNvdW50ZXIucXVlcnlTZWxlY3RvcignLnNsLWN1cnJlbnQnKS5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ICsgMTtcbiAgICAgIHRoaXMuZG9tTm9kZXMuY291bnRlci5xdWVyeVNlbGVjdG9yKCcuc2wtdG90YWwnKS5pbm5lckhUTUwgPSB0aGlzLnJlbGF0ZWRFbGVtZW50cy5sZW5ndGg7XG4gICAgICB0aGlzLmFkanVzdEltYWdlKCk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJlbG9hZGluZykge1xuICAgICAgICB0aGlzLnByZWxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Nob3duLicgKyBfdGhpczguZXZlbnROYW1lc3BhY2UpKTtcbiAgICAgIH0sIHRoaXMub3B0aW9ucy5hbmltYXRpb25TcGVlZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcmNlRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yY2VGb2N1cygpIHtcbiAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdmb2N1c2luLicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ2ZvY3VzaW4uJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiBfdGhpczkuZG9tTm9kZXMud3JhcHBlciAhPT0gZXZlbnQudGFyZ2V0ICYmICFfdGhpczkuZG9tTm9kZXMud3JhcHBlci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXM5LmRvbU5vZGVzLndyYXBwZXIuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyB1dGlsaXR5XG5cbiAgfSwge1xuICAgIGtleTogXCJhZGRFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudHMsIGV2ZW50cywgY2FsbGJhY2ssIG9wdHMpIHtcbiAgICAgIGVsZW1lbnRzID0gdGhpcy53cmFwKGVsZW1lbnRzKTtcbiAgICAgIGV2ZW50cyA9IHRoaXMud3JhcChldmVudHMpO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWxlbWVudHMpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBpZiAoIWVsZW1lbnQubmFtZXNwYWNlcykge1xuICAgICAgICAgICAgZWxlbWVudC5uYW1lc3BhY2VzID0ge307XG4gICAgICAgICAgfSAvLyBzYXZlIHRoZSBuYW1lc3BhY2VzIGFkZEV2ZW50TGlzdGVuZXIgdGhlIERPTSBlbGVtZW50IGl0c2VsZlxuXG5cbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGV2ZW50cyksXG4gICAgICAgICAgICAgIF9zdGVwMjtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBfc3RlcDIudmFsdWU7XG4gICAgICAgICAgICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgZWxlbWVudC5uYW1lc3BhY2VzW2V2ZW50XSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQuc3BsaXQoJy4nKVswXSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjIuZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWxlbWVudHMsIGV2ZW50cykge1xuICAgICAgZWxlbWVudHMgPSB0aGlzLndyYXAoZWxlbWVudHMpO1xuICAgICAgZXZlbnRzID0gdGhpcy53cmFwKGV2ZW50cyk7XG5cbiAgICAgIHZhciBfaXRlcmF0b3IzID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWxlbWVudHMpLFxuICAgICAgICAgIF9zdGVwMztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IzLnMoKTsgIShfc3RlcDMgPSBfaXRlcmF0b3IzLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICAgIHZhciBfaXRlcmF0b3I0ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZXZlbnRzKSxcbiAgICAgICAgICAgICAgX3N0ZXA0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yNC5zKCk7ICEoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IF9zdGVwNC52YWx1ZTtcblxuICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VzICYmIGVsZW1lbnQubmFtZXNwYWNlc1tldmVudF0pIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQuc3BsaXQoJy4nKVswXSwgZWxlbWVudC5uYW1lc3BhY2VzW2V2ZW50XSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQubmFtZXNwYWNlc1tldmVudF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjQuZShlcnIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I0LmYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IzLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvcjMuZigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmYWRlT3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZhZGVPdXQoZWxlbWVudHMsIGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgICBlbGVtZW50cyA9IHRoaXMud3JhcChlbGVtZW50cyk7XG5cbiAgICAgIHZhciBfaXRlcmF0b3I1ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWxlbWVudHMpLFxuICAgICAgICAgIF9zdGVwNTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3I1LnMoKTsgIShfc3RlcDUgPSBfaXRlcmF0b3I1Lm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IF9zdGVwNS52YWx1ZTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yNS5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3I1LmYoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0ZhZGVJbiA9IGZhbHNlO1xuXG4gICAgICB2YXIgc3RlcCA9IDE2LjY2NjY2IC8gKGR1cmF0aW9uIHx8IHRoaXMub3B0aW9ucy5mYWRlU3BlZWQpLFxuICAgICAgICAgIGZhZGUgPSBmdW5jdGlvbiBmYWRlKCkge1xuICAgICAgICB2YXIgY3VycmVudE9wYWNpdHkgPSBwYXJzZUZsb2F0KGVsZW1lbnRzWzBdLnN0eWxlLm9wYWNpdHkpO1xuXG4gICAgICAgIGlmICgoY3VycmVudE9wYWNpdHkgLT0gc3RlcCkgPCAwKSB7XG4gICAgICAgICAgdmFyIF9pdGVyYXRvcjYgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlbGVtZW50cyksXG4gICAgICAgICAgICAgIF9zdGVwNjtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKF9pdGVyYXRvcjYucygpOyAhKF9zdGVwNiA9IF9pdGVyYXRvcjYubigpKS5kb25lOykge1xuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF9zdGVwNi52YWx1ZTtcbiAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yNi5lKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjYuZigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwoX3RoaXMxMCwgZWxlbWVudHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfaXRlcmF0b3I3ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWxlbWVudHMpLFxuICAgICAgICAgICAgICBfc3RlcDc7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChfaXRlcmF0b3I3LnMoKTsgIShfc3RlcDcgPSBfaXRlcmF0b3I3Lm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgICAgdmFyIF9lbGVtZW50ID0gX3N0ZXA3LnZhbHVlO1xuICAgICAgICAgICAgICBfZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3I3LmUoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgX2l0ZXJhdG9yNy5mKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmYWRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZhZGVJblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmYWRlSW4oZWxlbWVudHMsIGR1cmF0aW9uLCBjYWxsYmFjaywgZGlzcGxheSkge1xuICAgICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgICBlbGVtZW50cyA9IHRoaXMud3JhcChlbGVtZW50cyk7XG5cbiAgICAgIHZhciBfaXRlcmF0b3I4ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWxlbWVudHMpLFxuICAgICAgICAgIF9zdGVwODtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3I4LnMoKTsgIShfc3RlcDggPSBfaXRlcmF0b3I4Lm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IF9zdGVwOC52YWx1ZTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgfHwgXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yOC5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3I4LmYoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0ZhZGVJbiA9IHRydWU7XG5cbiAgICAgIHZhciBvcGFjaXR5VGFyZ2V0ID0gcGFyc2VGbG9hdChlbGVtZW50c1swXS5kYXRhc2V0Lm9wYWNpdHlUYXJnZXQgfHwgMSksXG4gICAgICAgICAgc3RlcCA9IDE2LjY2NjY2ICogb3BhY2l0eVRhcmdldCAvIChkdXJhdGlvbiB8fCB0aGlzLm9wdGlvbnMuZmFkZVNwZWVkKSxcbiAgICAgICAgICBmYWRlID0gZnVuY3Rpb24gZmFkZSgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRPcGFjaXR5ID0gcGFyc2VGbG9hdChlbGVtZW50c1swXS5zdHlsZS5vcGFjaXR5KTtcblxuICAgICAgICBpZiAoISgoY3VycmVudE9wYWNpdHkgKz0gc3RlcCkgPiBvcGFjaXR5VGFyZ2V0KSkge1xuICAgICAgICAgIHZhciBfaXRlcmF0b3I5ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWxlbWVudHMpLFxuICAgICAgICAgICAgICBfc3RlcDk7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChfaXRlcmF0b3I5LnMoKTsgIShfc3RlcDkgPSBfaXRlcmF0b3I5Lm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcDkudmFsdWU7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yOS5lKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjkuZigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXMxMS5pc0ZhZGVJbikgcmV0dXJuO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMTAgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlbGVtZW50cyksXG4gICAgICAgICAgICAgIF9zdGVwMTA7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChfaXRlcmF0b3IxMC5zKCk7ICEoX3N0ZXAxMCA9IF9pdGVyYXRvcjEwLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgICAgdmFyIF9lbGVtZW50MiA9IF9zdGVwMTAudmFsdWU7XG4gICAgICAgICAgICAgIF9lbGVtZW50Mi5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IxMC5lKGVycik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjEwLmYoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKF90aGlzMTEsIGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmFkZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoaWRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGUoZWxlbWVudHMpIHtcbiAgICAgIGVsZW1lbnRzID0gdGhpcy53cmFwKGVsZW1lbnRzKTtcblxuICAgICAgdmFyIF9pdGVyYXRvcjExID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZWxlbWVudHMpLFxuICAgICAgICAgIF9zdGVwMTE7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yMTEucygpOyAhKF9zdGVwMTEgPSBfaXRlcmF0b3IxMS5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcDExLnZhbHVlO1xuICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5pbml0aWFsRGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IxMS5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IxMS5mKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdyhlbGVtZW50cywgZGlzcGxheSkge1xuICAgICAgZWxlbWVudHMgPSB0aGlzLndyYXAoZWxlbWVudHMpO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yMTIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihlbGVtZW50cyksXG4gICAgICAgICAgX3N0ZXAxMjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IxMi5zKCk7ICEoX3N0ZXAxMiA9IF9pdGVyYXRvcjEyLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IF9zdGVwMTIudmFsdWU7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZWxlbWVudC5kYXRhc2V0LmluaXRpYWxEaXNwbGF5IHx8IGRpc3BsYXkgfHwgJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvcjEyLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvcjEyLmYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid3JhcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3cmFwKGlucHV0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGlucHV0W1N5bWJvbC5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyA/IGlucHV0IDogW2lucHV0XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnRzLCBjYWxsYmFjaykge1xuICAgICAgZXZlbnRzID0gdGhpcy53cmFwKGV2ZW50cyk7XG5cbiAgICAgIHZhciBfaXRlcmF0b3IxMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuZWxlbWVudHMpLFxuICAgICAgICAgIF9zdGVwMTM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yMTMucygpOyAhKF9zdGVwMTMgPSBfaXRlcmF0b3IxMy5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcDEzLnZhbHVlO1xuXG4gICAgICAgICAgaWYgKCFlbGVtZW50LmZ1bGx5TmFtZXNwYWNlZEV2ZW50cykge1xuICAgICAgICAgICAgZWxlbWVudC5mdWxseU5hbWVzcGFjZWRFdmVudHMgPSB7fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMTQgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihldmVudHMpLFxuICAgICAgICAgICAgICBfc3RlcDE0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yMTQucygpOyAhKF9zdGVwMTQgPSBfaXRlcmF0b3IxNC5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IF9zdGVwMTQudmFsdWU7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZnVsbHlOYW1lc3BhY2VkRXZlbnRzW2V2ZW50XSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjE0LmUoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMTQuZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvcjEzLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvcjEzLmYoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnRzKSB7XG4gICAgICBldmVudHMgPSB0aGlzLndyYXAoZXZlbnRzKTtcblxuICAgICAgdmFyIF9pdGVyYXRvcjE1ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5lbGVtZW50cyksXG4gICAgICAgICAgX3N0ZXAxNTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IxNS5zKCk7ICEoX3N0ZXAxNSA9IF9pdGVyYXRvcjE1Lm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IF9zdGVwMTUudmFsdWU7XG5cbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMTYgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihldmVudHMpLFxuICAgICAgICAgICAgICBfc3RlcDE2O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yMTYucygpOyAhKF9zdGVwMTYgPSBfaXRlcmF0b3IxNi5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IF9zdGVwMTYudmFsdWU7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmZ1bGx5TmFtZXNwYWNlZEV2ZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgZXZlbnQgaW4gZWxlbWVudC5mdWxseU5hbWVzcGFjZWRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGVsZW1lbnQuZnVsbHlOYW1lc3BhY2VkRXZlbnRzW2V2ZW50XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIF9pdGVyYXRvcjE2LmUoZXJyKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMTYuZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvcjE1LmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvcjE1LmYoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSAvLyBhcGlcblxuICB9LCB7XG4gICAga2V5OiBcIm9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihlbGVtKSB7XG4gICAgICBlbGVtID0gZWxlbSB8fCB0aGlzLmVsZW1lbnRzWzBdO1xuXG4gICAgICBpZiAodHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgIGVsZW0gPSBlbGVtLmdldCgwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0aWFsSW1hZ2VJbmRleCA9IHRoaXMuZWxlbWVudHMuaW5kZXhPZihlbGVtKTtcblxuICAgICAgaWYgKHRoaXMuaW5pdGlhbEltYWdlSW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLm9wZW5JbWFnZShlbGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibmV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoMSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByZXZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJldigpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKC0xKTtcbiAgICB9IC8vY2xvc2UgaXMgZXhwb3NlZCBhbnl3YXlzLi5cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIC8vcmVtb3ZlIGFsbCBjdXN0b20gZXZlbnQgbGlzdGVuZXJzIGZyb20gZWxlbWVudHNcbiAgICAgIHRoaXMub2ZmKFsnY2xvc2UuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICdjbG9zZWQuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICduZXh0SW1hZ2VMb2FkZWQuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICdwcmV2SW1hZ2VMb2FkZWQuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICdjaGFuZ2UuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICduZXh0RG9uZS4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSwgJ3ByZXZEb25lLicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlLCAnZXJyb3IuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICdjaGFuZ2VkLicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlLCAnbmV4dC4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSwgJ3ByZXYuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UsICdzaG93LicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlLCAnc2hvd24uJyArIHRoaXMuZXZlbnROYW1lc3BhY2VdKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmVsZW1lbnRzLCAnY2xpY2suJyArIHRoaXMuZXZlbnROYW1lc3BhY2UpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnZm9jdXNpbi4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSk7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQuYm9keSwgJ2NvbnRleHRtZW51LicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb2N1bWVudC5ib2R5LCAna2V5dXAuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZG9tTm9kZXMubmF2aWdhdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyksICdjbGljay4nICsgdGhpcy5ldmVudE5hbWVzcGFjZSk7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5kb21Ob2Rlcy5jbG9zZUJ1dHRvbiwgJ2NsaWNrLicgKyB0aGlzLmV2ZW50TmFtZXNwYWNlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UuJyArIHRoaXMuZXZlbnROYW1lc3BhY2UpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmRvbU5vZGVzLndyYXBwZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZG9tTm9kZXMub3ZlcmxheSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudHMgPSBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWZyZXNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93ICdyZWZyZXNoaW5nIG9ubHkgd29ya3Mgd2hlbiB5b3UgaW5pdGlhbGl6ZSB1c2luZyBhIHNlbGVjdG9yISc7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIHNlbGVjdG9yID0gdGhpcy5pbml0aWFsU2VsZWN0b3I7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc2hcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNpbXBsZUxpZ2h0Ym94O1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBTaW1wbGVMaWdodGJveDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5nbG9iYWwuU2ltcGxlTGlnaHRib3ggPSBTaW1wbGVMaWdodGJveDsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgbG96YWQgZnJvbSAnbG96YWQnO1xuaW1wb3J0IFNpbXBsZUxpZ2h0Ym94IGZyb20gJ3NpbXBsZWxpZ2h0Ym94JztcblxuXG5sZXQgZ2FsbGVyeSA9IG5ldyBTaW1wbGVMaWdodGJveCgnLmdhbGxlcnkgYScpO1xuZ2FsbGVyeS5vbignc2hvdy5zaW1wbGVsaWdodGJveCcsIGZ1bmN0aW9uIChlKSB7XG5cdGNvbnNvbGUubG9nKGUpOyAvLyBzb21lIHVzZWZ1bGwgaW5mb3JtYXRpb25cbn0pO1xuXG5nYWxsZXJ5Lm9uKCdlcnJvci5zaW1wbGVsaWdodGJveCcsIGZ1bmN0aW9uIChlKSB7XG5cdGNvbnNvbGUubG9nKGUpOyAvLyBzb21lIHVzZWZ1bGwgaW5mb3JtYXRpb25cbn0pO1xuLy9pZiBqYXZhc2NyaXB0IGlzbid0IGFjdGl2ZVxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5cbi8vIGxhenkgbG9hZHMgZWxlbWVudHMgd2l0aCBkZWZhdWx0IHNlbGVjdG9yIGFzICcubG96YWQnXG5jb25zdCBvYnNlcnZlciA9IGxvemFkKCk7XG5vYnNlcnZlci5vYnNlcnZlKCk7XG5cbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcblx0Y29uc3QgdG9wTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcC1uYXZiYXInKTtcblx0c2Nyb2xsWSA+IDIwXG5cdFx0PyB0b3BOYXYuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcblx0XHQ6IHRvcE5hdi5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxpbmcnKTtcbn07XG5cbi8vIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlTWUnKTtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZjbik7XG5cbi8vIGNvbnN0IHRvZ2dsZUZjbiA9IGV2ZW50ID0+IHtcbi8vIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIFx0Y29uc29sZS5sb2coJ2NsaWNrJyk7XG4vLyBcdGlmICghY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbi8vIFx0XHRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4vLyBcdFx0Y29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblxuLy8gXHRcdHZhciBoZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0ICsgJ3B4JztcblxuLy8gXHRcdGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMHB4JztcblxuLy8gXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gXHRcdFx0Y29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbi8vIFx0XHR9LCAwKTtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG5cbi8vIFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbi8vIFx0XHRcdCd0cmFuc2l0aW9uZW5kJyxcbi8vIFx0XHRcdGZ1bmN0aW9uICgpIHtcbi8vIFx0XHRcdFx0Y29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuLy8gXHRcdFx0fSxcbi8vIFx0XHRcdHtcbi8vIFx0XHRcdFx0b25jZTogdHJ1ZSxcbi8vIFx0XHRcdH1cbi8vIFx0XHQpO1xuLy8gXHR9XG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==