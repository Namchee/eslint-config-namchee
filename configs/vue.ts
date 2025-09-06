import type { Linter } from 'eslint';

import tsParser from '@typescript-eslint/parser';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import vueParser from 'vue-eslint-parser';

import { VUE_FILES } from './const/globs';

export default {
  name: 'namchee/eslint/vue',
  files: [VUE_FILES],
  // I don't use jsx in Vue atm
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      document: 'readonly',
      navigator: 'readonly',
      window: 'readonly',
      $: 'readonly',
      $$: 'readonly',
      $computed: 'readonly',
      $customRef: 'readonly',
      $ref: 'readonly',
      $shallowRef: 'readonly',
      $toRef: 'readonly',
    },
    parser: vueParser,
    parserOptions: {
      extraFileExtensions: ['.vue'],
      parser: tsParser,
    },
  },
  plugins: {
    vue,
  },
  rules: {
    ...vue.configs.essential.rules,
    ...vue.configs.recommended.rules,
    ...vue.configs['strongly-recommended'].rules,

    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/component-tags-order': 'off',
    'vue/custom-event-name-casing': ['error', 'camelCase'],

    'vue/eqeqeq': ['error', 'smart'],
    'vue/no-useless-v-bind': 'error',

    // stylistic rules
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { after: true, before: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/block-tag-newline': ['error', {
      multiline: 'always',
      singleline: 'always',
    }],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { after: true, before: false }],
    'vue/comma-style': ['error', 'last'],
    'vue/object-curly-newline': 'off',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/template-curly-spacing': 'error',
  },
} satisfies Linter.Config;
