
var splice = function (object, num1, num2){
	let newObj= {};
	let count = 0;
	for(let key in object){
		if(count <= num2 && count >= num1){
			newObj[key] = object[key]
		}
		if(num1 === num2){
			if(count-1 === num2){
				newObj[key] = object[key]
			}

		}
		count++;
	}
	return newObj; 
}


module.exports ={
	splice
}