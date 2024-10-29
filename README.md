# ESLint Config Namchee

Personal and opinionated ESLint shareable configuration. Uses [ESLint Stylistic](https://eslint.style/), [why?](https://github.com/eslint/eslint/issues/17522).

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
import config from '@namchee/eslint-config';

export default [...config];
```

```js
// without "type": "module" in package.json
const config = require('@namchee/eslint-config');

module.exports = [...config];
```

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

## Supported Languages

- JavaScript - `.js`, `.mjs`, `.cjs`, `.jsx`
- TypeScript - `.ts`, `.mts`, `.tsx`
- JSON - `.json`, `.json5`, `.jsonc`
- YAML - `.yaml`, `.yml`
- Vue - *planned*
- Markdown - *planned*

## License

This project is licensed under the [MIT License](./LICENSE)
