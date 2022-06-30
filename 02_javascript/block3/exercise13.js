function shortener(str){
   let split = str.split(" ");
   console.log("split: ", split);
   let name = split[0].charAt(0).toUpperCase() + split[0].slice(1);
    let surname = split[1].charAt(0).toUpperCase();
    return `${name} ${surname}.`;
}

// Notes //
// split[0] is the first element
// charAt(0) is the first character of the first element (the first letter)
//toUpperCase() capitilize the first character of the first element
//+ split[0].slice(1); add the rest of the element


module.exports = {
    shortener
}
