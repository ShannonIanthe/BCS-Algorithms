var assert       = require('chai').assert
var multy        = require('../02_javascript/block1/exercise2').multy

describe("#test1", function(){
    it ('multy should be 50', function(){
        assert.equal(multy(10,5),50)
    })
})
describe("#test2", function(){
    it ('multy should be 400', function(){
        assert.equal(multy(20,20),400)
    })
})