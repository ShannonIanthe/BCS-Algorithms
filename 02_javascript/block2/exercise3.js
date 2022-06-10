/*
It needs to swap two items in these arrays at the specified position/index 
which is the third argument -- number. Then this function has to return 
these two arrays inside another array.

In the example we are swapping orange with playstation because the providede 
index is 2.
*/

//======================  EXAMPLE  ========================
var arr = ["banana", "apple", "orange"];
var arr2 = ["tv", "dvd-player", "playstation"];
var newArray = [];

function swap (arr, arr2, pos) {
	var x = arr[pos];
	var y = arr2[pos];
	
	arr[pos] = y;
	arr2[pos] = x;

	return [arr, arr2];
  }

swap(arr, arr2);






module.exports ={ 
	swap 
}