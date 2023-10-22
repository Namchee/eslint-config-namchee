const yml = require('eslint-plugin-yaml');
const parser = require('yaml-eslint-parser');

const { YAML_FILES } = require('./const/globs');

module.exports = {
  files: [YAML_FILES],
  ignores: ['**/pnpm-lock.yaml'],
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
