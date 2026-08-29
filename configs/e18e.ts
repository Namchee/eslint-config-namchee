import type { Linter } from 'eslint';

import e18e from '@e18e/eslint-plugin';

export default function(): Linter.Config[] {
  return [{
    name: 'namchee/eslint/e18e',
    plugins: {
      e18e,
    },
    rules: {
      ...e18e.configs.recommended.rules,
    },
  }];
}
