var arr = ["cheese", "salame", "bread", "water", "pizza"];

function splicer(arr,idx) {
    return arr.splice(arr,idx);
}; 

splicer(arr);


module.exports = {
    splicer
}