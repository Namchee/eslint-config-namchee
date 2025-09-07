import type { Linter } from 'eslint';
import type { Options } from 'options';

import packagePlugin from 'eslint-plugin-package-json';

export default function(_: Partial<Options>): Linter.Config {
  return {
    ...packagePlugin.configs.recommended,
    name: 'namchee/eslint/package',
  };
}

