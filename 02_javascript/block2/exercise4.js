var arr = ["cheese", "salame", "bread", "water", "pizza"];
arr.splice(2,1);

function splicer(arr) {
    return arr;
}; 

splicer(arr);


module.exports = {
    splicer
}