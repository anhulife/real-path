var fs = require('fs');
var path = require('path');
var pathIsAbsolute = require('path-is-absolute');

module.exports = function (filePath) {
  if (!pathIsAbsolute(filePath)) {
    throw new Error('path is not absolute path');
  }

  if (!fs.existsSync(filePath)) {
    throw new Error('path is not exists');
  }

  var file;
  var files = filePath.split(path.sep);
  var realPath = files[0] + path.sep;

  for (var i = 1, l = files.length; i < l; ++i) {
    file = files[i];
    var realFiles = fs.readdirSync(realPath);

    if (realFiles.indexOf(file) === -1) {
      file = file.toLowerCase();
      realFiles.some(function (realFile) {
        if (realFile.toLowerCase() === file) {
          file = realFile;
          return true;
        }
      });
    }

    realPath = path.join(realPath, file);
  }

  return realPath;
};
