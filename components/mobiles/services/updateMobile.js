const { validateMobile } = require('../validators');
const { updateMobileDTO } = require('../dtos');

module.exports = function makeUpdateMobile({ Mobile, generatePrefix }) {
	return async function updateMobile({ httpRequest: { params: { id }, body, files } }) {
		const mobile = await Mobile.findOneById(id);
		if (!mobile) throw { error: 'No such mobile exists' };
		const { errors, isValid, data } = validateMobile({ ...mobile, ...body });
		if (!isValid) {
			throw { ...errors };
		}
		const allowedFiles = [ 'jpeg', 'png', 'jpg', 'gif' ];

		let updateMobile = {
			name: data.getname(),
			price: data.getprice(),
			stock: data.getstock(),
			description: data.getdescription()
		};

		let imageName = '';
		if (files) {
			const image = files.image;
			if (!allowedFiles.includes(image.mimetype.split('/')[1].toLowerCase())) {
				throw {
					error: 'Invalid file format'
				};
			}
			imageName = generatePrefix() + image.name;
			await image.mv('uploads/' + imageName);
			updateMobile.image = '/assets/' + imageName;
		}
		let updatedMobile = await Mobile.findByIdAndUpdate({ id, updateMobile });
		if (!updateMobile) throw { error: 'Error while updating Mobile' };
		return updateMobileDTO({ mobile: { ...mobile, ...updatedMobile } });
	};
};
