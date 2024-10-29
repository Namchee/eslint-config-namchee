const JS_FILES = '**/*.?([cm])js?(x)';
const TS_FILES = '**/*.?([cm])ts?(x)';

const JSON_FILES = '**/*.json?([c5])';
const YAML_FILES = '**/*.y?(a)ml';
const MARKDOWN_FILES = '**/*.([Mm])d';

const GLOB_IGNORES = [
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

export {
  JS_FILES,
  TS_FILES,
  JSON_FILES,
  YAML_FILES,
  MARKDOWN_FILES,
  GLOB_IGNORES,
};
