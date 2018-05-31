var lowerCaseLetters = str => {
	let arr = []
	str.split('').map((ele, i) => {
		isNaN(ele) ?
			ele == ele.toUpperCase() && i != 0 ?  arr.push(' '+ele) : arr.push(ele)
		: null
	})
	return arr.join('').toLocaleLowerCase()
}
module.exports = {
	lowerCaseLetters
}