// import Mobile model
const Mobile = require('./Mobile');

const create = async (newMobile) => {
	return await Mobile.create(newMobile);
};

const findAll = async ({ query }) => {
	let { skip, limit } = query;
	skip = skip ? Number(skip) : 0;
	limit = limit ? Number(limit) : 10;
	return await Mobile.find({}).skip(skip).limit(limit).sort('-date');
};

const findOneById = async (id) => {
	const mobile = await Mobile.findById(id);
	return mobile.toObject();
};

const findByIdAndUpdate = async ({ id, updateMobile }) => {
	return await Mobile.findByIdAndUpdate(id, updateMobile, { new: true, runValidators: true });
};

const findByIdAndRemove = async (id) => {
	return await Mobile.findByIdAndRemove(id);
};

module.exports = {
	create,
	findAll,
	findOneById,
	findByIdAndUpdate,
	findByIdAndRemove
};
