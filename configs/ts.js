/* eslint-disable no-undef */

const fs = require('node:fs');
const path = require('node:path');

const parser = require('@typescript-eslint/parser');

const ts = require('@typescript-eslint/eslint-plugin');
const node = require('eslint-plugin-n');
const canonical = require('eslint-plugin-canonical');

const { TS_FILES, GLOB_IGNORES } = require('./const/globs');
const { languageOptions, plugins, rules } = require('./base');

const configPath = path.resolve(process.cwd(), 'tsconfig.json');
const isConfigDefined = fs.existsSync(configPath);
const recommendedRules = isConfigDefined
  ? ts.configs['recommended-type-checked'].rules
  : ts.configs.recommended.rules;
const unusedExports = isConfigDefined
  ? ['error', { tsConfigPath: configPath }]
  : 'off';

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  files: [TS_FILES],
  ignores: GLOB_IGNORES,
  languageOptions: {
    ...languageOptions,
    parser: parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: isConfigDefined,
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
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // canonical plugin, because this only works in TypeScript
    'canonical/no-barrel-import': 'error',
    'canonical/no-unused-exports': unusedExports,
    'canonical/no-use-extend-native': 'error',

    // node rules
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
