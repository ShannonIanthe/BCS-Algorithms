var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"];

function isThere(arr){
    return arr.includes("green", -2);
}

isThere(arr);


module.exports ={
    isThere
}