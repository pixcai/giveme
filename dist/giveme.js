module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _color = __webpack_require__(1);

	var _color2 = _interopRequireDefault(_color);

	var _image = __webpack_require__(4);

	var _image2 = _interopRequireDefault(_image);

	var _is = __webpack_require__(3);

	var _is2 = _interopRequireDefault(_is);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var types = {
		color: _color2.default,
		image: _image2.default
	};

	function giveme(type, options) {
		for (var key in types) {
			if (types.hasOwnProperty(type)) {
				return types[type](options);
			}
		}
		return '';
	}

	try {
		window.giveme = giveme;
	} catch (e) {
		module.exports = giveme;
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = color;

	var _assign2 = __webpack_require__(2);

	var _assign3 = _interopRequireDefault(_assign2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * hex color
	 * @param  {Object} options
	 * options = {
	 * 	 min: 0x000000,
	 * 	 max: 0xffffff
	 * }
	 * @return {String} color(e.g. '#910abc')
	 */
	function color(options) {
		var _assign = (0, _assign3.default)(options, {
			min: 0x000000,
			max: 0xffffff
		});

		var min = _assign.min;
		var max = _assign.max;

		var value = Math.floor(Math.random() * (max - min)) + min;

		return '#' + value.toString(16);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = assign;

	var _is = __webpack_require__(3);

	var _is2 = _interopRequireDefault(_is);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function assign(target, src) {
		if (_is2.default.Undefined(target)) {
			return src;
		}
		if (_is2.default.Array(src) && _is2.default.Array(target)) {
			for (var i = 0, length = src.length; i < length; i++) {
				if (target.indexOf(src[i]) < 0) {
					target.push(src[i]);
				}
			}
		} else if (_is2.default.Object(src) && _is2.default.Object(target)) {
			var _hasOwnProperty = Object.prototype.hasOwnProperty;
			for (var key in src) {
				if (_hasOwnProperty.call(src, key)) {
					if (_is2.default.Undefined(target[key])) {
						target[key] = src[key];
					}
				}
			}
		}
		return target;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function isType(type, o) {
		return Object.prototype.toString.call(o) === '[object ' + type + ']';
	}

	exports.default = ['Null', 'Undefined', 'Boolean', 'Number', 'String', 'Array', 'Object', 'Date', 'RegExp'].reduce(function (is, type) {
		is[type] = function (o) {
			return isType(type, o);
		};
		return is;
	}, {});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = image;

	var _assign2 = __webpack_require__(2);

	var _assign3 = _interopRequireDefault(_assign2);

	var _color = __webpack_require__(1);

	var _color2 = _interopRequireDefault(_color);

	var _is = __webpack_require__(3);

	var _is2 = _interopRequireDefault(_is);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * placeholder image
	 * @param  {Object} options
	 * options = {
	 * 	 width: Math.floor(Math.random() * 1000),
	 *   height: Math.floor(Math.random() * 1000),
	 *   background: color(),
	 *   foreground: color(),
	 *   format: '',
	 *   text: ''
	 * }
	 * @return {String} url(e.g. 'https://dummyimage.com/200x200/000/fff.png&text=hello')
	 */
	function image(options) {
		var _assign = (0, _assign3.default)(options, {
			width: Math.floor(Math.random() * 1000),
			height: Math.floor(Math.random() * 1000),
			background: (0, _color2.default)(),
			foreground: (0, _color2.default)(),
			format: '',
			text: ''
		});

		var width = _assign.width;
		var height = _assign.height;
		var background = _assign.background;
		var foreground = _assign.foreground;
		var format = _assign.format;
		var text = _assign.text;

		if (options && _is2.default.Undefined(options.height)) {
			height = width;
		}
		background = background.slice(1);
		foreground = foreground.slice(1);
		var url = image.protocol + '://' + image.domain + '/' + width + 'x' + height + '/' + background + '/' + foreground + format;

		return Boolean(text) ? url + '&text=' + text.replace(/\s/g, '+') : url;
	}

	image.protocol = 'https';
	image.domain = 'dummyimage.com';

/***/ }
/******/ ]);