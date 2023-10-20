const { langOptions, plugins, rules } = require('./base');

module.exports = {
  files: ['*.js', '*.cjs', '*.mjs', '*.jsx'],
  languageOptions: langOptions,
  plugins,
  rules,
};
