var timesTwo = a => {
    var arr = []
    a.map(ele => arr.push(ele * 2) )
    return String(arr)
}
module.exports ={
    timesTwo
}