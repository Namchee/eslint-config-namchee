import type { Linter } from 'eslint';
import type { Options } from 'options';

import fs from 'node:fs';
import path from 'node:path';

import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import canonical from 'eslint-plugin-canonical';
import importPlugin from 'eslint-plugin-import-lite';

import { BASE_CONFIG, STYLISTIC_CONFIG } from './base';
import { TS_FILES } from './const/globs';

const configPath = path.resolve(process.cwd(), 'tsconfig.json');
const isConfigDefined = fs.existsSync(configPath);

export const TYPESCRIPT_RULES: Linter.RulesRecord = {
  ...ts.configs['eslint-recommended'].rules,
  ...BASE_CONFIG.rules,
  'no-unused-vars': 'off',
  'typescript/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
  'typescript/consistent-type-definitions': ['error', 'interface'],
  'typescript/no-dupe-class-members': 'error',
  'typescript/no-import-type-side-effects': 'error',
  'typescript/no-loss-of-precision': 'error',
  'typescript/no-redeclare': 'error',
  'typescript/no-unused-vars': ['error', {
    args: 'all',
    argsIgnorePattern: '^_',
    caughtErrors: 'all',
    caughtErrorsIgnorePattern: '^_',
    destructuredArrayIgnorePattern: '^_',
    varsIgnorePattern: '^_',
    ignoreRestSiblings: true,
  }],
  'typescript/no-var-requires': 'off',
  'typescript/prefer-ts-expect-error': 'error',
  'typescript/prefer-literal-enum-member': [
    'error',
    { allowBitwiseExpressions: true },
  ],
  'typescript/consistent-type-imports': [
    'error',
    { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
  ],
  'typescript/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],

  // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
  'typescript/method-signature-style': [
    'error',
    'property',
  ],

  // canonical plugin, because this only works in TypeScript
  'canonical/no-barrel-import': 'error',
  'canonical/no-use-extend-native': 'error',

  // imports
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
};

export default function (config: Partial<Options>): Linter.Config {
  return {
    name: 'namchee/eslint/typescript',
    files: [TS_FILES],
    ignores: ['*.d.ts'],
    languageOptions: {
      ...BASE_CONFIG.languageOptions,
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ...(isConfigDefined
          ? { projectService: true, tsconfigRootDir: path.dirname(configPath) }
          : {}),
      },
    },
    linterOptions: BASE_CONFIG.linterOptions,
    plugins: {
      ...BASE_CONFIG.plugins,
      // broken typings
      typescript: ts as any,
      canonical: canonical,
      import: importPlugin,
      ...(config.stylistic ? STYLISTIC_CONFIG.plugins : {}),
    },
    rules: {
      ...TYPESCRIPT_RULES,
      ...(config.stylistic ? STYLISTIC_CONFIG.rules : {}),
    },
  };
}
