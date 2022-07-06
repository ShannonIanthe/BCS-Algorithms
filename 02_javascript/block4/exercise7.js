function booleanChecker(arr, maxCapacity) {
	let bool = [];
	arr.forEach(element => {
		if (typeof element == "boolean") {
			bool++;
		}	
	}); return `${bool} booleans were found`
}

module.exports = {
	booleanChecker
}
