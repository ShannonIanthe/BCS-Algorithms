var arr = ['banana','apple','orange'], arr2 = ['tv', 'dvd-player','playstation'], pos = 1;
var swap = ( arr, arr2, pos) => {
    var temp  = arr[pos]
    arr[pos]  = temp
    arr[pos]  = arr2[pos]
    arr2[pos] = temp
    return String(String([arr,arr2]))
}
module.exports ={
    arr, arr2,pos, swap
}