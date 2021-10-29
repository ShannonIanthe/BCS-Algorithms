function calc(a,b,c){
    let number1= a
    if (typeof(b) === 'string' ){
        var operator = b
    }
    else 
    {
        var number2 = b;
        var operator = c
    }

    if(!operator){
        return "wrong data provided"
    }
    else {
        if(operator === "+"){
            if(number2){
            return number1 + number2
        }
        else {
            return number1 + 0
        }
        else if(operator === "-"){
            return number1 - number2
        }
        else if(operator === "*"){
            return number1 - number2
        }
        else if(operator === "/"){
            return number1 - number2
        }
    }



}
      module.exports = {
         calc
     }