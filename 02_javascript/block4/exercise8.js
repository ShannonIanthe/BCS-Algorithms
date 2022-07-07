function uniqueElements (arr){

    var mySet = new Set(arr)
    var myUniqueArray = [...mySet]

    var myString = `old array ${arr.join()}, new array ${myUniqueArray.join()}`
    return myString
}

module.exports = {
    uniqueElements
}

//The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.
