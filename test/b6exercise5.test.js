var assert                    = require('chai').assert
var swap                      = require('../02_javascript/block6/exercise5.js').swap

describe("#test1", function(){
    it ('swap should be a function', function(){
        assert.typeOf(swap, 'function')
    })
})
describe("#test2", function(){
    it ('swap should be {Antonello: "name"}', function(){
        assert.equal(swap({'name':'Antonello'})["Antonello"],'name')
    })
})
describe("#test3", function(){
    it ('swap should be {55: "age"}', function(){
        assert.equal(swap({'age':'55'})["55"],'age')
    })
})