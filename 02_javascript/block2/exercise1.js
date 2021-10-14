// now you write your own functions here
// do not forget return :)
var arr = ["milk", "cheese", "car", "lime"];

function assigner(arr,idx){
    return arr.splice(idx,1);
}

assigner(arr);


// do not modify module.export!
    module.exports = {
        assigner
    }