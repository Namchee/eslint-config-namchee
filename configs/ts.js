/* eslint-disable no-undef */
const { langOptions, plugins, rules } = require('./base');
const { TS_FILES, GLOB_IGNORES } = require('./const/globs');

const parser = require('@typescript-eslint/parser');

const ts = require('@typescript-eslint/eslint-plugin');
const node = require('eslint-plugin-n');
const canonical = require('eslint-plugin-canonical');

module.exports = {
  files: [TS_FILES],
  ignores: [GLOB_IGNORES],
  languageOptions: {
    ...langOptions,
    parser,
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
    canonical,
    node,
  },
  rules: {
    ...ts.configs['eslint-recommended'].rules,
    ...ts.configs.recommended.rules,
    ...rules,
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_' }],
    '@typescript-eslint/no-var-requires': 'off',

    // canonical plugin, because this only works in TypeScript
    'canonical/no-barrel-import': 'error',
    'canonical/no-unused-exports': 'error',
    'canonical/no-use-extend-native': 'error',

    // node rules
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
