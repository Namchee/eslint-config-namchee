import type { Linter } from 'eslint';

import tsParser from '@typescript-eslint/parser';
import parser from 'astro-eslint-parser';
import astro from 'eslint-plugin-astro';

import { ASTRO_FILES } from './const/globs';

export default {
  name: 'namchee/eslint/astro',
  files: [ASTRO_FILES],
  languageOptions: {
    globals: astro.environments.astro.globals,
    parser: parser,
    parserOptions: {
      extraFileExtensions: ['.astro'],
      parser: tsParser,
    },
  },
  rules: {
    // recommended rules, since Astro plugin doesn't expose them
    "astro/missing-client-only-directive-value": "error",
    "astro/no-conflict-set-directives": "error",
    "astro/no-deprecated-astro-canonicalurl": "error",
    "astro/no-deprecated-astro-fetchcontent": "error",
    "astro/no-deprecated-astro-resolve": "error",
    "astro/no-deprecated-getentrybyslug": "error",
    "astro/no-unused-define-vars-in-style": "error",
    "astro/valid-compile": "error"
  }
} satisfies Linter.Config
