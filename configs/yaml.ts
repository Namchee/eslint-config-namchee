import type { Linter } from 'eslint';

import yml from 'eslint-plugin-yml';
import parser from 'yaml-eslint-parser';

import { YAML_FILES } from './const/globs';

export default function (): Linter.Config[] {
  return [{
    name: 'namchee/eslint/yaml',
    files: [YAML_FILES],
    ignores: ['**/pnpm-lock.yaml'],
    plugins: {
      yml: yml as any,
    },
    languageOptions: {
      parser,
    },
    rules: {
      'yml/block-mapping-question-indicator-newline': 'error',
      'yml/block-mapping': 'error',
      'yml/block-sequence-hyphen-indicator-newline': 'error',
      'yml/block-sequence': 'error',
      'yml/flow-mapping-curly-newline': 'error',
      'yml/flow-mapping-curly-spacing': 'error',
      'yml/flow-sequence-bracket-newline': 'error',
      'yml/flow-sequence-bracket-spacing': 'error',
      'yml/key-spacing': 'error',
      'yml/no-empty-document': 'error',
      'yml/no-empty-key': 'error',
      'yml/no-empty-mapping-value': 'error',
      'yml/no-empty-sequence-entry': 'error',
      'yml/no-irregular-whitespace': 'error',
      'yml/no-tab-indent': 'error',
      'yml/plain-scalar': 'error',
      'yml/quotes': 'error',
      'yml/spaced-comment': 'error',
      'yml/vue-custom-block/no-parsing-error': 'error',
      'yml/indent': ['error', 2],
    },
  }];
}
