const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { yamlStringToJson, yamlFileToJson } = require("../src/index");

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

describe("yaml", function () {
  describe("yamlFileToJson", function () {
    const expectedJson = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "fixtures", "results", "case.1.json"),
        "utf-8"
      )
    );
    console.log(`expectedJson: ${expectedJson}`);
    it("converts yaml file to a JSON object", async function () {
      assert.deepEqual(
        expectedJson,
        await yamlFileToJson(
          path.resolve(__dirname, "fixtures", "cases", "case.1.yml")
        )
      );
    });
  });
});

describe("yaml", function () {
  describe("yamlStringToJson", function () {
    it("converts yaml string to a json", async function () {
      const yamlString = fs.readFileSync(
        path.resolve(__dirname, "fixtures", "cases", "case.1.yml")
      );
      const expectedJson = JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, "fixtures", "results", "case.1.json"),
          "utf-8"
        )
      );
      assert.deepEqual(expectedJson, yamlStringToJson(yamlString));
    });
  });
});
