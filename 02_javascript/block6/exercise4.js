
function addToList(arr){
    var movieList = []
    arr.forEach((item, i) => {
        var myObj = {}
        myObj.title = item
        myObj.id = i
        movieList.push(myObj)
        
    });
}



module.exports = {
    addToList
}