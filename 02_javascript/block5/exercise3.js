const filter = (arr, type, minLen) => `${arr.filter((ele )=> ele.length >= minLen && typeof ele != type)}`

module.exports = {
    filter
}