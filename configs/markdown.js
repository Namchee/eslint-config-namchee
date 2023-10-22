const markdown = require('eslint-plugin-markdown');

const { MARKDOWN_FILES } = require('./const/globs');

module.exports = {
  files: [MARKDOWN_FILES],
  plugins: {
    markdown,
  },
  rules: {
    ...markdown.configs.recommended.rules,
  },
};

