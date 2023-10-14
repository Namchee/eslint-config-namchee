const parser = require('@typescript-eslint/parser');

const ts = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-plugin-prettier');
const impor = require('eslint-plugin-import');
const stylistic = require('@stylistic/eslint-plugin');

const standardConfig = require('@eslint/js');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  standardConfig.configs.recommended,
  prettierConfig,
  {
    files: ['*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        Bun: false,
      },
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      'prettier': prettier,
      'import': impor,
      'stylistic': stylistic,
    },
    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended'].rules,
      'indent': 'off',
      'stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
    },
    /*
    rules: {
      '@stylistic/js/indent': 'off',
      '@stylistic/ts/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      'max-len': [
        'error',
        {
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'new-cap': 'off',
      '@stylistic/js/no-tabs': 'error',
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      'arrow-parens': [
        'error',
        'as-needed',
        {
          requireForBlockBody: true,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '_' },
      ],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@stylistic/js/spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    },
    */
  },
];
