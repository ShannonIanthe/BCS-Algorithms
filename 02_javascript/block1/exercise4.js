var howManyTeas = function(age, end_age, teas_day){
    return  ((end_age - age) * teas_day);
}
console.log(howManyTeas(18, 60,2));

module.exports = {
    howManyTeas
}
