import type { Linter } from 'eslint';

import { BASE_CONFIG } from './base';
import { JS_FILES } from './const/globs';

export default {
  name: 'namchee/eslint/javascript',
  languageOptions: BASE_CONFIG.languageOptions,
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
  files: [JS_FILES],
  plugins: BASE_CONFIG.plugins,
  rules: BASE_CONFIG.rules,
} satisfies Linter.Config;
