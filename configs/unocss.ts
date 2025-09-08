import type { Linter } from 'eslint';

import unocss from '@unocss/eslint-config';

export default function (): Linter.Config {
  // no modification for now, it's quite good already
  return {
    ...unocss,
    name: 'namchee/eslint/unocss',
  };
}
