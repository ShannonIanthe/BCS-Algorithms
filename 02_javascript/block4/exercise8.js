const uniqueElements = arr =>{
    const newArr = []
    arr.forEach(ele=>{
        !newArr.includes(ele) ? newArr.push(ele) : null
    })
    return `old array ${arr}, new array ${newArr}`
}
   
module.exports = {
    uniqueElements
}