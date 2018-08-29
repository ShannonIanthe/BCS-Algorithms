module.exports = (obj, schema) => {
	var myMap = new Map();
	for (var key in obj) {
		if(key in schema){
			var val = obj[key]
			if(!isNaN(val)) {
				myMap.set(key, val);
			}
		}
	}
	return myMap;
}