const mongoose = require('mongoose');

const { Schema } = mongoose;

const MobileSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	stock: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const Mobile = mongoose.model('mobiles', MobileSchema);
module.exports = Mobile;
