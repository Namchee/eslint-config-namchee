export const JS_FILES = '**/*.?([cm])js?(x)';
export const TS_FILES = '**/*.?([cm])ts?(x)';

export const JSON_FILES = '**/*.json?([c5])';
export const YAML_FILES = '**/*.y?(a)ml';
export const MARKDOWN_FILES = '**/*.([Mm])d';
export const ASTRO_FILES = '**/*.astro';
export const ASTRO_INLINE_SCRIPTS = '**/*.astro/*.ts';
export const VUE_FILES = '**/*.vue';
export const TOML_FILES = '**/*.toml';

// generated files, node_modules
export const GLOB_IGNORES = [
  '**/dist',
  '**/out',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.cache',
  '**/.astro',
  '**/.vscode',
  '**/*.min.*',
  '**/index.d.ts',
  '**/node_modules',
];
