var assert       = require('chai').assert
var compare      = require('../02_javascript/block1/exercise5').compare


describe("#test2", function(){
    it ('a should be a function', function(){
        assert.typeOf(compare, 'function')
    })
})
describe("#test3", function(){
    it ('compare should be 2', function(){
        assert.equal(compare(10,20), false)
    })
})
describe("#test4", function(){
    it ('compare should be 3', function(){
        assert.equal(compare(20,20), true)
    })
})
