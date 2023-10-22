/* eslint-disable no-undef */

const parser = require('@typescript-eslint/parser');

const ts = require('@typescript-eslint/eslint-plugin');
const node = require('eslint-plugin-n');
const canonical = require('eslint-plugin-canonical');
const { TS_FILES, GLOB_IGNORES } = require('./const/globs');
const { langOptions, plugins, rules } = require('./base');

module.exports = {
  files: [TS_FILES],
  ignores: [GLOB_IGNORES],
  languageOptions: {
    ...langOptions,
    parser: parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: true,
      tsconfigRootDir: process.cwd(),
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
    ...ts.configs.recommended.rules,
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
    'canonical/no-unused-exports': 'error',
    'canonical/no-use-extend-native': 'error',

    // node rules
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
