function toFahr(celsi){
    return Math.round( (celsi / 5) * 9 + 32);
}

function toCelsius(fahr){
    return Math.round( (fahr -32) * 5  / 9);
}   

module.exports = {
    toCelsius, 
    toFahr
}
