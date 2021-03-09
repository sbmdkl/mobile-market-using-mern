const { allMobilesDTO } = require('../dtos');
module.exports = function makeFindAllMobiles({ Mobile }) {
	return async function findAllMobiles({ httpRequest: { query } }) {
		let mobiles = await Mobile.findAll({ query });
		return allMobilesDTO({ mobiles });
	};
};
