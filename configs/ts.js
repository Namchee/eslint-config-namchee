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
    canonical,
    node,
    ts,
  },
  rules: {
    ...ts.configs['eslint-recommended'].rules,
    ...ts.configs.recommended.rules,
    ...rules,
    'ts/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'ts/no-unused-vars': ['error', { varsIgnorePattern: '_' }],
    'ts/no-var-requires': 'off',

    // canonical plugin, because this only works in TypeScript
    'canonical/no-barrel-import': 'error',
    'canonical/no-unused-exports': 'error',
    'canonical/no-use-extend-native': 'error',

    // node rules
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
