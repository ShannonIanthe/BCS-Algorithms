var assert       = require('chai').assert
var {
    apple, 
    apple2, 
    basket,
    myName
    }       = require('../02_javascript/block1/exercise0')

describe("#test1", function(){
    it ('apple should be a number', function(){
        assert.typeOf(apple, 'number')
    })
})
describe("#test2", function(){
    it ('apple2 should be a number', function(){
        assert.typeOf(apple2, 'number')
    })
})

describe("#test3", function(){
    it ('basket should be a number and equal to 15', function(){
        assert.typeOf(basket, 'number')
        assert.equal(basket,15)
    })
})
describe("#test4", function(){
    it ('myName should be a string', function(){
        assert.typeOf(myName,'string')
    })
})
