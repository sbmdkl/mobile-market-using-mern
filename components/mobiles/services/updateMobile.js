const { validateMobile } = require('../validators');
const { updateMobileDTO } = require('../dtos');

module.exports = function makeUpdateMobile({ Mobile }) {
	return async function updateMobile({ httpRequest: { params: { id }, body } }) {
		const mobile = await Mobile.findOneById(id);
		if (!mobile) throw { error: 'No such mobile exists' };
		const { errors, isValid, data } = validateMobile({ ...mobile, ...body });
		if (!isValid) {
			throw { ...errors };
		}
		const updateMobile = {
			name: data.getname(),
			price: data.getprice(),
			stock: data.getstock(),
			image: data.getimage(),
			description: data.getdescription()
		};
		let updatedMobile = await Mobile.findByIdAndUpdate({ id, updateMobile });
		if (!updateMobile) throw { error: 'Error while updating Mobile' };
		return updateMobileDTO({ mobile: { ...mobile, ...updatedMobile } });
	};
};
