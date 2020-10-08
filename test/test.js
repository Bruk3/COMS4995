const assert = require("assert");

describe("Array", function () {
  describe("indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Array", function () {
  describe("sort()", function () {
    it("should sort the given array in increasing order", function () {
      assert.deepEqual([1, 2, 3], [2, 1, 3].sort());
    });
  });
});