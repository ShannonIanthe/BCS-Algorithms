"========================================================================"
"=============================  EXERCISE 1  ============================="
"========================================================================"

// Write a function called assigner which takes 2 arguments, an array and an index.
// It then takes one element from the provided array at the given index and 
// place it in a new array then returns it.

//======================  EXAMPLE  ========================
var arr = ["milk", "cheese", "car", "lime"];
var index = 2;
assigner(arr, 2);
["car"]; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 2  ============================="
"========================================================================"

// write a function called takeAll which takes an array as argument,
// it then returns a new array which has all values of the original
// array but in reverse order.

//======================  EXAMPLE  ========================
var arr = ["milk", "cheese", "car", "lime"];
takeAll(arr);
["lime", "car", "cheese", "milk"]; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 3  ============================="
"========================================================================"

// create a function called swap which takes two arrays as the first two  
// arguments and a position which is index as the third.
// It then returns the two arrays swapping the value at the position passed as argument.
// return both arrays inside another array see example below:

//======================  EXAMPLE  ========================
var arr = ["banana", "apple", "orange"];
var arr2 = ["tv", "dvd-player", "playstation"];
var pos = 2;
swap(arr, arr2, pos)
[["banana", "apple", "playstation"], ["tv", "dvd-player", "orange"]]; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 4  ============================="
"========================================================================"

// create a function called splicer which removes an element from an array 
// and returns the array with the element removed.
// this function takes two arguments:
// 1) the array
// 2) the position/index of the element in the array to be removed

//======================  EXAMPLE  ========================
var arr = ["cheese", "salame", "bread", "water", "pizza"];
splicer(arr, 2)
["cheese", "salame", "water", "pizza"]; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 5  ============================="
"========================================================================"

// write a function called removeFirstAndLast
// it takes an array as an argument and returns an array of which the first 
// and last elements have been removed.

//======================  EXAMPLE  ========================
var arr = ["car", "soap", "banana", "tv", "toothbrush"];
removeFirstAndLast(arr)
["soap", "banana", "tv"]; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 6  ============================="
"========================================================================"

// write a function called removeAll
// it takes an array as an argument and returns an array of which the all elements have be removed.

//======================  EXAMPLE  ========================
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 4, 523, 44, 3454];
removeAll(arr)
//[]  <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 7  ============================="
"========================================================================"

// write a function called pusher.
// it takes one argument - an array.
// using push take all elements from the array  and push them to a new variable called arr2 avoiding
// having nested arrays
// then return arr2
// hint==> take a look at spread operator: ...

//======================  EXAMPLE  ========================
var arr = ["one", "two", "three", "four"];
pusher(arr)
["one", "two", "three", "four"]; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 8  ============================="
"========================================================================"

// create a function called take_and_push which takes 3 arguments, an array and two numbers.
// the second and third arguments are indexes
// you need to take the elements in the array that are at the given index and push them to a new array.
// then return the new array.

//======================  EXAMPLE  ========================
var arr = [
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office"
];
take_and_push(arr, 2, 4)
["Psych", "Gotham"]; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 9  ============================="
"========================================================================"

// create a function called concatenator which takes an array as argument
// and then using Array.concat it returns a new array which is a clone of the original array.

//======================  EXAMPLE  ========================
var arr = [
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office"
];
concatenator(arr)
[
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office"
]; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 10  ============================"
"========================================================================"

// create a function called findPosition which takes two arguments, an array and an element and it return
// the index of the given element.

//======================  EXAMPLE  ========================
var arr = ["glass", "car", "watch", "sofa", "macbook"];
findPosition(arr, "car")
1; // <======  EXPECTED OUTPUT
findPosition(arr, "sofa")
3; // <======  EXPECTED OUTPUT
findPosition(arr, "glass");
0; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 11  ============================"
"========================================================================"

// create a function called isThere which takes an array as first argument and a string as second,
// it needs to check if the string is inside the array and returns true if it is and false if it's not.

//======================  EXAMPLE  ========================
var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"];
isThere(arr, "red");
true; // <======  EXPECTED OUTPUT
isThere(arr, "banana");
false; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 12  ============================"
"========================================================================"

// now do the same exercise using the method includes only this time you should return false if the
// color is there and true if it's not!

//======================  EXAMPLE  ========================
var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"];
isThere(arr, "red");
false; // <======  EXPECTED OUTPUT
isThere(arr, "banana");
true; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 13  ============================"
"========================================================================"

// write a function called characterRemover which takes two arguments, a 
// string and a character to be removed and returns the string free of the 
// unwanted character.
// please note: in order for the string to make sense you should replace 
// the unwanted characters with a space so that your string will look like this:

//======================  EXAMPLE  ========================
var str = "I,Really,Like,Pizza";
characterRemover(str, ",");
"I Really Like Pizza"; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 14  ============================"
"========================================================================"

// write a function called isArrayFunc which takes an argument and returns 
// true if it's an array and false if it's anything else.

//======================  EXAMPLE  ========================
var one = { name: "antonello" };
false; // <======  EXPECTED OUTPUT
var two = ["name", "antonello"];
true; // <======  EXPECTED OUTPUT
var three = [[], [], {}, "antonello", 3, function() {}];
true; // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 15  ============================"
"========================================================================"

// write a function called longestString which takes an array and minLength as the arguments 
// and returns the last element from the array with length bigger than minLength:

//======================  EXAMPLE  ========================

let fruits = ['banana','kiwi','orange','apple','watermelon','pear']
longestString(fruits, 5)
'watermelon' // <======  EXPECTED OUTPUT

//=========================================================
