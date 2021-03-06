var assert       = require('chai').assert
// var arr          = require('../02_javascript/block2/exercise4').arr
// var position     = require('../02_javascript/block2/exercise4').position
var splicer      = require('../02_javascript/block2/exercise4').splicer


// describe("#test0", function(){
//     it ('position should be a number', function(){
//         assert.typeOf(position, 'number')
//     })
// })
// describe("#test1", function(){
//     it ('arr should be an array', function(){
//         assert.typeOf(arr, 'array')
//     })
// })
describe("#test1", function(){
    it ('splicer should be an function', function(){
        assert.typeOf(splicer, 'function')
    })
})

// describe("#test3", function(){
//     it ('splicer should be ["cheese", "salame", "bread", "pizza"]', function(){
//         assert.deepEqual(splicer(arr, 3), ["cheese", "salame", "bread", "pizza"])
//     })
// })
describe("#test2", function(){
    it ('splicer should be ["cheese", "salame", "bread", "pizza"]', function(){
        assert.deepEqual(splicer(["cheese", "salame", "bread", "pizza"], 3), ["cheese", "salame", "bread"])
    })
})
// describe("#test4", function(){
//     it ('splicer should be ["cheese,salame,bread"]', function(){
//         assert.deepEqual(splicer(arr, 3), ["cheese,salame,bread"])
//     })
// })
describe("#test3", function(){
    it ('splicer should be ["cheese,salame,bread"]', function(){
        assert.deepEqual(splicer(["cheese","salame","bread"], 2), ["cheese","salame"])
    })
})
describe("#test4", function(){
    it ('splicer should be ["cheese,bread"]', function(){
        assert.deepEqual(splicer(["cheese","bread"], 1), ["cheese"])
    })
})
describe("#test5", function(){
    it ('splicer should be ["cheese"]', function(){
        assert.deepEqual(splicer(["cheese"], 1), ["cheese"])
    })
})
describe("#test6", function(){
    it ('splicer should be []', function(){
        assert.deepEqual(splicer([], 0), [])
    })
})
