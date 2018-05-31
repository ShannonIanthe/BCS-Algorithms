
var arr = ['cheese','salame','bread','water','pizza'] ,position =3;
var splicer = (arr,pos)=>{
    arr.splice(pos, 1)
    return String(arr)
}

module.exports = {
    arr, position, splicer
}