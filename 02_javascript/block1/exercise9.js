    var getAge  = function (birth_year, now, name) {
        return now - birth_year;
    }
    
    console.log(getAge(1990, 2021, 'Shannon'));

    module.exports = {getAge}
