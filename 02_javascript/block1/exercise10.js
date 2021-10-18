function howManyDays(dob, now){
    return ((now - dob) * 365)
}

howManyDays(2016, 2018)
alert("You have lived for " + howManyDays + " days already!");


module.exports = {
    howManyDays
}
