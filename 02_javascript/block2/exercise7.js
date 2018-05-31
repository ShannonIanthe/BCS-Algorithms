var arr = []
var pusher = arr =>{
    var arr2 =[]
    arr2.push(...arr)
    return String(arr2)
}
module.exports = {
    arr, pusher
}