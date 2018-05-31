var isString = arr => {
    var newArr = []
    arr.map(ele => {
        typeof ele == 'string' ? newArr.push(ele) : null;
    })
    return newArr;
}
module.exports = {
    isString
}