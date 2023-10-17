const { langOptions, plugins, rules } = require('./base');

const parser = require('@typescript-eslint/parser');

const ts = require('@typescript-eslint/eslint-plugin');

module.exports = {
  files: ['*.ts'],
  languageOptions: {
    ...langOptions,
    parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    ...plugins,
    '@typescript-eslint': ts,
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
  },
};
