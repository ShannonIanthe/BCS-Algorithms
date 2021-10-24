var arr = ['one','two','three','four']

function looper(arr) {
    var count;
    arr.forEach(a, b => {
        console.log(arr)
        count ++;
    });
    return looper
};

// inside it write a forEach loop which console.log each element and each 
// index for every iteration.
// Inside the function declare a variable called count, and increment it by one 
// for each iteration then return count.

module.exports = { 
    looper, arr
}