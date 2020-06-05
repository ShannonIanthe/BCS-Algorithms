
function checkAge (month, day){
var date1 = new Date()
var todaymonth = date1.getMonth()
var todayday = date1.getDate()
var daysmonth = 30
if (month > 12 || month == 0 || day > 31 || day == 0){
    return "Error invalid data provided"
}
if (month - 1 == todaymonth && day == todayday){
return "Happy birthday!"
}
if (month - 1 <= todaymonth && day < todayday){
   return "Sorry your birthday is passed for this year"
}
if (month - 1 == todaymonth && day > todayday){
   return "There are " + (day - todayday) + " days until your next birthday"
}
if (month -1 == todaymonth +1){
   return "There are " + ((30-todayday) + day) + " days until your next birthday"
}
if (month -1 > todaymonth+1){
   return "There are " + ((month-1)-(todaymonth+1)) + " months and " + (((30-todayday) + day)+1) + " days until your next birthday"
}
}

module.exports = {
    checkAge
}