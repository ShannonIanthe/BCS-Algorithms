function lowerCaseLetters(str) {
	var newStr = "";
	for (let i = 0; str.length; i++){
		if (`${Number(str[i])}`=== "Nan") {
			if (str[i].toLowerCase() !== str[i]) {
				let temp = " "
			} else {
			newStr += (str[i].toLowerCase() += " ");
		}
	}
}
	return newStr;
};

module.exports = {
	lowerCaseLetters
}