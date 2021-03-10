const { validateMobile } = require('../validators');
const { createMobileDTO } = require('../dtos');

module.exports = function makeCreateMobile({ Mobile, generatePrefix }) {
	return async function createMobile({ httpRequest: { body, files } }) {
		const { errors, isValid, data } = validateMobile(body);
		if (!isValid) {
			throw { ...errors };
		}
		const allowedFiles = [ 'jpeg', 'png', 'jpg', 'gif' ];

		const newMobile = {
			name: data.getname(),
			price: data.getprice(),
			stock: data.getstock(),
			image: data.getimage(),
			description: data.getdescription(),
			date: data.getdate()
		};

		let imageName = '';
		if (!files) {
			imageName = 'no-image.png';
		} else {
			const image = files.image;
			if (!allowedFiles.includes(image.mimetype.split('/')[1].toLowerCase())) {
				throw {
					error: 'Invalid file format'
				};
			}
			imageName = generatePrefix() + image.name;
			await image.mv('uploads/' + imageName);
		}
		newMobile.image = '/assets/' + imageName;

		let createdMobile = await Mobile.create(newMobile);
		return createMobileDTO({ mobile: createdMobile });
	};
};
