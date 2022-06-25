
function timesTwo(arr) {
    var newArr = [];
    arr.forEach(element => {
        newArr.push(element * 2)
    });
    return newArr;
}


module.exports ={
    timesTwo
}
