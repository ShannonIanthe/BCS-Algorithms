
// write a function called addToObj which takes two arguments and returns 
// an object which has the first argument as a key and the second as value.

//======================  EXAMPLE  ========================
function addToObj(key,value) {
    var myObj = {}
    myObj[key] = value
    return myObj
}


addToObj('age',22)
{age:22} 

module.exports = {
    addToObj
}