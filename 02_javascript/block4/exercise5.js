function howManyCaps(str) {
    let count = 0;
    let whichCap = [];
    let capWords = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str[i].length; j++) {
            if (capWords.includes(str[i][j])) {
                count++;
            }
        }
    }
    return `There are ${count} capitals and these are ${whichCap}`
}
module.exports = {
    howManyCaps
}

// not sure how to display which letters are capitalized