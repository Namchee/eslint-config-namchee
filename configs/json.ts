import json from 'eslint-plugin-jsonc';
import parser from 'jsonc-eslint-parser';

import { JSON_FILES } from './const/globs';

export const JSON_CONFIG = {
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
