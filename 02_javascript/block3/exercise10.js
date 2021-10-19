// now do the same exercise only this time ignore the type.
// write function called twoArrays which takes two arrays as arguments, 
// these arrays are of the same length
// inside it declare a variable called count
// it then loops and compare each element of one array with that of the other, 
// in pairs with same indexes and every time it finds a match it increases the 
// number of count by one then return count

function twoArrays(arr1,arr2){
    var count = 0;
    arr1.forEach(element,index => {
        if (element == arr2[index])
        count ++;    
    });
    return twoArrays
}



module.exports ={
    twoArrays
}