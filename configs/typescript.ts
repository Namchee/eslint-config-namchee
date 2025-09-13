import type { Linter } from 'eslint';
import type { Options } from 'options';

import fs from 'node:fs';
import path from 'node:path';

import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import canonical from 'eslint-plugin-canonical';
import importPlugin from 'eslint-plugin-import-lite';
import json from 'eslint-plugin-jsonc';
import jsonParser from 'jsonc-eslint-parser';

import { BASE_CONFIG, STYLISTIC_CONFIG } from './base';
import { ASTRO_SCRIPTS_TS_FILES, TS_FILES, TYPEDEF_FILES } from './const/globs';

const configPath = path.resolve(process.cwd(), 'tsconfig.json');
const isConfigDefined = fs.existsSync(configPath);

export const TYPESCRIPT_RULES: Linter.RulesRecord = {
  ...ts.configs['eslint-recommended'].rules,
  ...BASE_CONFIG.rules,
  'no-unused-vars': 'off',
  'typescript/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
  'typescript/consistent-type-definitions': ['error', 'interface'],
  'typescript/no-dupe-class-members': 'error',
  'typescript/no-import-type-side-effects': 'error',
  'typescript/no-redeclare': 'error',
  'typescript/no-unused-vars': ['error', {
    args: 'all',
    argsIgnorePattern: '^_',
    caughtErrors: 'all',
    caughtErrorsIgnorePattern: '^_',
    destructuredArrayIgnorePattern: '^_',
    varsIgnorePattern: '^_',
    ignoreRestSiblings: true,
  }],
  'typescript/no-require-imports': 'off',
  'typescript/prefer-literal-enum-member': [
    'error',
    { allowBitwiseExpressions: true },
  ],
  'typescript/consistent-type-imports': [
    'error',
    { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
  ],
  'typescript/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],

  // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
  'typescript/method-signature-style': [
    'error',
    'property',
  ],

  // canonical plugin, because this only works in TypeScript
  'canonical/no-barrel-import': 'error',
  'canonical/no-use-extend-native': 'error',

  // imports
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
};

export const STYLISTIC_TYPESCRIPT_RULES: Linter.RulesRecord = {
  'typescript/adjacent-overload-signatures': 'error',
  'typescript/array-type': 'error',
  'typescript/ban-tslint-comment': 'error',
  'typescript/class-literal-property-style': 'error',
  'typescript/consistent-generic-constructors': 'error',
  'typescript/consistent-indexed-object-style': 'error',
  'typescript/consistent-type-assertions': 'error',
  'typescript/consistent-type-definitions': 'error',
  'typescript/no-confusing-non-null-assertion': 'error',
  'no-empty-function': 'off',
  'typescript/no-empty-function': 'error',
  'typescript/no-inferrable-types': 'error',
  'typescript/prefer-for-of': 'error',
  'typescript/prefer-function-type': 'error',
};

const TYPE_AWARE_RULES: Linter.RulesRecord = {
  'dot-notation': 'off',
  'typescript/dot-notation': ['error', { allowKeywords: true }],
  'no-implied-eval': 'off',
  'typescript/no-implied-eval': 'error',
  'typescript/return-await': ['error', 'in-try-catch'],
  'typescript/no-misused-promises': 'error',
  'typescript/no-base-to-string': 'error',
  'typescript/no-duplicate-enum-values': 'error',
  'typescript/no-duplicate-type-constituents': 'error',
  'typescript/no-empty-object-type': 'error',
  'typescript/no-floating-promises': 'error',
  'typescript/no-for-in-array': 'error',
  'typescript/no-unsafe-argument': 'error',
  'typescript/no-unsafe-assignment': 'error',
  'typescript/no-unsafe-call': 'error',
  'typescript/no-unsafe-member-access': 'error',
  'typescript/no-unsafe-return': 'error',
  'typescript/promise-function-async': 'error',
  'typescript/only-throw-error': 'error',
  'typescript/restrict-plus-operands': 'error',
  'typescript/restrict-template-expressions': 'error',
  'typescript/unbound-method': 'error',
  'typescript/switch-exhaustiveness-check': 'error',
};

export default function (config: Partial<Options>): Linter.Config[] {
  return [{
    name: 'namchee/eslint/typescript',
    files: [TS_FILES],
    // astro scripts are handled differently
    ignores: [TYPEDEF_FILES, ASTRO_SCRIPTS_TS_FILES],
    languageOptions: {
      ...BASE_CONFIG.languageOptions,
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ...(isConfigDefined
          ? { projectService: true, tsconfigRootDir: path.dirname(configPath) }
          : {}),
      },
    },
    linterOptions: BASE_CONFIG.linterOptions,
    plugins: {
      ...BASE_CONFIG.plugins,
      // broken typings
      typescript: ts as any,
      canonical: canonical,
      import: importPlugin,
      ...(config.stylistic ? STYLISTIC_CONFIG.plugins : {}),
    },
    rules: {
      ...TYPESCRIPT_RULES,
      ...(config.typecheck ? TYPE_AWARE_RULES : {}),
      ...(config.stylistic ? { ...STYLISTIC_CONFIG.rules, ...STYLISTIC_TYPESCRIPT_RULES } : {}),
    },
  },
  {
    name: 'namchee/eslint/tsconfig',
    files: ['**/[jt]sconfig.json', '**/[jt]sconfig.*.json'],
    plugins: {
      // typing issues
      jsonc: json as any,
    },
    languageOptions: {
      parser: jsonParser,
    },
    rules: {
      'jsonc/indent': ['error', 2],
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            'extends',
            'compilerOptions',
            'references',
            'files',
            'include',
            'exclude',
          ],
          pathPattern: '^$',
        },
        {
          order: [
            /* Projects */
            'incremental',
            'composite',
            'tsBuildInfoFile',
            'disableSourceOfProjectReferenceRedirect',
            'disableSolutionSearching',
            'disableReferencedProjectLoad',
            /* Language and Environment */
            'target',
            'jsx',
            'jsxFactory',
            'jsxFragmentFactory',
            'jsxImportSource',
            'lib',
            'moduleDetection',
            'noLib',
            'reactNamespace',
            'useDefineForClassFields',
            'emitDecoratorMetadata',
            'experimentalDecorators',
            'libReplacement',
            /* Modules */
            'baseUrl',
            'rootDir',
            'rootDirs',
            'customConditions',
            'module',
            'moduleResolution',
            'moduleSuffixes',
            'noResolve',
            'paths',
            'resolveJsonModule',
            'resolvePackageJsonExports',
            'resolvePackageJsonImports',
            'typeRoots',
            'types',
            'allowArbitraryExtensions',
            'allowImportingTsExtensions',
            'allowUmdGlobalAccess',
            /* JavaScript Support */
            'allowJs',
            'checkJs',
            'maxNodeModuleJsDepth',
            /* Type Checking */
            'strict',
            'strictBindCallApply',
            'strictFunctionTypes',
            'strictNullChecks',
            'strictPropertyInitialization',
            'allowUnreachableCode',
            'allowUnusedLabels',
            'alwaysStrict',
            'exactOptionalPropertyTypes',
            'noFallthroughCasesInSwitch',
            'noImplicitAny',
            'noImplicitOverride',
            'noImplicitReturns',
            'noImplicitThis',
            'noPropertyAccessFromIndexSignature',
            'noUncheckedIndexedAccess',
            'noUnusedLocals',
            'noUnusedParameters',
            'useUnknownInCatchVariables',
            /* Emit */
            'declaration',
            'declarationDir',
            'declarationMap',
            'downlevelIteration',
            'emitBOM',
            'emitDeclarationOnly',
            'importHelpers',
            'importsNotUsedAsValues',
            'inlineSourceMap',
            'inlineSources',
            'mapRoot',
            'newLine',
            'noEmit',
            'noEmitHelpers',
            'noEmitOnError',
            'outDir',
            'outFile',
            'preserveConstEnums',
            'preserveValueImports',
            'removeComments',
            'sourceMap',
            'sourceRoot',
            'stripInternal',
            /* Interop Constraints */
            'allowSyntheticDefaultImports',
            'esModuleInterop',
            'forceConsistentCasingInFileNames',
            'isolatedDeclarations',
            'isolatedModules',
            'preserveSymlinks',
            'verbatimModuleSyntax',
            'erasableSyntaxOnly',
            /* Completeness */
            'skipDefaultLibCheck',
            'skipLibCheck',
          ],
          pathPattern: '^compilerOptions$',
        },
      ],
    },
  }];
}
