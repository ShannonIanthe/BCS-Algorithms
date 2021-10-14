var arr = ["cheese", "salame", "bread", "water", "pizza"];

function splicer(arr,idx) {
    return arr.splice(arr,2);
}; 

splicer(arr);


module.exports = {
    splicer
}