var arr = ['car','soap','banana','tv','toothbrush']
var removeFirstAndLast = (arr) =>{
    arr.splice(0,1)
    arr.splice(-1)
    return String(arr)
}

module.exports = {
    arr, removeFirstAndLast
}