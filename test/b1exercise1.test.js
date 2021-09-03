var assert       = require('chai').assert
var {total}       = require('../02_javascript/block1/exercise1')

describe("#test1", function(){
    it ('total should be 20', function(){
        assert.equal(total(15,5),20)
    })
})
describe("#test2", function(){
    it ('total should be 40', function(){
        assert.equal(total(20,20),40)
    })
})