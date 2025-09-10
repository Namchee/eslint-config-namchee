import type { Linter } from 'eslint';

import unocss from '@unocss/eslint-config/flat';

export default function (): Linter.Config {
  // no modification for now, it's quite good already
  return {
    ...unocss as any,
    name: 'namchee/eslint/config',
  };
}
