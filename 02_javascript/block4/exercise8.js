var arr = ['mike','jason','peter','robert','mike','jason','jenny','jane']


var uniqueElements = function(arr) {
var arr2 = [];
for(var i = 0; i < arr.length; i++) {
if (!arr2.includes(arr[i])) {
arr2.push(arr[i])
   }
     }
return `old array ${arr}\n new array ${arr2}`

   }
   
module.exports = {
    uniqueElements
}