import node from 'eslint-plugin-n';

import type { Linter } from 'eslint';
import globals from 'globals';

export default {
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    node,
  },
  rules: {
    'node/no-deprecated-api': 'error',
    'node/no-path-concat': 'error',
    'node/process-exit-as-throw': 'error',
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  }
} satisfies Linter.Config;
