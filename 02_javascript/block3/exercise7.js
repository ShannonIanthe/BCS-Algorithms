// write a function called multy which takes an array as argument and multiply 
// each number and then returns the result.

function multy(arr) {
	mult = 1;
	arr.forEach(element => {
			mult =  element * mult;
	});
	return mult;
}





module.exports ={
	multy
}