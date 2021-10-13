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

  function take_and_push(arr) {
      return take_and_push(arr, 2, 4);
  }
  
  take_and_push(arr);


module.exports = {
    take_and_push
}