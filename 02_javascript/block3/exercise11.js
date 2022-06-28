function lowerCaseLetters(str) {
	var myString = ""
	
	for (let index = 0; index < str.length; index++) {
		   
			if (`${Number(str[index])}` === 'NaN'){
					(myString = myString + str[index]).split('').join('');
			}                    
	}
	// Unable to split and join string in order to add space between words
	return myString.toLowerCase();;
}



module.exports = {
	lowerCaseLetters
}


