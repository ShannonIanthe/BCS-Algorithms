var assert                  = require('chai').assert
//var arr                     = require('../02_javascript/block2/exercise9').arr
var concatenator            = require('../02_javascript/block2/exercise9').concatenator
var arr1 = [
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
];
var arr2 = [
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office"
];
// describe("#test1", function(){
//     it ('arr should be an array', function(){
//         assert.typeOf(arr, 'array')
//     })
// })
describe("#test1", function(){
    it ('concatenator should be an function', function(){
        assert.typeOf(concatenator, 'function')
    })
})
describe("#test2", function(){
    it ("concatenator should be ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']", function(){
        assert.deepEqual(concatenator(arr1,arr2), [
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office"
])
    })
})
describe("#test3", function(){
    it ('concatenator should be ["one","two","three"]', function(){
        assert.deepEqual(concatenator(["one","two","three"],[1,2,3]),   ["one","two","three",1,2,3])
    })
})

