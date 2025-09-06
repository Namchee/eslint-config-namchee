import type { Linter } from 'eslint';

import parser from 'astro-eslint-parser';
import tsParser from '@typescript-eslint/parser';

import astro from 'eslint-plugin-astro';
import { BASE_RULES } from './base';

import { ASTRO_FILES } from './const/globs';

const { plugins, rules } = BASE_RULES;

export default {
  files: [ASTRO_FILES],
  languageOptions: {
    globals: astro.environments.astro.globals,
    parser,
    parserOptions: {
      extraFileExtensions: ['.astro'], 
      parser: tsParser,
    },
  },
  plugins,
  rules: {
    ...rules,
    
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
