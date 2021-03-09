const mobilesService = require('./services');

const findAll = async (req, res) => {
	const { body, query, params } = req;
	try {
		const response = await mobilesService.findAll({ httpRequest: { query } });
		res.status(200).send(response);
	} catch (e) {
		res.status(400).send(e);
	}
};

const create = async (req, res) => {
	const { body } = req;
	try {
		const response = await mobilesService.create({ httpRequest: { body } });
		res.status(200).send(response);
	} catch (e) {
		res.status(400).send(e);
	}
};

const findOne = async (req, res) => {
	const { params } = req;
	try {
		const response = await mobilesService.findOne({ httpRequest: { params } });
		res.status(200).send(response);
	} catch (e) {
		res.status(400).send(e);
	}
};

const update = async (req, res) => {
	const { params, body } = req;
	try {
		const response = await mobilesService.update({ httpRequest: { params, body } });
		res.status(200).send(response);
	} catch (e) {
		res.status(400).send(e);
	}
};

const destroy = async (req, res) => {
	const { params } = req;
	try {
		const response = await mobilesService.destroy({ httpRequest: { params } });
		res.status(200).send(response);
	} catch (e) {
		res.status(400).send(e);
	}
};

module.exports = {
	findAll,
	create,
	findOne,
	update,
	destroy
};
