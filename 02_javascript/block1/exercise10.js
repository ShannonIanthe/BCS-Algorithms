function howManyDays(birthYear, currentYear){
    days = ((currentYear - birthYear) * 365)
    return `you have lived for ${days} days already!`
}

//======================  EXAMPLE  ========================
howManyDays(2016, 2018)

module.exports = {
    howManyDays
}
