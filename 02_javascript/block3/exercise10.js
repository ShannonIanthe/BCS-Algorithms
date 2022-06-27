function twoArrays(arr1, arr2) {
    var count = 0;
    arr1.forEach((element, index) => {
        if (element == arr2[index]) {
            count ++;
        }
    
    }); return count;
}


module.exports ={
    twoArrays
}


function lowerCaseLetters(str) {
    var newString = [];
    str.forEach(element, index => {
        if (element === "string") {
            newString.push(str)
        }    
    }); return newString.split(' ')
}