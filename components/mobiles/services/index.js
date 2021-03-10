const Mobile = require('../mobilesDAL');
const { generatePrefix } = require('../../../utils/helpers');
const makeCreateMobile = require('./createMobile');
const makeDeleteMobile = require('./deleteMobile');
const makeFindAllMobiles = require('./findAllMobiles');
const makeFindOneMobile = require('./findOneMobile');
const makeUpdateMobile = require('./updateMobile');

const create = makeCreateMobile({ Mobile, generatePrefix });
const destroy = makeDeleteMobile({ Mobile });
const findAll = makeFindAllMobiles({ Mobile });
const findOne = makeFindOneMobile({ Mobile });
const update = makeUpdateMobile({ Mobile, generatePrefix });

module.exports = {
	create,
	destroy,
	findAll,
	findOne,
	update
};
