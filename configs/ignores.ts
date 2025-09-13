import type { Linter } from 'eslint';

import type { Options } from './../options';

import { GLOB_IGNORES } from './const/globs';

export default function (_config: Partial<Options>): Linter.Config[] {
  return [{
    name: 'namchee/eslint/ignores',
    ignores: GLOB_IGNORES,
  }];
}
