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

  function take_and_push(arr, num1, num2) {
    var arr2 = [ ]  
    arr2.push(arr[num1]);
    arr2.push(arr[num2]);
    return arr2;
  }
  
  take_and_push(arr);


module.exports = {
    take_and_push
}