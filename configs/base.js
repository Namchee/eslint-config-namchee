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
    'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
    'array-callback-return': 'error',
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'block-scoped-var': 'error',
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'constructor-super': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    'eol-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-restricted-properties': [ // taken from
      'error',
      { message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' },
      { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
      { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
      { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
      { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'object-shorthand': ['error', 'consistent-as-needed'],
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'yoda': ['error', 'never'],

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
