import type { Linter } from 'eslint';

import type { Options } from './options';

import { defineConfig } from 'eslint/config';

import astro from './configs/astro';
import e18e from './configs/e18e';
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
  (config: Partial<Options>) => Promise<Linter.Config[]>
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
  e18e: e18e,
};

/**
 * Create a new opinionated ESLint configuration object based on options.
 *
 * @param {Options} userConfig Configuration object
 * @returns {Promise<Linter.Config[]>} A Promise that resolves into ready-to-use ESLint configuration object.
 */
export async function createESLintConfig(
  userConfig: Partial<Options> = {},
): Promise<Linter.Config[]> {
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
    e18e: true,
    ...userConfig,
  };

  const enabled = Object.entries(config)
    .filter(
      ([key, value]) => key !== 'typecheck' && value && CONFIG_MAP[key],
    )
    .map(([key]) => key);

  const factories: Promise<Linter.Config[]>[] = [
    ignores(config),
    javascript(config),
    ...enabled.map(async key => CONFIG_MAP[key](config)),
  ];

  const results = await Promise.all(factories);

  return defineConfig(results.flat());
}
