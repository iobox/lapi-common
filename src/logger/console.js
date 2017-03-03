import Logger from './../logger'

export default class ConsoleLogger extends Logger {
  constructor(trace = false) {
    super()
    this._trace = trace
    this._decorator = require('cli-color')
  }

  /**
   * Allow to trace or not
   * @returns {boolean}
   */
  isTraceable() {
    return this._trace
  }

  write(type = Logger.TYPE_INFO, message = '', traces = []) {
    const now = new Date()
    message = `[${now.toJSON()}] [${type}] ${message}`
    switch (type) {
      case Logger.TYPE_ERROR:
        console.log(this._decorator.red(message))
        break
      case Logger.TYPE_ALERT:
        console.log(this._decorator.yellow(message))
        break
      case Logger.TYPE_DEBUG:
      case Logger.TYPE_INFO:
      default:
        console.log(this._decorator.blue(message))
        break
    }
    if (this.isTraceable()) {
      const gray = this._decorator.xterm(219)
      traces.forEach((line) => {
        console.log(gray(`[${now.toJSON()}] [trace]`), line)
      })
    }
    console.log('')
  }
}