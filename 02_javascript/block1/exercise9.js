function getAge (yearOfBirth, currentYear, name) {
    return (`Hello ${name} you are ${currentYear - yearOfBirth} years old`)
}

//======================  EXAMPLE  ========================
getAge(1982, 2018, 'Antonello')

    module.exports = {getAge}
