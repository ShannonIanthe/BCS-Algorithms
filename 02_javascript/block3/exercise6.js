
function sum(arr) {
    var count = 0;
    arr.forEach(element => {
            count+= element;
    });
    return count;
}




module.exports ={
    sum
}