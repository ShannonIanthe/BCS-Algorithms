var assert                     = require('chai').assert
var {addNewProduct, 
     renameCat, 
     displayAll, 
     categories, 
     products}                 = require('../02_javascript/block7/exercise8.js')

describe('#test0', function(){
  it ('categories and products should be declared as arrays', function() {
    assert.equal(Array.isArray(categories), true)
    assert.equal(Array.isArray(products), true)
  })
})
describe("#test1", function(){
  it ('addNewProduct should be a function', function(){
      assert.typeOf(addNewProduct,  'function')
  })
})
describe("#test2", function(){
  it ('renameCat should be a function', function(){
      assert.typeOf(renameCat,  'function')
  })
})
describe("#test3", function(){
  it ('displayAll should be a function', function(){
      assert.typeOf(displayAll,  'function')
  })
})
describe("#test4", function(){
  it (`addNewProduct should be Product yellow hat was added under hats category!`, function(){
      assert.equal(addNewProduct('yellow hat', 'hats'), `Product yellow hat was added under hats category!`)
  })
})
describe("#test5", function(){
  it (`addNewProduct should be Product is already there.`, function(){
      assert.equal(addNewProduct('yellow hat', 'hats'), `Product is already there.`)
  })
})
describe("#test6", function(){
  it (`addNewProduct should be New category pants was created and product blue jeans was added succesfully.`, function(){
      assert.equal(addNewProduct('blue jeans', 'pants'), `New category pants was created and product blue jeans was added succesfully.`)
  })
})
describe("#test7", function(){
  it (`renameCat should output categories`, function(){
      assert.equal(renameCat('pants', 'jeans')[2].catName, `jeans`)
  })
})
describe("#test8", function(){
  it (`renameCat should be Category shirts doesn't exist.`, function(){
      assert.equal(renameCat('shirts', 'jeans'), `Category shirts doesn't exist.`)
  })
})
describe("#test9", function(){
  it (`displayAll should be Category shoes contains black shoes.`, function(){
      assert.equal(displayAll('shoes'), `Category shoes contains black shoes.`)
  })
})
describe("#test10", function(){
  it (`displayAll should be Category shoes contains black shoes. Category hats contains black hat,yellow hat. Category pants contains blue jeans.`, function(){
      assert.equal(displayAll(), `Category shoes contains black shoes. Category hats contains black hat,yellow hat. Category jeans contains blue jeans.`)
  })
})