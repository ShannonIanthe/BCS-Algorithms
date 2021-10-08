var toCelsius = function (fahrenheit){
    return ((fahrenheit - 32) * 5/9);
}
console.log(toCelsius(82));

var toFahr = function (celsius){
    return ((celsius * 1.8) + 32);
}

console.log(toFahr(15));

module.exports = {
    toCelsius, 
    toFahr,
}
