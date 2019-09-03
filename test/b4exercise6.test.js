var assert                  = require('chai').assert
var numberConverter             = require('../02_javascript/block4/exercise6').numberConverter

describe("#test0", function(){
    it ('numberConverter should be a function', function(){
        assert.typeOf(numberConverter, 'function')
    })
})
describe("#test1", function(){
    it ("numberConverter should be 2 were converted to numbers: 12,55, 1 couldn't be converted", function(){
        assert.equal(numberConverter(["12", "55","hello"]),
        "2 were converted to numbers: 12,55, 1 couldn't be converted")
    })
})

describe("#test2", function(){
    it ("numberConverter should be no need for conversion", function(){
        assert.equal(numberConverter([22,55,66]),
        "no need for conversion")
    })
})
describe("#test3", function(){
    it ("numberConverter should be 4 were converted to numbers: 2,3,3,0, 8 couldn't be converted", function(){
        assert.equal(numberConverter([1,'2',[],{},[3],['3'],['3','3'], '', '0', ()=>{},[],[],[]]),
        "4 were converted to numbers: 2,3,3,0, 8 couldn't be converted")
    })
})