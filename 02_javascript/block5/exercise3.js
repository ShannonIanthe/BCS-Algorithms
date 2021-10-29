// write a function called filter that takes 3 arguments, an array, a data 
// type and a minLength.
// it will loop through the array and return a new array where the elements 
// are NOT of the type of passed data type 
// and they have a length equal to or bigger than minLength

//======================  EXAMPLE  ========================
filter(['sdads','sadsasadasddsaddsadadsasd',44, [1,5,5,5,5,5,5,5,5,5,5,5]], 'object', 3)
["sdads", "sadsasadasddsaddsadadsasd"]

function filter(arr, type, minLen){
    var myArray = []
    arr.forEach(element => {
        if(typeof(element) !== type && (element.length > minLen)){
            myArray.push(element)
        }
    });
    return myArray
}

module.exports = {
    filter
}