import type { Linter } from 'eslint';

import toml from 'eslint-plugin-toml';
import parser from 'toml-eslint-parser';

import { TOML_FILES } from './const/globs';

export default function (): Linter.Config {
  return {
    name: 'namchee/eslint/toml',
    files: [TOML_FILES],
    plugins: {
      toml: toml as any,
    },
    languageOptions: {
      parser,
    },
    rules: {
      'toml/comma-style': 'error',
      'toml/keys-order': 'error',
      'toml/no-space-dots': 'error',
      'toml/no-unreadable-number-separator': 'error',
      'toml/precision-of-fractional-seconds': 'error',
      'toml/precision-of-integer': 'error',
      'toml/tables-order': 'error',
      'toml/indent': ['error', 2],
    },
  };
}
