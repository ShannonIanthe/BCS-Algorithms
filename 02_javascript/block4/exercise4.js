// Create a function called checker that loops through a string and checks how 
// many occurrences of commas and question marks there are in it.
// it then returns a string with the numbers of commas and question marks
// please make sure to use the appropriate form, so if for instance there are 
// more than one commas / question marks you should use plural 
// like commas / question marks, otherwise singular: comma / question mark.

function checker(str) {
    var comma = 0;
    var questionMark = 0;
	str.forEach(element => {
		if (element === ',') {
            comma++;
		} if (element === '?') {
            questionMark++;
        } if (comma > 0) {
            return `${comma} commas`
        } if (questionMark > 0) {
            return `${questionMark} question marks`
        }
        else {
            return `${comma} comma, ${questionMark} question mark` 
        }
	}); 		
}




module.exports = {
    checker
}



