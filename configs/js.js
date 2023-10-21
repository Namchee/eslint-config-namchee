const { langOptions, plugins, rules } = require('./base');

const { GLOB_IGNORES, JS_FILES } = require('./const/globs');

module.exports = {
  languageOptions: langOptions,
  files: [JS_FILES],
  ignores: [GLOB_IGNORES],
  plugins,
  rules,
};
