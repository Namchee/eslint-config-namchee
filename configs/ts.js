/* eslint-disable no-undef */
const { langOptions, plugins, rules } = require('./base');

const parser = require('@typescript-eslint/parser');

const ts = require('@typescript-eslint/eslint-plugin');
const node = require('eslint-plugin-n');

module.exports = {
  files: ['*.ts', '*.mts', '*.tsx'],
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

    // this is handled with `lib` when using typescript
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
