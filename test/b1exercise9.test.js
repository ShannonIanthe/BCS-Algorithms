var assert       = require('chai').assert
var getAge       = require('../02_javascript/block1/exercise9').getAge


describe("#test1", function(){
    it ('getAge should be a function', function(){
        assert.typeOf(getAge, 'function')
    })
})
describe("#test2", function(){
    it (`getAge should be Hello Antonello you are 36 years old`, function(){
        assert.equal(getAge(1982, 2018, 'Antonello'),`Hello Antonello you are 36 years old` )
    })
})
describe("#test3", function(){
    it ('getAge should be Hello Mike you are 10 years old', function(){
        assert.equal(getAge(1960, 1970, 'Mike'),`Hello Mike you are 10 years old`)
    })
})
describe("#test4", function(){
    it ('getAge should be Hello Peter you are 20 years old', function(){
        assert.equal(getAge(1980, 2000, 'Peter'),`Hello Peter you are 20 years old`)
    })
})
describe("#test5", function(){
    it ('getAge should be Hello Ottaviano you are 800 years old', function(){
        assert.equal(getAge(1200, 2000, 'Ottaviano'),`Hello Ottaviano you are 800 years old`)
    })
})