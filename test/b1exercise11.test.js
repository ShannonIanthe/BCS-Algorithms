var assert          = require('chai').assert
var toCelsius       = require('../02_javascript/block1/exercise11').toCelsius
var toFahr          = require('../02_javascript/block1/exercise11').toFahr

describe("#test1", function(){
    it ('toCelsius should be a function', function(){
        assert.typeOf(toCelsius, 'function')
    })
})
describe("#test2", function(){
    it ('toFahr should be a function', function(){
        assert.typeOf(toFahr, 'function')
    })
})
describe("#test3", function(){
    it (`toCelsius should be 39`, function(){
        assert.equal(toCelsius(102),39)
    })
})
describe("#test4", function(){
    it (`toFahr should be 102`, function(){
        assert.equal(toFahr(39),102)
    })
})
describe("#test5", function(){
    it (`toCelsius should be 20`, function(){
        assert.equal(toCelsius(68),20)
    })
})
describe("#test6", function(){
    it (`toFahr should be 135`, function(){
        assert.equal(toFahr(57),135)
    })
})
