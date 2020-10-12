const assert = require("chai").assert;
const fs = require("fs");
const path = require("path");
const sinon = require("sinon");
const {
  jsonToYamlString,
  yamlStringToJson,
  yamlFileToJson,
} = require("../src/index");

const json1 = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "fixtures", "json", "case.1.json"),
    "utf-8"
  )
);

const json2 = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "fixtures", "json", "case.2.json"),
    "utf-8"
  )
);

describe("yaml", function () {
  describe("jsonToYamlString", function () {
    it("should dump a type string", () => {
      assert.typeOf(
        jsonToYamlString(json1),
        "string",
        "does not return string"
      );
    });
  });
});

describe("yaml", function () {
  describe("jsonToYamlString", function () {
    const yamlString = fs.readFileSync(
      path.resolve(__dirname, "fixtures", "yaml", "case.1.yml"),
      "utf-8"
    );

    console.log(`The String from the file ${yamlString}`);
    console.log(`THE RESULT ITSELF ${jsonToYamlString(json1)}`);
    it("should dump a valid yaml file", () => {
      assert.equal(yamlString, jsonToYamlString(json1));
    });
  });
});

describe("yaml", function () {
  describe("yamlFileToJson", function () {
    const expectedJson = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "fixtures", "json", "case.1.json"),
        "utf-8"
      )
    );
    console.log(`expectedJson: ${expectedJson}`);
    it("converts yaml file to a JSON object", async function () {
      assert.deepEqual(
        expectedJson,
        await yamlFileToJson(
          path.resolve(__dirname, "fixtures", "yaml", "case.1.yml")
        )
      );
    });
  });
});

describe("yaml", function () {
  describe("yamlFileToJson yaml file with whitespace", function () {
    const expectedJson = json2;
    it("converts yaml file to a JSON object", async function () {
      assert.deepEqual(
        expectedJson,
        await yamlFileToJson(
          path.resolve(__dirname, "fixtures", "yaml", "case.2.yml")
        )
      );
    });
  });
});

describe("yaml", function () {
  describe("yamlStringToJson", function () {
    it("converts yaml string to a json", async function () {
      const yamlString = fs.readFileSync(
        path.resolve(__dirname, "fixtures", "yaml", "case.2.yml")
      );
      const expectedJson = json2;
      assert.deepEqual(expectedJson, yamlStringToJson(yamlString));
    });
  });
});
