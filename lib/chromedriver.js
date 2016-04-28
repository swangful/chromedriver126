var path = require('path');
exports.path = process.platform === 'win32' ? path.join(__dirname, 'chromedriver126', 'chromedriver.exe') : path.join(__dirname, 'chromedriver126', 'chromedriver126');
exports.version = '1.26';
exports.start = function() {
  exports.defaultInstance = require('child_process').execFile(exports.path);
  return exports.defaultInstance;
}
exports.stop = function () {
  if (exports.defaultInstance != null){
    exports.defaultInstance.kill();
  }
}
