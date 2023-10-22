const json = require('eslint-plugin-jsonc');
const parser = require('jsonc-eslint-parser');

const { JSON_FILES } = require('./const/globs');

module.exports = {
  files: [JSON_FILES],
  ignores: ['**/package.json', '**/package-lock.json'],
  plugins: {
    jsonc: json,
  },
  languageOptions: {
    parser,
  },
  rules: {
    ...json.configs['recommended-with-json'].rules,
  },
};
