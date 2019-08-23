const arr = [1,5,9,33,65,122,66,['banana']]
const is_an_even_number = arr =>{
    let count = 0;
    arr.forEach(el =>{
        !isNaN(el) && el % 2 === 0 ? count ++ : null;
    });
    return count;
}

module.exports = {
    is_an_even_number
}