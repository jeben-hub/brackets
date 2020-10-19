module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 != 0) return false;
	let temp = str.length;
	for (let i = 0; i < temp; i++) {
		bracketsConfig.forEach(el => {
			str = str.replace(el[0] + el[1], "");
		});
	}
	return str.length == 0;
}