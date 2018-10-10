var assert       = require('chai').assert
var isEven      = require('../02_javascript/block1/exercise7').isEven



describe("#test1", function(){
    it ('a should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('isEven should be a function', function(){
        assert.typeOf(isEven, 'function')
    })
})
describe("#test3", function(){
    it ('isEven should be 5', function(){
        assert.equal(isEven(3 ),false)
    })
})
describe("#test4", function(){
    it ('isEven should be 6', function(){
        assert.equal(isEven(10),true)
    })
})
