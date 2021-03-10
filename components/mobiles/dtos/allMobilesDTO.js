const { formatDate } = require('../../../utils/helpers');
module.exports = ({ mobiles }) => {
	return mobiles.map(({ _id, name, price, stock, image, description, date }) => {
		return {
			id: _id,
			name,
			price,
			stock,
			image,
			description,
			date: formatDate(date)
		};
	});
};
