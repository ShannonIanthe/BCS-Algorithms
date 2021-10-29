// write a function called tellAge that tells you how old you are based on the date of birth passed.
// this function will take 3 arguments month, day and year
// You should use the Date object to set the value of today.
// if the birth date is less than one year from the current date it should return : "You are NUMBER_DAYS old"
// if its more than one year it should return you are NUMBER_YEARS old"
// Info on Date object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

function tellAge(month, day, year){
 var myMonth = month -1
 var providedDate = new Date (year, myMonth, day)
 var diffTime = new Date() - providedDate
 var numberOfYears = Math.floor(diffTime/86400000/365)
 return `You are ${numberOfYears} years old`
}


module.exports = {
    tellAge
}