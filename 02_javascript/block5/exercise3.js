function filter (arr, dt, minl){
	var newArr = []
	arr.forEach(function (ele) {
		if(typeof ele !== dt && ele.length >= minl){
			newArr.push(ele)
		}
	});
	return String(newArr)
}
module.exports = {
    filter
}