var assert                      = require('chai').assert
var biggestNumber                        = require('../02_javascript/block6/exercise17.js').biggestNumber

describe("#test1", function(){
    it ('biggestNumber should be a function', function(){
        assert.typeOf(biggestNumber, 'function')
    })
})
describe("#test2", function(){
    it ("biggestNumber should be {num: 20, key: 'b'}", function(){
        var obj = biggestNumber({a: 1, b: 20, c: 3, d: 4, e: 1, f: 4})
        assert.equal(obj.num, 20);
        assert.equal(obj.key, 'b');
    })
})
describe("#test3", function(){
    it ("biggestNumber should be num: 26, key: 'b'", function(){
        var obj = biggestNumber({a: 20, b: 26, c: 0})
        assert.equal(obj.num, 26);
        assert.equal(obj.key, 'b');
    })
})
