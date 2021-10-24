function uniqueElements (arr){

    var mySet = new Set(arr)
    var myUniqueArray = [...mySet]

    var myString = `old array ${arr.join()}, new array ${myUniqueArray.join()}`
    return myString
}

module.exports = {
    uniqueElements
}