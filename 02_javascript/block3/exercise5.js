function isString(arr) {
    var myArray=[];
    arr.forEach(element => {
        if (typeof(element) === 'string')
        {
            myArray.push(element)
        }
    })
    return myArray
}



module.exports = {
    isString
}

