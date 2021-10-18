var str = "I,Really,Like,Pizza";

function characterRemover(str) {
    str.replace(",", " ");
};

characterRemover(str);


module.exports = {
    characterRemover
}