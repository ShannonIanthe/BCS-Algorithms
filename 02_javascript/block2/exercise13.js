// write a function called characterRemover which takes two arguments, a 
// string and a character to be removed and returns the string free of the 
// unwanted character.
// please note: in order for the string to make sense you should replace 
// the unwanted characters with a space so that your string will look like this:

//======================  EXAMPLE  ========================
var str = "I,Really,Like,Pizza";

function characterRemover(str, myStrSplit) {
     var str = str.split(",").join(" ");
     return str;
};

characterRemover(str)

module.exports = {
    characterRemover
}