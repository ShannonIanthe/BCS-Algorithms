function howManyTeas (currentAge, endOfAge, numOfTeas) {
    return ((endOfAge - currentAge ) * numOfTeas) * 365
}

//======================  EXAMPLE  ========================
howManyTeas(35,70, 2)

module.exports = {
    howManyTeas,
}

