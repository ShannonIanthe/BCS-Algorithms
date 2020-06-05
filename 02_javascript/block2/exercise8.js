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
function take_and_push(arr,a,b)
{
arr1=[];
arr1.push(arr[a]);
arr1.push(arr[b]);
return arr1;
}
// take_and_push(arr,2,4);

module.exports = {
    take_and_push
}