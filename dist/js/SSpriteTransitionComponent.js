"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SWebComponent2 = _interopRequireDefault(require("coffeekraken-sugar/js/core/SWebComponent"));

var _STimer = _interopRequireDefault(require("coffeekraken-sugar/js/classes/STimer"));

var _debounce = _interopRequireDefault(require("coffeekraken-sugar/js/utils/functions/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_SWebComponent) {
  _inherits(Component, _SWebComponent);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "componentWillMount",

    /**
     * The urban sprite
     * @type    {String}
     */

    /**
     * Component will mount
     * @definition    SWebComponent.componentWillMount
     * @protected
     */
    value: function componentWillMount() {
      _get(_getPrototypeOf(Component.prototype), "componentWillMount", this).call(this);
    }
    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */

  }, {
    key: "componentMount",
    value: function () {
      var _componentMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _get(_getPrototypeOf(Component.prototype), "componentMount", this).call(this); // create a canvas to draw in


                this._$canvas = document.createElement("canvas");
                this._ctx = this._$canvas.getContext("2d");
                this.appendChild(this._$canvas);

                this._setCanvasSize(); // set the phase we're in


                this._phase = "in"; // out
                // load the sprite as an image

                _context.next = 8;
                return this._loadSprite();

              case 8:
                this._$spriteImg = _context.sent;
                // init some internal variables
                this._currentFrame = 0; // init a timer to drive the animation
                // the timer properties will be set at each animateIn and animateOut

                this._timer = new _STimer.default(this.props.duration, {});

                this._timer.onTick(function () {
                  if (_this.props.yoyo) {
                    if (_this._phase === "in") _this._currentFrame += 1;else _this._currentFrame -= 1;
                  } else {
                    _this._currentFrame += 1;
                  }

                  if (_this._currentFrame <= _this.totalFrames && _this._currentFrame > 0) {
                    _this._drawFrame(_this._currentFrame);
                  }
                });

                this._timer.onComplete(function () {
                  if (_this._phase === "out") {
                    _this.classList.remove("active");
                  }

                  _this._endedPromiseResolve(_this);
                }); // listen for resize through transitionend event


                this._resizeHandlerFn = (0, _debounce.default)(this._resizeHandler.bind(this), 100);
                window.addEventListener("resize", this._resizeHandlerFn); // dispatch the ready event

                this.dispatchComponentEvent("ready");

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentMount() {
        return _componentMount.apply(this, arguments);
      }

      return componentMount;
    }()
    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     * @protected
     */

  }, {
    key: "componentUnmount",
    value: function componentUnmount() {
      _get(_getPrototypeOf(Component.prototype), "componentUnmount", this).call(this);

      this._timer.stop();

      this._timer.destroy();

      this._$spriteImg = null;
      window.removeEventListener("resize", this._resizeHandlerFn);
    }
    /**
     * Component will receive prop
     * @definition    SWebComponent.componentWillReceiveProp
     * @protected
     */

  }, {
    key: "componentWillReceiveProp",
    value: function () {
      var _componentWillReceiveProp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(name, newVal, oldVal) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _get(_getPrototypeOf(Component.prototype), "componentWillReceiveProp", this).call(this, name, newVal, oldVal);

                _context2.t0 = name;
                _context2.next = _context2.t0 === 'src' ? 4 : 8;
                break;

              case 4:
                _context2.next = 6;
                return this._loadSprite();

              case 6:
                this._$spriteImg = _context2.sent;
                return _context2.abrupt("break", 8);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillReceiveProp(_x, _x2, _x3) {
        return _componentWillReceiveProp.apply(this, arguments);
      }

      return componentWillReceiveProp;
    }()
    /**
     * Resize handler
     */

  }, {
    key: "_resizeHandler",
    value: function _resizeHandler() {
      this._setCanvasSize();
    }
    /**
     * Load the sprite into an image
     */

  }, {
    key: "_loadSprite",
    value: function () {
      var _loadSprite2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve) {
                  var img = new Image();

                  img.onload = function () {
                    resolve(img);
                  };

                  img.src = _this2.props.src;
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _loadSprite() {
        return _loadSprite2.apply(this, arguments);
      }

      return _loadSprite;
    }()
    /**
     * Set the canvas size
     */

  }, {
    key: "_setCanvasSize",
    value: function _setCanvasSize() {
      var _ref = [this.offsetWidth, this.offsetHeight],
          w = _ref[0],
          h = _ref[1];
      this._$canvas.width = w;
      this._$canvas.height = h;
    }
    /**
     * Draw a frame
     */

  }, {
    key: "_drawFrame",
    value: function _drawFrame(frame) {
      this._ctx.clearRect(0, 0, this.offsetWidth, this.offsetHeight);

      this._ctx.drawImage(this._$spriteImg, this.props.frameWidth * (frame - 1), 0, this.props.frameWidth, this._$spriteImg.height, 0, 0, this.offsetWidth, this.offsetHeight);

      if (this.props.color) this._colorize(this.props.color);
    }
    /**
     * Colorize a frame
     * @param    {String}    color    The color to use
     */

  }, {
    key: "_colorize",
    value: function _colorize(color) {
      this._ctx.globalCompositeOperation = "source-atop";
      this._ctx.fillStyle = color;

      this._ctx.fillRect(0, 0, this._$canvas.width, this._$canvas.height);

      this._ctx.globalCompositeOperation = "source-over";
    }
    /**
     * Get the number of frame that the sprite has
     * @return    {Integer}    The number of frame that the sprite has
     */

  }, {
    key: "goToStillFrame",

    /**
     * Go to the still frame or to the end of sprite if yoyo prop is true
     */
    value: function goToStillFrame() {
      var stillFrame = this.props.stillFrame || this.totalFrames; // go to the frame

      this.goToFrame(stillFrame);
    }
    /**
     * Go to a special frame
     * @param    {Integer}    frame    The frame number to go to
     */

  }, {
    key: "goToFrame",
    value: function goToFrame(frame) {
      // draw the frame
      this._drawFrame(frame); // if the frame is 1 or totalFrmae in case of not yoyo animation
      // we remove the active class


      if (frame === 1 || !this.props.yoyo && frame >= this.totalFrames) {
        // set the transition to inactive
        this.classList.remove('active');
      } else {
        // set the transition to active
        this.classList.add('active');
      }
    }
    /**
     * Animate the transition in
     * @return    {Promise}    A promised fulfilled when the transition is finished
     */

  }, {
    key: "animateIn",
    value: function animateIn() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3._setCanvasSize();

        _this3.classList.add("active");

        _this3._endedPromiseResolve = resolve;
        _this3._phase = "in";
        _this3._currentFrame = 0;

        _this3._timer.tickCount(_this3.props.stillFrame || _this3.totalFrames);

        _this3._timer.duration(_this3.props.duration);

        _this3._timer.reset();

        _this3._timer.start();
      });
    }
    /**
     * Animate the transition out
     * @return    {Promise}    A promised fulfilled when the transition is finished
     */

  }, {
    key: "animateOut",
    value: function animateOut() {
      var _this4 = this;

      return new Promise(function (resolve) {
        _this4._endedPromiseResolve = resolve;
        _this4._phase = "out";
        _this4._currentFrame = _this4.props.stillFrame || _this4.totalFrames;

        _this4._timer.tickCount(_this4.props.stillFrame ? _this4.totalFrames - _this4.props.stillFrame : _this4.totalFrames);

        _this4._timer.duration(_this4.props.outDuration || _this4.props.duration);

        _this4._timer.reset();

        _this4._timer.start();
      });
    }
  }, {
    key: "totalFrames",
    get: function get() {
      return this._$spriteImg.width / this.props.frameWidth;
    }
  }], [{
    key: "defaultCss",

    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return "\n      ".concat(componentNameDash, " {\n        display : block;\n        pointer-events: none;\n      }\n      ").concat(componentNameDash, ".active {\n        pointer-events: all;\n      }\n    ");
    }
  }, {
    key: "defaultProps",

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {
        /**
         * The source of the sprite to use as transition
         * @prop
         * @type    {String}
         */
        src: null,

        /**
         * The frame width
         * @prop
         * @type    {Number}
         */
        frameWidth: null,

        /**
         * Specify which is the still frame where the transition will stop before continue
         * @prop
         * @type    {Integer}
         */
        stillFrame: null,

        /**
         * Specify if the out animation is the yoyo version of the in one
         * @prop
         * @type    {Boolean}
         */
        yoyo: false,

        /**
         * Set the transition duration wanted in ms
         * @prop
         * @type    {Integer}
         */
        duration: 1000,

        /**
         * Set the out duration if wanted a different one
         * @prop
         * @type    {Integer}
         */
        outDuration: null,

        /**
         * Specify a color to colorize the sprite if wanted
         * @prop
         * @type    {String}
         */
        color: null
      };
    }
    /**
     * Required props
     * @definition    SWebComponent.requiredProps
     * @protected
     */

  }, {
    key: "requiredProps",
    get: function get() {
      return ["src", "frameWidth"];
    }
  }]);

  return Component;
}(_SWebComponent2.default);

exports.default = Component;