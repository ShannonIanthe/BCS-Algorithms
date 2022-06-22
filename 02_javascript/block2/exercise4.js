var arr = ["cheese", "salame", "bread", "water", "pizza"];

function splicer(arr, index){
  return arr.splice(arr, index);
}

splicer(arr);

module.exports = {
    splicer
}