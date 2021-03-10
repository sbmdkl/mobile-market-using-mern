module.exports = function makeValidateMobile({ Validator, isEmpty }) {
	return function validateMobile({ name, price, stock = 0, image, description = '', date = Date.now() }) {
		let errors = {};

		if (Validator.isEmpty(name + '')) {
			errors.name = 'Name field is required';
		}
		if (Validator.isEmpty(price + '')) {
			errors.name = 'Price field is required';
		}

		return {
			errors,
			isValid: isEmpty(errors),
			data: Object.freeze({
				getname: () => name,
				getprice: () => price,
				getstock: () => stock,
				getimage: () => image,
				getdescription: () => description,
				getdate: () => date
			})
		};
	};
};
