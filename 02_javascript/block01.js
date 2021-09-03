/* 
Please write your solution in the corresponding folder/file to make them available for the testing

IN ORDER TO TEST YOUR SOLUTIONS YOU SHOULD RUN THE FOLLOWING COMMANDS IN THE TERMINAL:

First time just once from the folder with the exercises you cloned, ie BCS_JS_BOOTCAMP_FILES_TDD:

npm install

This will install needed npm packages for testing

To test an exercise also from the folder with the exercises:

npm run test-single -- test/'NAME_OF_THE_TEST_FILE_YOU_ARE_TESTING'

example :
if you are doing exercise 1 of block 1 it should be 

npm run test-single -- test/b1exercise1.test.js

Then simply change the block/exercises numbers, like for Block 02 Exercise 3 run this:

npm run test-single -- test/b2exercise3.test.js
*/


'=== EXERCISE 0 ==='

Declaring variables:
Please declare a variable 'apple' and assign to it a value of 5
Declare a variable 'apple2' and assign to it a value of 10
Declare a variable 'basket' and assign to it sum of apple and apple2
Declare a variable 'myName' and assign your name as a value



'=== EXERCISE 1 ==='

/* 

Modify your total function so that it will return the sum of two arguments num and num2


*/

//======================  EXAMPLE  ========================
total(15,5)
20 // <======  EXPECTED OUTPUT
total(20,20)
40 // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 2 ==='

Modify your function so that it will return the total of the multiplication of it's arguments a and b

//======================  EXAMPLE  ========================
multy(10,5)
50 // <======  EXPECTED OUTPUT
multy(20,20)
400 // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 3 ==='

/*
Age calculator

Want to find out how old you'll be? Calculate it!

You have a function which takes 2 arguments -- year of birth and current year.

Finish the function so that it will return the correct age.
*/

//======================  EXAMPLE  ========================
ageCalc(1982,2018)
36 // <======  EXPECTED OUTPUT
ageCalc(2000,2018)
18 // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 4 ==='

/* 
Ever wondered how much a "lifetime supply of Tea you will need?"
Let's find out!!!

You have a function called howManyTeas. It takes 3 arguments -- current age, expected end of life age, number of teas per day.
Calculate how many teas you will need until the end of life.
Return the number of teas as a result.
*/

//======================  EXAMPLE  ========================
howManyTeas(35,70, 2)
25550 // <======  EXPECTED OUTPUT
howManyTeas(35,36, 2)
730 // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 5 ==='

/* 
You have a function called compare which takes 2 arguments, which are numbers, and returns true if the first one is
 bigger than the second on and false if is not.
*/

//======================  EXAMPLE  ========================
compare(100, 50)
true // <======  EXPECTED OUTPUT
compare(1, 100)
false // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 6 ==='

/*
Define a function called compare which takes 2 arguments, and returns true if the first is equal to the second and false if is not (strict equality).
*/


//======================  EXAMPLE  ========================
compare(10, 34)
false // <======  EXPECTED OUTPUT
compare(100, 100)
true // <======  EXPECTED OUTPUT
compare(100, '100')
false // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 7 ==='

/* 
Create a function called isEven which takes 1 argument and returns true if the argument passed is even and false if is odd.
*/

//======================  EXAMPLE  ========================
isEven(7)
false // <======  EXPECTED OUTPUT
isEven(2)
true // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 8 ==='

/*
Make a function which takes age of a user and minimum age for driving a scooter and returns true if user is old enough to drive a scooter and false if not

Define variables age and minAge outside your function
*/

//======================  EXAMPLE  ========================
checkAge(21, 15)
true // <======  EXPECTED OUTPUT
checkAge(12,15)
false // <======  EXPECTED OUTPUT
checkAge(100, 60)
true // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 9 ==='

/*
You have a function 'getAge' which takes 3 arguments: year of birth, current year, name and returns a phrase "Hello
 USER_NAME you are NUMBER years old" where USER_NAME is the third argument and NUMBER is the user's age calculated from the first and the second arguments.

*/

//======================  EXAMPLE  ========================
getAge(1982, 2018, 'Antonello')
`Hello Antonello you are 36 years old` // <======  EXPECTED OUTPUT
getAge(1960, 1970, 'Mike')
`Hello Mike you are 10 years old` // <======  EXPECTED OUTPUT
getAge(1200, 2000, 'Ottaviano')
`Hello Ottaviano you are 800 years old` // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 10 ==='

/*
Make a function which takes 2 arguments, year of birth and current year and returns the following message, replacing the word *'DAYS'* with the actual value
*/

//======================  EXAMPLE  ========================
howManyDays(2016, 2018)
`you have lived for 730 days already!` // <======  EXPECTED OUTPUT
howManyDays(1982, 2018)
`you have lived for 13140 days already!` // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 11 ==='

/*
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Make a function toFahr which takes one argument -- a temperature in Celsius (number) -- to convert it to
 fahrenheit and output the result.

Make a function toCelsius which takes one argument -- a temperature in Fahrenheit (number) --  to convert it to
 celsius and output the result.

Use Math.round() to round the results before returning them. Example of Math.round: Math.round(33,3) will give back 33

*/

//======================  EXAMPLE  ========================
toCelsius(102)
39 // <======  EXPECTED OUTPUT
toFahr(39)
102 // <======  EXPECTED OUTPUT
toCelsius(68)
20 // <======  EXPECTED OUTPUT
toFahr(57)
135 // <======  EXPECTED OUTPUT
//=========================================================
