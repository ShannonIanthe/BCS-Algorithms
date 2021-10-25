function howManyTeas(currentAge, endOfLife, numTeas){
    return ((endOfLife - currentAge) * numTeas) * 365;
}


//======================  EXAMPLE  ========================
howManyTeas(35,70, 2)

module.exports = {
    howManyTeas,
}
