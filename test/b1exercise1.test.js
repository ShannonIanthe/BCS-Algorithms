var assert       = require('chai').assert
var {
    apple, 
    apple2, 
    basket, 
    total}       = require('../02_javascript/block1/exercise1')

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
    it ('total should be 20', function(){
        assert.equal(total(15,5),20)
    })
})
describe("#test4", function(){
    it ('total should be 40', function(){
        assert.equal(total(20,20),40)
    })
})