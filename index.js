let FAdNMnEJgIzPZjeo = {
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
  "EmptyLogger": "logger/empty.js"
 },
 "Logger": "logger.js",
 "Str": "str.js"
};
const publish = function ($object) {
  Object.keys($object).forEach(function($key) {
    if (typeof $object[$key] === 'string') {
      let pkg = require('./dist/' + $object[$key]);
      $object[$key] = typeof pkg.default !== 'undefined' ? pkg.default : pkg;
    } else if (typeof $object[$key] === 'object') {
      $object[$key] = publish($object[$key])
    }
  });
  
  return $object;
};
module.exports = publish(FAdNMnEJgIzPZjeo);