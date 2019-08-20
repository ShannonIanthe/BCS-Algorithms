var assert                  = require('chai').assert
//var arr                     = require('../02_javascript/block2/exercise6').arr
var removeAll               = require('../02_javascript/block2/exercise6').removeAll

// describe("#test1", function(){
//     it ('arr should be an array', function(){
//         assert.typeOf(arr, 'array')
//     })
// })
describe("#test1", function(){
    it ('removeAll should be an function', function(){
        assert.typeOf(removeAll, 'function')
    })
})

describe("#test3", function(){
    it ('removeAll should be []', function(){
        assert.deepEqual(removeAll([1,2,3,4,5,6,7,8,9,10]),  [])
    })
})


