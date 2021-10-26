var arr = ["mike", "jason", "peter"]

function findPosition(arr, element){
    return arr.indexOf(element)
}

findPosition(arr, "mike")

module.exports = {
    findPosition
}