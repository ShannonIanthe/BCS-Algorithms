// create a function called isTrue
// it should check if the data passed into it is NOT:

// undefined
// an empty string
// false
// null
// 0

// your function should take one argument and return true if it is not one of the falsy 
// above and false if it is

function isTrue(str){
    if(str) {
        return true }
        else {
            return false
        }
    }



module.exports = {
    isTrue
}