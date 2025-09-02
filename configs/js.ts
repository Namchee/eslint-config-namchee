import { BASE_RULES } from './base';

import { GLOB_IGNORES, JS_FILES } from './const/globs';

export const JS_CONFIG = {
  languageOptions: BASE_RULES.languageOptions,
  files: [JS_FILES],
  ignores: GLOB_IGNORES,
  plugins: BASE_RULES.plugins,
  rules: BASE_RULES.rules,
};
