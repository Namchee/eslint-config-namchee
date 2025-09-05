/* eslint-disable no-undef */

import fs from 'node:fs';
import path from 'node:path';

import parser from '@typescript-eslint/parser';

import ts from '@typescript-eslint/eslint-plugin';
import node from 'eslint-plugin-n';
import canonical from 'eslint-plugin-canonical';

import { TS_FILES } from './const/globs';
import { languageOptions, plugins, rules } from './base';
import { Linter } from 'eslint';

const configPath = path.resolve(process.cwd(), 'tsconfig.json');
const isConfigDefined = fs.existsSync(configPath);
const recommendedRules = isConfigDefined
  ? ts.configs['recommended-type-checked'].rules
  : ts.configs.recommended.rules;

export default tsesli

export default {
  files: [TS_FILES],
  languageOptions: {
    ...languageOptions,
    parser: parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      projectService: true,
      
    },
  },
  plugins: {
    ...plugins,
    '@typescript-eslint': ts,
    'canonical': canonical,
    'node': node,
  },
  rules: {
    ...ts.configs['eslint-recommended'].rules,
    ...recommendedRules,
    ...rules,
    'no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
    '@typescript-eslint/method-signature-style': [
      'error',
      'property',
    ],

    // canonical plugin, because this only works in TypeScript
    'canonical/no-barrel-import': 'error',
    'canonical/no-use-extend-native': 'error',

    // node rules
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
} satisfies Linter.Config;
