import type { Linter } from 'eslint';

import markdown from '@eslint/markdown';

import { MARKDOWN_FILES } from './const/globs';

export default function (): Linter.Config {
  return {
    name: 'namchee/eslint/markdown',
    files: [MARKDOWN_FILES],
    plugins: {
      markdown,
    },
    rules: {
      'markdown/fenced-code-language': 'error',
      'markdown/heading-increment': 'error',
      'markdown/no-duplicate-definitions': 'error',
      'markdown/no-empty-definitions': 'error',
      'markdown/no-empty-images': 'error',
      'markdown/no-empty-links': 'error',
      'markdown/no-invalid-label-refs': 'error',
      'markdown/no-missing-atx-heading-space': 'error',
      'markdown/no-missing-label-refs': 'error',
      'markdown/no-missing-link-fragments': 'error',
      'markdown/no-multiple-h1': 'error',
      'markdown/no-reversed-media-syntax': 'error',
      'markdown/no-space-in-emphasis': 'error',
      'markdown/no-unused-definitions': 'error',
      'markdown/require-alt-text': 'error',
      'markdown/table-column-count': 'error',
    },
  };
}

