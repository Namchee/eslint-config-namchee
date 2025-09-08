import type { Linter } from 'eslint';

import type { Options } from '../options';

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import parser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';
import canonical from 'eslint-plugin-canonical';
import importPlugin from 'eslint-plugin-import-lite';

import { BASE_CONFIG, STYLISTIC_CONFIG } from './base';
import { ASTRO_FILES } from './const/globs';
import { TYPESCRIPT_RULES } from './typescript';

export default function (config: Partial<Options> = {}): Linter.Config {
  return {
    name: 'namchee/eslint/astro',
    files: [ASTRO_FILES],
    languageOptions: {
      globals: {
        ...BASE_CONFIG.languageOptions?.globals,
        ...astro.environments.astro.globals,
      },
      parser: parser,
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: tsParser,
      },
    },
    linterOptions: BASE_CONFIG.linterOptions,
    plugins: {
      ...BASE_CONFIG.plugins,
      astro: astro,
      typescript: tsPlugin as any,
      canonical: canonical,
      import: importPlugin,
      ...(config.stylistic ? STYLISTIC_CONFIG.plugins : {}),
    },
    rules: {
      ...TYPESCRIPT_RULES,
      // recommended rules, since Astro plugin doesn't expose them
      'astro/missing-client-only-directive-value': 'error',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-deprecated-astro-canonicalurl': 'error',
      'astro/no-deprecated-astro-fetchcontent': 'error',
      'astro/no-deprecated-astro-resolve': 'error',
      'astro/no-deprecated-getentrybyslug': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/valid-compile': 'error',
      'astro/prefer-class-list-directive': 'error',

      ...(config.stylistic ? STYLISTIC_CONFIG.rules : {}),
    },
  };
}

