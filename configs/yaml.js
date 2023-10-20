const yml = require('eslint-plugin-yaml');
const parser = require('yaml-eslint-parser');

module.exports = {
  files: ['*.yaml', '*.yml'],
  plugins: {
    yml,
  },
  languageOptions: {
    parser,
  },
  rules: {
    ...yml.configs.standard,
  },
};
