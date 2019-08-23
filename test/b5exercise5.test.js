var assert                    = require('chai').assert
var checkAge                  = require('../02_javascript/block5/exercise5').checkAge
var checkAgeTest              = require('./test/checkAgeTest').checkAgeTest

describe("#test0", function(){
    it ('checkAge should be a function', function(){
        assert.typeOf(checkAge, 'function')
    })
})
describe("#test1", function(){
    it (`checkAge should be ${checkAgeTest(8,2)}`, function(){
        assert.equal(checkAge(8,2),
        checkAgeTest(8,2))
    })
})
describe("#test2", function(){
    it (`checkAge should be ${checkAgeTest(11,11)}`, function(){
        assert.equal(checkAge(11,11),
        checkAgeTest(11, 11))
    })
})
describe("#test3", function(){
    it (`checkAge should be  ${checkAgeTest(4,0)}`, function(){
        assert.equal(checkAge(4,0),
        checkAgeTest(4,0))
    })
})
describe("#test4", function(){
    it (`checkAge should be  ${checkAgeTest(12, 21)}`, function(){
        assert.equal(checkAge(12, 21),
        checkAgeTest(12, 21))
    })
})
describe("#test5", function(){
    it (`checkAge should be  ${checkAgeTest(2,11)}`, function(){
        assert.equal(checkAge(2,11),
        checkAgeTest(2,11))
    })
})
describe("#test6", function(){
    it (`checkAge should be  ${checkAgeTest(3,11)}`, function(){
        assert.equal(checkAge(3,11),
        checkAgeTest(3,11))
    })
})
describe("#test7", function(){
    it (`checkAge should be  ${checkAgeTest(0,11)}`, function(){
        assert.equal(checkAge(0,11),
        checkAgeTest(0,11))
    })
})
describe("#test8", function(){
    it (`checkAge should be  ${checkAgeTest(122,11)}`, function(){
        assert.equal(checkAge(122,11),
        checkAgeTest(122,11))
    })
})


