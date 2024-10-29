import yml from 'eslint-plugin-yaml';
import parser from 'yaml-eslint-parser';

import { YAML_FILES } from './const/globs.js';

export default {
  files: [YAML_FILES],
  ignores: ['**/pnpm-lock.yaml'],
  plugins: {
    yml,
  },
  languageOptions: {
    parser,
  },
  rules: {
    ...yml.configs.standard,
  },
};
