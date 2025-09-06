import { Linter } from 'eslint';
import { BASE_RULES } from './base';

import { JS_FILES } from './const/globs';

export default {
  languageOptions: BASE_RULES.languageOptions,
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
  files: [JS_FILES],
  plugins: BASE_RULES.plugins,
  rules: BASE_RULES.rules,
} satisfies Linter.Config;
