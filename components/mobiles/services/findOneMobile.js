const { findOneMobileDTO } = require('../dtos');
module.exports = function makeFindOneMobile({ Mobile }) {
	return async function findOneMobile({ httpRequest: { params: { id } } }) {
		let mobile = await Mobile.findOneById(id);
		if (!mobile) throw { error: 'No such mobile exists' };
		return findOneMobileDTO({ mobile });
	};
};
