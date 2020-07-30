var assert                  = require('chai').assert
var isString                = require('../02_javascript/block3/exercise5').isString

describe("#test1", function(){
    it ('isString should be a function', function(){
        assert.typeOf(isString, 'function')
    })
})
describe("#test2", function(){
    it ('Length of returned array should 1', function(){
        assert.equal(isString([3,55,66,"hello"]).length, 1)
    })
})
describe("#test3", function(){
    it ('Length of returned array should 3', function(){
        assert.equal(isString([3,55,66,"hello","beer",12,{},[],()=>{},"[]"]).length, 3)
    })
})
describe("#test4", function(){
    it ('Length of returned array should 3', function(){
        assert.equal(isString(["","","",15]).length, 3)
    })
})