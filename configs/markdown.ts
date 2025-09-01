import markdown from 'eslint-plugin-markdown';

import { MARKDOWN_FILES } from './const/globs';

export const MARKDOWN_CONFIG = {
  files: [MARKDOWN_FILES],
  plugins: {
    markdown,
  },
  rules: {
    ...markdown.configs.recommended.rules,
  },
};

