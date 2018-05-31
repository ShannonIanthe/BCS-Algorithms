
var isEven = arr => {
    var count = 0
    arr.map(ele => {
        ele % 2 == 0 ? count ++ :null
    })
    return count

}
module.exports ={
    isEven
}