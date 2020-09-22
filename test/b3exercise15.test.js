var assert                  = require('chai').assert
var longestString             = require('../02_javascript/block3/exercise15').longestString



describe("#test1", function(){
    it ('longestString should be an function', function(){
        assert.typeOf(longestString, 'function')
    })
})
describe("#test2", function(){
    it ("longestString should be watermelon", function(){
        assert.equal(longestString(['banana','kiwi','orange','apple','watermelon','pear'],5), 'watermelon')
    })
})
describe("#test3", function(){
    it ("longestString should be stefano", function(){
        assert.equal(longestString(['antonello','stefano','george'],6), 'stefano')
    })
})
