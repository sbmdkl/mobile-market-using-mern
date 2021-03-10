const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const routes = require('../routes');
module.exports = (app) => {
	app.use(cors());

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use('/assets', express.static(path.resolve('uploads')));
	app.use(fileUpload({ limits: { fileSize: 2 * 1024 * 1024 } }));
	// Load API routes
	routes.init(app);
};
