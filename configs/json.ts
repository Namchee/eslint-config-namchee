import json from 'eslint-plugin-jsonc';
import parser from 'jsonc-eslint-parser';

import { JSON_FILES } from './const/globs';
import { Linter } from 'eslint';

export default {
  name: 'namchee/eslint/json',
  files: [JSON_FILES],
  ignores: ['**/package.json', '**/package-lock.json', '.astro/**'],
  plugins: {
    // typing issues
    jsonc: json as any,
  },
  languageOptions: {
    parser,
  },
  rules: {
    // typing issues
    ...json.configs['recommended-with-json'].rules as any,
  },
} satisfies Linter.Config;
