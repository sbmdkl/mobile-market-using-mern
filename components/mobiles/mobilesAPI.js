const express = require('express');
const mobilesController = require('./mobilesController');
const Router = express.Router();

// @route   api/mobiles/
// routes protection is not added for demo
Router.route('/').get(mobilesController.findAll).post(mobilesController.create);
Router.route('/:id').get(mobilesController.findOne).patch(mobilesController.update).delete(mobilesController.destroy);

module.exports = Router;
