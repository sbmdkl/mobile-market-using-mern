// import all routes
const mobilesRoute = require('../components/mobiles/mobilesAPI');
const init = (app) => {
	app.use('/api/mobiles', mobilesRoute);
	app.all('*', (req, res) => {
		res.status(404).json({
			status: 'error',
			path: req.originalUrl,
			message: `The app you are using is not latest, for this service you need to update your application.`,
			systemTime: Date.now()
		});
	});
};

module.exports = {
	init
};
