function check_who_is_older(name, age, name2, age2){
    if (age > age2) {
        return `${name} age ${age} is older than ${name2} age ${age2}`
    } else if (age2 > age){
        return `${name2} age ${age2} is older than ${name} age ${age}`
    } else {
        return "they are the same age"
    }
}


    module.exports = {
    check_who_is_older
}
