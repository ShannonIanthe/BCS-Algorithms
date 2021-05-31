var assert                    = require('chai').assert
var getIndex                  = require('../02_javascript/block6/exercise6.js').getIndex

describe("#test1", function(){
    it ('getIndex should be a function', function(){
        assert.typeOf(getIndex, 'function')
    })
})
describe("#test2", function(){
    it ('getIndex should be a 0', function(){
        assert.equal(getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'Antonello'),0)
    })
})
describe("#test3", function(){
    it ('getIndex should be a 1', function(){
        assert.equal(getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'Golda'),2)
    })
})
describe("#test3", function(){
    it ('getIndex should be a -1', function(){
        assert.equal(getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'Peter'), -1)
    })
})