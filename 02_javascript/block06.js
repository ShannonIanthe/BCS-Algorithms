"========================================================================"
"=============================  EXERCISE 1  ============================="
"========================================================================"

var obj = {
        name:antonello
        lastname:sanna
}
//FIX THE ABOVE CODE SO THAT IT DOESN'T THROW AN ERROR!


"========================================================================"
"=============================  EXERCISE 2  ============================="
"========================================================================"

// write a function called addToObj which takes two arguments and returns 
// an object which has the first argument as a key and the second as value.

//======================  EXAMPLE  ========================
addToObj('age',22)
{age:22} // <======  EXPECTED OUTPUT
addToObj('name','Jason')
{name:'Jason'} // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 3  ============================="
"========================================================================"

// Write a function called modifyObject that takes 3 arguments. 
// the first argument is the object to which you are adding new data
// the second argument is a key to be added
// the third argument is the value to be associated with the key

//======================  EXAMPLE  ========================
modifyObject(obj, 'a', 1)
// {a:1}  <======  EXPECTED OUTPUT
modifyObject(obj, 'b', 2)
// {a:1, b:2}  <======  EXPECTED OUTPUT
modifyObject(obj, 'c', 3)
// {a:1, b:2, c:3}  <======  EXPECTED OUTPUT
//========================================================= 


"========================================================================"
"=============================  EXERCISE 4  ============================="
"========================================================================"

// Write a function called addToList that takes one argument, an array of movie titles
// then create a new empty array called movieList.
// Loop through the array of movie titles and push them inside the movieList array as objects.
// each object will have two key/value pairs with titles and ids: 
// movie title from the array becomes the value of 'title' key in the object
// index of the element in the array should be the value for the id key in the object
// Then return movieList.


//======================  EXAMPLE  ========================
var movies = ['matrix','the dark knight','a beautiful mind','american pie']
addToList(movies)
[   
    {title:'matrix',id:0},
    {title:'the dark knight',id:1},
    {title:'a beautiful mind',id:2},
    {title:'american pie',id:3}
] // <======  EXPECTED OUTPUT
//========================================================= 


"========================================================================"
"=============================  EXERCISE 5  ============================="
"========================================================================"

// Write a function called swap that takes one argument, an object, and returns 
// another object where the key/value pairs have been swapped. 
// The original object should not be modified.

//======================  EXAMPLE  ========================
swap({'name':'Antonello'})
// {Antonello: "name"}   <======  EXPECTED OUTPUT
swap({'age': 55})
// {55: "age"}  <======  EXPECTED OUTPUT
//========================================================= 


"========================================================================"
"=============================  EXERCISE 6  ============================="
"========================================================================"

// write a function called getIndex which finds the index of an element in an array of objects, 
// the objects have multiple key/value pairs so your function need to be flexible enough to find by any of them.
// please don't google "how to find index of an object in javascript" or similar
// You cannot use the ES6 method findIndex for this exercise!
// it should return the index of the found element or -1 if is not there.

// to pass the test your function should take 3 arguments: array of objects, name of the key and content of the value to search for, 
// so if they match it returns the index of the object containing this matching key:value pair

//======================  EXAMPLE  ========================
getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'Antonello')
0 // <======  EXPECTED OUTPUT
getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'George')
1 // <======  EXPECTED OUTPUT
getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'Peter')
-1 // <======  EXPECTED OUTPUT
//=========================================================  


"========================================================================"
"=============================  EXERCISE 7  ============================="
"========================================================================"

// Write a function called runOnRange that takes one argument, an object.
// this object will contain three properties, a start, and end and a a step.
// according to these properties it should push specific numbers to an array.
// Once done return the array.

//======================  EXAMPLE  ========================
runOnRange({start: 20, end: 26, step: 0})
// [] <======  EXPECTED OUTPUT
runOnRange({start: 20, end: 26, step: 3})
// => 20 
// => 23 
// => 26 
[ 20, 23, 26 ] // <======  EXPECTED OUTPUT
runOnRange({start: 26, end: 24, step: -1})
// => 26
// => 25 
// => 24
[ 26, 25, 24 ] // <======  EXPECTED OUTPUT
runOnRange({start:12, end: 10, step: 1})
// []  <======  EXPECTED OUTPUT
runOnRange({start:0, end: 10, step: 4})
[ 0, 4, 8 ] // <======  EXPECTED OUTPUT
//=========================================================  


"========================================================================"
"=============================  EXERCISE 8  ============================="
"========================================================================"

// Write a function called last that takes one argument, an object, and returns an object containing 
// only the last 
// key/value pair and does not modify the original object.

//======================  EXAMPLE  ========================
var obj = {a: 20, b: 26, c: 0}
last(obj)
{c:0} // <======  EXPECTED OUTPUT
//{a: 20, b: 26, c: 0}  <====== obj
//=========================================================  


"========================================================================"
"=============================  EXERCISE 9  ============================="
"========================================================================"

// Write a function called sumAll that takes one argument, an object, and sums all it's values. 
// If no object is provided or if the object is empty sumAll should return 0.

//======================  EXAMPLE  ========================
sumAll({a: 20, b: 26, c: 0})
46 // <======  EXPECTED OUTPUT
sumAll({a: 20, b: 26, c: -56})
-10 // <======  EXPECTED OUTPUT
sumAll({}) 
0 // <======  EXPECTED OUTPUT
sumAll() 
0 // <======  EXPECTED OUTPUT
//=========================================================  


"========================================================================"
"=============================  EXERCISE 10  ============================"
"========================================================================"

// Create a function called model. The model function allows you to control how you interact with a 
// collection of objects that we call collection that are stored in the DB. Model imposes conditions 
// on the properties of the collection, for example which keys are allowed.
// In this exercise create a model function. This model uses the definitions of a predefined object 
// called schema (you don't need to define it) to assert the keys that each object in a collection 
// that are allowed. The model function can take 3 arguments: the first is the type of the operation 
// we want to execute on the db and the second is the data we need to execute it, and the third one 
// would be our schema object defining the pattern or template for what data is valid for adding to the DB. 
//For now we only define an operation called 'add'.
// if the argument add is not present then nothing should be added.

// Example schema
var schema = ["id", "name", "age"]
// Please note the schema is only an example here, I may be calling a different one from the test...
// Define you DB array inside the function to avoid issues.
var DB = []
// your function should take three arguments
// an action, an object and a schema.
// the action should be "add" or no changes should be done.

//======================  EXAMPLE  ========================
model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"}, schema)
DB // [{id: 1, name: "Joe", age: 32}] => Address was not added because not allowed by the schema
model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"}, schema)
DB // [{id: 1, age: 32}] => Address was not added because not allowed by the schema 
//========================================================= 


"========================================================================"
"=============================  EXERCISE 11  ============================"
"========================================================================"

// Continuing the previous exercise, add the possibility to force the type of the value that can 
// be set on a given property. In this case schema is an object and no longer an array. The allowed 
// values are only "string", "number" and "boolean". If the value of a given property does not have 
// the appropriate type, then the property will not be added to the new object in the db.
// if the argument add is not present then nothing should be added.

var schema = {id: "number", name: "string", age: "number", married: "boolean"}
var DB = []
//======================  EXAMPLE  ========================
model("add", {id: 1, name: "Joe", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"}, schema)
DB // [{id: 1, name: "Joe"}] => married and age not added because of the wrong type (why?)
//========================================================= 


"========================================================================"
"=============================  EXERCISE 12  ============================"
"========================================================================"

// Schema force with Default
// We will now make sure that missing values are defaulted to a certain value. From now on, 
// the value of a given property of the schema object will be formed by an object with keys "type" 
// and "default". The type-setting system of the previous exercise should work in the same way; 
// with the exception of the new syntax. If no default key is added then the given property will 
// not be added if missing. If an input is not present or breaking an other of the schema rules, 
// the value will be set to the default.

var schema = {
    name: {type: "string", default: "NoBody"},
    age: {type: "number"},
    married: {type: "boolean", default: false}
}
var DB = []
//======================  EXAMPLE  ========================
model("add", {id: 1, name: "pedro", age: "32", address: "Muntaner 262, Barcelona, Spain"}, schema)
DB // [{name: "Pedro", married: false}] => married set to default even if missing 
model("add", {name: 43, married: "asdfasdf"}, schema)
DB /* [
        {name: "Pedro", married: false},
        {name: "NoBody", married: false}] => married and name set to default even wrong type */
model("add", {name: "43", married: true, age: 20}, schema)
DB /* [
        {name: "Pedro", married: false},
        {name: "NoBody", married: false},
        {name: "43", married: true, age: 20}] => married and name set to default even wrong type */
//========================================================= 


"========================================================================"
"=============================  EXERCISE 13  ============================"
"========================================================================"

// Write  an object called bankAccount, and 3 functions: withdraw, deposit and balance. 
// They keep track of the amount added and removed from a bank account when called bankAccount 
// function and keep it in the bankAccount.total.
// The balance function takes no argument and withdraw and deposit
// only take one argument.

//======================  EXAMPLE  ========================
bankAccount.withdraw(2)
bankAccount.withdraw(5)
bankAccount.deposit(4)
bankAccount.deposit(1)
bankAccount.balance() 
-2 // <======  EXPECTED OUTPUT
//========================================================= 


"========================================================================"
"=============================  EXERCISE 14  ============================"
"========================================================================"

// Write a function called Splice Which extrapolates properties from an object and uses them for a 
// newly created object. this function can take 3 arguments: the first is an object, the second and 
// third are numbers.
// The second argument indicates the position of the key/value pair we want to start taking properties 
// from (splicing) and the third one indicates how many you are removing. 
// So for instance splice(0,2) refers to the positions 0 and 1 of the object having the following 
// object: var obj = {a: 1, b: 2, c: 2} and calling the function splice with the arguments obj, 0, 2 
// should return {a: 1, b: 2}

// We assume that, as it is common in computer science, the first element of an object is 0 and not 1.
// If the third argument is not passed it should default to 1.

//======================  EXAMPLE  ========================
var obj = {a: 1, b: 2, c: 2}
var newObje = splice(obj, 0, 2)
// newObje => {a: 1, b: 2} 
var newObje = splice(obj, 2, 2)
// newObje => {c:2} 
var newObje = splice(obj, 5, 2)
// newObje => {} 
var newObje = splice(obj, 0)
// newObje => {a:1} 
var newObje = splice(obj, 0, 0)
// newObje => {}
//========================================================= 


"========================================================================"
"=============================  EXERCISE 15  ============================"
"========================================================================"

//Write a function called sort that sorts the values of an object, which should all be numbers, 
//You should sort the object numericaly in ascending order.

//======================  EXAMPLE  ========================
sort({a: 1, b: 20, c: 3, d: 4, e: 1, f: 4})
// {a: 1, e: 1, c: 3, d: 4, f: 4, b: 20}  <======  EXPECTED OUTPUT
sort({age:22, year:1999, a:99, b:3})
// {b: 3, age: 22, a: 99, year: 1999}  <======  EXPECTED OUTPUT
//========================================================= 


"========================================================================"
"=============================  EXERCISE 16  ============================"
"========================================================================"

// Extend the functionality of the previous function Sort to include the possibility of having different 
// types of sorting according to the arguments we pass. 
// we need to be able to decide if sorting by keys or by value and if in ascending or descending order.
// please also note that the keys are letters and the values are numbers so should the sorting be by 
// key it needs to sort alphabetically.

//======================  EXAMPLE  ========================
var obj = {a: 1, b: 20, c: 3, d: 4, e: 1, f: 4}
sort(obj,'values','ascending')
// {a: 1, e: 1, c: 3, d: 4, f: 4, b:20}  <======  EXPECTED OUTPUT
sort(obj,'values','descending')
// {b: 20, d: 4, f: 4, c: 3, a: 1, e:1}  <======  EXPECTED OUTPUT
sort(obj,'keys','ascending')
// {a: 1, b: 20, c: 3, d: 4, e: 1, f:4}  <======  EXPECTED OUTPUT
sort(obj,'keys','descending')
// {f: 4, e: 1, d: 4, c: 3, b: 20,a :1}  <======  EXPECTED OUTPUT
//========================================================= 

// Note: should the second or the third argument be missing the function 
// should console.log the following message: "missing argument here!".
