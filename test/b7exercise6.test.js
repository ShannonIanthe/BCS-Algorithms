var assert = require("chai").assert;
var familyAffairs = require("../02_javascript/block7/exercise6.js")
  .familyAffairs;

let perfectFamily = {
  father: { name: "Mike", age: 44, height: 179 },
  mother: { name: "Jenny", age: 40, height: 168 },
  son: { name: "Pablo", age: 16, height: 165 }
};

let otherFamilies1 = [
  {
    Smiths: {
      father: { name: "Jake", age: 38, height: 182 },
      mother: { name: "Viola", age: 36, height: 172 },
      son: { name: "Donny", age: 14, height: 180 }
    }
  },
  {
    Morenos: {
      father: { name: "Juan", age: 42, height: 188 },
      daughter: { name: "Julia", age: 10, height: 149 }
    }
  },
  {
    Tanakas: {
      father: { name: "Kioto", age: 39, height: 172 },
      mother: { name: "Junko", age: 42, height: 164 },
      son: { name: "Bundo", age: 24, height: 164 }
    }
  }
];

let otherFamilies2 = [
  {
    Smiths: {
      father: { name: "Jake", age: 38, height: 182 },
      mother: { name: "Viola", age: 36, height: 172 }
    }
  },
  {
    Morenos: {
      father: { name: "Juan", age: 42, height: 188 },
      daughter: { name: "Julia", age: 10, height: 149 },
      mother: { name: "Kate", age: 36, height: 172 }
    }
  },
  {
    Tanakas: {
      father: { name: "Kioto", age: 39, height: 172 },
      mother: { name: "Junko", age: 42, height: 164 },
      son: { name: "Bundo", age: 24, height: 164 }
    }
  }
];

let otherFamilies3 = [
  {
    Smiths: {
      father: { name: "Jake", age: 38, height: 182 },
      mother: { name: "Viola", age: 36, height: 172 },
      son: { name: "Donny", age: 14, height: 180 }
    }
  },
  {
    Morenos: {
      father: { name: "Juan", age: 42, height: 188 },
      daughter: { name: "Julia", age: 10, height: 149 },
      mother: { name: "Kate", age: 36, height: 172 }
    }
  },
  {
    Tanakas: {
      father: { name: "Kioto", age: 39, height: 172 },
      mother: { name: "Junko", age: 42, height: 164 },
      son: { name: "Bundo", age: 24, height: 164 }
    }
  }
];

describe("#test1", function() {
  it("familyAffairs should be a function", function() {
    assert.typeOf(familyAffairs, "function");
  });
});
describe("#test2", function() {
  it("familyAffairs should be  Yay! Jenny moved to Morenos", function() {
    assert.equal(
      familyAffairs(perfectFamily, otherFamilies1),
      `Yay! Jenny moved to Morenos`
    );
  });
});
describe("#test3", function() {
  it("familyAffairs should be  Yay! Jenny moved to Smiths", function() {
    assert.equal(
      familyAffairs(perfectFamily, otherFamilies2),
      `Yay! Jenny moved to Smiths`
    );
  });
});
describe("#test4", function() {
  it("familyAffairs should be Yay! Jenny moved to Tanakas", function() {
    assert.equal(
      familyAffairs(perfectFamily, otherFamilies3),
      `Yay! Jenny moved to Tanakas`
    );
  });
});
