# ESLint Config Namchee

Personal and opinionated ESLint shareable configuration with the following goodness:

1. One liner factory function for clean setup, powered by ESLint flat configuration
2. Work out of the box with JavaScript and TypeScript projects
3. Automatically organizes pesky imports with reasonable defaults, powered by [Perfectionist](https://perfectionist.dev/).
4. Includes `package.json` and `tsconfig.json` linting too
5. Supports Astro, Vue, Markdown, YAML, and TOML
6. Includes Stylistic rules by default. Powered by [ESLint Stylistic](https://eslint.style/) instead of [Prettier](https://prettier.io/), [why?](https://github.com/eslint/eslint/issues/17522)

## Installation

Install this config with your favorite package manager:

```bash
# using npm
npm install @namchee/eslint-config -D

# using yarn
yarn add @namchee/eslint-config -D

# using pnpm
pnpm add @namchee/eslint-config -D

# using bun
bun add @namchee/eslint-config -D
```

## Usage

To use the ESLint configuration, you can extend your configuration by importing the config directly:

```js
import { createESLintConfig } from '@namchee/eslint-config';

export default createESLintConfig();
```

The factory function accepts an optional parameter in form of key-value objects, with the following idenfitiers:

| Name | Description | Default |
| --- | --- | --- |
| `typescript` | Enables TypeScript rules, including rules for linting tsconfig.json and its derivatives. | `true` |
| `json` | Enables JSON rules, including JSONC and JSON5. | `false` |
| `yaml` | Enables YAML rules. | `false` |
| `stylistic` | Enable Stylistic rules used to format code, replacing prettier. | `true` |
| `node` | Enables JS and TS rules exclusively for NodeJS API. | `false` |
| `markdown` | Enables Markdown rules used to lint markdown files, including MDX. | `false` |
| `astro` | Enables Astro rules. Does not include linting markdown files. | `false` |
| `vue` | Enables Vue rules. | `false` |
| `toml` | Enables TOML rules. | `false` |
| `unocss` | Enables UnoCSS-specific rules. | `false` |

## VSCode Settings

If you're using VSCode, use the following settings for maximum DX with this configuration:

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        // let ESLint rules handle this
        "source.organizeImports": "never"
    },
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    "eslint.format.enable": true,
        "eslint.rules.customizations": [
        { "rule": "style/*", "severity": "off" },
        { "rule": "*-indent", "severity": "off" },
        { "rule": "*-spacing", "severity": "off" },
        { "rule": "*-spaces", "severity": "off" },
        { "rule": "*-order", "severity": "off" },
        { "rule": "*-dangle", "severity": "off" },
        { "rule": "*-newline", "severity": "off" },
        { "rule": "*quotes", "severity": "off" },
        { "rule": "*semi", "severity": "off" }
    ],
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "json",
        "jsonc",
        "yaml",
        "astro",
        "vue",
        "toml",
        "markdown"
    ],

    // disable prettier and let ESLint stylistic handle it
    "prettier.enable": false
}
```

## Acknowledgements

This project is inspired by:

- [antfu's ESLint Configuration](https://github.com/antfu/eslint-config). Import sorting configuration are extracted from this configuration!
- [sxzz's ESLint Configuration](https://github.com/sxzz/eslint-config)

## License

This project is licensed under the [MIT License](./LICENSE)
