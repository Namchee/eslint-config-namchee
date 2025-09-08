import type { Linter } from 'eslint';
import type { Options } from 'options';

import { BASE_CONFIG, STYLISTIC_CONFIG } from './base';
import { JS_FILES } from './const/globs';

export default function(config: Partial<Options>): Linter.Config {
  return {
    name: 'namchee/eslint/javascript',
    files: [JS_FILES],
    languageOptions: BASE_CONFIG.languageOptions,
    linterOptions: BASE_CONFIG.linterOptions,
    plugins: {
      ...BASE_CONFIG.plugins,
      ...(config.stylistic ? STYLISTIC_CONFIG.plugins : {}),
    },
    rules: {
      ...BASE_CONFIG.rules,
      ...(config.stylistic ? STYLISTIC_CONFIG.rules : {}),
    },
  };
}
