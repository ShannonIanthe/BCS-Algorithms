function toCelsius(fahr) {
    return ((fahr - 32) * 5) / 9;
}

Math.round(toCelsius(102));
Math.round(toCelsius(68));


function toFahr(celsi) {
    return ((celsi / 5) *9 )+32;
}
Math.round(toFahr(39));
Math.round(toFahr(57));

module.exports = {
    toCelsius, 
    toFahr
}
