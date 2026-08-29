import type { Linter } from 'eslint';

import json from 'eslint-plugin-jsonc';
import * as parser from 'jsonc-eslint-parser';

import { JSON_FILES } from './const/globs';

export default async function (): Promise<Linter.Config[]> {
  return [{
    name: 'namchee/eslint/json',
    files: [JSON_FILES],
    plugins: {
      /* eslint-disable typescript/no-unsafe-assignment */
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
  }];
}
