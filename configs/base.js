const importPlugin = require('eslint-plugin-import');
const unicorn = require('eslint-plugin-unicorn');
const canonical = require('eslint-plugin-canonical');
const stylistic = require('@stylistic/eslint-plugin');
const node = require('eslint-plugin-n');

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
    node,
  },
  rules: {
    ...standard.configs.recommended.rules,
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
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': ['error', { allowKeywords: true }],
    'eqeqeq': ['error', 'smart'],
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-control-regex': 'error',
    'capitalized-comments': 'off',
    'indent': [
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
    'no-lonely-if': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'eol-last': 'error',

    // import plugin
    'import/export': 'error',
    'import/first': 'error',
    'import/order': 'error', // based
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-extratenous-dependencies': 'error',
    'import/no-unresolved': 'error',

    // unicorn plugin
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-keyword-prefix': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/template-indent': 'error',
    'unicorn/throw-new-error': 'error',
  },
};
