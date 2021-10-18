var arr = ["car", "soap", "banana", "tv", "toothbrush"];

function removeFirstAndLast(arr){
    return arr.slice(1,-1);
}
removeFirstAndLast(arr);

module.exports = {
    removeFirstAndLast
}