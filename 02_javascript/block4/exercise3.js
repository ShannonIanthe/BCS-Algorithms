function check_types(arr) {

    let myArray = []

    arr.forEach(element => {
      let type = typeof(element) 

        if(!myArray.includes(type))
        {
            myArray.push(type)
        }
      
    });
    return myArray.length
}

module.exports ={
    check_types
}