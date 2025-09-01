import { languageOptions, plugins, rules } from './base';

import { GLOB_IGNORES, JS_FILES } from './const/globs';

export const JS_CONFIG = {
  languageOptions,
  files: [JS_FILES],
  ignores: GLOB_IGNORES,
  plugins: plugins,
  rules: rules,
};
