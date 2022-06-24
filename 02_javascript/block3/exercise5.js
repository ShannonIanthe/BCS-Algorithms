function isString(arr) {
    var newArray = [];
    arr.forEach(element => {
        if (typeof(element) === 'string') {
            newArray.push(element);
        }
    });
    return newArray;
}



module.exports = {
    isString
}

