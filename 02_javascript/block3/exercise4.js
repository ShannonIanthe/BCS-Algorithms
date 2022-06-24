var arr = ['one','two','three','four']

function looper (arr) {
    var count = 0;
    arr.forEach(function(item, index) {
            count++;
            console.log(arr)
    })
    return count;
} 


module.exports = { 
    looper, arr
}

