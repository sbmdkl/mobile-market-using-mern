const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

const init = ({ expressApp }) => {
	mongooseLoader();
	expressLoader(expressApp);
};

module.exports = { init };
