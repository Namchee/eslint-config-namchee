import json from 'eslint-plugin-jsonc';
import parser from 'jsonc-eslint-parser';

import { JSON_FILES } from './const/globs';
import { Linter } from 'eslint';

export default {
  files: [JSON_FILES],
  ignores: ['**/package.json', '**/package-lock.json'],
  plugins: {
    jsonc: json,
  },
  languageOptions: {
    parser,
  },
  rules: {
    ...json.configs['flat/recommended-with-json'],
  },
} satisfies Linter.Config;
