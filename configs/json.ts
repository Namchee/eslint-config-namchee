import json from 'eslint-plugin-jsonc';
import parser from 'jsonc-eslint-parser';

import { JSON_FILES } from './const/globs';
import { Linter } from 'eslint';

export default {
  files: [JSON_FILES],
  ignores: ['**/package.json', '**/package-lock.json', '.astro'],
  plugins: {
    jsonc: json as any,
  },
  languageOptions: {
    parser,
  },
  rules: {
    ...json.configs['recommended-with-json'].rules as any,
  },
} satisfies Linter.Config;
