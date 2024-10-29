import markdown from 'eslint-plugin-markdown';

import { MARKDOWN_FILES } from './const/globs.js';

export default {
  files: [MARKDOWN_FILES],
  plugins: {
    markdown,
  },
  rules: {
    ...markdown.configs.recommended.rules,
  },
};

