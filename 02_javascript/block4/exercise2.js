// write a function  called is_an_even_number that takes an array as argument, 
// it loops through it and checks if the elements are numbers (or a string that can be converted to a number) 
// and if they are even.
// you should also keep track of the even numbers by increasing the value of a variable called count, which you should 
// return at the end of the function.
// for this exercise we treat number 0  as an even number, but only if it is provided as a zero

function is_an_even_number(arr){
	var count = 0

	arr.forEach(element => {

			if ( element && typeof(element) !== 'object' && (typeof(element) === 'number' || !isNaN(element))	) {

			if(element % 2 === 0) 
			{count++}
			}	
	});
	return count
}



module.exports = {
	is_an_even_number
}