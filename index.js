'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

var _softDelete = require('./soft-delete');

var _softDelete2 = _interopRequireDefault(_softDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _util.deprecate)(function (app) {
  return app.loopback.modelBuilder.mixins.define('SoftDelete', _softDelete2.default);
}, 'DEPRECATED: Use mixinSources, see https://github.com/clarkbw/loopback-ds-timestamp-mixin#mixinsources');
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2tCQUdlLFVBSE4sU0FBUyxFQUloQixVQUFBLEdBQUc7U0FBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksdUJBQWE7Q0FBQSxFQUN4RSx1R0FBdUcsQ0FDeEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICd1dGlsJztcbmltcG9ydCBzb2Z0ZGVsZXRlIGZyb20gJy4vc29mdC1kZWxldGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZXByZWNhdGUoXG4gIGFwcCA9PiBhcHAubG9vcGJhY2subW9kZWxCdWlsZGVyLm1peGlucy5kZWZpbmUoJ1NvZnREZWxldGUnLCBzb2Z0ZGVsZXRlKSxcbiAgJ0RFUFJFQ0FURUQ6IFVzZSBtaXhpblNvdXJjZXMsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2xhcmtidy9sb29wYmFjay1kcy10aW1lc3RhbXAtbWl4aW4jbWl4aW5zb3VyY2VzJ1xuKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
