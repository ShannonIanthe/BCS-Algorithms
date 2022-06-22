var arr = ["one", "two", "three", "four"];

function pusher(arr) {
	arr2 = []
	 arr2.push(...arr)
	 return arr2
  }

module.exports = { 
	pusher 
};

