var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'
var reverser = str =>{
    var arr = [];
    for (var x = str.length; x >= 0; x--){
        arr.push(str[x])
    }
    return arr.join('')
}
module.exports = {
    reverser
}
