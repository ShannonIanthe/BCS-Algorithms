var arr = ["one", "two", "three", "four"];
var arr2 = [...arr];

function pusher(arr) {
	return arr = [...arr2];
}

pusher(arr2);

module.exports = { 
	pusher 
};

