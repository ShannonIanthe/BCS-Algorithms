module.exports = function (arr) {
	var myMap = new Map();
	arr.forEach((ele) => {
		myMap.set( ele, myMap.get(ele)+1 || 1);
	})
	return myMap;
}