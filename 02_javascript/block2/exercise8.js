var arr = [
    "Breaking bad",
    "WestWorld",
    "Psych",
    "Games of Thrones",
    "Gotham",
    "Spartacus",
    "Dexter",
    "Office"
  ];

  function take_and_push(arr, index1, index2){
    var newArray = []
    newArray.push(arr[index1])
    newArray.push(arr[index2])
    return newArray
  }
  
  take_and_push(arr)
  
  


module.exports = {
    take_and_push
}