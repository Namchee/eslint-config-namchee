import { defineConfig } from 'eslint/config';

import { Linter } from 'eslint';

import { GLOB_IGNORES } from './configs/const/globs';

import js from './configs/javascript';
import ts from './configs/typescript';
import json from './configs/json';
import yaml from './configs/yaml';
import stylistic from './configs/stylistic';
import node from './configs/node';
import markdown from './configs/markdown';
import astro from './configs/astro';
import vue from './configs/vue';

const CONFIG_MAP: Record<string, Linter.Config> = {
  json,
  yaml,
  stylistic,
  node,
  markdown,
  astro,
  vue,
}

interface Options {
  json: boolean;
  yaml: boolean;
  stylistic: boolean;
  markdown: boolean;
  node: boolean;
  astro: boolean;
  vue: boolean;
}

export function createESLintConfig(config: Partial<Options>) {
  const eslintConfig: Linter.Config[] = [js, ts];
  const userConfig = {
    json: false,
    yaml: false,
    stylistic: true,
    node: true,
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

