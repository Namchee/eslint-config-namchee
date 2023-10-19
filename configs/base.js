const importPlugin = require('eslint-plugin-import');
const unicorn = require('eslint-plugin-unicorn');
const canonical = require('eslint-plugin-canonical');
const stylistic = require('@stylistic/eslint-plugin');
const node = require('eslint-plugin-node');
const yaml = require('eslint-plugin-yaml');

const standard = require('@eslint/js');

module.exports = {
  langOptions: {
    ecmaVersion: 'latest',
    globals: {
      Bun: 'readonly',
      module: 'readonly',
      require: 'readonly',
    },
  },
  plugins: {
    canonical,
    import: importPlugin,
    stylistic,
    unicorn,
  },
  rules: {
    ...standard.configs.recommended.rules,
    ...importPlugin.configs.recommended.rules,
    ...unicorn.configs.recommended.rules,
    ...canonical.configs.recommended.rules,
    ...node.configs.recommended.rules,
    'array-callback-return': 'error',
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'block-scoped-var': 'error',
    'constructor-super': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'smart'],
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-control-regex': 'error',
    'canonical/destructuring-property-newline': 'off',
    'canonical/sort-keys': 'off',
    'capitalized-comments': 'off',
    indent: [
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
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'unicorn/prefer-module': 'off',
  },
};
