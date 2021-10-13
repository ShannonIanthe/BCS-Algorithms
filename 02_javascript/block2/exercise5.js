var arr = ["car", "soap", "banana", "tv", "toothbrush"];

function removeFirstAndLast(arr) {
    return arr.splice(1);
    return arr.splice(-1);
}

removeFirstAndLast(arr);

module.exports = {
    removeFirstAndLast
}