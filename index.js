var $exports = {
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
const distDir = 'dist';
function include(file, name) {
  const pkg = require('./' + distDir + '/' + file);
  return name === undefined ? pkg.default : pkg[name];
}

var exports = function ($exports) {
  Object.keys($exports).forEach(function (name) {
    if (typeof $exports[name] === 'object') {
      exports($exports[name])
    } else {
      $exports[name] = include($exports[name])
    }
  });
};
exports($exports);

module.exports = $exports;