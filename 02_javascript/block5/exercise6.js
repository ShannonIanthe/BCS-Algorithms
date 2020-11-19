const currenciesDB =  [];
const dinamicConverter = (str, arr, curr)=> {
    let results;
    if (str === "add") {
      if(currenciesDB.length < 1){
         currenciesDB.push(arr);
         results = 1;
     }else{
        let index = currenciesDB.findIndex((ele)=> ele[0] === arr[0]);
        if(index === -1) {
           currenciesDB.push(arr);
           results =  1;     
       }
       else results = NaN;
   }
}


if(str === "convert"){
 let exchange;
 currenciesDB.forEach(ele => ele[0] === curr ? exchange = ele[1] : null);
 currenciesDB.forEach(ele=>{
    if(arr[0] === ele [0]){
        let rate = ele[1];
        results = arr[1] *  rate / exchange;
    }
})
}
return !isNaN(results) ? results : 'invalid data provided!';
}


module.exports = {
    dinamicConverter, currenciesDB
};