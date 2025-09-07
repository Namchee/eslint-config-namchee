import type { Linter } from 'eslint';

import yml from 'eslint-plugin-yaml';
import parser from 'yaml-eslint-parser';

import { YAML_FILES } from './const/globs';

export default function (): Linter.Config {
  return {
    name: 'namchee/eslint/yaml',
    files: [YAML_FILES],
    ignores: ['**/pnpm-lock.yaml'],
    plugins: {
      yml,
    },
    languageOptions: {
      parser,
    },
    rules: {
      ...yml.configs.recommended.rules,
      'yml/indent': ['error', 2],
    }
  };
}
