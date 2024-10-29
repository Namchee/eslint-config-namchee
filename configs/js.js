import base from './base.js';

import { GLOB_IGNORES, JS_FILES } from './const/globs.js';

export default {
  languageOptions: base.languageOptions,
  files: [JS_FILES],
  ignores: GLOB_IGNORES,
  plugins: base.plugins,
  rules: base.rules,
};
