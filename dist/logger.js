'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notImplemented = require('./exception/not-implemented');

var _notImplemented2 = _interopRequireDefault(_notImplemented);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @interface
 */
var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: 'write',

    /**
     * Write a message
     * @param {string} [type='info']
     * @param {string} [message='']
     * @param {Array} [traces=[]]
     */
    value: function write() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Logger.TYPE_INFO;
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var traces = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      throw new _notImplemented2.default('[logger.Logger#write]');
    }

    /**
     * Write an error message
     * @param {String} message
     * @param {Array} [traces=[]]
     */

  }, {
    key: 'error',
    value: function error(message) {
      var traces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      this.write(Logger.TYPE_ERROR, message, traces);
    }

    /**
     * Write an info message
     * @param {String} message
     * @param {Array} [traces=[]]
     */

  }, {
    key: 'info',
    value: function info(message) {
      var traces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      this.write(Logger.TYPE_INFO, message, traces);
    }

    /**
     * Write an alert message
     * @param {String} message
     * @param {Array} [traces=[]]
     */

  }, {
    key: 'alert',
    value: function alert(message) {
      var traces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      this.write(Logger.TYPE_ALERT, message, traces);
    }

    /**
     * Write a debug message
     * @param {String} message
     * @param {Array} [traces=[]]
     */

  }, {
    key: 'debug',
    value: function debug(message) {
      var traces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      this.write(Logger.TYPE_DEBUG, message, traces);
    }
  }]);

  return Logger;
}();

exports.default = Logger;

Logger.TYPE_ERROR = 'error';
Logger.TYPE_INFO = 'info';
Logger.TYPE_ALERT = 'alert';
Logger.TYPE_DEBUG = 'debug';