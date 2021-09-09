var assert                      = require('chai').assert
var sort                        = require('../02_javascript/block6/exercise15.js').sort

describe("#test1", function(){
    it ('sort should be a function', function(){
        assert.typeOf(sort, 'function')
    })
})

describe("#test2", function(){
    it ('sort should be {a: 1, e: 1, c: 3, d: 4, f: 4, b: 20}', function(){
        assert.equal(JSON.stringify(sort({a: 1, b: 20, c: 3, d: 4, e: 1, f: 4})), JSON.stringify({a: 1, e: 1, c: 3, d: 4, f: 4, b: 20}))
    })
})

describe("#test3", function(){
    it ("sort should be {b: 3, age: 22, a: 99, year: 1999}", function(){
        assert.equal(JSON.stringify(sort({age:22, year:1999, a:99, b:3})), JSON.stringify({b: 3, age: 22, a: 99, year: 1999}))
    })
})

