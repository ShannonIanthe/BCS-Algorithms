var str = 'I,Really,Like,Pizza'
var characterRemover = (str, ele) => {
    var x = str.split(ele)
    return x.join(' ')
}
module.exports = {
    str, characterRemover
}