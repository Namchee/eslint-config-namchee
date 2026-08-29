import type { Linter } from 'eslint';

import unocss from '@unocss/eslint-config/flat';

export default async function (): Promise<Linter.Config[]> {
  // no modification for now, it's quite good already
  return [{
    ...unocss,
    name: 'namchee/eslint/unocss',
  }];
}
