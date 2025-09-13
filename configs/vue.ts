import type { Linter } from 'eslint';
import type { Options } from 'options';

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import canonical from 'eslint-plugin-canonical';
import importPlugin from 'eslint-plugin-import-lite';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

import { BASE_CONFIG, STYLISTIC_CONFIG } from './base';
import { VUE_FILES } from './const/globs';
import { TYPESCRIPT_RULES } from './typescript';

export default function (config: Partial<Options>): Linter.Config[] {
  return [{
    name: 'namchee/eslint/vue',
    files: [VUE_FILES],
    // I don't use jsx in Vue atm
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...BASE_CONFIG.languageOptions?.globals,
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
      ...BASE_CONFIG.plugins,
      vue: vue,
      typescript: tsPlugin as any,
      canonical: canonical,
      import: importPlugin,
      ...(config.stylistic ? STYLISTIC_CONFIG.plugins : {}),
    },
    rules: {
      ...TYPESCRIPT_RULES,
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

      ...(config.stylistic ? STYLISTIC_CONFIG.rules : {}),
    },
  }];
}
