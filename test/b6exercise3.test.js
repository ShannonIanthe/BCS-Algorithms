var assert                    = require('chai').assert
var modifyObject              = require('../02_javascript/block6/exercise3.js').modifyObject
var obj                       = require('../02_javascript/block6/exercise3.js').obj

describe("#test0", function(){
    it ('obj should be a object', function(){
        assert.typeOf(obj, 'object')
    })
})
describe("#test1", function(){
    it ('modifyObject should be a function', function(){
        assert.typeOf(modifyObject, 'function')
    })
})
describe("#test2", function(){
    it (`modifyObject should be {c:22} `, function(){
        assert.equal(modifyObject(obj, 'c', 22).c, 22)
    })
})
describe("#test2", function(){
    it (`modifyObject should be {b: 33} `, function(){
        var myObj =  modifyObject(obj, 'b', 33)
            assert.equal(myObj.b , 33)

        })
    })