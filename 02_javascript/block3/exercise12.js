function reverser(str) {
    var myArray = [];
    for (var index = str.length; index >= 0; index--) {
        const element = str[index]
        myArray.push(element)
    }
    return myArray.join('')
}


module.exports = {
    reverser
}
  


