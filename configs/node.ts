import node from 'eslint-plugin-n';

import type { Linter } from 'eslint';
import globals from 'globals';

export default {
    languageOptions: {
        ecmaVersion: 'latest',
        globals: {
            ...globals.node,
        },
    },
    plugins: {
        node,
    },
} satisfies Linter.Config;
