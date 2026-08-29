import type { Linter } from 'eslint';

import type { Options } from './../options';

import { GLOB_IGNORES } from './const/globs';

export default async function (_config: Partial<Options>): Promise<Linter.Config[]> {
  return [{
    name: 'namchee/eslint/ignores',
    ignores: GLOB_IGNORES,
  }];
}
