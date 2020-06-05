function check_types(arr){
 var types=[];
 var count=0
 for(var i=0; i<arr.length;i++){
 	if(!types.includes(typeof arr[i]) ){  // to show that array does not include is !types.includes()?
 		types.push(arr[i]);
 		 count++
 	}
 }
 return count;
}

module.exports ={
    check_types
}