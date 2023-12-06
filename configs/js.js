const { langOptions, plugins, rules } = require('./base');

const { GLOB_IGNORES, JS_FILES } = require('./const/globs');

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  languageOptions: langOptions,
  files: [JS_FILES],
  ignores: GLOB_IGNORES,
  plugins: plugins,
  rules: rules,
};
