const json = require('eslint-plugin-jsonc');
const parser = require('jsonc-eslint-parser');

module.exports = {
  files: ['*.json', '*.jsonc', '*.json5'],
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
