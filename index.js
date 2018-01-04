let $module = {
 "Bag": "bag.js",
 "Base": "base.js",
 "di": {
  "ContainerAware": "di/container-aware.js",
  "Container": "di/container.js"
 },
 "exception": {
  "InternalErrorException": "exception/internal-error.js",
  "InvalidArgumentException": "exception/invalid-argument.js",
  "NotFoundException": "exception/not-found.js",
  "NotImplementedException": "exception/not-implemented.js"
 },
 "Exception": "exception.js",
 "extension": {
  "ExtensionManager": "extension/manager.js"
 },
 "Extension": "extension.js",
 "logger": {
  "ConsoleLogger": "logger/console.js",
  "EmptyLogger": "logger/empty.js",
  "FileLogger": "logger/file.js"
 },
 "Logger": "logger.js",
 "Str": "str.js"
};
const publish = function ($object) {
  Object.keys($object).forEach(function($key) {
    if (typeof $object[$key] === 'string') {
      $object[$key] = require('./dist/' + $object[$key]);
    } else if (typeof $object[$key] === 'object') {
      $object[$key] = publish($object[$key])
    }
  });
  
  return $object;
};
module.exports = publish($module);