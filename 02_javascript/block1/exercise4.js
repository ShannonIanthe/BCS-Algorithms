 function howManyTeas(age, end_age, teas_day){
    return  ((end_age - age) * teas_day)*365;
}

howManyTeas(35, 70, 2);

module.exports = {
    howManyTeas,
}
