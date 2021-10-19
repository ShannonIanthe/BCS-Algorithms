
// write a function called timesTwo which takes an array as an argument.
// inside it use the forEach loop and push the numbers of the array to a 
// new array and multiply them by two on the way then return the new array

function timesTwo(arr){
    var myArray= [] // empty array to push the numbers to the new array
    arr.forEach(element => {
        myArray.push(element * 2)
    });
    return myArray
}
//======================  EXAMPLE  ========================
timesTwo([10,10,10])


module.exports ={
    timesTwo
}