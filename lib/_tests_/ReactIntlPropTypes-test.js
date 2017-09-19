'use strict';

require('intl');

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _ReactIntlPropTypes = require('../ReactIntlPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function typeCheckFail(declaration, value) {
  var props = { testProp: value };
  var error = declaration(props, 'testProp', 'testComponent', 'prop');
  _chai.assert.ok(error instanceof Error);
}

function typeCheckPass(declaration, value) {
  var props = { testProp: value };
  var error = declaration(props, 'testProp', 'testComponent', 'prop');
  _chai.assert.notOk(error);
}

describe('ReactIntlPropTypes', function () {
  describe('Primitive Types', function () {
    it('should not warn for valid values', function () {
      typeCheckPass(_ReactIntlPropTypes.formattedDate, _react2.default.createElement(_reactIntl.FormattedDate, { value: new Date() }));
      typeCheckPass(_ReactIntlPropTypes.formattedHTMLMessage, _react2.default.createElement(_reactIntl.FormattedHTMLMessage, { id: 'id' }));
      typeCheckPass(_ReactIntlPropTypes.formattedMessage, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'id' }));
      typeCheckPass(_ReactIntlPropTypes.formattedNumber, _react2.default.createElement(_reactIntl.FormattedNumber, { value: 0 }));
      typeCheckPass(_ReactIntlPropTypes.formattedPlural, _react2.default.createElement(_reactIntl.FormattedPlural, { value: 'yes', other: 'no' }));
      typeCheckPass(_ReactIntlPropTypes.formattedRelative, _react2.default.createElement(_reactIntl.FormattedRelative, { value: 'id' }));
      typeCheckPass(_ReactIntlPropTypes.formattedTime, _react2.default.createElement(_reactIntl.FormattedTime, { value: 10 }));
    });
    it('should not warn when undefined and not required', function () {
      typeCheckPass(_ReactIntlPropTypes.formattedDate, null);
      typeCheckPass(_ReactIntlPropTypes.formattedHTMLMessage, null);
      typeCheckPass(_ReactIntlPropTypes.formattedMessage, null);
      typeCheckPass(_ReactIntlPropTypes.formattedNumber, null);
      typeCheckPass(_ReactIntlPropTypes.formattedPlural, null);
      typeCheckPass(_ReactIntlPropTypes.formattedRelative, null);
      typeCheckPass(_ReactIntlPropTypes.formattedTime, null);
    });
    it('should warn for invalid values', function () {
      typeCheckFail(_ReactIntlPropTypes.formattedDate, 'cat');
      typeCheckFail(_ReactIntlPropTypes.formattedHTMLMessage, 'cat');
      typeCheckFail(_ReactIntlPropTypes.formattedMessage, 'cat');
      typeCheckFail(_ReactIntlPropTypes.formattedNumber, 'cat');
      typeCheckFail(_ReactIntlPropTypes.formattedPlural, 'cat');
      typeCheckFail(_ReactIntlPropTypes.formattedRelative, 'cat');
      typeCheckFail(_ReactIntlPropTypes.formattedTime, 'cat');
    });
    it('should warn when undefined and is required', function () {
      typeCheckFail(_ReactIntlPropTypes.formattedDate.isRequired, null);
      typeCheckFail(_ReactIntlPropTypes.formattedHTMLMessage.isRequired, null);
      typeCheckFail(_ReactIntlPropTypes.formattedMessage.isRequired, null);
      typeCheckFail(_ReactIntlPropTypes.formattedNumber.isRequired, null);
      typeCheckFail(_ReactIntlPropTypes.formattedPlural.isRequired, null);
      typeCheckFail(_ReactIntlPropTypes.formattedRelative.isRequired, null);
      typeCheckFail(_ReactIntlPropTypes.formattedTime.isRequired, null);
    });
  });
});