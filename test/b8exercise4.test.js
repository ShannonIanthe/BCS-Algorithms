var assert                      = require('chai').assert,
    tally                       = require('../02_javascript/block8/exercise4.js').tally;


describe("#test1", function(){
    it ('tally should be  a function', function(){
        assert.typeOf(tally, 'function')
    })
})
describe("#test2", function(){
    it ('tally should return {2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}', function(){
        var obj = tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6])
        assert.equal(obj[2], 1)
        assert.equal(obj[3], 2)
        assert.equal(obj[4], 3)
        assert.equal(obj[5], 10)
        assert.equal(obj[6], 4)
        assert.equal(obj[7], 3)

    })
})
describe("#test3", function(){
    it ('tally should return {2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}', function(){
        var obj = tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6], 'obj')
        assert.equal(obj[2], 1)
        assert.equal(obj[3], 2)
        assert.equal(obj[4], 3)
        assert.equal(obj[5], 10)
        assert.equal(obj[6], 4)
        assert.equal(obj[7], 3)

    })
})

describe("#test4", function(){
    it ('tally should return [["2", 1],["3", 2],["4", 3],["5", 10],["6", 4],["7", 3]]', function(){
        var obj = tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6], 'arr')
        assert.equal(obj[0][1], 1)
        assert.equal(obj[1][1], 2)
        assert.equal(obj[2][1], 3)
        assert.equal(obj[3][1], 10)
        assert.equal(obj[4][1], 4)
        assert.equal(obj[5][1], 3)

    })
})

