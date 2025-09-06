import type { Linter } from "eslint";

import packagePlugin from "eslint-plugin-package-json";

export default {
  ...packagePlugin.configs.recommended,
  name: 'namchee/eslint/package',
} satisfies Linter.Config;
