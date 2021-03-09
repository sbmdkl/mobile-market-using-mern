const Mobile = require('../mobilesDAL');

const makeCreateMobile = require('./createMobile');
const makeDeleteMobile = require('./deleteMobile');
const makeFindAllMobiles = require('./findAllMobiles');
const makeFindOneMobile = require('./findOneMobile');
const makeUpdateMobile = require('./updateMobile');

const create = makeCreateMobile({ Mobile });
const destroy = makeDeleteMobile({ Mobile });
const findAll = makeFindAllMobiles({ Mobile });
const findOne = makeFindOneMobile({ Mobile });
const update = makeUpdateMobile({ Mobile });

module.exports = {
	create,
	destroy,
	findAll,
	findOne,
	update
};
