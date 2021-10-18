function toCelsius(toFahr){
    return ((toFahr - 32) * 5/9);
}
Math.round(toFahr(39));

function toFahr(toCelsius){
    return ((toCelsius * 1.8) + 32);
}

Math.round(toCelsius(102));

module.exports = {
    toCelsius, 
    toFahr,
}
