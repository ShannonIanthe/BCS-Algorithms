
var checkAge = function (age, minAge){
return function(age) {
    return age > minAge; 
    }
}

console.log(checkAge(18,22))



//Still working on this one //

module.exports = {
    checkAge
}
