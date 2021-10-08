var howManyDays = function (dob, now){

    return ((now - dob) * 365);
}

console.log(howManyDays(1990, 2021));

module.exports = {
    howManyDays
}
