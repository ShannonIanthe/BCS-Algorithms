var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']
var take_and_push = (arr, a, b ) => {
    var newArr = []
    newArr.push(arr[a], arr[b])
    return String(newArr)
}
module.exports = {
    arr, take_and_push
}