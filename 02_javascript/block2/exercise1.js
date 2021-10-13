// now you write your own functions here
// do not forget return :)
var arr = ["milk", "cheese", "car", "lime"];
arr.splice(0,1);
arr.splice(1,1);
arr.splice(3,1);

function assigner(arr){
    return arr.splice();
}

assigner(arr);


// do not modify module.export!
    module.exports = {
        assigner
    }