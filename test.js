var assert = require('assert');
var path = require('path');
var realPath = require('./');

var dir = __dirname;

assert.equal(realPath(path.resolve(dir, 'test.js')), path.resolve(dir, 'test.js'));
assert.equal(realPath(path.resolve(dir, 'ReadMe.md')), path.resolve(dir, 'README.md'));
assert.equal(realPath(path.resolve(dir.toUpperCase(), 'INDEX.js')), path.resolve(dir, 'index.js'));

assert.throws(function () {realPath('foo.js');}, /path is not absolute path/);
assert.throws(function () {realPath(path.resolve(dir, 'foo.js'));}, /path is not exists/);
