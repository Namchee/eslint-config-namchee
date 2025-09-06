import unocss from '@unocss/eslint-config';
import { Linter } from 'eslint';

// no modification for now, it's quite good already
export default {
  ...unocss,
  name: 'namchee/eslint/unocss',
} satisfies Linter.Config;
