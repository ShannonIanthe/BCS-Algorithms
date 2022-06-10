var arr = ["milk", "cheese", "car", "lime"];
var index = 2;


function assigner (arr, index) {
  return arr.splice(index, 1)
}

assigner(arr);


// do not modify module.export!
    module.exports = {
        assigner
    }


    function takeAll (arr) {
      var newArry = arr.reverse();
      return newArry
    }