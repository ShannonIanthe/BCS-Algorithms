var shortener = function (str) {
var newStr = str.split(' ');
newStr[1] = newStr[1][0].toUpperCase() + '.';
newStr[0][0] = newStr[0][0].toUpperCase()
return newStr.join(' ')

}

module.exports = {
    shortener
}