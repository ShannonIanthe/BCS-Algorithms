var assert                  = require('chai').assert
var arr                     = require('../02_javascript/block3/exercise4').arr
var looper                  = require('../02_javascript/block3/exercise4').looper


describe("#test1", function(){
    it ('looper should be a function', function(){
        assert.typeOf(looper, 'function')
    })
})
describe("#test2", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test3", function(){
    it ('i should be 4', function(){
        assert.equal(looper([2,4,8,7]), 4)
    })
})
describe("#test4", function(){
    it ('i should be four', function(){
        assert.equal(arr[looper([2,4,8,7])-1], 'four')
    })
})