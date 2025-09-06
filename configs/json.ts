import type { Linter } from 'eslint';

import json from 'eslint-plugin-jsonc';
import parser from 'jsonc-eslint-parser';

import { JSON_FILES } from './const/globs';

export default {
  name: 'namchee/eslint/json',
  files: [JSON_FILES],
  ignores: ['**/package.json', '**/package-lock.json', '**/.astro/**'],
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
    'jsonc/indent': ['error', 2],
  },
} satisfies Linter.Config;
