function howManyDays(dob, now){
    return ((now - dob) * 365);
};

howManyDays(2016, 2018)
("You have lived for " + howManyDays(1982, 2018) + " days already!");
("You have lived for " + howManyDays(2016, 2018) + " days already!");

module.exports = {
    howManyDays,
}
