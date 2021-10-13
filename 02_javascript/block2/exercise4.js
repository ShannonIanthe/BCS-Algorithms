var arr = ["cheese", "salame", "bread", "water", "pizza"];
arr.splice(2,1);

function splicer(arr) {
    return arr.splice(2,1);
}; 

splicer(arr);


module.exports = {
    splicer
}