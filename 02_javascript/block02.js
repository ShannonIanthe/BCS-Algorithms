EXERCISE 1:
// write a function called assigner which takes 2 arguments, an array and an index.
// it then takes one element from the provided array at the given index and place it in a 
// new array then returns it.
//=========================Example=========================
   var arr   = ['milk','cheese','car','lime'];
   var index = 2; 
   assigner (arr, 2) //expected output =====> ['car']


EXERCISE 2:
// write a function called takeAll which takes an array as argument, 
// it then returns a new array which has all values of the original 
// array but in reverse order.
//=========================Example=========================
   var arr = ['milk','cheese','car','lime']
   takeAll(arr) // expected output =====> ["lime", "car", "cheese", "milk"]


EXERCISE 3:
// create a function called swap which takes two arrays as the first two arguments and a position which is index as the third
// It then returns the two arrays swapping the value at the position passed as argument.
// return both arrays inside another array see example below:
//=========================Example=========================
   var arr  =  ['banana','apple','orange']
   var arr2 =  ['tv','dvd-player','playstation']
   var pos  =  2;
   swap(arr, arr2, pos)
// expected output =====> [ ["banana", "apple", "playstation"] , ["tv", "dvd-player", "orange"] ]


EXERCISE 4:
// create a function called splicer which removes an element from an array and returns the array with 
// the element removed.
// this function takes two arguments:
// 1)the array 
// 2)the position/index of the element in the array to be removed
//=========================Example=========================
   var arr = ['cheese','salame','bread','water','pizza']
   splicer(arr,2)
// expected output =====> ['cheese','salame','water','pizza']


EXERCISE 5:
// write a function called removeFirstAndLast
// it takes an array as an argument and returns an array of which the first and last elements have been removed.
//=========================Example=========================
   var arr = ['car','soap','banana','tv','toothbrush']
   removeFirstAndLast(arr)
// expected output =====> ['soap','banana','tv']


EXERCISE 6:
// write a function called removeAll 
// it takes an array as an argument and returns an array of which the all elements have be removed.
//=========================Example=========================
var arr =[1,2,3,4,5,6,7,8,9,0,3,4,523,44,3454]
removeAll(arr)
// expected output =====> []


EXERCISE 7:
// write a function called pusher.
// it takes one argument - an array.
// using push take all elements from the array  and push them to a new variable called arr2 avoiding 
// having nested arrays
// then return arr2
//=========================Example=========================
var arr = ["one","two","three","four"]
pusher(arr)
// expected output =====> ["one","two","three","four"]


EXERCISE 8:
// create a function called take_and_push which takes 3 arguments, an array and two numbers.
// the second and third arguments are indexes
// you need to take the elements in the array that are at the given index and push them to a new array.
// then return the new array.
//=========================Example=========================
var arr  = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']
take_and_push(arr, 2, 4) 
// expected output =====> ["Psych","Gotham"]


EXERCISE 9:
// create a function called concatenator which takes an array as argument
// and then using Array.concat it returns a new array which is a clone of the original array.
//=========================Example=========================
var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']
concatenator(arr)
// expected output =====> ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']


EXERCISE 10:
// create a function called findPosition which takes two arguments, an array and an element and it return 
// the index of the given element.
//=========================Example=========================
var arr = ['glass','car','watch','sofa','macbook']
findPosition('car')   // expected output =====> 1
findPosition('sofa')  // expected output =====> 3
findPosition('glass') // expected output =====> 0


EXERCISE 11:
// create a function called isThere which takes an array as first argument and a string as second, 
// it needs to check if the string is inside the array and returns true if it is and false if it's not.
//=========================Example=========================
var arr = ['green','red','black','blue','brown','yellow','purple']
isThere('red')     // expected output =====> true
isThere('banana')  // expected output =====> false


EXERCISE 12:
// now do the same exercise using the method includes only this time you should return false if the 
// color is there and true if it's not!
//=========================Example=========================
var arr = ['green','red','black','blue','brown','yellow','purple']
isThere('red')     // expected output =====> false
isThere('banana')  // expected output =====> true


EXERCISE 13:
// write a function called characterRemover which takes two arguments, a string and a character to be removed and 
// returns the string free of the unwanted character.
// please note: in order for the string to make sense you should replace the unwanted characters with a space so 
// that your string will look like this:
//=========================Example=========================
var str = 'I,Really,Like,Pizza' // expected output =====> I really Like Pizza


EXERCISE 14
// write a function called isArrayFunc which takes an argument and returns true if it's an array and false if 
// it's anything else.
var one   = {name:'antonello'}    //expected output =====> false
var two   = ['name', 'antonello'] //expected output =====> true
var three = [[],[],{},"antonello",3,function(){}] //expected output =====> true

