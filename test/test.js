const { assert } = require('chai');
const fs = require('fs');
const path = require('path');
const { describe, it } = require('mocha');

const {
  jsonToYamlString,
  yamlStringToJson,
  yamlFileToJson,
} = require('../src/index');

const json1 = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, 'fixtures', 'json', 'case.1.json'),
    'utf-8',
  ),
);

const json2 = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, 'fixtures', 'json', 'case.2.json'),
    'utf-8',
  ),
);

describe('yaml', () => {
  describe('jsonToYamlString', () => {
    it('should dump a type string', () => {
      assert.typeOf(
        jsonToYamlString(json1),
        'string',
        'does not return string',
      );
    });
  });
});

describe('yaml', () => {
  describe('jsonToYamlString', () => {
    const yamlString = fs.readFileSync(
      path.resolve(__dirname, 'fixtures', 'yaml', 'case.1.yml'),
      'utf-8',
    );

    it('should dump a valid yaml file', () => {
      assert.equal(yamlString, jsonToYamlString(json1));
    });
  });
});

describe('yaml', () => {
  describe('yamlFileToJson', () => {
    const expectedJson = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, 'fixtures', 'json', 'case.1.json'),
        'utf-8',
      ),
    );
    it('converts yaml file to a JSON object', async () => {
      assert.deepEqual(
        expectedJson,
        await yamlFileToJson(
          path.resolve(__dirname, 'fixtures', 'yaml', 'case.1.yml'),
        ),
      );
    });
  });
});

describe('yaml', () => {
  describe('yamlFileToJson yaml file with whitespace', () => {
    const expectedJson = json2;
    it('converts yaml file to a JSON object', async () => {
      assert.deepEqual(
        expectedJson,
        await yamlFileToJson(
          path.resolve(__dirname, 'fixtures', 'yaml', 'case.2.yml'),
        ),
      );
    });
  });
});

describe('yaml', () => {
  describe('yamlStringToJson', () => {
    it('converts yaml string to a json', async () => {
      const yamlString = fs.readFileSync(
        path.resolve(__dirname, 'fixtures', 'yaml', 'case.2.yml'),
      );
      const expectedJson = json2;
      assert.deepEqual(expectedJson, yamlStringToJson(yamlString));
    });
  });
});
