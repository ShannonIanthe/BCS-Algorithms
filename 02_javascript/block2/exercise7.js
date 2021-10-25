var arr = ["one", "two", "three", "four"];

function pusher(arr){
	newArray = []
	newArray.push(...arr)
	return newArray
  }

module.exports = { 
	pusher 
};

