var assert       = require('chai').assert
var checkAge     = require('../02_javascript/block1/exercise8').checkAge


describe("#test1", function(){
    it ('checkAge should be a function', function(){
        assert.typeOf(checkAge, 'function')
    })
})
describe("#test2", function(){
    it ('checkAge should be true', function(){
        assert.equal(checkAge(21, 15),true)
    })
})
describe("#test3", function(){
    it ('checkAge should be false', function(){
        assert.equal(checkAge(12,15),false)
    })
})
describe("#test4", function(){
    it ('checkAge should be true', function(){
        assert.equal(checkAge(100, 60),true)
    })
})
describe("#test5", function(){
    it ('checkAge should be true', function(){
        assert.equal(checkAge(15,11),true)
    })
})