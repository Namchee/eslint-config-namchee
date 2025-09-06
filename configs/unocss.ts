import type { Linter } from 'eslint';

import unocss from '@unocss/eslint-config';

// no modification for now, it's quite good already
export default {
  ...unocss,
  name: 'namchee/eslint/unocss',
} satisfies Linter.Config;
