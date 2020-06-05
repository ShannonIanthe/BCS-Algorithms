var shortener=(str)=>{
var splitted=str.split(' ');
// you can add an empty space here to have it between name and initial
var newStr=splitted[0]+' '+splitted[1].charAt(0).toUpperCase()+'.';
return newStr;
}

module.exports = {
    shortener
}