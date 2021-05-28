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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bootstrap.bundle.js":
/*!************************************!*\
  !*** ./src/js/bootstrap.bundle.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var getUID = function getUID(prefix) {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href');
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  var isElement = function isElement(obj) {
    return (obj[0] || obj).nodeType;
  };

  var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
    var called = false;
    var durationPadding = 5;
    var emulatedDuration = duration + durationPadding;

    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }

    element.addEventListener(TRANSITION_END, listener);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };

  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
      }
    });
  };

  var isVisible = function isVisible(element) {
    if (!element) {
      return false;
    }

    if (element.style && element.parentNode && element.parentNode.style) {
      var elementStyle = getComputedStyle(element);
      var parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }

    return false;
  };

  var findShadowRoot = function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  var noop = function noop() {
    return function () {};
  };

  var reflow = function reflow(element) {
    return element.offsetHeight;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  var isRTL = document.documentElement.dir === 'rtl';
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var mapData = function () {
    var storeData = {};
    var id = 1;
    return {
      set: function set(element, key, data) {
        if (typeof element.bsKey === 'undefined') {
          element.bsKey = {
            key: key,
            id: id
          };
          id++;
        }

        storeData[element.bsKey.id] = data;
      },
      get: function get(element, key) {
        if (!element || typeof element.bsKey === 'undefined') {
          return null;
        }

        var keyProperties = element.bsKey;

        if (keyProperties.key === key) {
          return storeData[keyProperties.id];
        }

        return null;
      },
      "delete": function _delete(element, key) {
        if (typeof element.bsKey === 'undefined') {
          return;
        }

        var keyProperties = element.bsKey;

        if (keyProperties.key === key) {
          delete storeData[keyProperties.id];
          delete element.bsKey;
        }
      }
    };
  }();

  var Data = {
    setData: function setData(instance, key, data) {
      mapData.set(instance, key, data);
    },
    getData: function getData(instance, key) {
      return mapData.get(instance, key);
    },
    removeData: function removeData(instance, key) {
      mapData["delete"](instance, key);
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && uid + "::" + uidEvent++ || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);

      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler, delegationSelector) {
    if (delegationSelector === void 0) {
      delegationSelector = null;
    }

    var uidEventList = Object.keys(events);

    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

    var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
    var custom = customEvents[typeEvent];

    if (custom) {
      typeEvent = custom;
    }

    var isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }

    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
        delegation = _normalizeParams[0],
        originalHandler = _normalizeParams[1],
        typeEvent = _normalizeParams[2];

    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      var _normalizeParams2 = normalizeParams(originalTypeEvent, handler, delegationFn),
          delegation = _normalizeParams2[0],
          originalHandler = _normalizeParams2[1],
          typeEvent = _normalizeParams2[2];

      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      var $ = getjQuery();
      var typeEvent = event.replace(stripNameRegex, '');
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '5.0.0-beta1';

  var BaseComponent = /*#__PURE__*/function () {
    function BaseComponent(element) {
      if (!element) {
        return;
      }

      this._element = element;
      Data.setData(element, this.constructor.DATA_KEY, this);
    }

    var _proto = BaseComponent.prototype;

    _proto.dispose = function dispose() {
      Data.removeData(this._element, this.constructor.DATA_KEY);
      this._element = null;
    }
    /** Static */
    ;

    BaseComponent.getInstance = function getInstance(element) {
      return Data.getData(element, this.DATA_KEY);
    };

    _createClass(BaseComponent, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return BaseComponent;
  }();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME = 'alert';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASSNAME_ALERT = 'alert';
  var CLASSNAME_FADE = 'fade';
  var CLASSNAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Alert, _BaseComponent);

    function Alert() {
      return _BaseComponent.apply(this, arguments) || this;
    }

    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = element ? this._getRootElement(element) : this._element;

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent === null || customEvent.defaultPrevented) {
        return;
      }

      this._removeElement(rootElement);
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      return getElementFromSelector(element) || element.closest("." + CLASSNAME_ALERT);
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      return EventHandler.trigger(element, EVENT_CLOSE);
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      element.classList.remove(CLASSNAME_SHOW);

      if (!element.classList.contains(CLASSNAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = getTransitionDurationFromElement(element);
      EventHandler.one(element, TRANSITION_END, function () {
        return _this._destroyElement(element);
      });
      emulateTransitionEnd(element, transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }

      EventHandler.trigger(element, EVENT_CLOSED);
    } // Static
    ;

    Alert.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY);

        if (!data) {
          data = new Alert(this);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert.handleDismiss = function handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "DATA_KEY",
      // Getters
      get: function get() {
        return DATA_KEY;
      }
    }]);

    return Alert;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME];
      $.fn[NAME] = Alert.jQueryInterface;
      $.fn[NAME].Constructor = Alert;

      $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Alert.jQueryInterface;
      };
    }
  });
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var CLASS_NAME_ACTIVE = 'active';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Button, _BaseComponent);

    function Button() {
      return _BaseComponent.apply(this, arguments) || this;
    }

    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
    } // Static
    ;

    Button.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY$1);

        if (!data) {
          data = new Button(this);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "DATA_KEY",
      // Getters
      get: function get() {
        return DATA_KEY$1;
      }
    }]);

    return Button;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE);
    var data = Data.getData(button, DATA_KEY$1);

    if (!data) {
      data = new Button(button);
    }

    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$1];
      $.fn[NAME$1] = Button.jQueryInterface;
      $.fn[NAME$1].Constructor = Button;

      $.fn[NAME$1].noConflict = function () {
        $.fn[NAME$1] = JQUERY_NO_CONFLICT;
        return Button.jQueryInterface;
      };
    }
  });
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-" + chr.toLowerCase();
    });
  }

  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-" + normalizeDataKey(key), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-" + normalizeDataKey(key));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }

      var attributes = {};
      Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs');
      }).forEach(function (key) {
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-" + normalizeDataKey(key)));
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },
    position: function position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NODE_TEXT = 3;
  var SelectorEngine = {
    matches: function matches(element, selector) {
      return element.matches(selector);
    },
    find: function find(selector, element) {
      var _ref;

      if (element === void 0) {
        element = document.documentElement;
      }

      return (_ref = []).concat.apply(_ref, Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne: function findOne(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref2;

      var children = (_ref2 = []).concat.apply(_ref2, element.children);

      return children.filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (this.matches(ancestor, selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (this.matches(next, selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Carousel, _BaseComponent);

    function Carousel(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._items = null;
      _this._interval = null;
      _this._activeElement = null;
      _this._isPaused = false;
      _this._isSliding = false;
      _this.touchTimeout = null;
      _this.touchStartX = 0;
      _this.touchDeltaX = 0;
      _this._config = _this._getConfig(config);
      _this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this._element);
      _this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      _this._pointerEvent = Boolean(window.PointerEvent);

      _this._addEventListeners();

      return _this;
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this2 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, function () {
          return _this2.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      _BaseComponent.prototype.dispose.call(this);

      EventHandler.off(this._element, EVENT_KEY$2);
      this._items = null;
      this._config = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this3 = this;

      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
          return _this3._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
          return _this3.pause(event);
        });
        EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
          return _this3.cycle(event);
        });
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this4 = this;

      var start = function start(event) {
        if (_this4._pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
          _this4.touchStartX = event.clientX;
        } else if (!_this4._pointerEvent) {
          _this4.touchStartX = event.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.touches && event.touches.length > 1) {
          _this4.touchDeltaX = 0;
        } else {
          _this4.touchDeltaX = event.touches[0].clientX - _this4.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this4._pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
          _this4.touchDeltaX = event.clientX - _this4.touchStartX;
        }

        _this4._handleSwipe();

        if (_this4._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this4.pause();

          if (_this4.touchTimeout) {
            clearTimeout(_this4.touchTimeout);
          }

          _this4.touchTimeout = setTimeout(function (event) {
            return _this4.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
        EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.key) {
        case ARROW_LEFT_KEY:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEY:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = SelectorEngine.find(SELECTOR_ACTIVE, this._indicatorsElement);

        for (var i = 0; i < indicators.length; i++) {
          indicators[i].classList.remove(CLASS_NAME_ACTIVE$1);
        }

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          nextIndicator.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this5 = this;

      var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_START;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_END;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        var transitionDuration = getTransitionDurationFromElement(activeElement);
        EventHandler.one(activeElement, TRANSITION_END, function () {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$1);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$1, orderClassName, directionalClassName);
          _this5._isSliding = false;
          setTimeout(function () {
            EventHandler.trigger(_this5._element, EVENT_SLID, {
              relatedTarget: nextElement,
              direction: eventDirectionName,
              from: activeElementIndex,
              to: nextElementIndex
            });
          }, 0);
        });
        emulateTransitionEnd(activeElement, transitionDuration);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$1);
        nextElement.classList.add(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        EventHandler.trigger(this._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel.carouselInterface = function carouselInterface(element, config) {
      var data = Data.getData(element, DATA_KEY$2);

      var _config = _extends({}, Default, Manipulator.getDataAttributes(element));

      if (_typeof(config) === 'object') {
        _config = _extends({}, _config, config);
      }

      var action = typeof config === 'string' ? config : _config.slide;

      if (!data) {
        data = new Carousel(element, _config);
      }

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError("No method named \"" + action + "\"");
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    };

    Carousel.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    };

    Carousel.dataApiClickHandler = function dataApiClickHandler(event) {
      var target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));

      var slideIndex = this.getAttribute('data-bs-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Data.getData(target, DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$2;
      }
    }]);

    return Carousel;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
    var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (var i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Data.getData(carousels[i], DATA_KEY$2));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$2];
      $.fn[NAME$2] = Carousel.jQueryInterface;
      $.fn[NAME$2].Constructor = Carousel;

      $.fn[NAME$2].noConflict = function () {
        $.fn[NAME$2] = JQUERY_NO_CONFLICT;
        return Carousel.jQueryInterface;
      };
    }
  });
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Collapse, _BaseComponent);

    function Collapse(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._isTransitioning = false;
      _this._config = _this._getConfig(config);
      _this._triggerArray = SelectorEngine.find(SELECTOR_DATA_TOGGLE$1 + "[href=\"#" + element.id + "\"]," + (SELECTOR_DATA_TOGGLE$1 + "[data-bs-target=\"#" + element.id + "\"]"));
      var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$1);

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = getSelectorFromElement(elem);
        var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length) {
          _this._selector = selector;

          _this._triggerArray.push(elem);
        }
      }

      _this._parent = _this._config.parent ? _this._getParent() : null;

      if (!_this._config.parent) {
        _this._addAriaAndCollapsedClass(_this._element, _this._triggerArray);
      }

      if (_this._config.toggle) {
        _this.toggle();
      }

      return _this;
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this2 = this;

      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(function (elem) {
          if (typeof _this2._config.parent === 'string') {
            return elem.getAttribute('data-bs-parent') === _this2._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      var container = SelectorEngine.findOne(this._selector);

      if (actives) {
        var tempActiveData = actives.find(function (elem) {
          return container !== elem;
        });
        activesData = tempActiveData ? Data.getData(tempActiveData, DATA_KEY$3) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (startEvent.defaultPrevented) {
        return;
      }

      if (actives) {
        actives.forEach(function (elemActive) {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }

          if (!activesData) {
            Data.setData(elemActive, DATA_KEY$3, null);
          }
        });
      }

      var dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        this._triggerArray.forEach(function (element) {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this2._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

        _this2._element.style[dimension] = '';

        _this2.setTransitioning(false);

        EventHandler.trigger(_this2._element, EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (startEvent.defaultPrevented) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var elem = getElementFromSelector(trigger);

          if (elem && !elem.classList.contains(CLASS_NAME_SHOW)) {
            trigger.classList.add(CLASS_NAME_COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this3.setTransitioning(false);

        _this3._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this3._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(_this3._element, EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      _BaseComponent.prototype.dispose.call(this);

      this._config = null;
      this._parent = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this4 = this;

      var parent = this._config.parent;

      if (isElement(parent)) {
        // it's a jQuery object
        if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
          parent = parent[0];
        }
      } else {
        parent = SelectorEngine.findOne(parent);
      }

      var selector = SELECTOR_DATA_TOGGLE$1 + "[data-bs-parent=\"" + parent + "\"]";
      SelectorEngine.find(selector, parent).forEach(function (element) {
        var selected = getElementFromSelector(element);

        _this4._addAriaAndCollapsedClass(selected, [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (!element || !triggerArray.length) {
        return;
      }

      var isOpen = element.classList.contains(CLASS_NAME_SHOW);
      triggerArray.forEach(function (elem) {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static
    ;

    Collapse.collapseInterface = function collapseInterface(element, config) {
      var data = Data.getData(element, DATA_KEY$3);

      var _config = _extends({}, Default$1, Manipulator.getDataAttributes(element), _typeof(config) === 'object' && config ? config : {});

      if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    Collapse.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
      });
    };

    _createClass(Collapse, null, [{
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$3;
      }
    }]);

    return Collapse;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A') {
      event.preventDefault();
    }

    var triggerData = Manipulator.getDataAttributes(this);
    var selector = getSelectorFromElement(this);
    var selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(function (element) {
      var data = Data.getData(element, DATA_KEY$3);
      var config;

      if (data) {
        // update parent attribute
        if (data._parent === null && typeof triggerData.parent === 'string') {
          data._config.parent = triggerData.parent;
          data._parent = data._getParent();
        }

        config = 'toggle';
      } else {
        config = triggerData;
      }

      Collapse.collapseInterface(element, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$3];
      $.fn[NAME$3] = Collapse.jQueryInterface;
      $.fn[NAME$3].Constructor = Collapse;

      $.fn[NAME$3].noConflict = function () {
        $.fn[NAME$3] = JQUERY_NO_CONFLICT;
        return Collapse.jQueryInterface;
      };
    }
  });
  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }
  /*:: import type { Window } from '../types'; */

  /*:: declare function getWindow(node: Node | Window): Window; */


  function getWindow(node) {
    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }
  /*:: declare function isElement(node: mixed): boolean %checks(node instanceof
    Element); */


  function isElement$1(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  /*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
    HTMLElement); */


  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  /*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
    ShadowRoot); */


  function isShadowRoot(node) {
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  } // and applies them to the HTMLElements such as popper and arrow


  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        } // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe


        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  } // Returns the layout rect of an element relative to its offsetParent. Layout
  // means it doesn't take into account transforms.


  function getLayoutRect(element) {
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe: assume body is always available
    return ((isElement$1(element) ? element.ownerDocument : element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      // $FlowFixMe: need a better way to handle this...
      element.host || // ShadowRoot detected
      // $FlowFixMe: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    var offsetParent = element.offsetParent;

    if (offsetParent) {
      var html = getDocumentElement(offsetParent);

      if (getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && getComputedStyle$1(html).position !== 'static') {
        return html;
      }
    }

    return offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.

      if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static') {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function within(min, value, max) {
    return Math.max(min, Math.min(value, max));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = state.modifiersData[name + "#persistent"].padding;
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
        _options$padding = options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }

    state.elements.arrow = arrowElement;
    state.modifiersData[name + "#persistent"] = {
      padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
    };
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };
  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsets(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: Math.round(x * dpr) / dpr || 0,
      y: Math.round(y * dpr) / dpr || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive;

    var _roundOffsets = roundOffsets(offsets),
        x = _roundOffsets.x,
        y = _roundOffsets.y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);
      } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

      /*:: offsetParent = (offsetParent: Element); */


      if (placement === top) {
        sideY = bottom;
        y -= offsetParent.clientHeight - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left) {
        sideX = right;
        x -= offsetParent.clientWidth - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref3) {
    var state = _ref3.state,
        options = _ref3.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false
      })));
    }

    state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };

  function effect$2(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect$2,
    data: {}
  };
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };

  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  var hash$1 = {
    start: 'end',
    end: 'start'
  };

  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash$1[matched];
    });
  }

  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      y: rect.top
    };
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  } // of the `<html>` and `<body>` rect bounds if horizontally scrollable


  function getDocumentRect(element) {
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = element.ownerDocument.body;
    var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }
  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the 
  reference element's position.
  */


  function listScrollParents(element, list) {
    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = getNodeName(scrollParent) === 'body';
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign(Object.assign({}, rect), {}, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement$1(clipperElement)) {
      return [];
    } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = Math.max(rect.top, accRect.top);
      accRect.right = Math.min(rect.right, accRect.right);
      accRect.bottom = Math.min(rect.bottom, accRect.bottom);
      accRect.left = Math.max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }
  /*:: type OverflowsMap = { [ComputedPlacement]: number }; */

  /*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */


  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements; // $FlowFixMe

    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name; // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step

    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min = popperOffsets[mainAxis] + overflow[mainSide];
      var max = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(_min, _offset, _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  } // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
        options: Object.assign(Object.assign({}, existing.options), current.options),
        data: Object.assign(Object.assign({}, existing.data), current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(options) {
          cleanupModifierEffects();
          state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
          state.scrollParents = {
            reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper$2 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var Popper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    popperGenerator: popperGenerator,
    detectOverflow: detectOverflow,
    createPopperBase: createPopper,
    createPopper: createPopper$2,
    createPopperLite: createPopper$1,
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    auto: auto,
    basePlacements: basePlacements,
    start: start,
    end: end,
    clippingParents: clippingParents,
    viewport: viewport,
    popper: popper,
    reference: reference,
    variationPlacements: variationPlacements,
    placements: placements,
    beforeRead: beforeRead,
    read: read,
    afterRead: afterRead,
    beforeMain: beforeMain,
    main: main,
    afterMain: afterMain,
    beforeWrite: beforeWrite,
    write: write,
    afterWrite: afterWrite,
    modifierPhases: modifierPhases,
    applyStyles: applyStyles$1,
    arrow: arrow$1,
    computeStyles: computeStyles$1,
    eventListeners: eventListeners,
    flip: flip$1,
    hide: hide$1,
    offset: offset$1,
    popperOffsets: popperOffsets$1,
    preventOverflow: preventOverflow$1
  });
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var ESCAPE_KEY = 'Escape';
  var SPACE_KEY = 'Space';
  var TAB_KEY = 'Tab';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEY + "|" + ARROW_DOWN_KEY + "|" + ESCAPE_KEY);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_NAVBAR = 'navbar';
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = isRTL ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = isRTL ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = isRTL ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = isRTL ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = isRTL ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = isRTL ? 'right-start' : 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Dropdown, _BaseComponent);

    function Dropdown(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._popper = null;
      _this._config = _this._getConfig(config);
      _this._menu = _this._getMenuElement();
      _this._inNavbar = _this._detectNavbar();

      _this._addEventListeners();

      return _this;
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = this._element.classList.contains(CLASS_NAME_SHOW$1);

      Dropdown.clearMenus();

      if (isActive) {
        return;
      }

      this.show();
    };

    _proto.show = function show() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || this._menu.classList.contains(CLASS_NAME_SHOW$1)) {
        return;
      }

      var parent = Dropdown.getParentFromElement(this._element);
      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar) {
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        }

        this._popper = createPopper$2(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        var _ref;

        (_ref = []).concat.apply(_ref, document.body.children).forEach(function (elem) {
          return EventHandler.on(elem, 'mouseover', null, noop());
        });
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.toggle(CLASS_NAME_SHOW$1);

      this._element.classList.toggle(CLASS_NAME_SHOW$1);

      EventHandler.trigger(parent, EVENT_SHOWN$1, relatedTarget);
    };

    _proto.hide = function hide() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || !this._menu.classList.contains(CLASS_NAME_SHOW$1)) {
        return;
      }

      var parent = Dropdown.getParentFromElement(this._element);
      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = EventHandler.trigger(parent, EVENT_HIDE$1, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.toggle(CLASS_NAME_SHOW$1);

      this._element.classList.toggle(CLASS_NAME_SHOW$1);

      EventHandler.trigger(parent, EVENT_HIDDEN$1, relatedTarget);
    };

    _proto.dispose = function dispose() {
      _BaseComponent.prototype.dispose.call(this);

      EventHandler.off(this._element, EVENT_KEY$4);
      this._menu = null;

      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      EventHandler.on(this._element, EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this2.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, Manipulator.getDataAttributes(this._element), config);
      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    };

    _proto._getPlacement = function _getPlacement() {
      var parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return this._element.closest("." + CLASS_NAME_NAVBAR) !== null;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            altBoundary: this._config.flip,
            rootBoundary: this._config.boundary
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown.dropdownInterface = function dropdownInterface(element, config) {
      var data = Data.getData(element, DATA_KEY$4);

      var _config = _typeof(config) === 'object' ? config : null;

      if (!data) {
        data = new Dropdown(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    Dropdown.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, config);
      });
    };

    Dropdown.clearMenus = function clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
        return;
      }

      var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$2);

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown.getParentFromElement(toggles[i]);
        var context = Data.getData(toggles[i], DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!toggles[i].classList.contains(CLASS_NAME_SHOW$1)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.key === TAB_KEY) && dropdownMenu.contains(event.target)) {
          continue;
        }

        var hideEvent = EventHandler.trigger(parent, EVENT_HIDE$1, relatedTarget);

        if (hideEvent.defaultPrevented) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          var _ref2;

          (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (elem) {
            return EventHandler.off(elem, 'mouseover', null, noop());
          });
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        dropdownMenu.classList.remove(CLASS_NAME_SHOW$1);
        toggles[i].classList.remove(CLASS_NAME_SHOW$1);
        EventHandler.trigger(parent, EVENT_HIDDEN$1, relatedTarget);
      }
    };

    Dropdown.getParentFromElement = function getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    };

    Dropdown.dataApiKeydownHandler = function dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown.getParentFromElement(this);
      var isActive = this.classList.contains(CLASS_NAME_SHOW$1);

      if (event.key === ESCAPE_KEY) {
        var button = this.matches(SELECTOR_DATA_TOGGLE$2) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$2)[0];
        button.focus();
        Dropdown.clearMenus();
        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
        return;
      }

      var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target); // Up

      if (event.key === ARROW_UP_KEY && index > 0) {
        index--;
      } // Down


      if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
        index++;
      } // index is -1 if the first keydown is an ArrowUp


      index = index === -1 ? 0 : index;
      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$4;
      }
    }]);

    return Dropdown;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();
    Dropdown.dropdownInterface(this, 'toggle');
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    return e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$4];
      $.fn[NAME$4] = Dropdown.jQueryInterface;
      $.fn[NAME$4].Constructor = Dropdown;

      $.fn[NAME$4].noConflict = function () {
        $.fn[NAME$4] = JQUERY_NO_CONFLICT;
        return Dropdown.jQueryInterface;
      };
    }
  });
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var ESCAPE_KEY$1 = 'Escape';
  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-bs-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Modal, _BaseComponent);

    function Modal(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._config = _this._getConfig(config);
      _this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, element);
      _this._backdrop = null;
      _this._isShown = false;
      _this._isBodyOverflowing = false;
      _this._ignoreBackdropClick = false;
      _this._isTransitioning = false;
      _this._scrollbarWidth = 0;
      return _this;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this2 = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if (this._element.classList.contains(CLASS_NAME_FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });

      if (this._isShown || showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this2.hide(event);
      });
      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this2._element, EVENT_MOUSEUP_DISMISS, function (event) {
          if (event.target === _this2._element) {
            _this2._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this2._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this3 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      var transition = this._element.classList.contains(CLASS_NAME_FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.off(document, EVENT_FOCUSIN);

      this._element.classList.remove(CLASS_NAME_SHOW$2);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, TRANSITION_END, function (event) {
          return _this3._hideModal(event);
        });
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return EventHandler.off(htmlElement, EVENT_KEY$5);
      });

      _BaseComponent.prototype.dispose.call(this);
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */


      EventHandler.off(document, EVENT_FOCUSIN);
      this._config = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = this._element.classList.contains(CLASS_NAME_FADE);

      var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (transition) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$2);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        EventHandler.trigger(_this4._element, EVENT_SHOWN$2, {
          relatedTarget: relatedTarget
        });
      };

      if (transition) {
        var transitionDuration = getTransitionDurationFromElement(this._dialog);
        EventHandler.one(this._dialog, TRANSITION_END, transitionComplete);
        emulateTransitionEnd(this._dialog, transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      EventHandler.off(document, EVENT_FOCUSIN); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && !_this5._element.contains(event.target)) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.key === ESCAPE_KEY$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, function () {
          return _this7._adjustDialog();
        });
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        document.body.classList.remove(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        EventHandler.trigger(_this8._element, EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      this._backdrop.parentNode.removeChild(this._backdrop);

      this._backdrop = null;
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = this._element.classList.contains(CLASS_NAME_FADE) ? CLASS_NAME_FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        document.body.appendChild(this._backdrop);
        EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          reflow(this._backdrop);
        }

        this._backdrop.classList.add(CLASS_NAME_SHOW$2);

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
        EventHandler.one(this._backdrop, TRANSITION_END, callback);
        emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove(CLASS_NAME_SHOW$2);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          callback();
        };

        if (this._element.classList.contains(CLASS_NAME_FADE)) {
          var _backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);

          EventHandler.one(this._backdrop, TRANSITION_END, callbackRemove);
          emulateTransitionEnd(this._backdrop, _backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else {
        callback();
      }
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this10 = this;

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler.off(this._element, TRANSITION_END);
      EventHandler.one(this._element, TRANSITION_END, function () {
        _this10._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          EventHandler.one(_this10._element, TRANSITION_END, function () {
            _this10._element.style.overflowY = '';
          });
          emulateTransitionEnd(_this10._element, modalTransitionDuration);
        }
      });
      emulateTransitionEnd(this._element, modalTransitionDuration);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing && !isRTL || this._isBodyOverflowing && !isModalOverflowing && isRTL) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing && !isRTL || !this._isBodyOverflowing && isModalOverflowing && isRTL) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this11 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        // Adjust fixed content padding
        SelectorEngine.find(SELECTOR_FIXED_CONTENT).forEach(function (element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = window.getComputedStyle(element)['padding-right'];
          Manipulator.setDataAttribute(element, 'padding-right', actualPadding);
          element.style.paddingRight = Number.parseFloat(calculatedPadding) + _this11._scrollbarWidth + "px";
        }); // Adjust sticky content margin

        SelectorEngine.find(SELECTOR_STICKY_CONTENT).forEach(function (element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = window.getComputedStyle(element)['margin-right'];
          Manipulator.setDataAttribute(element, 'margin-right', actualMargin);
          element.style.marginRight = Number.parseFloat(calculatedMargin) - _this11._scrollbarWidth + "px";
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = window.getComputedStyle(document.body)['padding-right'];
        Manipulator.setDataAttribute(document.body, 'padding-right', actualPadding);
        document.body.style.paddingRight = Number.parseFloat(calculatedPadding) + this._scrollbarWidth + "px";
      }

      document.body.classList.add(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      SelectorEngine.find(SELECTOR_FIXED_CONTENT).forEach(function (element) {
        var padding = Manipulator.getDataAttribute(element, 'padding-right');

        if (typeof padding !== 'undefined') {
          Manipulator.removeDataAttribute(element, 'padding-right');
          element.style.paddingRight = padding;
        }
      }); // Restore sticky content and navbar-toggler margin

      SelectorEngine.find("" + SELECTOR_STICKY_CONTENT).forEach(function (element) {
        var margin = Manipulator.getDataAttribute(element, 'margin-right');

        if (typeof margin !== 'undefined') {
          Manipulator.removeDataAttribute(element, 'margin-right');
          element.style.marginRight = margin;
        }
      }); // Restore body padding

      var padding = Manipulator.getDataAttribute(document.body, 'padding-right');

      if (typeof padding === 'undefined') {
        document.body.style.paddingRight = '';
      } else {
        Manipulator.removeDataAttribute(document.body, 'padding-right');
        document.body.style.paddingRight = padding;
      }
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal.jQueryInterface = function jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY$5);

        var _config = _extends({}, Default$3, Manipulator.getDataAttributes(this), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$5;
      }
    }]);

    return Modal;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this12 = this;

    var target = getElementFromSelector(this);

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$2, function (showEvent) {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$2, function () {
        if (isVisible(_this12)) {
          _this12.focus();
        }
      });
    });
    var data = Data.getData(target, DATA_KEY$5);

    if (!data) {
      var config = _extends({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));

      data = new Modal(target, config);
    }

    data.show(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$5];
      $.fn[NAME$5] = Modal.jQueryInterface;
      $.fn[NAME$5].Constructor = Modal;

      $.fn[NAME$5].noConflict = function () {
        $.fn[NAME$5] = JQUERY_NO_CONFLICT;
        return Modal.jQueryInterface;
      };
    }
  });
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  };

  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };

  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    var _ref;

    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var allowlistKeys = Object.keys(allowList);

    var elements = (_ref = []).concat.apply(_ref, createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var _ref2;

      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = (_ref2 = []).concat.apply(_ref2, el.attributes);

      var allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: '(null|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL ? 'right' : 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    container: false,
    fallbackPlacements: null,
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_MODAL = 'modal';
  var CLASS_NAME_SHOW$3 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Tooltip, _BaseComponent);

    function Tooltip(element, config) {
      var _this;

      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      _this = _BaseComponent.call(this, element) || this; // private

      _this._isEnabled = true;
      _this._timeout = 0;
      _this._hoverState = '';
      _this._activeTrigger = {};
      _this._popper = null; // Protected

      _this.config = _this._getConfig(config);
      _this.tip = null;

      _this._setListeners();

      return _this;
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = Data.getData(event.delegateTarget, dataKey);

        if (!context) {
          context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
          Data.setData(event.delegateTarget, dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      EventHandler.off(this._element.closest("." + CLASS_NAME_MODAL), 'hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        this.tip.parentNode.removeChild(this.tip);
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.config = null;
      this.tip = null;

      _BaseComponent.prototype.dispose.call(this);
    };

    _proto.show = function show() {
      var _this2 = this;

      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (this.isWithContent() && this._isEnabled) {
        var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
        var shadowRoot = findShadowRoot(this._element);
        var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

        if (showEvent.defaultPrevented || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);

        this._element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          tip.classList.add(CLASS_NAME_FADE$1);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this._element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this._addAttachmentClass(attachment);

        var container = this._getContainer();

        Data.setData(tip, this.constructor.DATA_KEY, this);

        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
          container.appendChild(tip);
        }

        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
        this._popper = createPopper$2(this._element, tip, this._getPopperConfig(attachment));
        tip.classList.add(CLASS_NAME_SHOW$3);
        var customClass = typeof this.config.customClass === 'function' ? this.config.customClass() : this.config.customClass;

        if (customClass) {
          var _tip$classList;

          (_tip$classList = tip.classList).add.apply(_tip$classList, customClass.split(' '));
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement) {
          var _ref;

          (_ref = []).concat.apply(_ref, document.body.children).forEach(function (element) {
            EventHandler.on(element, 'mouseover', noop());
          });
        }

        var complete = function complete() {
          var prevHoverState = _this2._hoverState;
          _this2._hoverState = null;
          EventHandler.trigger(_this2._element, _this2.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this2._leave(null, _this2);
          }
        };

        if (this.tip.classList.contains(CLASS_NAME_FADE$1)) {
          var transitionDuration = getTransitionDurationFromElement(this.tip);
          EventHandler.one(this.tip, TRANSITION_END, complete);
          emulateTransitionEnd(this.tip, transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (!this._popper) {
        return;
      }

      var tip = this.getTipElement();

      var complete = function complete() {
        if (_this3._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this3._cleanTipClass();

        _this3._element.removeAttribute('aria-describedby');

        EventHandler.trigger(_this3._element, _this3.constructor.Event.HIDDEN);

        if (_this3._popper) {
          _this3._popper.destroy();

          _this3._popper = null;
        }
      };

      var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        var _ref2;

        (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (element) {
          return EventHandler.off(element, 'mouseover', noop);
        });
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if (this.tip.classList.contains(CLASS_NAME_FADE$1)) {
        var transitionDuration = getTransitionDurationFromElement(tip);
        EventHandler.one(tip, TRANSITION_END, complete);
        emulateTransitionEnd(tip, transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.getTipElement = function getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      var element = document.createElement('div');
      element.innerHTML = this.config.template;
      this.tip = element.children[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
      tip.classList.remove(CLASS_NAME_FADE$1, CLASS_NAME_SHOW$3);
    };

    _proto.setElementContent = function setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (_typeof(content) === 'object' && isElement(content)) {
        if (content.jquery) {
          content = content[0];
        } // content is a DOM node or a jQuery


        if (this.config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.appendChild(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this._element.getAttribute('data-bs-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this._element) : this.config.title;
      }

      return title;
    };

    _proto.updateAttachment = function updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this4 = this;

      var flipModifier = {
        name: 'flip',
        options: {
          altBoundary: true
        }
      };

      if (this.config.fallbackPlacements) {
        flipModifier.options.fallbackPlacements = this.config.fallbackPlacements;
      }

      var defaultBsConfig = {
        placement: attachment,
        modifiers: [flipModifier, {
          name: 'preventOverflow',
          options: {
            rootBoundary: this.config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: "." + this.constructor.NAME + "-arrow"
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: function fn(data) {
            return _this4._handlePopperPlacementChange(data);
          }
        }],
        onFirstUpdate: function onFirstUpdate(data) {
          if (data.options.placement !== data.placement) {
            _this4._handlePopperPlacementChange(data);
          }
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(CLASS_PREFIX + "-" + this.updateAttachment(attachment));
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (isElement(this.config.container)) {
        return this.config.container;
      }

      return SelectorEngine.findOne(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          EventHandler.on(_this5._element, _this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          EventHandler.on(_this5._element, eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          });
          EventHandler.on(_this5._element, eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5._element) {
          _this5.hide();
        }
      };

      EventHandler.on(this._element.closest("." + CLASS_NAME_MODAL), 'hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var title = this._element.getAttribute('title');

      var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || Data.getData(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data.setData(event.delegateTarget, dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || Data.getData(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data.setData(event.delegateTarget, dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });

      if (config && _typeof(config.container) === 'object' && config.container.jquery) {
        config.container = config.container[0];
      }

      config = _extends({}, this.constructor.Default, dataAttributes, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(function (token) {
          return token.trim();
        }).forEach(function (tClass) {
          return tip.classList.remove(tClass);
        });
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var state = popperData.state;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    } // Static
    ;

    Tooltip.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$6];
      $.fn[NAME$6] = Tooltip.jQueryInterface;
      $.fn[NAME$6].Constructor = Tooltip;

      $.fn[NAME$6].noConflict = function () {
        $.fn[NAME$6] = JQUERY_NO_CONFLICT;
        return Tooltip.jQueryInterface;
      };
    }
  });
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var Event$2 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement(); // we use append for html objects to maintain js events

      this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this._element);
      }

      this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$4);
    } // Private
    ;

    _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(CLASS_PREFIX$1 + "-" + this.updateAttachment(attachment));
    };

    _proto._getContent = function _getContent() {
      return this._element.getAttribute('data-bs-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(function (token) {
          return token.trim();
        }).forEach(function (tClass) {
          return tip.classList.remove(tClass);
        });
      }
    } // Static
    ;

    Popover.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          Data.setData(this, DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "Default",
      // Getters
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$2;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$7];
      $.fn[NAME$7] = Popover.jQueryInterface;
      $.fn[NAME$7].Constructor = Popover;

      $.fn[NAME$7].noConflict = function () {
        $.fn[NAME$7] = JQUERY_NO_CONFLICT;
        return Popover.jQueryInterface;
      };
    }
  });
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(ScrollSpy, _BaseComponent);

    function ScrollSpy(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._scrollElement = element.tagName === 'BODY' ? window : element;
      _this._config = _this._getConfig(config);
      _this._selector = _this._config.target + " " + SELECTOR_NAV_LINKS + ", " + _this._config.target + " " + SELECTOR_LIST_ITEMS + ", " + _this._config.target + " ." + CLASS_NAME_DROPDOWN_ITEM;
      _this._offsets = [];
      _this._targets = [];
      _this._activeTarget = null;
      _this._scrollHeight = 0;
      EventHandler.on(_this._scrollElement, EVENT_SCROLL, function (event) {
        return _this._process(event);
      });

      _this.refresh();

      _this._process();

      return _this;
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = SelectorEngine.find(this._selector);
      targets.map(function (element) {
        var targetSelector = getSelectorFromElement(element);
        var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      _BaseComponent.prototype.dispose.call(this);

      EventHandler.off(this._scrollElement, EVENT_KEY$8);
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && isElement(config.target)) {
        var id = config.target.id;

        if (!id) {
          id = getUID(NAME$8);
          config.target.id = id;
        }

        config.target = "#" + id;
      }

      typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-bs-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var link = SelectorEngine.findOne(queries.join(','));

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE, link.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$2);
        link.classList.add(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        link.classList.add(CLASS_NAME_ACTIVE$2);
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP).forEach(function (listGroup) {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).forEach(function (item) {
            return item.classList.add(CLASS_NAME_ACTIVE$2);
          }); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$2);
            });
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      SelectorEngine.find(this._selector).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$8;
      }
    }]);

    return ScrollSpy;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
      return new ScrollSpy(spy, Manipulator.getDataAttributes(spy));
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$8];
      $.fn[NAME$8] = ScrollSpy.jQueryInterface;
      $.fn[NAME$8].Constructor = ScrollSpy;

      $.fn[NAME$8].noConflict = function () {
        $.fn[NAME$8] = JQUERY_NO_CONFLICT;
        return ScrollSpy.jQueryInterface;
      };
    }
  });
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_UL = ':scope > li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Tab, _BaseComponent);

    function Tab() {
      return _BaseComponent.apply(this, arguments) || this;
    }

    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE$3) || this._element.classList.contains(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var previous;
      var target = getElementFromSelector(this._element);

      var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP$1);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$1;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      var hideEvent = null;

      if (previous) {
        hideEvent = EventHandler.trigger(previous, EVENT_HIDE$3, {
          relatedTarget: this._element
        });
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        EventHandler.trigger(previous, EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        EventHandler.trigger(_this._element, EVENT_SHOWN$3, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE$1);
      var active = activeElements[0];
      var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$3);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = getTransitionDurationFromElement(active);
        active.classList.remove(CLASS_NAME_SHOW$5);
        EventHandler.one(active, TRANSITION_END, complete);
        emulateTransitionEnd(active, transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE$3);
        var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$3)) {
        element.classList.add(CLASS_NAME_SHOW$5);
      }

      if (element.parentNode && element.parentNode.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = element.closest(SELECTOR_DROPDOWN$1);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE$1).forEach(function (dropdown) {
            return dropdown.classList.add(CLASS_NAME_ACTIVE$3);
          });
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY$9) || new Tab(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "DATA_KEY",
      // Getters
      get: function get() {
        return DATA_KEY$9;
      }
    }]);

    return Tab;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();
    var data = Data.getData(this, DATA_KEY$9) || new Tab(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$9];
      $.fn[NAME$9] = Tab.jQueryInterface;
      $.fn[NAME$9].Constructor = Tab;

      $.fn[NAME$9].noConflict = function () {
        $.fn[NAME$9] = JQUERY_NO_CONFLICT;
        return Tab.jQueryInterface;
      };
    }
  });
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Toast, _BaseComponent);

    function Toast(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._config = _this._getConfig(config);
      _this._timeout = null;

      _this._setListeners();

      return _this;
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this2 = this;

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$4);
      }

      var complete = function complete() {
        _this2._element.classList.remove(CLASS_NAME_SHOWING);

        _this2._element.classList.add(CLASS_NAME_SHOW$6);

        EventHandler.trigger(_this2._element, EVENT_SHOWN$4);

        if (_this2._config.autohide) {
          _this2._timeout = setTimeout(function () {
            _this2.hide();
          }, _this2._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, TRANSITION_END, complete);
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (!this._element.classList.contains(CLASS_NAME_SHOW$6)) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        EventHandler.trigger(_this3._element, EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$6);

      if (this._config.animation) {
        var transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, TRANSITION_END, complete);
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$6)) {
        this._element.classList.remove(CLASS_NAME_SHOW$6);
      }

      EventHandler.off(this._element, EVENT_CLICK_DISMISS$1);

      _BaseComponent.prototype.dispose.call(this);

      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, Manipulator.getDataAttributes(this._element), _typeof(config) === 'object' && config ? config : {});
      typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this4 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this4.hide();
      });
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$a;
      }
    }]);

    return Toast;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */


  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      var JQUERY_NO_CONFLICT = $.fn[NAME$a];
      $.fn[NAME$a] = Toast.jQueryInterface;
      $.fn[NAME$a].Constructor = Toast;

      $.fn[NAME$a].noConflict = function () {
        $.fn[NAME$a] = JQUERY_NO_CONFLICT;
        return Toast.jQueryInterface;
      };
    }
  });
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta1): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var index_umd = {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };
  return index_umd;
});

/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** multi ./src/js/bootstrap.bundle.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/irina/Local Sites/riseuptown/app/public/wp-content/themes/riseuptown/src/js/bootstrap.bundle.js */"./src/js/bootstrap.bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZG9tL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vZXZlbnQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvb3JkZXJNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1saXRlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL2luZGV4LnVtZC5qcyJdLCJuYW1lcyI6WyJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJUUkFOU0lUSU9OX0VORCIsInRvVHlwZSIsIm9iaiIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJkb2N1bWVudCIsImdldFNlbGVjdG9yIiwic2VsZWN0b3IiLCJlbGVtZW50IiwiaHJlZkF0dHIiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50Iiwid2luZG93IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiaXNFbGVtZW50IiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJjYWxsZWQiLCJkdXJhdGlvblBhZGRpbmciLCJlbXVsYXRlZER1cmF0aW9uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidHlwZUNoZWNrQ29uZmlnIiwiT2JqZWN0IiwiZXhwZWN0ZWRUeXBlcyIsImNvbmZpZ1R5cGVzIiwidmFsdWUiLCJjb25maWciLCJ2YWx1ZVR5cGUiLCJjb21wb25lbnROYW1lIiwiaXNWaXNpYmxlIiwiZWxlbWVudFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcmVudE5vZGVTdHlsZSIsImZpbmRTaGFkb3dSb290Iiwicm9vdCIsIm5vb3AiLCJyZWZsb3ciLCJnZXRqUXVlcnkiLCJqUXVlcnkiLCJvbkRPTUNvbnRlbnRMb2FkZWQiLCJjYWxsYmFjayIsImlzUlRMIiwibWFwRGF0YSIsInN0b3JlRGF0YSIsImlkIiwic2V0Iiwia2V5IiwiZ2V0Iiwia2V5UHJvcGVydGllcyIsIkRhdGEiLCJzZXREYXRhIiwiZ2V0RGF0YSIsInJlbW92ZURhdGEiLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibmF0aXZlRXZlbnRzIiwidWlkIiwiZ2V0VWlkRXZlbnQiLCJldmVudCIsImhhbmRsZXIiLCJFdmVudEhhbmRsZXIiLCJmbiIsImRvbUVsZW1lbnRzIiwidGFyZ2V0IiwiaSIsImRlbGVnYXRpb25TZWxlY3RvciIsInVpZEV2ZW50TGlzdCIsImxlbiIsImV2ZW50cyIsImRlbGVnYXRpb24iLCJvcmlnaW5hbEhhbmRsZXIiLCJ0eXBlRXZlbnQiLCJvcmlnaW5hbFR5cGVFdmVudCIsImN1c3RvbSIsImlzTmF0aXZlIiwiZGVsZWdhdGlvbkZuIiwibm9ybWFsaXplUGFyYW1zIiwiZ2V0RXZlbnQiLCJoYW5kbGVycyIsInByZXZpb3VzRm4iLCJmaW5kSGFuZGxlciIsImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwiYm9vdHN0cmFwSGFuZGxlciIsIkJvb2xlYW4iLCJzdG9yZUVsZW1lbnRFdmVudCIsImhhbmRsZXJLZXkiLCJyZW1vdmVIYW5kbGVyIiwib24iLCJhZGRIYW5kbGVyIiwib25lIiwib2ZmIiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsIiQiLCJidWJibGVzIiwibmF0aXZlRGlzcGF0Y2giLCJkZWZhdWx0UHJldmVudGVkIiwiZXZ0IiwialF1ZXJ5RXZlbnQiLCJjYW5jZWxhYmxlIiwiYXJncyIsIlZFUlNJT04iLCJCYXNlQ29tcG9uZW50IiwiZGlzcG9zZSIsImdldEluc3RhbmNlIiwiTkFNRSIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiU0VMRUNUT1JfRElTTUlTUyIsIkVWRU5UX0NMT1NFIiwiRVZFTlRfQ0xPU0VEIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJDTEFTU05BTUVfQUxFUlQiLCJDTEFTU05BTUVfRkFERSIsIkNMQVNTTkFNRV9TSE9XIiwiQWxlcnQiLCJjbG9zZSIsInJvb3RFbGVtZW50IiwiY3VzdG9tRXZlbnQiLCJfZ2V0Um9vdEVsZW1lbnQiLCJfdHJpZ2dlckNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsIl9kZXN0cm95RWxlbWVudCIsImpRdWVyeUludGVyZmFjZSIsImRhdGEiLCJoYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsIkpRVUVSWV9OT19DT05GTElDVCIsIkNMQVNTX05BTUVfQUNUSVZFIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJCdXR0b24iLCJ0b2dnbGUiLCJidXR0b24iLCJ2YWwiLCJjaHIiLCJNYW5pcHVsYXRvciIsInNldERhdGFBdHRyaWJ1dGUiLCJub3JtYWxpemVEYXRhS2V5IiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInB1cmVLZXkiLCJub3JtYWxpemVEYXRhIiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIm9mZnNldCIsInJlY3QiLCJ0b3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInBvc2l0aW9uIiwib2Zmc2V0TGVmdCIsIk5PREVfVEVYVCIsIlNlbGVjdG9yRW5naW5lIiwibWF0Y2hlcyIsImZpbmQiLCJkb2N1bWVudEVsZW1lbnQiLCJFbGVtZW50IiwiZmluZE9uZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJwYXJlbnRzIiwiYW5jZXN0b3IiLCJOb2RlIiwicHJldiIsInByZXZpb3VzIiwibmV4dCIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIlNXSVBFX1RIUkVTSE9MRCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiRElSRUNUSU9OX05FWFQiLCJESVJFQ1RJT05fUFJFViIsIkRJUkVDVElPTl9MRUZUIiwiRElSRUNUSU9OX1JJR0hUIiwiRVZFTlRfU0xJREUiLCJFVkVOVF9TTElEIiwiRVZFTlRfS0VZRE9XTiIsIkVWRU5UX01PVVNFRU5URVIiLCJFVkVOVF9NT1VTRUxFQVZFIiwiRVZFTlRfVE9VQ0hTVEFSVCIsIkVWRU5UX1RPVUNITU9WRSIsIkVWRU5UX1RPVUNIRU5EIiwiRVZFTlRfUE9JTlRFUkRPV04iLCJFVkVOVF9QT0lOVEVSVVAiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkNMQVNTX05BTUVfQ0FST1VTRUwiLCJDTEFTU19OQU1FX1NMSURFIiwiQ0xBU1NfTkFNRV9FTkQiLCJDTEFTU19OQU1FX1NUQVJUIiwiQ0xBU1NfTkFNRV9ORVhUIiwiQ0xBU1NfTkFNRV9QUkVWIiwiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfQUNUSVZFX0lURU0iLCJTRUxFQ1RPUl9JVEVNIiwiU0VMRUNUT1JfSVRFTV9JTUciLCJTRUxFQ1RPUl9ORVhUX1BSRVYiLCJTRUxFQ1RPUl9JTkRJQ0FUT1JTIiwiU0VMRUNUT1JfREFUQV9TTElERSIsIlNFTEVDVE9SX0RBVEFfUklERSIsIlBvaW50ZXJUeXBlIiwiVE9VQ0giLCJQRU4iLCJDYXJvdXNlbCIsIm5hdmlnYXRvciIsIm5leHRXaGVuVmlzaWJsZSIsImNsZWFySW50ZXJ2YWwiLCJjeWNsZSIsInNldEludGVydmFsIiwidG8iLCJhY3RpdmVJbmRleCIsImluZGV4IiwiZGlyZWN0aW9uIiwiX2dldENvbmZpZyIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsIl9hZGRFdmVudExpc3RlbmVycyIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwiY2xlYXJUaW1lb3V0IiwiZSIsIl9rZXlkb3duIiwiX2dldEl0ZW1JbmRleCIsIl9nZXRJdGVtQnlEaXJlY3Rpb24iLCJpc05leHREaXJlY3Rpb24iLCJpc1ByZXZEaXJlY3Rpb24iLCJsYXN0SXRlbUluZGV4IiwiaXNHb2luZ1RvV3JhcCIsImRlbHRhIiwiaXRlbUluZGV4IiwiX3RyaWdnZXJTbGlkZUV2ZW50IiwidGFyZ2V0SW5kZXgiLCJmcm9tSW5kZXgiLCJyZWxhdGVkVGFyZ2V0IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiaW5kaWNhdG9ycyIsIm5leHRJbmRpY2F0b3IiLCJfdXBkYXRlSW50ZXJ2YWwiLCJlbGVtZW50SW50ZXJ2YWwiLCJfc2xpZGUiLCJhY3RpdmVFbGVtZW50IiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInNsaWRlRXZlbnQiLCJjYXJvdXNlbEludGVyZmFjZSIsIl9jb25maWciLCJhY3Rpb24iLCJkYXRhQXBpQ2xpY2tIYW5kbGVyIiwic2xpZGVJbmRleCIsImNhcm91c2VscyIsInBhcmVudCIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkVWRU5UX0hJREUiLCJFVkVOVF9ISURERU4iLCJDTEFTU19OQU1FX1NIT1ciLCJDTEFTU19OQU1FX0NPTExBUFNFIiwiQ0xBU1NfTkFNRV9DT0xMQVBTSU5HIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCJXSURUSCIsIkhFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJDb2xsYXBzZSIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsInNob3ciLCJhY3RpdmVzIiwiY29udGFpbmVyIiwidGVtcEFjdGl2ZURhdGEiLCJhY3RpdmVzRGF0YSIsInN0YXJ0RXZlbnQiLCJkaW1lbnNpb24iLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwic2Nyb2xsU2l6ZSIsImhpZGUiLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJzZXRUcmFuc2l0aW9uaW5nIiwiX2dldERpbWVuc2lvbiIsIl9nZXRQYXJlbnQiLCJzZWxlY3RlZCIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCJjb2xsYXBzZUludGVyZmFjZSIsInRyaWdnZXJEYXRhIiwic2VsZWN0b3JFbGVtZW50cyIsImVmZmVjdCIsImhhc2giLCJhbGxQbGFjZW1lbnRzIiwicGxhY2VtZW50cyIsInBvcHBlck9mZnNldHMiLCJjb21wdXRlU3R5bGVzIiwiYXBwbHlTdHlsZXMiLCJjcmVhdGVQb3BwZXIiLCJkZWZhdWx0TW9kaWZpZXJzIiwiZmxpcCIsInByZXZlbnRPdmVyZmxvdyIsImFycm93IiwiRVNDQVBFX0tFWSIsIlNQQUNFX0tFWSIsIlRBQl9LRVkiLCJBUlJPV19VUF9LRVkiLCJBUlJPV19ET1dOX0tFWSIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIlJFR0VYUF9LRVlET1dOIiwiRVZFTlRfQ0xJQ0siLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJDTEFTU19OQU1FX0RJU0FCTEVEIiwiQ0xBU1NfTkFNRV9EUk9QVVAiLCJDTEFTU19OQU1FX0RST1BFTkQiLCJDTEFTU19OQU1FX0RST1BTVEFSVCIsIkNMQVNTX05BTUVfTkFWQkFSIiwiU0VMRUNUT1JfRk9STV9DSElMRCIsIlNFTEVDVE9SX01FTlUiLCJTRUxFQ1RPUl9OQVZCQVJfTkFWIiwiU0VMRUNUT1JfVklTSUJMRV9JVEVNUyIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwiZGlzcGxheSIsInBvcHBlckNvbmZpZyIsIkRyb3Bkb3duIiwiaXNBY3RpdmUiLCJfZWxlbWVudCIsInNob3dFdmVudCIsInJlZmVyZW5jZUVsZW1lbnQiLCJQb3BwZXIiLCJoaWRlRXZlbnQiLCJ1cGRhdGUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsIl9kZXRlY3ROYXZiYXIiLCJfZ2V0UG9wcGVyQ29uZmlnIiwicGxhY2VtZW50IiwibW9kaWZpZXJzIiwibmFtZSIsIm9wdGlvbnMiLCJhbHRCb3VuZGFyeSIsInJvb3RCb3VuZGFyeSIsImVuYWJsZWQiLCJkcm9wZG93bkludGVyZmFjZSIsImNsZWFyTWVudXMiLCJ0b2dnbGVzIiwiY29udGV4dCIsImRyb3Bkb3duTWVudSIsImdldFBhcmVudEZyb21FbGVtZW50IiwiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwiaXRlbXMiLCJiYWNrZHJvcCIsImZvY3VzIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfUkVTSVpFIiwiRVZFTlRfQ0xJQ0tfRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyIsIkVWRU5UX01PVVNFVVBfRElTTUlTUyIsIkVWRU5UX01PVVNFRE9XTl9ESVNNSVNTIiwiQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVIiLCJDTEFTU19OQU1FX0JBQ0tEUk9QIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9GQURFIiwiQ0xBU1NfTkFNRV9TVEFUSUMiLCJTRUxFQ1RPUl9ESUFMT0ciLCJTRUxFQ1RPUl9NT0RBTF9CT0RZIiwiU0VMRUNUT1JfREFUQV9ESVNNSVNTIiwiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsIlNFTEVDVE9SX1NUSUNLWV9DT05URU5UIiwiTW9kYWwiLCJ0cmFuc2l0aW9uIiwiaGFuZGxlVXBkYXRlIiwiX3Nob3dFbGVtZW50IiwibW9kYWxCb2R5IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiX2VuZm9yY2VGb2N1cyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9oaWRlTW9kYWwiLCJfcmVtb3ZlQmFja2Ryb3AiLCJfc2hvd0JhY2tkcm9wIiwiYW5pbWF0ZSIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsImlzTW9kYWxPdmVyZmxvd2luZyIsIm1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uIiwiX2FkanVzdERpYWxvZyIsIl9yZXNldEFkanVzdG1lbnRzIiwiX2NoZWNrU2Nyb2xsYmFyIiwiX3NldFNjcm9sbGJhciIsImFjdHVhbFBhZGRpbmciLCJjYWxjdWxhdGVkUGFkZGluZyIsImFjdHVhbE1hcmdpbiIsImNhbGN1bGF0ZWRNYXJnaW4iLCJfcmVzZXRTY3JvbGxiYXIiLCJwYWRkaW5nIiwibWFyZ2luIiwiX2dldFNjcm9sbGJhcldpZHRoIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJTQUZFX1VSTF9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhdHRyTmFtZSIsImF0dHIiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsInJlZ0V4cCIsImF0dHJSZWdleCIsIkRlZmF1bHRBbGxvd2xpc3QiLCJhIiwiYXJlYSIsImIiLCJiciIsImNvbCIsImNvZGUiLCJkaXYiLCJlbSIsImhyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaW1nIiwibGkiLCJvbCIsInAiLCJwcmUiLCJzIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwidW5zYWZlSHRtbCIsInNhbml0aXplRm4iLCJkb21QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJhbGxvd2xpc3RLZXlzIiwiZWxlbWVudHMiLCJlbCIsImVsTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlcyIsImFsbG93TGlzdCIsIkNMQVNTX1BSRUZJWCIsIkJTQ0xTX1BSRUZJWF9SRUdFWCIsIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJjdXN0b21DbGFzcyIsInNhbml0aXplIiwiQXR0YWNobWVudE1hcCIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCJFdmVudCIsIkhJREUiLCJISURERU4iLCJTSE9XIiwiU0hPV04iLCJJTlNFUlRFRCIsIkNMSUNLIiwiRk9DVVNJTiIsIkZPQ1VTT1VUIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJDTEFTU19OQU1FX01PREFMIiwiSE9WRVJfU1RBVEVfU0hPVyIsIkhPVkVSX1NUQVRFX09VVCIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJUUklHR0VSX0hPVkVSIiwiVFJJR0dFUl9GT0NVUyIsIlRSSUdHRVJfQ0xJQ0siLCJUUklHR0VSX01BTlVBTCIsIlRvb2x0aXAiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRhdGFLZXkiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsInRpcCIsInRpcElkIiwiYXR0YWNobWVudCIsInByZXZIb3ZlclN0YXRlIiwiaXNXaXRoQ29udGVudCIsImdldFRpcEVsZW1lbnQiLCJzZXRDb250ZW50Iiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50Iiwic2FuaXRpemVIdG1sIiwiZ2V0VGl0bGUiLCJ1cGRhdGVBdHRhY2htZW50IiwiZmxpcE1vZGlmaWVyIiwiZGVmYXVsdEJzQ29uZmlnIiwicGhhc2UiLCJvbkZpcnN0VXBkYXRlIiwiX2FkZEF0dGFjaG1lbnRDbGFzcyIsIl9nZXRDb250YWluZXIiLCJfZ2V0QXR0YWNobWVudCIsIl9zZXRMaXN0ZW5lcnMiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsIm9yaWdpbmFsVGl0bGVUeXBlIiwiX2VudGVyIiwiX2xlYXZlIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJkYXRhQXR0cmlidXRlcyIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsIl9jbGVhblRpcENsYXNzIiwidGFiQ2xhc3MiLCJ0b2tlbiIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJzdGF0ZSIsInBvcHBlckRhdGEiLCJTRUxFQ1RPUl9USVRMRSIsIlNFTEVDVE9SX0NPTlRFTlQiLCJQb3BvdmVyIiwiX2dldENvbnRlbnQiLCJtZXRob2QiLCJFVkVOVF9BQ1RJVkFURSIsIkVWRU5UX1NDUk9MTCIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIlNFTEVDVE9SX0RBVEFfU1BZIiwiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOS1MiLCJTRUxFQ1RPUl9OQVZfSVRFTVMiLCJTRUxFQ1RPUl9MSVNUX0lURU1TIiwiU0VMRUNUT1JfRFJPUERPV04iLCJTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCJNRVRIT0RfT0ZGU0VUIiwiTUVUSE9EX1BPU0lUSU9OIiwiU2Nyb2xsU3B5IiwicmVmcmVzaCIsImF1dG9NZXRob2QiLCJvZmZzZXRNZXRob2QiLCJvZmZzZXRCYXNlIiwidGFyZ2V0cyIsInRhcmdldFNlbGVjdG9yIiwidGFyZ2V0QkNSIiwiaXRlbSIsIl9nZXRTY3JvbGxUb3AiLCJfZ2V0U2Nyb2xsSGVpZ2h0IiwiX2dldE9mZnNldEhlaWdodCIsIl9wcm9jZXNzIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwibWF4U2Nyb2xsIiwiaXNBY3RpdmVUYXJnZXQiLCJfYWN0aXZhdGUiLCJxdWVyaWVzIiwibGluayIsIl9jbGVhciIsIm5vZGUiLCJDTEFTU19OQU1FX0RST1BET1dOX01FTlUiLCJTRUxFQ1RPUl9BQ1RJVkVfVUwiLCJTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQiLCJUYWIiLCJsaXN0RWxlbWVudCIsIml0ZW1TZWxlY3RvciIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiaXNUcmFuc2l0aW9uaW5nIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93biIsIkNMQVNTX05BTUVfSElERSIsIkNMQVNTX05BTUVfU0hPV0lORyIsImF1dG9oaWRlIiwiVG9hc3QiLCJfY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUEs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OWYsYUFBZDhmLEM7QUFxSk47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQXRrQixvQkFBa0IsQ0FBQyxZQUFNO0FBQ3ZCLFFBQU0rRCxDQUFDLEdBQUdqRSxTQUFWO0FBQ0E7O0FBQ0EsV0FBTztBQUNMLFVBQU1vRyxrQkFBa0IsR0FBR25DLENBQUMsQ0FBREEsR0FBM0IsTUFBMkJBLENBQTNCO0FBQ0FBLE9BQUMsQ0FBREEsYUFBYXVnQixLQUFLLENBQWxCdmdCO0FBQ0FBLE9BQUMsQ0FBREE7O0FBQ0FBLE9BQUMsQ0FBREEsd0JBQXdCLFlBQU07QUFDNUJBLFNBQUMsQ0FBREE7QUFDQSxlQUFPdWdCLEtBQUssQ0FBWjtBQUZGdmdCO0FBSUQ7QUFYSC9ELEdBQWtCLENBQWxCQTtBQzFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBY0Esa0JBQWU7QUFDYnNGLFNBQUssRUFEUTtBQUViZSxVQUFNLEVBRk87QUFHYmtGLFlBQVEsRUFISztBQUlibUUsWUFBUSxFQUpLO0FBS2JvRSxZQUFRLEVBTEs7QUFNYmdELFNBQUssRUFOUTtBQU9ibUssV0FBTyxFQVBNO0FBUWJlLGFBQVMsRUFSSTtBQVNieUIsT0FBRyxFQVRVO0FBVWJhLFNBQUssRUFWUTtBQVdibEcsV0FBTyxFQUFQQTtBQVhhLEdBQWYiLCJmaWxlIjoiYm9vdHN0cmFwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGExKTogdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5cbi8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmNvbnN0IHRvVHlwZSA9IG9iaiA9PiB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYCR7b2JqfWBcbiAgfVxuXG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gIGRvIHtcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRClcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICByZXR1cm4gcHJlZml4XG59XG5cbmNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcpXG5cbiAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgY29uc3QgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiBudWxsXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBnZXRFbGVtZW50RnJvbVNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGxcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmogPT4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG5cbmNvbnN0IGVtdWxhdGVUcmFuc2l0aW9uRW5kID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PiB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1XG4gIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBkdXJhdGlvbiArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgIGNhbGxlZCA9IHRydWVcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGxpc3RlbmVyKVxuICB9XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBsaXN0ZW5lcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpXG4gICAgfVxuICB9LCBlbXVsYXRlZER1cmF0aW9uKVxufVxuXG5jb25zdCB0eXBlQ2hlY2tDb25maWcgPSAoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykgPT4ge1xuICBPYmplY3Qua2V5cyhjb25maWdUeXBlcykuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XVxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlICYmIGlzRWxlbWVudCh2YWx1ZSkgP1xuICAgICAgJ2VsZW1lbnQnIDpcbiAgICAgIHRvVHlwZSh2YWx1ZSlcblxuICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogYCArXG4gICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoZWxlbWVudC5zdHlsZSAmJiBlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlKSB7XG4gICAgY29uc3QgZWxlbWVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIGNvbnN0IHBhcmVudE5vZGVTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgcmV0dXJuIGVsZW1lbnRTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIHBhcmVudE5vZGVTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIGVsZW1lbnRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJ1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IGZ1bmN0aW9uICgpIHt9XG5cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4gZWxlbWVudC5vZmZzZXRIZWlnaHRcblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBjb25zdCB7IGpRdWVyeSB9ID0gd2luZG93XG5cbiAgaWYgKGpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4galF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuZXhwb3J0IHtcbiAgVFJBTlNJVElPTl9FTkQsXG4gIGdldFVJRCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICBpc0VsZW1lbnQsXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICB0eXBlQ2hlY2tDb25maWcsXG4gIGlzVmlzaWJsZSxcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIG5vb3AsXG4gIHJlZmxvdyxcbiAgZ2V0alF1ZXJ5LFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIGlzUlRMXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMSk6IGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgbWFwRGF0YSA9ICgoKSA9PiB7XG4gIGNvbnN0IHN0b3JlRGF0YSA9IHt9XG4gIGxldCBpZCA9IDFcbiAgcmV0dXJuIHtcbiAgICBzZXQoZWxlbWVudCwga2V5LCBkYXRhKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQuYnNLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsZW1lbnQuYnNLZXkgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgICAgaWQrK1xuICAgICAgfVxuXG4gICAgICBzdG9yZURhdGFbZWxlbWVudC5ic0tleS5pZF0gPSBkYXRhXG4gICAgfSxcbiAgICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgdHlwZW9mIGVsZW1lbnQuYnNLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleVByb3BlcnRpZXMgPSBlbGVtZW50LmJzS2V5XG4gICAgICBpZiAoa2V5UHJvcGVydGllcy5rZXkgPT09IGtleSkge1xuICAgICAgICByZXR1cm4gc3RvcmVEYXRhW2tleVByb3BlcnRpZXMuaWRdXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICBkZWxldGUoZWxlbWVudCwga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQuYnNLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXlQcm9wZXJ0aWVzID0gZWxlbWVudC5ic0tleVxuICAgICAgaWYgKGtleVByb3BlcnRpZXMua2V5ID09PSBrZXkpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlRGF0YVtrZXlQcm9wZXJ0aWVzLmlkXVxuICAgICAgICBkZWxldGUgZWxlbWVudC5ic0tleVxuICAgICAgfVxuICAgIH1cbiAgfVxufSkoKVxuXG5jb25zdCBEYXRhID0ge1xuICBzZXREYXRhKGluc3RhbmNlLCBrZXksIGRhdGEpIHtcbiAgICBtYXBEYXRhLnNldChpbnN0YW5jZSwga2V5LCBkYXRhKVxuICB9LFxuICBnZXREYXRhKGluc3RhbmNlLCBrZXkpIHtcbiAgICByZXR1cm4gbWFwRGF0YS5nZXQoaW5zdGFuY2UsIGtleSlcbiAgfSxcbiAgcmVtb3ZlRGF0YShpbnN0YW5jZSwga2V5KSB7XG4gICAgbWFwRGF0YS5kZWxldGUoaW5zdGFuY2UsIGtleSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMSk6IGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gZ2V0VWlkRXZlbnQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSBlbGVtZW50XG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGxldCBpID0gZG9tRWxlbWVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0YXJnZXRcblxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVG8gcGxlYXNlIEVTTGludFxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIGNvbnN0IHVpZEV2ZW50TGlzdCA9IE9iamVjdC5rZXlzKGV2ZW50cylcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdWlkRXZlbnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbdWlkRXZlbnRMaXN0W2ldXVxuXG4gICAgaWYgKGV2ZW50Lm9yaWdpbmFsSGFuZGxlciA9PT0gaGFuZGxlciAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGV2ZW50XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgY29uc3QgZGVsZWdhdGlvbiA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICBjb25zdCBvcmlnaW5hbEhhbmRsZXIgPSBkZWxlZ2F0aW9uID8gZGVsZWdhdGlvbkZuIDogaGFuZGxlclxuXG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgbGV0IHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICBjb25zdCBjdXN0b20gPSBjdXN0b21FdmVudHNbdHlwZUV2ZW50XVxuXG4gIGlmIChjdXN0b20pIHtcbiAgICB0eXBlRXZlbnQgPSBjdXN0b21cbiAgfVxuXG4gIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgaWYgKCFpc05hdGl2ZSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgaGFuZGxlciA9IGRlbGVnYXRpb25GblxuICAgIGRlbGVnYXRpb25GbiA9IG51bGxcbiAgfVxuXG4gIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcbiAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGbikge1xuICAgIHByZXZpb3VzRm4ub25lT2ZmID0gcHJldmlvdXNGbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IGdldFVpZEV2ZW50KG9yaWdpbmFsSGFuZGxlciwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGRlbGVnYXRpb24gP1xuICAgIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbikgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlcilcblxuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGxcbiAgZm4ub3JpZ2luYWxIYW5kbGVyID0gb3JpZ2luYWxIYW5kbGVyXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgZGVsZWdhdGlvbilcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvcilcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKVxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cblxuICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChoYW5kbGVyS2V5ID0+IHtcbiAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2hhbmRsZXJLZXldXG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCBmYWxzZSlcbiAgfSxcblxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgdHJ1ZSlcbiAgfSxcblxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudClcbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKVxuXG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbEhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghZXZlbnRzIHx8ICFldmVudHNbdHlwZUV2ZW50XSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChlbGVtZW50RXZlbnQgPT4ge1xuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG4gICAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goa2V5SGFuZGxlcnMgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpXG5cbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtrZXlIYW5kbGVyc11cblxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJylcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnRcbiAgICBjb25zdCBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KVxuXG4gICAgbGV0IGpRdWVyeUV2ZW50XG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcbiAgICBsZXQgZXZ0ID0gbnVsbFxuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncylcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KVxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICB9XG5cbiAgICBpZiAoaXNOYXRpdmUpIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJylcbiAgICAgIGV2dC5pbml0RXZlbnQodHlwZUV2ZW50LCBidWJibGVzLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBtZXJnZSBjdXN0b20gaW5mb3JtYXRpb24gaW4gb3VyIGV2ZW50XG4gICAgaWYgKHR5cGVvZiBhcmdzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZ0LCBrZXksIHtcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJnc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgfVxuXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIHR5cGVvZiBqUXVlcnlFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMSk6IGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjAuMC1iZXRhMSdcblxuY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgRGF0YS5zZXREYXRhKGVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvKiogU3RhdGljICovXG5cbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXREYXRhKGVsZW1lbnQsIHRoaXMuREFUQV9LRVkpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMSk6IGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZ2V0alF1ZXJ5LFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIFRSQU5TSVRJT05fRU5ELFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnRcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYWxlcnQnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJhbGVydFwiXSdcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTTkFNRV9BTEVSVCA9ICdhbGVydCdcbmNvbnN0IENMQVNTTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU05BTUVfU0hPVyA9ICdzaG93J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBjbG9zZShlbGVtZW50KSB7XG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBlbGVtZW50ID8gdGhpcy5fZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkgOiB0aGlzLl9lbGVtZW50XG4gICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgIGlmIChjdXN0b21FdmVudCA9PT0gbnVsbCB8fCBjdXN0b21FdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkgfHwgZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU05BTUVfQUxFUlR9YClcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0NMT1NFKVxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU05BTUVfU0hPVylcblxuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NOQU1FX0ZBREUpKSB7XG4gICAgICB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbmUoZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsICgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpKVxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGVsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9ESVNNSVNTLCBBbGVydC5oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkFsZXJ0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxub25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoJCkge1xuICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cbiAgICAkLmZuW05BTUVdID0gQWxlcnQualF1ZXJ5SW50ZXJmYWNlXG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFsZXJ0XG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgcmV0dXJuIEFsZXJ0LmpRdWVyeUludGVyZmFjZVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGExKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5LCBvbkRPTUNvbnRlbnRMb2FkZWQgfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdidXR0b24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldERhdGEodGhpcywgREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgbGV0IGRhdGEgPSBEYXRhLmdldERhdGEoYnV0dG9uLCBEQVRBX0tFWSlcbiAgaWYgKCFkYXRhKSB7XG4gICAgZGF0YSA9IG5ldyBCdXR0b24oYnV0dG9uKVxuICB9XG5cbiAgZGF0YS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkJ1dHRvbiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbm9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCQpIHtcbiAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG4gICAgJC5mbltOQU1FXSA9IEJ1dHRvbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQnV0dG9uXG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICByZXR1cm4gQnV0dG9uLmpRdWVyeUludGVyZmFjZVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMSk6IGRvbS9tYW5pcHVsYXRvci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsKSB7XG4gIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodmFsID09PSBOdW1iZXIodmFsKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWwpXG4gIH1cblxuICBpZiAodmFsID09PSAnJyB8fCB2YWwgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKVxuICAgICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSlcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gYXR0cmlidXRlc1xuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpXG4gIH0sXG5cbiAgb2Zmc2V0KGVsZW1lbnQpIHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuICAgIH1cbiAgfSxcblxuICBwb3NpdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiBlbGVtZW50Lm9mZnNldExlZnRcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaXB1bGF0b3JcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGExKTogZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5PREVfVEVYVCA9IDNcblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKVxuICB9LFxuXG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG5cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGVcblxuICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgYW5jZXN0b3Iubm9kZVR5cGUgIT09IE5PREVfVEVYVCkge1xuICAgICAgaWYgKHRoaXMubWF0Y2hlcyhhbmNlc3Rvciwgc2VsZWN0b3IpKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIH1cblxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmICh0aGlzLm1hdGNoZXMobmV4dCwgc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGExKTogY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBnZXRqUXVlcnksXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgVFJBTlNJVElPTl9FTkQsXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZTogZmFsc2UsXG4gIHBhdXNlOiAnaG92ZXInLFxuICB3cmFwOiB0cnVlLFxuICB0b3VjaDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2xpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcDogJ2Jvb2xlYW4nLFxuICB0b3VjaDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IERJUkVDVElPTl9ORVhUID0gJ25leHQnXG5jb25zdCBESVJFQ1RJT05fUFJFViA9ICdwcmV2J1xuY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCdcbmNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdyaWdodCdcblxuY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TTElEID0gYHNsaWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSE1PVkUgPSBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJVUCA9IGBwb2ludGVydXAke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSdcbmNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfTkVYVF9QUkVWID0gJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBvaW50ZXJUeXBlID0ge1xuICBUT1VDSDogJ3RvdWNoJyxcbiAgUEVOOiAncGVuJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBuZXh0KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fTkVYVClcbiAgICB9XG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX1BSRVYpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ORVhUX1BSRVYsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpXG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA+IGFjdGl2ZUluZGV4ID9cbiAgICAgIERJUkVDVElPTl9ORVhUIDpcbiAgICAgIERJUkVDVElPTl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24sIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICAvLyBzd2lwZSBsZWZ0XG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHRoaXMucHJldigpXG4gICAgfVxuXG4gICAgLy8gc3dpcGUgcmlnaHRcbiAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCBldmVudCA9PiB0aGlzLnBhdXNlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFLCBldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIHRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBzdGFydCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIGlmIChldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KS5mb3JFYWNoKGl0ZW1JbWcgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGl0ZW1JbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IGVuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiBtb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVk6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUgP1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCBlbGVtZW50LnBhcmVudE5vZGUpIDpcbiAgICAgIFtdXG5cbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBpc05leHREaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9ORVhUXG4gICAgY29uc3QgaXNQcmV2RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fUFJFVlxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDFcbiAgICBjb25zdCBpc0dvaW5nVG9XcmFwID0gKGlzUHJldkRpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNOZXh0RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4KVxuXG4gICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fUFJFViA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTEgP1xuICAgICAgdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOlxuICAgICAgdGhpcy5faXRlbXNbaXRlbUluZGV4XVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpKVxuXG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgaW5kaWNhdG9ycyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2F0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluZGljYXRvcnNbaV0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW1xuICAgICAgICB0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudClcbiAgICAgIF1cblxuICAgICAgaWYgKG5leHRJbmRpY2F0b3IpIHtcbiAgICAgICAgbmV4dEluZGljYXRvci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICBpZiAoZWxlbWVudEludGVydmFsKSB7XG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgKGFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5fZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkpXG5cbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG5cbiAgICBsZXQgZGlyZWN0aW9uYWxDbGFzc05hbWVcbiAgICBsZXQgb3JkZXJDbGFzc05hbWVcbiAgICBsZXQgZXZlbnREaXJlY3Rpb25OYW1lXG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTkVYVCkge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDTEFTU19OQU1FX1NUQVJUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENMQVNTX05BTUVfTkVYVFxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRElSRUNUSU9OX0xFRlRcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDTEFTU19OQU1FX0VORFxuICAgICAgb3JkZXJDbGFzc05hbWUgPSBDTEFTU19OQU1FX1BSRVZcbiAgICAgIGV2ZW50RGlyZWN0aW9uTmFtZSA9IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpKSB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUoYWN0aXZlRWxlbWVudCwgVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCB7XG4gICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICAgICAgZnJvbTogYWN0aXZlRWxlbWVudEluZGV4LFxuICAgICAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAwKVxuICAgICAgfSlcblxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoYWN0aXZlRWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGNhcm91c2VsSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICBfY29uZmlnID0ge1xuICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAuLi5jb25maWdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbChlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgZGF0YS50byhjb25maWcpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVthY3Rpb25dKClcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICBkYXRhLnBhdXNlKClcbiAgICAgIGRhdGEuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRhcmdldCksXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICAgIH1cbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGFyZ2V0LCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgRGF0YS5nZXREYXRhKHRhcmdldCwgREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgQ2Fyb3VzZWwuZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UoY2Fyb3VzZWxzW2ldLCBEYXRhLmdldERhdGEoY2Fyb3VzZWxzW2ldLCBEQVRBX0tFWSkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5DYXJvdXNlbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbm9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCQpIHtcbiAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG4gICAgJC5mbltOQU1FXSA9IENhcm91c2VsLmpRdWVyeUludGVyZmFjZVxuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJvdXNlbFxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgIHJldHVybiBDYXJvdXNlbC5qUXVlcnlJbnRlcmZhY2VcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMSk6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZ2V0alF1ZXJ5LFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIFRSQU5TSVRJT05fRU5ELFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGlzRWxlbWVudCxcbiAgcmVmbG93LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2NvbGxhcHNlJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdG9nZ2xlOiB0cnVlLFxuICBwYXJlbnQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGU6ICdib29sZWFuJyxcbiAgcGFyZW50OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLnNob3csIC5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFNlbGVjdG9yRW5naW5lLmZpbmQoXG4gICAgICBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1baHJlZj1cIiMke2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9W2RhdGEtYnMtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgKVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgZWxlbSA9IHRvZ2dsZUxpc3RbaV1cbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtID0+IGZvdW5kRWxlbSA9PT0gZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlc1xuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgYWN0aXZlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFUywgdGhpcy5fcGFyZW50KVxuICAgICAgICAuZmlsdGVyKGVsZW0gPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWN0aXZlcyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRoaXMuX3NlbGVjdG9yKVxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBjb25zdCB0ZW1wQWN0aXZlRGF0YSA9IGFjdGl2ZXMuZmluZChlbGVtID0+IGNvbnRhaW5lciAhPT0gZWxlbSlcbiAgICAgIGFjdGl2ZXNEYXRhID0gdGVtcEFjdGl2ZURhdGEgPyBEYXRhLmdldERhdGEodGVtcEFjdGl2ZURhdGEsIERBVEFfS0VZKSA6IG51bGxcblxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGFjdGl2ZXMuZm9yRWFjaChlbGVtQWN0aXZlID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAhPT0gZWxlbUFjdGl2ZSkge1xuICAgICAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1BY3RpdmUsICdoaWRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgICBEYXRhLnNldERhdGEoZWxlbUFjdGl2ZSwgREFUQV9LRVksIG51bGwpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG4gICAgfVxuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKVxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGhcbiAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldXG4gICAgICAgIGNvbnN0IGVsZW0gPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpXG5cbiAgICAgICAgaWYgKGVsZW0gJiYgIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gICAgdGhpcy5fY29uZmlnID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCA9IG51bGxcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFdJRFRIKSA/IFdJRFRIIDogSEVJR0hUXG4gIH1cblxuICBfZ2V0UGFyZW50KCkge1xuICAgIGxldCB7IHBhcmVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoaXNFbGVtZW50KHBhcmVudCkpIHtcbiAgICAgIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0XG4gICAgICBpZiAodHlwZW9mIHBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBwYXJlbnRbMF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudFswXVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHBhcmVudClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RvciA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtkYXRhLWJzLXBhcmVudD1cIiR7cGFyZW50fVwiXWBcblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHBhcmVudClcbiAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudClcblxuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgW2VsZW1lbnRdXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGlmICghZWxlbWVudCB8fCAhdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNPcGVuID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdHJpZ2dlckFycmF5LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgIH1cblxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBjb2xsYXBzZUludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UoZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgdHJpZ2dlckRhdGEgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG5cbiAgc2VsZWN0b3JFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgbGV0IGNvbmZpZ1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAvLyB1cGRhdGUgcGFyZW50IGF0dHJpYnV0ZVxuICAgICAgaWYgKGRhdGEuX3BhcmVudCA9PT0gbnVsbCAmJiB0eXBlb2YgdHJpZ2dlckRhdGEucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBkYXRhLl9jb25maWcucGFyZW50ID0gdHJpZ2dlckRhdGEucGFyZW50XG4gICAgICAgIGRhdGEuX3BhcmVudCA9IGRhdGEuX2dldFBhcmVudCgpXG4gICAgICB9XG5cbiAgICAgIGNvbmZpZyA9ICd0b2dnbGUnXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IHRyaWdnZXJEYXRhXG4gICAgfVxuXG4gICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKVxuICB9KVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkNvbGxhcHNlIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxub25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoJCkge1xuICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cbiAgICAkLmZuW05BTUVdID0gQ29sbGFwc2UualF1ZXJ5SW50ZXJmYWNlXG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgcmV0dXJuIENvbGxhcHNlLmpRdWVyeUludGVyZmFjZVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCIvKjo6IGltcG9ydCB0eXBlIHsgV2luZG93IH0gZnJvbSAnLi4vdHlwZXMnOyAqL1xuXG4vKjo6IGRlY2xhcmUgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGU6IE5vZGUgfCBXaW5kb3cpOiBXaW5kb3c7ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuLyo6OiBkZWNsYXJlIGZ1bmN0aW9uIGlzRWxlbWVudChub2RlOiBtaXhlZCk6IGJvb2xlYW4gJWNoZWNrcyhub2RlIGluc3RhbmNlb2ZcbiAgRWxlbWVudCk7ICovXG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cbi8qOjogZGVjbGFyZSBmdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGU6IG1peGVkKTogYm9vbGVhbiAlY2hlY2tzKG5vZGUgaW5zdGFuY2VvZlxuICBIVE1MRWxlbWVudCk7ICovXG5cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuLyo6OiBkZWNsYXJlIGZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlOiBtaXhlZCk6IGJvb2xlYW4gJWNoZWNrcyhub2RlIGluc3RhbmNlb2ZcbiAgU2hhZG93Um9vdCk7ICovXG5cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgICAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCIvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfTtcbn0iLCJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWU6IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vICRGbG93Rml4TWU6IHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuICAgIGVsZW1lbnQuaG9zdCB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcblxuICBpZiAob2Zmc2V0UGFyZW50KSB7XG4gICAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcblxuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJyAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLndpbGxDaGFuZ2UgJiYgY3NzLndpbGxDaGFuZ2UgIT09ICdhdXRvJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpKSwgcGFkZGluZ09iamVjdCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWUgKyBcIiNwZXJzaXN0ZW50XCJdLnBhZGRpbmc7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBlbGVtZW50IG11c3QgYmUgYW4gSFRNTEVsZW1lbnQgKG5vdCBhbiBTVkdFbGVtZW50KS4nLCAnVG8gdXNlIGFuIFNWRyBhcnJvdywgd3JhcCBpdCBpbiBhbiBIVE1MRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcycsICd0aGUgYXJyb3cuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBtb2RpZmllclxcJ3MgYGVsZW1lbnRgIG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgcG9wcGVyJywgJ2VsZW1lbnQuJ10uam9pbignICcpKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lICsgXCIjcGVyc2lzdGVudFwiXSA9IHtcbiAgICBwYWRkaW5nOiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpXG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5yb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgIHk6IE1hdGgucm91bmQoeSAqIGRwcikgLyBkcHIgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlO1xuXG4gIHZhciBfcm91bmRPZmZzZXRzID0gcm91bmRPZmZzZXRzKG9mZnNldHMpLFxuICAgICAgeCA9IF9yb3VuZE9mZnNldHMueCxcbiAgICAgIHkgPSBfcm91bmRPZmZzZXRzLnk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuICAgIH0gLy8gJEZsb3dGaXhNZTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuICAgIC8qOjogb2Zmc2V0UGFyZW50ID0gKG9mZnNldFBhcmVudDogRWxlbWVudCk7ICovXG5cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB5IC09IG9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB4IC09IG9mZnNldFBhcmVudC5jbGllbnRXaWR0aCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMpLCB7fSwgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcyksIHt9LCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmMykge1xuICB2YXIgc3RhdGUgPSBfcmVmMy5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciksIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzKSwge30sIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdyksIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzKSwge30sIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZVxuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIpLCB7fSwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB4OiByZWN0LmxlZnQsXG4gICAgeTogcmVjdC50b3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICB2YXIgd2lkdGggPSBNYXRoLm1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBNYXRoLm1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWU6IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlIFxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBnZXROb2RlTmFtZShzY3JvbGxQYXJlbnQpID09PSAnYm9keSc7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWU6IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVjdCksIHt9LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzSFRNTEVsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IE1hdGgubWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IE1hdGgubWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gTWF0aC5taW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBNYXRoLm1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IE1hdGguZmxvb3Iob2Zmc2V0c1ttYWluQXhpc10pIC0gTWF0aC5mbG9vcihyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IE1hdGguZmxvb3Iob2Zmc2V0c1ttYWluQXhpc10pICsgTWF0aC5jZWlsKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QpLCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5cbi8qOjogdHlwZSBPdmVyZmxvd3NNYXAgPSB7IFtDb21wdXRlZFBsYWNlbWVudF06IG51bWJlciB9OyAqL1xuXG4vKjs7IHR5cGUgT3ZlcmZsb3dzTWFwID0geyBba2V5IGluIENvbXB1dGVkUGxhY2VtZW50XTogbnVtYmVyIH07ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7IC8vICRGbG93Rml4TWVcblxuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciksIHt9LCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZWN0cyksIHt9LCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTsiLCJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi4vdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMpLCB7fSwge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gTWF0aC5taW4obWluLCB0ZXRoZXJNaW4pIDogbWluLCBvZmZzZXQsIHRldGhlciA/IE1hdGgubWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKF9taW4sIF9vZmZzZXQsIF9tYXgpO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRIVE1MRWxlbWVudFNjcm9sbCBmcm9tIFwiLi9nZXRIVE1MRWxlbWVudFNjcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZVNjcm9sbCBmcm9tIFwiLi9nZXROb2RlU2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50KTtcbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iLCJpbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBzb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5ODc1MjU1XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZyksIGN1cnJlbnQpLCB7fSwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zKSwgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSksIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgdmFsaWRhdGVNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanNcIjtcbmltcG9ydCB1bmlxdWVCeSBmcm9tIFwiLi91dGlscy91bmlxdWVCeS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMpLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgc3RhdGUub3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMSk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuXG5pbXBvcnQge1xuICBnZXRqUXVlcnksXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNFbGVtZW50LFxuICBpc1Zpc2libGUsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBTUEFDRV9LRVkgPSAnU3BhY2UnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZfXwke0FSUk9XX0RPV05fS0VZfXwke0VTQ0FQRV9LRVl9YClcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RJU0FCTEVEID0gJ2Rpc2FibGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSID0gJ25hdmJhcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9GT1JNX0NISUxEID0gJy5kcm9wZG93biBmb3JtJ1xuY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IDAsXG4gIGZsaXA6IHRydWUsXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBwb3BwZXJDb25maWc6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGZsaXA6ICdib29sZWFuJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3QpJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX21lbnUgPSB0aGlzLl9nZXRNZW51RWxlbWVudCgpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRElTQUJMRUQpIHx8IHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBUb3RhbGx5IGRpc2FibGUgUG9wcGVyIGZvciBEcm9wZG93bnMgaW4gTmF2YmFyXG4gICAgaWYgKCF0aGlzLl9pbk5hdmJhcikge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gcGFyZW50XG4gICAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0J3MgalF1ZXJ5IGVsZW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVswXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAhcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtID0+IEV2ZW50SGFuZGxlci5vbihlbGVtLCAnbW91c2VvdmVyJywgbnVsbCwgbm9vcCgpKSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocGFyZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCkgfHwgIXRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihwYXJlbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocGFyZW50LCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZKVxuICAgIHRoaXMuX21lbnUgPSBudWxsXG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDSywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF1cbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTkFWQkFSfWApICE9PSBudWxsXG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYWx0Qm91bmRhcnk6IHRoaXMuX2NvbmZpZy5mbGlwLFxuICAgICAgICAgIHJvb3RCb3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgcG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5wb3BwZXJDb25maWcsXG4gICAgICAuLi50aGlzLl9jb25maWcucG9wcGVyQ29uZmlnXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGRyb3Bkb3duSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bihlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgRHJvcGRvd24uZHJvcGRvd25JbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudCAmJiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRvZ2dsZXNbaV0pXG4gICAgICBjb25zdCBjb250ZXh0ID0gRGF0YS5nZXREYXRhKHRvZ2dsZXNbaV0sIERBVEFfS0VZKVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudVxuICAgICAgaWYgKCF0b2dnbGVzW2ldLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiAoKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkgfHxcbiAgICAgICAgICAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpKSAmJlxuICAgICAgICAgIGRyb3Bkb3duTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHBhcmVudCwgRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgICAgLmZvckVhY2goZWxlbSA9PiBFdmVudEhhbmRsZXIub2ZmKGVsZW0sICdtb3VzZW92ZXInLCBudWxsLCBub29wKCkpKVxuICAgICAgfVxuXG4gICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgIGlmIChjb250ZXh0Ll9wb3BwZXIpIHtcbiAgICAgICAgY29udGV4dC5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgfVxuXG4gICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0b2dnbGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocGFyZW50LCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID9cbiAgICAgIGV2ZW50LmtleSA9PT0gU1BBQ0VfS0VZIHx8IChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkgJiZcbiAgICAgICgoZXZlbnQua2V5ICE9PSBBUlJPV19ET1dOX0tFWSAmJiBldmVudC5rZXkgIT09IEFSUk9XX1VQX0tFWSkgfHxcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfTUVOVSkpKSA6XG4gICAgICAhUkVHRVhQX0tFWURPV04udGVzdChldmVudC5rZXkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuICAgICAgYnV0dG9uLmZvY3VzKClcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBldmVudC5rZXkgPT09IFNQQUNFX0tFWSkge1xuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgcGFyZW50KS5maWx0ZXIoaXNWaXNpYmxlKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgLy8gVXBcbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19VUF9LRVkgJiYgaW5kZXggPiAwKSB7XG4gICAgICBpbmRleC0tXG4gICAgfVxuXG4gICAgLy8gRG93blxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIC8vIGluZGV4IGlzIC0xIGlmIHRoZSBmaXJzdCBrZXlkb3duIGlzIGFuIEFycm93VXBcbiAgICBpbmRleCA9IGluZGV4ID09PSAtMSA/IDAgOiBpbmRleFxuXG4gICAgaXRlbXNbaW5kZXhdLmZvY3VzKClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgRHJvcGRvd24uZHJvcGRvd25JbnRlcmZhY2UodGhpcywgJ3RvZ2dsZScpXG59KVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfRk9STV9DSElMRCwgZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuRHJvcGRvd24gdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5vbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICgkKSB7XG4gICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICAgICQuZm5bTkFNRV0gPSBEcm9wZG93bi5qUXVlcnlJbnRlcmZhY2VcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICByZXR1cm4gRHJvcGRvd24ualF1ZXJ5SW50ZXJmYWNlXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTEpOiBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGdldGpRdWVyeSxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBUUkFOU0lUSU9OX0VORCxcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc1Zpc2libGUsXG4gIGlzUlRMLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIGZvY3VzOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VVUF9ESVNNSVNTID0gYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJ1xuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IDBcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgIHRoaXMuX3NldFNjcm9sbGJhcigpXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MsIGV2ZW50ID0+IHRoaXMuaGlkZShldmVudCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRVVQX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsIGV2ZW50ID0+IHRoaXMuX2hpZGVNb2RhbChldmVudCkpXG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbCgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBbd2luZG93LCB0aGlzLl9lbGVtZW50LCB0aGlzLl9kaWFsb2ddXG4gICAgICAuZm9yRWFjaChodG1sRWxlbWVudCA9PiBFdmVudEhhbmRsZXIub2ZmKGh0bWxFbGVtZW50LCBFVkVOVF9LRVkpKVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG5cbiAgICAvKipcbiAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRVZFTlRfRk9DVVNJTmAgYW5kIGBFVkVOVF9DTElDS19EQVRBX0FQSWBcbiAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICogSXQgd2lsbCByZW1vdmUgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgKi9cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKVxuXG4gICAgdGhpcy5fY29uZmlnID0gbnVsbFxuICAgIHRoaXMuX2RpYWxvZyA9IG51bGxcbiAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duID0gbnVsbFxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gbnVsbFxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gbnVsbFxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01PREFMX0JPRFksIHRoaXMuX2RpYWxvZylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcblxuICAgIGlmIChtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZGlhbG9nLCBUUkFOU0lUSU9OX0VORCwgdHJhbnNpdGlvbkNvbXBsZXRlKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZGlhbG9nLCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHtcbiAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgIXRoaXMuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHRoaXMuX2FkanVzdERpYWxvZygpKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgRVZFTlRfUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pXG4gICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKClcbiAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsYmFyKClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fYmFja2Ryb3ApXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYW5pbWF0ZSA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkgP1xuICAgICAgQ0xBU1NfTkFNRV9GQURFIDpcbiAgICAgICcnXG5cbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1BcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICByZWZsb3codGhpcy5fYmFja2Ryb3ApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9iYWNrZHJvcCwgVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fYmFja2Ryb3AsIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBjb25zdCBjYWxsYmFja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fYmFja2Ryb3AsIFRSQU5TSVRJT05fRU5ELCBjYWxsYmFja1JlbW92ZSlcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fYmFja2Ryb3AsIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgVFJBTlNJVElPTl9FTkQpXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKVxuICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJydcbiAgICAgICAgfSlcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9XG4gICAgfSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKCghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmICFpc1JUTCkgfHwgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nICYmICFpc1JUTCkgfHwgKCF0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyByZWN0LnJpZ2h0KSA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9nZXRTY3JvbGxiYXJXaWR0aCgpXG4gIH1cblxuICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgLy8gTm90ZTogRE9NTm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlIG9yICcnIGlmIG5vdCBzZXRcbiAgICAgIC8vICAgd2hpbGUgJChET01Ob2RlKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSByZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9yIDAgaWYgbm90IHNldFxuXG4gICAgICAvLyBBZGp1c3QgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQpXG4gICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3BhZGRpbmctcmlnaHQnXVxuICAgICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7TnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBzdGlja3kgY29udGVudCBtYXJnaW5cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQpXG4gICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdHVhbE1hcmdpbiA9IGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHRcbiAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ21hcmdpbi1yaWdodCddXG4gICAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnbWFyZ2luLXJpZ2h0JywgYWN0dWFsTWFyZ2luKVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3QgYm9keSBwYWRkaW5nXG4gICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlbJ3BhZGRpbmctcmlnaHQnXVxuXG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGRvY3VtZW50LmJvZHksICdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7TnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTilcbiAgfVxuXG4gIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAvLyBSZXN0b3JlIGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfRklYRURfQ09OVEVOVClcbiAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAncGFkZGluZy1yaWdodCcpXG4gICAgICAgIGlmICh0eXBlb2YgcGFkZGluZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsICdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmdcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIC8vIFJlc3RvcmUgc3RpY2t5IGNvbnRlbnQgYW5kIG5hdmJhci10b2dnbGVyIG1hcmdpblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoYCR7U0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlR9YClcbiAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBtYXJnaW4gPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdtYXJnaW4tcmlnaHQnKVxuICAgICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsICdtYXJnaW4tcmlnaHQnKVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHQgPSBtYXJnaW5cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG4gICAgY29uc3QgcGFkZGluZyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnKVxuICAgIGlmICh0eXBlb2YgcGFkZGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShkb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcpXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmdcbiAgICB9XG4gIH1cblxuICBfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7IC8vIHRoeCBkLndhbHNoXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdilcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcyksXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBsZXQgZGF0YSA9IERhdGEuZ2V0RGF0YSh0YXJnZXQsIERBVEFfS0VZKVxuICBpZiAoIWRhdGEpIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0YXJnZXQpLFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgICB9XG5cbiAgICBkYXRhID0gbmV3IE1vZGFsKHRhcmdldCwgY29uZmlnKVxuICB9XG5cbiAgZGF0YS5zaG93KHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuTW9kYWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5vbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICgkKSB7XG4gICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICAgICQuZm5bTkFNRV0gPSBNb2RhbC5qUXVlcnlJbnRlcmZhY2VcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTW9kYWxcbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICByZXR1cm4gTW9kYWwualF1ZXJ5SW50ZXJmYWNlXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTEpOiB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJzID0gbmV3IFNldChbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2NpdGUnLFxuICAnaHJlZicsXG4gICdpdGVtdHlwZScsXG4gICdsb25nZGVzYycsXG4gICdwb3N0ZXInLFxuICAnc3JjJyxcbiAgJ3hsaW5rOmhyZWYnXG5dKVxuXG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZSk6fFteIyYvOj9dKig/OlsjLz9dfCQpKS9naVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cnMuaGFzKGF0dHJOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oYXR0ci5ub2RlVmFsdWUubWF0Y2goU0FGRV9VUkxfUEFUVEVSTikgfHwgYXR0ci5ub2RlVmFsdWUubWF0Y2goREFUQV9VUkxfUEFUVEVSTikpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHJlZ0V4cCA9IGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihhdHRyUmVnZXggPT4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnRXhwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGF0dHJOYW1lLm1hdGNoKHJlZ0V4cFtpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBhbGxvd2xpc3RLZXlzID0gT2JqZWN0LmtleXMoYWxsb3dMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghYWxsb3dsaXN0S2V5cy5pbmNsdWRlcyhlbE5hbWUpKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1iZXRhMSk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGdldGpRdWVyeSxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBUUkFOU0lUSU9OX0VORCxcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGZpbmRTaGFkb3dSb290LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IHtcbiAgRGVmYXVsdEFsbG93bGlzdCxcbiAgc2FuaXRpemVIdG1sXG59IGZyb20gJy4vdXRpbC9zYW5pdGl6ZXInXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9vbHRpcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvb2x0aXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSlcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXI6ICdzdHJpbmcnLFxuICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudHM6ICcobnVsbHxhcnJheSknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdCknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICB0aXRsZTogJycsXG4gIGRlbGF5OiAwLFxuICBodG1sOiBmYWxzZSxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IG51bGwsXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBwb3BwZXJDb25maWc6IG51bGxcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgSE9WRVJfU1RBVEVfU0hPVyA9ICdzaG93J1xuY29uc3QgSE9WRVJfU1RBVEVfT1VUID0gJ291dCdcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMudGlwID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICAgIGxldCBjb250ZXh0ID0gRGF0YS5nZXREYXRhKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBkYXRhS2V5KVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKVxuICAgICAgICBEYXRhLnNldERhdGEoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXksIGNvbnRleHQpXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTU9EQUx9YCksICdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnRpcClcbiAgICB9XG5cbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLmNvbmZpZyA9IG51bGxcbiAgICB0aGlzLnRpcCA9IG51bGxcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpXG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSBzaGFkb3dSb290ID09PSBudWxsID9cbiAgICAgICAgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLl9lbGVtZW50KSA6XG4gICAgICAgIHNoYWRvd1Jvb3QuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KVxuXG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9nZXRDb250YWluZXIoKVxuICAgICAgRGF0YS5zZXREYXRhKHRpcCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcblxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHRoaXMuX2VsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuXG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID0gdHlwZW9mIHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcuY3VzdG9tQ2xhc3MoKSA6IHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzXG4gICAgICBpZiAoY3VzdG9tQ2xhc3MpIHtcbiAgICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoLi4uY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKCkpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2SG92ZXJTdGF0ZSA9IHRoaXMuX2hvdmVyU3RhdGVcblxuICAgICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy50aXApXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy50aXAsIFRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy50aXAsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fcG9wcGVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hvdmVyU3RhdGUgIT09IEhPVkVSX1NUQVRFX1NIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbWVudCA9PiBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2VcblxuICAgIGlmICh0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRpcCwgVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGlwLCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXBcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuY29uZmlnLnRlbXBsYXRlXG5cbiAgICB0aGlzLnRpcCA9IGVsZW1lbnQuY2hpbGRyZW5bMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiwgdGlwKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgc2V0RWxlbWVudENvbnRlbnQoZWxlbWVudCwgY29udGVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIGlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgaWYgKGNvbnRlbnQuanF1ZXJ5KSB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50WzBdXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQucGFyZW50Tm9kZSAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50LnRleHRDb250ZW50XG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLmNvbmZpZy5hbGxvd0xpc3QsIHRoaXMuY29uZmlnLnNhbml0aXplRm4pXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudFxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudFxuICAgIH1cbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGxldCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLl9lbGVtZW50KSA6XG4gICAgICAgIHRoaXMuY29uZmlnLnRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH1cblxuICB1cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpIHtcbiAgICBpZiAoYXR0YWNobWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuICdlbmQnXG4gICAgfVxuXG4gICAgaWYgKGF0dGFjaG1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuICdzdGFydCdcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNobWVudFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGZsaXBNb2RpZmllciA9IHtcbiAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzKSB7XG4gICAgICBmbGlwTW9kaWZpZXIub3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMgPSB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0QnNDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgZmxpcE1vZGlmaWVyLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgcm9vdEJvdW5kYXJ5OiB0aGlzLmNvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG4gICAgICAgICAgZm46IGRhdGEgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvbkZpcnN0VXBkYXRlOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEub3B0aW9ucy5wbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzQ29uZmlnLFxuICAgICAgLi4udGhpcy5jb25maWcucG9wcGVyQ29uZmlnXG4gICAgfVxuICB9XG5cbiAgX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgdGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgJHtDTEFTU19QUkVGSVh9LSR7dGhpcy51cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpfWApXG4gIH1cblxuICBfZ2V0Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQodGhpcy5jb25maWcuY29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbnRhaW5lclxuICAgIH1cblxuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRoaXMuY29uZmlnLmNvbnRhaW5lcilcbiAgfVxuXG4gIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCB0aGlzLmNvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLl9lbnRlcihldmVudCkpXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2xlYXZlKGV2ZW50KSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gKSwgJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgY29uc3Qgb3JpZ2luYWxUaXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRpdGxlIHx8IG9yaWdpbmFsVGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSB8fCAnJylcbiAgICAgIGlmICh0aXRsZSAmJiAhdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IERhdGEuZ2V0RGF0YShldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCxcbiAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgKVxuICAgICAgRGF0YS5zZXREYXRhKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICBjb250ZXh0LnNob3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBEYXRhLmdldERhdGEoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQsXG4gICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgIClcbiAgICAgIERhdGEuc2V0RGF0YShldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZGF0YUF0dHIgPT4ge1xuICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHIpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmNvbnRhaW5lciA9PT0gJ29iamVjdCcgJiYgY29uZmlnLmNvbnRhaW5lci5qcXVlcnkpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyWzBdXG4gICAgfVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLmFsbG93TGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCB0YWJDbGFzcyA9IHRpcC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJDbGFzcy5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKVxuICAgICAgICAuZm9yRWFjaCh0Q2xhc3MgPT4gdGlwLmNsYXNzTGlzdC5yZW1vdmUodENsYXNzKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSBwb3BwZXJEYXRhXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRpcCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlclxuICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHN0YXRlLnBsYWNlbWVudCkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldERhdGEodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVG9vbHRpcCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbm9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCQpIHtcbiAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG4gICAgJC5mbltOQU1FXSA9IFRvb2x0aXAualF1ZXJ5SW50ZXJmYWNlXG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXBcbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICByZXR1cm4gVG9vbHRpcC5qUXVlcnlJbnRlcmZhY2VcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGExKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSwgb25ET01Db250ZW50TG9hZGVkIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAncG9wb3ZlcidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50OiAnJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcblxuICAgIC8vIHdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfVElUTEUsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9DT05URU5ULCB0aXApLCBjb250ZW50KVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgdGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgJHtDTEFTU19QUkVGSVh9LSR7dGhpcy51cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpfWApXG4gIH1cblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtY29udGVudCcpIHx8IHRoaXMuY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgIERhdGEuc2V0RGF0YSh0aGlzLCBEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuUG9wb3ZlciB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbm9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCQpIHtcbiAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG4gICAgJC5mbltOQU1FXSA9IFBvcG92ZXIualF1ZXJ5SW50ZXJmYWNlXG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFBvcG92ZXJcbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICByZXR1cm4gUG9wb3Zlci5qUXVlcnlJbnRlcmZhY2VcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGExKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZ2V0alF1ZXJ5LFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Njcm9sbHNweSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IDEwLFxuICBtZXRob2Q6ICdhdXRvJyxcbiAgdGFyZ2V0OiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnbnVtYmVyJyxcbiAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgdGFyZ2V0OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TQ1JPTEwgPSBgc2Nyb2xsJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBNRVRIT0RfT0ZGU0VUID0gJ29mZnNldCdcbmNvbnN0IE1FVEhPRF9QT1NJVElPTiA9ICdwb3NpdGlvbidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJyA/IHdpbmRvdyA6IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3NlbGVjdG9yID0gYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTElTVF9JVEVNU30sICR7dGhpcy5fY29uZmlnLnRhcmdldH0gLiR7Q0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNfWBcbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gMFxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX1NDUk9MTCwgZXZlbnQgPT4gdGhpcy5fcHJvY2VzcyhldmVudCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93ID9cbiAgICAgIE1FVEhPRF9PRkZTRVQgOlxuICAgICAgTUVUSE9EX1BPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgP1xuICAgICAgYXV0b01ldGhvZCA6XG4gICAgICB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBNRVRIT0RfUE9TSVRJT04gP1xuICAgICAgdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOlxuICAgICAgMFxuXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKVxuXG4gICAgdGFyZ2V0cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldFNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0YXJnZXRTZWxlY3RvcikgOiBudWxsXG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBNYW5pcHVsYXRvcltvZmZzZXRNZXRob2RdKHRhcmdldCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuX29mZnNldHMucHVzaChpdGVtWzBdKVxuICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfS0VZKVxuXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBudWxsXG4gICAgdGhpcy5fb2Zmc2V0cyA9IG51bGxcbiAgICB0aGlzLl90YXJnZXRzID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgaXNFbGVtZW50KGNvbmZpZy50YXJnZXQpKSB7XG4gICAgICBsZXQgeyBpZCB9ID0gY29uZmlnLnRhcmdldFxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IGdldFVJRChOQU1FKVxuICAgICAgICBjb25maWcudGFyZ2V0LmlkID0gaWRcbiAgICAgIH1cblxuICAgICAgY29uZmlnLnRhcmdldCA9IGAjJHtpZH1gXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuICB9XG5cbiAgX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICApXG4gIH1cblxuICBfZ2V0T2Zmc2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgd2luZG93LmlubmVySGVpZ2h0IDpcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBfcHJvY2VzcygpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuICAgIGNvbnN0IG1heFNjcm9sbCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdICYmIHRoaXMuX29mZnNldHNbMF0gPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLl9jbGVhcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlVGFyZ2V0ID0gdGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzW2ldICYmXG4gICAgICAgICAgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV0gJiZcbiAgICAgICAgICAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fCBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSlcblxuICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX3RhcmdldHNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FjdGl2YXRlKHRhcmdldCkge1xuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgdGhpcy5fY2xlYXIoKVxuXG4gICAgY29uc3QgcXVlcmllcyA9IHRoaXMuX3NlbGVjdG9yLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9W2RhdGEtYnMtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgbGluayA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUocXVlcmllcy5qb2luKCcsJykpXG5cbiAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIGxpbmsuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgU2VsZWN0b3JFbmdpbmUucGFyZW50cyhsaW5rLCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcbiAgICAgICAgLmZvckVhY2gobGlzdEdyb3VwID0+IHtcbiAgICAgICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gKVxuICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuXG4gICAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX05BVl9JVEVNUylcbiAgICAgICAgICAgIC5mb3JFYWNoKG5hdkl0ZW0gPT4ge1xuICAgICAgICAgICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihuYXZJdGVtLCBTRUxFQ1RPUl9OQVZfTElOS1MpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKVxuICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpXG4gICAgLmZvckVhY2goc3B5ID0+IG5ldyBTY3JvbGxTcHkoc3B5LCBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhzcHkpKSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5TY3JvbGxTcHkgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5vbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICgkKSB7XG4gICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICAgICQuZm5bTkFNRV0gPSBTY3JvbGxTcHkualF1ZXJ5SW50ZXJmYWNlXG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFNjcm9sbFNweVxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgIHJldHVybiBTY3JvbGxTcHkualF1ZXJ5SW50ZXJmYWNlXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGExKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZ2V0alF1ZXJ5LFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIFRSQU5TSVRJT05fRU5ELFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX01FTlUgPSAnZHJvcGRvd24tbWVudSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRElTQUJMRUQgPSAnZGlzYWJsZWQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX1VMID0gJzpzY29wZSA+IGxpID4gLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEID0gJzpzY29wZSA+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICgodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmXG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpIHx8XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNFTEVDVE9SX0FDVElWRV9VTCA6IFNFTEVDVE9SX0FDVElWRVxuICAgICAgcHJldmlvdXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGl0ZW1TZWxlY3RvciwgbGlzdEVsZW1lbnQpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgbGV0IGhpZGVFdmVudCA9IG51bGxcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJREUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAhPT0gbnVsbCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX2VsZW1lbnQsIGxpc3RFbGVtZW50KVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihwcmV2aW91cywgRVZFTlRfSElEREVOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKSA/XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRV9VTCwgY29udGFpbmVyKSA6XG4gICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihjb250YWluZXIsIFNFTEVDVE9SX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdXG4gICAgY29uc3QgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgKGFjdGl2ZSAmJiBhY3RpdmUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHRoaXMuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZSlcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZShhY3RpdmUsIFRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGFjdGl2ZSwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duQ2hpbGQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCwgYWN0aXZlLnBhcmVudE5vZGUpXG5cbiAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgIGRyb3Bkb3duQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICByZWZsb3coZWxlbWVudClcblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX01FTlUpKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pXG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUpXG4gICAgICAgICAgLmZvckVhY2goZHJvcGRvd24gPT4gZHJvcGRvd24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuICBkYXRhLnNob3coKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRhYiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbm9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCQpIHtcbiAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG4gICAgJC5mbltOQU1FXSA9IFRhYi5qUXVlcnlJbnRlcmZhY2VcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVGFiXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgcmV0dXJuIFRhYi5qUXVlcnlJbnRlcmZhY2VcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYmV0YTEpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGdldGpRdWVyeSxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBUUkFOU0lUSU9OX0VORCxcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b2FzdCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJ0b2FzdFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKVxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIFRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUylcblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCAoKSA9PiB0aGlzLmhpZGUoKSlcbiAgfVxuXG4gIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvYXN0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxub25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoJCkge1xuICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cbiAgICAkLmZuW05BTUVdID0gVG9hc3QualF1ZXJ5SW50ZXJmYWNlXG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvYXN0XG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgcmV0dXJuIFRvYXN0LmpRdWVyeUludGVyZmFjZVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWJldGExKTogaW5kZXgudW1kLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vc3JjL2FsZXJ0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL3NyYy9idXR0b24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9zcmMvY2Fyb3VzZWwnXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9zcmMvY29sbGFwc2UnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9zcmMvZHJvcGRvd24nXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9zcmMvbW9kYWwnXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuL3NyYy9wb3BvdmVyJ1xuaW1wb3J0IFNjcm9sbFNweSBmcm9tICcuL3NyYy9zY3JvbGxzcHknXG5pbXBvcnQgVGFiIGZyb20gJy4vc3JjL3RhYidcbmltcG9ydCBUb2FzdCBmcm9tICcuL3NyYy90b2FzdCdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vc3JjL3Rvb2x0aXAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQWxlcnQsXG4gIEJ1dHRvbixcbiAgQ2Fyb3VzZWwsXG4gIENvbGxhcHNlLFxuICBEcm9wZG93bixcbiAgTW9kYWwsXG4gIFBvcG92ZXIsXG4gIFNjcm9sbFNweSxcbiAgVGFiLFxuICBUb2FzdCxcbiAgVG9vbHRpcFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==