var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"];

function isThere(arr, string){
    return !arr.includes(string);
}

isThere(arr, "black");


module.exports ={
    isThere
}