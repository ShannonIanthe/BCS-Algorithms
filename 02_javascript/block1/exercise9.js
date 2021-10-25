function getAge(yearBirth, currentYear, name){
    age = currentYear - yearBirth
    return `Hello ${name} you are ${age} years old`
}

//======================  EXAMPLE  ========================
getAge(1982, 2018, 'Antonello')

    module.exports = {getAge}
