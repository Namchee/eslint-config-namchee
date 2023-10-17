const parser = require('@typescript-eslint/parser');

const ts = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');
const unicorn = require('eslint-plugin-unicorn');
const canonical = require('eslint-plugin-canonical');
const stylistic = require('@stylistic/eslint-plugin');

const standardConfig = require('@eslint/js');
const prettierConfig = require('eslint-config-prettier');

const baseLangOptions = {
  ecmaVersion: 'latest',
  globals: {
    Bun: false,
    module: 'readonly',
    require: 'readonly',
  },
};

const basePlugins = {
  canonical,
  import: importPlugin,
  prettier,
  stylistic,
  unicorn,
};

const baseRules = {
  ...importPlugin.configs.recommended.rules,
  ...unicorn.configs.recommended.rules,
  ...canonical.configs.recommended.rules,
  ...prettierConfig.rules,
  'unicorn/prefer-module': 'off',
};

module.exports = [
  standardConfig.configs.recommended,
  // importPlugin.configs.recommended,
  {
    // JavaScript config
    languageOptions: baseLangOptions,
    plugins: basePlugins,
    rules: baseRules,
  },
  {
    // TypeScript config
    files: ['*.ts'],
    languageOptions: {
      ...baseLangOptions,
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      ...basePlugins,
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended'].rules,
      ...baseRules,
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
