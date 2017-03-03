import NotImplementedException from './exception/not-implemented'
/**
 * @interface
 */
export default class Logger {
  /**
   * Write a message
   * @param {string} [type='info']
   * @param {string} [message='']
   * @param {Array} [traces=[]]
   */
  write(type = Logger.TYPE_INFO, message = '', traces = []) {
    throw new NotImplementedException('[logger.Logger#write]')
  }

  /**
   * Write an error message
   * @param {String} message
   * @param {Array} [traces=[]]
   */
  error(message, traces = []) {
    this.write(Logger.TYPE_ERROR, message, traces)
  }

  /**
   * Write an info message
   * @param {String} message
   * @param {Array} [traces=[]]
   */
  info(message, traces = []) {
    this.write(Logger.TYPE_INFO, message, traces)
  }

  /**
   * Write an alert message
   * @param {String} message
   * @param {Array} [traces=[]]
   */
  alert(message, traces = []) {
    this.write(Logger.TYPE_ALERT, message, traces)
  }

  /**
   * Write a debug message
   * @param {String} message
   * @param {Array} [traces=[]]
   */
  debug(message, traces = []) {
    this.write(Logger.TYPE_DEBUG, message, traces)
  }
}
Logger.TYPE_ERROR = 'error'
Logger.TYPE_INFO  = 'info'
Logger.TYPE_ALERT = 'alert'
Logger.TYPE_DEBUG = 'debug'