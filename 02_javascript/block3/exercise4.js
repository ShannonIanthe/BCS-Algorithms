var arr = ['one','two','three','four']
var looper = arr => {
    var count = 0;
    arr.forEach((ele, i) => {
        count++
        console.log(ele,i)
    });
    return count;
}
module.exports = { 
    looper, arr
}