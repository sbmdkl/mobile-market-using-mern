// import all routes
const mobilesRoute = require('../components/mobiles/mobilesAPI');
const init = (app) => {
	app.use('/api/mobiles', mobilesRoute);
};

module.exports = {
	init
};
