'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formattedTime = exports.formattedRelative = exports.formattedPlural = exports.formattedNumber = exports.formattedMessage = exports.formattedHTMLMessage = exports.formattedDate = undefined;

var _ReactElement = require('react/lib/ReactElement');

var _ReactElement2 = _interopRequireDefault(_ReactElement);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ANONYMOUS = '<<anonymous>>';

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName) {
    var componentName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ANONYMOUS;
    var location = arguments[4];

    if (props[propName] === null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propName + '` was not specified in ' + ('`' + componentName + '`.'));
      }
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function getComponentName(componentClass) {
  return componentClass && componentClass.name || ANONYMOUS;
}

function createReactIntlTypeChecker(expectedComponent) {
  function validate(props, propName, componentName, location) {
    var actualComponent = props[propName].type;
    if (!_ReactElement2.default.isValidElement(props[propName]) || actualComponent !== expectedComponent) {
      var expectedComponentName = getComponentName(expectedComponent);
      var actualComponentName = getComponentName(actualComponent);

      return new Error('Invalid ' + location + ' `' + propName + '` of type `' + actualComponentName + '` ' + ('supplied to `' + componentName + '`, expected `' + expectedComponentName + '`.'));
    }

    return null;
  }

  return createChainableTypeChecker(validate);
}

var formattedDate = exports.formattedDate = createReactIntlTypeChecker(_reactIntl.FormattedDate);
var formattedHTMLMessage = exports.formattedHTMLMessage = createReactIntlTypeChecker(_reactIntl.FormattedHTMLMessage);
var formattedMessage = exports.formattedMessage = createReactIntlTypeChecker(_reactIntl.FormattedMessage);
var formattedNumber = exports.formattedNumber = createReactIntlTypeChecker(_reactIntl.FormattedNumber);
var formattedPlural = exports.formattedPlural = createReactIntlTypeChecker(_reactIntl.FormattedPlural);
var formattedRelative = exports.formattedRelative = createReactIntlTypeChecker(_reactIntl.FormattedRelative);
var formattedTime = exports.formattedTime = createReactIntlTypeChecker(_reactIntl.FormattedTime);