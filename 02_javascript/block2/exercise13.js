var str = "I,Really,Like,Pizza";

function characterRemover(str) {
    str.split(",");
    String.prototype.join(" ");
    return str;
};

characterRemover(str);


module.exports = {
    characterRemover
}