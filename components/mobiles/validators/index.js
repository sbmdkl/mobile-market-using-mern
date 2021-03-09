const Validator = require('validator');
const isEmpty = require('is-empty');

const makeValidateMobile = require('./validateMobile');

const validateMobile = makeValidateMobile({ Validator, isEmpty });

module.exports = {
	validateMobile
};
