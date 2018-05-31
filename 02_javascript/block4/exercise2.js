var is_an_even_number = arr => {
    var even = 0;
    arr.map(num => {
        !isNaN(num) && ele % 2 == 0 ? even++ : null;
    })
    return even;
}
module.exports = {
    is_an_even_number
}