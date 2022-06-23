var str = "I,Really,Like,Pizza";

function characterRemover(str, char) {
     return str.replaceAll(char, ' ');
};

characterRemover(str, ",")




module.exports = {
    characterRemover
}