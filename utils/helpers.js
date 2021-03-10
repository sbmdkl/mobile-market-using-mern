const generatePrefix = () => {
	let today = new Date();
	let yy = today.getFullYear().toString().substr(2, 2);
	let mm = ('0' + (today.getMonth() + 1)).slice(-2);
	let dd = ('0' + today.getDate()).slice(-2);
	let ss = today.getSeconds();
	let prefix = Math.ceil(Math.random() * 1000) + 1000 + '_' + ss + '_' + dd + '_' + mm + '_' + yy;
	return prefix;
};

module.exports = { generatePrefix };
