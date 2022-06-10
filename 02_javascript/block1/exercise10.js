function howManyDays (yearOfBirth, currentYear) {
    return (`you have lived for ${(currentYear - yearOfBirth) * 365} days already!`)
}

//======================  EXAMPLE  ========================
howManyDays(2016, 2018)

module.exports = {
    howManyDays
}
