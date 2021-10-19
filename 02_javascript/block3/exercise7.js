// write a function called multy which takes an array as argument and multiply 
// each number and then returns the result.

function multy(arr){
	var multy = 1;
	arr.forEach(element => {
		multy = multy * element;
	});
	return multy;
}

multy([10,10,10])





module.exports ={
	multy
}