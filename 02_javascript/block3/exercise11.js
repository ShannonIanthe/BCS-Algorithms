function lowerCaseLetters(str) {
	var myString = ""
	
	for (let index = 0; index < str.length; index++) {
		   
			if (`${Number(str[index])}` === 'NaN'){
					(myString = myString + str[index]).toLowerCase()
			}                    
	}
	return (myString.split()).join(' ');
}



module.exports = {
	lowerCaseLetters
}

