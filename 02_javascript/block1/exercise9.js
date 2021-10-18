    var name ="Shannon";
    var birth_year= 1990;
    
    var getAge  = function (birth_year, now, name) {
        var currentAge = now - birth_year;
        return "Hello" + " " + name + " you are " + currentAge + " years old";
    }
    
    getAge(1990, 2021, "Shannon");

    module.exports = {getAge}
