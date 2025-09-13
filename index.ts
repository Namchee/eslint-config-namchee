import type { Linter } from 'eslint';

import type { Options } from './options';

import { defineConfig } from 'eslint/config';

import astro from './configs/astro';
import ignores from './configs/ignores';
import javascript from './configs/javascript';
import json from './configs/json';
import markdown from './configs/markdown';
import node from './configs/node';
import packageCfg from './configs/package';
import toml from './configs/toml';
import typescript from './configs/typescript';
import unocss from './configs/unocss';
import vue from './configs/vue';
import yaml from './configs/yaml';

const CONFIG_MAP: Record<
  string,
  (config: Partial<Options>) => Linter.Config[]
> = {
  typescript: typescript,
  json: json,
  yaml: yaml,
  node: node,
  markdown: markdown,
  astro: astro,
  vue: vue,
  toml: toml,
  unocss: unocss,
  package: packageCfg,
};

/**
 * Create a new opinionated ESLint configuration object based on options.
 *
 * @param {Options} userConfig Configuration object
 * @returns {Linter.Config[]} Ready-to-use ESLint configuration object.
 */
export function createESLintConfig(
  userConfig: Partial<Options> = {},
): Linter.Config[] {
  const config = {
    typescript: true,
    json: false,
    yaml: false,
    stylistic: true,
    node: false,
    markdown: false,
    astro: false,
    vue: false,
    toml: false,
    unocss: false,
    package: true,
    typecheck: true,
    ...userConfig,
  };

  const linters: Linter.Config[] = [...ignores(config), ...javascript(config)];

  for (const [key, value] of Object.entries(config)) {
    if (key === 'typecheck') {
      continue;
    }

    if (value && CONFIG_MAP[key]) {
      linters.push(...CONFIG_MAP[key](config));
    }
  }

  return defineConfig(linters);
}
