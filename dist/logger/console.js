'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('./../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConsoleLogger = function (_Logger) {
  _inherits(ConsoleLogger, _Logger);

  function ConsoleLogger() {
    var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, ConsoleLogger);

    var _this = _possibleConstructorReturn(this, (ConsoleLogger.__proto__ || Object.getPrototypeOf(ConsoleLogger)).call(this));

    _this._trace = trace;
    _this._decorator = require('cli-color');
    return _this;
  }

  /**
   * Allow to trace or not
   * @returns {boolean}
   */


  _createClass(ConsoleLogger, [{
    key: 'isTraceable',
    value: function isTraceable() {
      return this._trace;
    }
  }, {
    key: 'write',
    value: function write() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _logger2.default.TYPE_INFO;
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var traces = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var now = new Date();
      message = '[' + now.toJSON() + '] [' + type + '] ' + message;
      switch (type) {
        case _logger2.default.TYPE_ERROR:
          console.log(this._decorator.red(message));
          break;
        case _logger2.default.TYPE_ALERT:
          console.log(this._decorator.yellow(message));
          break;
        case _logger2.default.TYPE_DEBUG:
        case _logger2.default.TYPE_INFO:
        default:
          console.log(this._decorator.blue(message));
          break;
      }
      if (this.isTraceable()) {
        var gray = this._decorator.xterm(219);
        traces.forEach(function (line) {
          console.log(gray('[' + now.toJSON() + '] [trace]'), line);
        });
      }
      console.log('');
    }
  }]);

  return ConsoleLogger;
}(_logger2.default);

exports.default = ConsoleLogger;