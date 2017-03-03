import Logger from './../logger'
const fs = require('fs')

export default class FileLogger extends Logger {
  constructor(path = null) {
    super()
    this.setPath(path)
  }

  /**
   * Get path
   * @returns {string}
   */
  getPath() {
    return this._path
  }

  /**
   * Set path
   * @param {string} path
   */
  setPath(path) {
    this._path = path
  }

  write(type = Logger.TYPE_INFO, message = '', traces = []) {
    let options = {encoding: 'utf8', flag: 'a'}
    const now = new Date()
    if (typeof message === 'object') {
      if (typeof message['toString'] === 'function') {
        message = message.toString()
      } else {
        try {
          message = JSON.stringify(message)
        } catch (e) {
          message = ''
        }
      }
    }
    message = `[${now.toJSON()}] [${type}] ${message}\n`
    fs.writeFileSync(this.getPath(), message, options)
    traces.forEach((line) => {
      fs.writeFileSync(this.getPath(), `[${now.toJSON()}] ${line}\n`, options)
    })
  }
}