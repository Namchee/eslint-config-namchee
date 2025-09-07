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
// with "type": "module" in package.json
import { createESLintConfig } from '@namchee/eslint-config';

export default createESLintConfig();
```

```js
// without "type": "module" in package.json
const { createESLintConfig } = require('@namchee/eslint-config');

module.exports = createESLintConfig();
```

The factory function accepts additional parameter in form of key-value objects, with the following boolean idenfitiers:

| Name | Description | Default |
| --- | --- | --- |
| 


## VSCode Settings

If you're using VSCode, use the following settings for maximum DX with this configuration

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.experimental.useFlatConfig": true,
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
        "yaml"
    ],
    "prettier.enable": false
}
```

## Acknowledgements

This project is inspired by:

- [antfu's ESLint Configuration](https://github.com/antfu/eslint-config). Import sorting configuration are extracted from this configuration!
- [sxzz's ESLint Configuration](https://github.com/sxzz/eslint-config)

## License

This project is licensed under the [MIT License](./LICENSE)
