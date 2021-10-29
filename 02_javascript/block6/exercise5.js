
// Write a function called swap that takes one argument, an object, and returns 
// another object where the key/value pairs have been swapped. 
// The original object should not be modified.

function swap(obj){
    var myObj = {}
    for (var key in obj){
        var value = obj[key]

        myObj[value] = value

    }
    return myObj;
}


//======================  EXAMPLE  ========================
swap({'name':'Antonello'})
// {Antonello: "name"} 


module.exports= {
    swap
}