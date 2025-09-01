export const JS_FILES = '**/*.?([cm])js?(x)';
export const TS_FILES = '**/*.?([cm])ts?(x)';

export const JSON_FILES = '**/*.json?([c5])';
export const YAML_FILES = '**/*.y?(a)ml';
export const MARKDOWN_FILES = '**/*.([Mm])d';

export const GLOB_IGNORES = [
  '**/*.?(spec|test|bench|bencmark).?([cm])[jt]s?(x)',
  '**/dist',
  '**/out',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.cache',
  '**/*.min.*',
  '**/index.d.ts',
];
