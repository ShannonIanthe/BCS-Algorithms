var assert                      = require('chai').assert,
    incByStep                   = require('../02_javascript/block8/exercise2.5.js').incByStep;


describe("#test1", function(){
    it ('incByStep should be  a function', function(){
        assert.typeOf(incByStep, 'function')
    })
})
describe("#test2", function(){
    it ('incByStep should be 1, 4, 7', function(){
       assert.deepEqual(incByStep(1,3,10),[1, 4, 7])
    })
})

describe("#test3", function(){
    it ('incByStep should be 5, 15, 25, 35, 45, 55, 65, 75, 85, 95', function(){
       assert.deepEqual(incByStep(5,10,100),[5, 15, 25, 35, 45, 55, 65, 75, 85, 95])
    })
})