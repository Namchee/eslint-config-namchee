import style from '@stylistic/eslint-plugin';

import { Linter } from 'eslint';

export default {
  files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.vue', '*.astro'],
  plugins: {
    style,
  },
  rules: {
    // stylistic plugin
    'style/array-bracket-spacing': 'error',
    'style/arrow-spacing': 'error',
    'style/block-spacing': 'error',
    'style/comma-dangle': ['error', 'always-multiline'],
    'style/comma-spacing': 'error',
    'style/comma-style': 'error',
    'style/computed-property-spacing': 'error',
    'style/dot-location': 'error',
    'style/eol-last': 'error',
    'style/func-call-spacing': 'error',
    'style/function-paren-newline': 'error',
    'style/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'style/key-spacing': 'error',
    'style/keyword-spacing': 'error',
    'style/linebreak-style': 'error',
    'style/lines-between-class-members': 'error',
    'style/max-len': [
      'error',
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'style/max-statements-per-line': ['error', { max: 1 }],
    'style/multiline-ternary': ['error', 'always-multiline'],
    'style/new-parens': 'error',
    'style/no-confusing-arrow': 'error',
    'style/no-floating-decimal': 'error',
    'style/no-extra-semi': 'error',
    'style/no-mixed-operators': 'error',
    'style/no-mixed-spaces-and-tabs': 'error',
    'style/no-multi-spaces': 'error',
    'style/no-tabs': 'error',
    'style/no-trailing-spaces': 'error',
    'style/no-whitespace-before-property': 'error',
    'style/object-curly-spacing': ['error', 'always'],
    'style/operator-linebreak': ['error', 'before'],
    'style/quote-props': ['error', 'consistent-as-needed'],
    'style/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'style/semi': ['error', 'always'],
    'style/space-before-blocks': ['error', 'always'],
    'style/spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'style/template-curly-spacing': 'error',
  }
} satisfies Linter.Config;
