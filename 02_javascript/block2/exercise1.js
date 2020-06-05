// now you write your own functions here
// do not forget return :)

var arr=["milk", "cheese", "car", "lime"];
var index = 2;
function assigner(arr,index){
var arr1=arr.splice(index,1);
return arr1;
}
assigner(arr,2);


// do not modify module.export!
    module.exports = {
        arr, assigner, index
    }