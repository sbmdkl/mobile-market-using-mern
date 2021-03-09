const { validateMobile } = require('../validators');
const { createMobileDTO } = require('../dtos');

module.exports = function makeCreateMobile({ Mobile }) {
	return async function createMobile({ httpRequest: { body } }) {
		const { errors, isValid, data } = validateMobile(body);
		if (!isValid) {
			throw { ...errors };
		}
		const newMobile = {
			name: data.getname(),
			price: data.getprice(),
			stock: data.getstock(),
			image: data.getimage(),
			description: data.getdescription(),
			date: data.getdate()
		};
		let createdMobile = await Mobile.create(newMobile);
		return createMobileDTO({ mobile: createdMobile });
	};
};
