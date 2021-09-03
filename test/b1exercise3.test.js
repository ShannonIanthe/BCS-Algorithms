var assert               = require('chai').assert
var ageCalc              = require('../02_javascript/block1/exercise3').ageCalc

describe("#test1", function(){
    it ('ageCalc should be 36', function(){
        assert.equal(ageCalc(1982,2018),36)
    })
})
describe("#test2", function(){
    it ('ageCalc should be 18', function(){
        assert.equal(ageCalc(2000,2018),18)
    })
})