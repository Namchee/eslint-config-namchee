const importPlugin = require('eslint-plugin-import');
const unicorn = require('eslint-plugin-unicorn');
const canonical = require('eslint-plugin-canonical');
const stylistic = require('@stylistic/eslint-plugin');

const standard = require('@eslint/js');
const xo = require('eslint-config-xo');

module.exports = {
  langOptions: {
    ecmaVersion: 'latest',
    globals: {
      Bun: false,
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
    ...xo.rules,
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
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
