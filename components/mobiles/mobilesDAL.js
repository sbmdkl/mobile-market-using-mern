// import Mobile model
const Mobile = require('./Mobile');

const create = async (newMobile) => {
	return await Mobile.create(newMobile);
};

const findAll = async ({ query }) => {
	try {
		let { skip, limit } = query;
		skip = skip ? Number(skip) : 0;
		limit = limit ? Number(limit) : 10;
		return await Mobile.find({}).skip(skip).limit(limit).sort('-date');
	} catch (e) {
		throw { error: 'Unable to handle request' };
	}
};

const findOneById = async (id) => {
	try {
		const mobile = await Mobile.findById(id);
		return mobile.toObject();
	} catch (e) {
		throw { error: 'Unable to handle request' };
	}
};

const findByIdAndUpdate = async ({ id, updateMobile }) => {
	try {
		return await Mobile.findByIdAndUpdate(id, updateMobile, { new: true, runValidators: true });
	} catch (e) {
		throw { error: 'Unable to handle request' };
	}
};

const findByIdAndRemove = async (id) => {
	try {
		return await Mobile.findByIdAndRemove(id);
	} catch (e) {
		throw { error: 'Unable to handle request' };
	}
};

module.exports = {
	create,
	findAll,
	findOneById,
	findByIdAndUpdate,
	findByIdAndRemove
};
