import type { Linter } from 'eslint';

import { defineConfig } from 'eslint/config';

import astro from './configs/astro';
import { GLOB_IGNORES } from './configs/const/globs';
import js from './configs/javascript';
import json from './configs/json';
import markdown from './configs/markdown';
import node from './configs/node';
import packageCfg from './configs/package';
import stylistic from './configs/stylistic';
import tsconfig from './configs/tsconfig';
import ts from './configs/typescript';
import vue from './configs/vue';
import yaml from './configs/yaml';

const CONFIG_MAP: Record<string, Linter.Config> = {
  json,
  yaml,
  stylistic,
  node,
  markdown,
  astro,
  vue,
};

/**
 * Configuration objects to toggle features that you want to enable
 */
interface Options {
  /**
   * Enables JSON rules, including JSONC and JSON5
   *
   * Defaults to `false`
   */
  json: boolean;
  /**
   * Enables YAML rules
   *
   * Defaults to `false`
   */
  yaml: boolean;
  /**
   * Enable Stylistic rules used to format code, replacing prettier
   *
   * Defaults to `true`
   */
  stylistic: boolean;
  /**
   * Enables Markdown rules used to lint markdown files, including MDX
   *
   * Defaults to `false`
   */
  markdown: boolean;
  /**
   * Enables JS and TS rules exclusively for NodeJS API
   *
   * Defaults to `false`
   */
  node: boolean;
  /**
   * Enables Astro rules. Does not include linting markdown files!
   *
   * Defaults to `false`
   */
  astro: boolean;
  /**
   * Enables Vue rules.
   *
   * Defaults to `false`
   */
  vue: boolean;
}

/**
 * Create a new opinionated ESLint configuration object based on options.
 *
 * @param {Options} config Configuration object
 * @returns {Linter.Config[]} Ready-to-use ESLint configuration object.
 */
export function createESLintConfig(
  config: Partial<Options> = {},
): Linter.Config[] {
  const eslintConfig: Linter.Config[] = [js, ts, packageCfg, tsconfig];
  const userConfig = {
    json: false,
    yaml: false,
    stylistic: true,
    node: false,
    markdown: false,
    astro: false,
    vue: false,
  };

  Object.assign(userConfig, config);
  for (const [key, value] of Object.entries(userConfig)) {
    if (value && CONFIG_MAP[key]) {
      eslintConfig.push(CONFIG_MAP[key]);
    }
  }

  return defineConfig([
    {
      ignores: GLOB_IGNORES,
    },
    ...eslintConfig,
  ]);
}

