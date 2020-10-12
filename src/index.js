const yaml = require("js-yaml");
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

function jsonToYamlString(jsonObj) {
  let yamlString;

  try {
    yamlString = yaml.safeDump(jsonObj);
  } catch (e) {
    console.log(`error dumping yaml string: ${e}`);
    return null;
  }

  return yamlString;
}

function jsonToYaml(jsonObj, filepath = null) {
  const yamlString = jsonToYamlString(jsonObj);
  fs.writeFileSync(filepath, yamlString);
  return yamlString;
}

module.exports = {
  jsonToYaml,
  jsonToYamlString,
  yamlFileToJson,
  yamlStringToJson,
};
