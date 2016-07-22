'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeCasing = exports.normalizeDuckName = exports.normalizeComponentName = exports.warning = exports.danger = exports.success = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _humps = require('humps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bootstrap inspired text color helpers for the command line.
var success = exports.success = function success(text) {
  return _chalk2.default.green(text);
};

var danger = exports.danger = function danger(text) {
  return _chalk2.default.red(text);
};

var warning = exports.warning = function warning(text) {
  return _chalk2.default.yellow(text);
};

// Random string/text helpers
var normalizeComponentName = exports.normalizeComponentName = function normalizeComponentName(name) {
  return (0, _humps.pascalize)(name);
};

var normalizeDuckName = exports.normalizeDuckName = function normalizeDuckName(name) {
  return (0, _humps.camelize)(name);
};

var normalizeCasing = exports.normalizeCasing = function normalizeCasing(string, casing) {
  var types = ['default', 'snake', 'pascal', 'camel', 'dashes'];

  if (types.indexOf(casing) === -1) {
    throw new Error('Casing must be one of: ' + types.join(', ') + ' types');
  }

  if (casing === 'snake') {
    return (0, _humps.depascalize)((0, _humps.pascalize)(string));
  } else if (casing === 'pascal') {
    return (0, _humps.pascalize)(string);
  } else if (casing === 'camel') {
    return (0, _humps.camelize)(string);
  } else if (casing === 'default') {
    return string;
  } else if (casing == 'dashes') {
    return (0, _humps.depascalize)(string, { separator: '-' });
  }
};