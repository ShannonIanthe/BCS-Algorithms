var assert               = require('chai').assert
var howManyTeas          = require('../02_javascript/block1/exercise4').howManyTeas



describe("#test1", function(){
    it ('howManyTeas should be 25550', function(){
        assert.equal(howManyTeas(35,70, 2),25550)
    })
})
describe("#test2", function(){
    it ('howManyTeas should be 730', function(){
        assert.equal(howManyTeas(35,36, 2),730)
    })
})
describe("#test3", function(){
    it ('howManyTeas should be 18250', function(){
        assert.equal(howManyTeas(35,45, 5),18250)
    })
})