const app = require('express')();
require('dotenv').config({ path: './config/.env' });
const loader = require('./loaders');
const port = process.env.PORT || 5000;

function startServer() {
	// load all loaders
	loader.init({ expressApp: app });

	// start server
	app.listen(port, () => {
		console.log(`server running at port ${port}`);
	});
}

startServer();
