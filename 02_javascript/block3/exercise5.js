
let isString=(arr)=>{
var newArr=[];
// if you refer to anyArr it will always work with just htis one specific array, we should refer to arr from the arguments here
for (var i = 0; i < arr.length; i++) {
if (typeof arr[i]==='string') {
newArr.push(arr[i]);
}
}
return newArr;
}

module.exports = {
    isString
}


// let isString=(arr)=>{
// var newArr=[];
// // if you refer to anyArr it will always work with just htis one specific array, we should refer to arr from the arguments here
// for (var i = 0; i < anyArr.length; i++) {
// if (typeof arr[i]==='string') {
// newArr.push(arr[i]);
// }
// }
// return newArr;
// }