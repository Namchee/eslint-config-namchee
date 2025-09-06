import fs from 'node:fs';
import path from 'node:path';

import parser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import-lite';

import ts from '@typescript-eslint/eslint-plugin';
import node from 'eslint-plugin-n';
import canonical from 'eslint-plugin-canonical';

import { TS_FILES } from './const/globs';
import { BASE_RULES } from './base';
import { Linter } from 'eslint';

const { plugins, rules, languageOptions } = BASE_RULES;

const configPath = path.resolve(process.cwd(), 'tsconfig.json');
const isConfigDefined = fs.existsSync(configPath);

export default {
  files: [TS_FILES],
  languageOptions: {
    ...languageOptions,
    parser: parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ...(isConfigDefined ? { projectService: true, tsconfigRootDir: path.dirname(configPath) } : {}),
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
  plugins: {
    ...plugins,
    // broken typings
    typescript: ts as any,
    canonical: canonical,
    node: node,
    import: importPlugin,
  },
  rules: {
    ...ts.configs['eslint-recommended'].rules,
    ...rules,
    'no-unused-vars': 'off',
    'typescript/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'typescript/consistent-type-definitions': ['error', 'interface'],
    'typescript/no-dupe-class-members': 'error',
    'typescript/no-import-type-side-effects': 'error',
    'typescript/no-loss-of-precision': 'error',
    'typescript/no-redeclare': 'error',
    'typescript/no-unused-vars': ['error', { varsIgnorePattern: '_' }],
    'typescript/no-var-requires': 'off',
    'typescript/prefer-ts-expect-error': 'error',
    '@typescript-eslint/prefer-literal-enum-member': [
      'error',
      { allowBitwiseExpressions: true },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/consistent-type-assertions': [
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
  },
} satisfies Linter.Config;
