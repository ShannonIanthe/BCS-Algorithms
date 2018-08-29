module.exports = function (map, threshold) {
	var expensive = 0, cheap = 0;
	for (let [key, val] of map) {
		if(val >= threshold) {
			expensive += val;
		}
		if(val < threshold) {
			cheap+=val;
		}
	}
	return new Map([['total_expensive', expensive], ['total_affordable', cheap]]);
}
