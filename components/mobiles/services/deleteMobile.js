const { deleteMobileDTO } = require('../dtos');

module.exports = function makeDeleteMobile({ Mobile }) {
	return async function deleteMobile({ httpRequest: { params } }) {
		let doesMobileExists = await Mobile.findOneById(params.id);
		if (!doesMobileExists) throw { error: 'No such Mobile exists' };
		let deletedMobile = await Mobile.findByIdAndRemove(params.id);
		return deleteMobileDTO({ mobile: deletedMobile });
	};
};
