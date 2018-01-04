module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable import/no-unresolved */
module.exports = __webpack_require__(10)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStoreMap = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _mobxReact = __webpack_require__(3);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(0);

// 让mobx在服务端渲染时不会重复数据变换
(0, _mobxReact.useStaticRendering)(true);

var _default = function _default(stores, routerContext, url) {
  return _react2.default.createElement(
    _mobxReact.Provider,
    stores,
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: routerContext, location: url },
      _react2.default.createElement(_App2.default, null)
    )
  );
};

exports.default = _default;
exports.createStoreMap = _store.createStoreMap;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/bupt/bupt-github/react-cnode/client/server-entry.js');
})();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(6);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(0);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(
        'div',
        { key: 'app' },
        'app'
      ), _react2.default.createElement(_router2.default, { key: 'router' })];
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', 'D:/bupt/bupt-github/react-cnode/client/views/App.jsx');
})();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(12);

var _index4 = _interopRequireDefault(_index3);

var _apiTest = __webpack_require__(13);

var _apiTest2 = _interopRequireDefault(_apiTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(0);

var _default = function _default() {
  return [_react2.default.createElement(_reactRouterDom.Route, { path: '/', render: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/list' });
    }, exact: true, key: 'home' }), _react2.default.createElement(_reactRouterDom.Route, { path: '/list', component: _index2.default, key: 'list' }), _react2.default.createElement(_reactRouterDom.Route, { path: '/detail', component: _index4.default, key: 'detail' }), _react2.default.createElement(_reactRouterDom.Route, { path: '/test', component: _apiTest2.default, key: 'test' })];
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/bupt/bupt-github/react-cnode/client/config/router.jsx');
})();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = __webpack_require__(3);

var _reactHelmet = __webpack_require__(9);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(0);

var TopicList = (_dec = (0, _mobxReact.inject)('appState'), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(TopicList, _React$Component);

  function TopicList(props) {
    _classCallCheck(this, TopicList);

    var _this = _possibleConstructorReturn(this, (TopicList.__proto__ || Object.getPrototypeOf(TopicList)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(TopicList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(1);
    }
  }, {
    key: 'asyncBootstrap',
    value: function asyncBootstrap() {
      var _this2 = this;

      return new Promise(function (resolve) {
        setTimeout(function () {
          _this2.props.appState.counter = 3;
          resolve(true);
        }, 2000);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'this is a topic list'
          ),
          _react2.default.createElement('meta', { name: 'description', content: 'this is description' })
        ),
        'this is topic list',
        this.props.appState.msg
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return TopicList;
}(_react2.default.Component), _class2.propTypes = {
  appState: _propTypes2.default.object.isRequired
}, _temp)) || _class) || _class);
exports.default = TopicList;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TopicList, 'TopicList', 'D:/bupt/bupt-github/react-cnode/client/views/topic-list/index.jsx');
})();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require, import/no-mutable-exports */

if (true) {
  module.exports = __webpack_require__(11);
} else {
  module.exports = require('./patch.dev');
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = null;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(0);

var TopicDetail = function (_React$Component) {
  _inherits(TopicDetail, _React$Component);

  function TopicDetail() {
    _classCallCheck(this, TopicDetail);

    return _possibleConstructorReturn(this, (TopicDetail.__proto__ || Object.getPrototypeOf(TopicDetail)).apply(this, arguments));
  }

  _createClass(TopicDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        ' this is topic detail'
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return TopicDetail;
}(_react2.default.Component);

exports.default = TopicDetail;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TopicDetail, 'TopicDetail', 'D:/bupt/bupt-github/react-cnode/client/views/topic-detail/index.jsx');
})();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(0);

/* eslint-disable */
var TestApi = function (_React$Component) {
  _inherits(TestApi, _React$Component);

  function TestApi() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TestApi);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestApi.__proto__ || Object.getPrototypeOf(TestApi)).call.apply(_ref, [this].concat(args))), _this), _this.getTopics = function () {
      _axios2.default.get('/api/topics').then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }, _this.login = function () {
      _axios2.default.post('/api/user/login', {
        accessToken: "4fbadb6b-2fda-4108-85cc-b083749758d4"
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }, _this.markAll = function () {
      _axios2.default.post('/api/message/mark_all?needAccessToken=true').then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TestApi, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.getTopics },
          'topics'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.login },
          'login'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.markAll },
          'markAll'
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return TestApi;
}(_react2.default.Component);
/* eslint-enable */


exports.default = TestApi;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TestApi, 'TestApi', 'D:/bupt/bupt-github/react-cnode/client/views/test/api-test.jsx');
})();

;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStoreMap = exports.AppState = undefined;

var _appState = __webpack_require__(16);

var _appState2 = _interopRequireDefault(_appState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(0);

var AppState = exports.AppState = _appState2.default;

var _default = {
  AppState: AppState
};
exports.default = _default;
var createStoreMap = exports.createStoreMap = function createStoreMap() {
  return {
    appState: new AppState()
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppState, 'AppState', 'D:/bupt/bupt-github/react-cnode/client/store/store.js');
  reactHotLoader.register(createStoreMap, 'createStoreMap', 'D:/bupt/bupt-github/react-cnode/client/store/store.js');
  reactHotLoader.register(_default, 'default', 'D:/bupt/bupt-github/react-cnode/client/store/store.js');
})();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(17);

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

__webpack_require__(0);

var AppState = (_class = function () {
  function AppState() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { counter: 0, name: 'sky' },
        counter = _ref.counter,
        name = _ref.name;

    _classCallCheck(this, AppState);

    _initDefineProp(this, 'counter', _descriptor, this);

    _initDefineProp(this, 'name', _descriptor2, this);

    this.counter = counter;
    this.name = name;
  }

  _createClass(AppState, [{
    key: 'add',
    value: function add() {
      this.counter += 1;
    }
  }, {
    key: 'toJson',
    value: function toJson() {
      return {
        counter: this.counter,
        name: this.name
      };
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }, {
    key: 'msg',
    get: function get() {
      return this.name + ' say count is ' + this.counter;
    }
  }]);

  return AppState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'counter', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'msg', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'msg'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'add', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'add'), _class.prototype)), _class);
exports.default = AppState;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppState, 'AppState', 'D:/bupt/bupt-github/react-cnode/client/store/app-state.js');
})();

;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ })
/******/ ]);