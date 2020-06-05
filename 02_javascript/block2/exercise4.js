var arr = ["cheese", "salame", "bread", "water", "pizza"];
var pos=2;
function splicer(arr,pos){
arr.splice(pos,1);
return arr;
};
splicer(arr,pos);

module.exports = {
    splicer
}