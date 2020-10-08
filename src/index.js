const yaml = require("js-yaml");
const path = require("path");
const fs = require("fs");

function yamlStringToJson(target) {
  let resultJson;
  try {
    resultJson = yaml.safeLoad(target);
    console.log(`resultJson: ${JSON.stringify(resultJson, null, 2)}`);
  } catch (e) {
    console.log(`error parsing yaml string: ${e}`);
    return null;
  }
  return resultJson;
}

async function yamlFileToJson(filename) {
  const yamlString = fs.readFileSync(filename, "utf-8");
  return yamlStringToJson(yamlString);
}

module.exports = {
  yamlStringToJson,
  yamlFileToJson,
};
