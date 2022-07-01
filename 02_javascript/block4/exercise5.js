function howManyCaps(str) {
    var caps = 0;
    var whichCaps = [];
    str.forEach((element, index) => {
        if (element === str.Uppercase(index)) {
            caps++;
        }
        
    }); return `There are ${caps} capitals and these are `;
}


module.exports = {
    howManyCaps
}