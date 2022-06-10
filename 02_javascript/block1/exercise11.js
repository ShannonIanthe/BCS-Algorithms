function toFahr (celsius) {
    return Math.round((celsius * 1.8) + 32);
}

function toCelsius (fahren) {
    return Math.round((fahren - 32) * 5 / 9);
}

module.exports = {
    toCelsius, 
    toFahr
}
