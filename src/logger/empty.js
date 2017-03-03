import Logger from './../logger'
export default class EmptyLogger extends Logger {
  write(type = Logger.TYPE_INFO, message = '', traces = []) {}
}