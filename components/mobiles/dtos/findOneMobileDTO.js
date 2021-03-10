const { formatDate } = require('../../../utils/helpers');
module.exports = ({ mobile: { _id, name, price, stock, image, description, date } }) => ({
	id: _id,
	name,
	price,
	stock,
	image,
	description,
	date: formatDate(date)
});
