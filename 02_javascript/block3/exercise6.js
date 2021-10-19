
// write a function called sum which takes an array as argument and then 
// return the sum of all its elements.
 function sum(arr){
     var sum = 0;
     arr.forEach(element => {
         sum = sum + element    
     });
     return sum
 }




module.exports ={
    sum
}