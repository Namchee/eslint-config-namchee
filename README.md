# ESLint Config Namchee

Personal and opinionated ESLint shareable configuration with batteries included. This configuration use [XO ESLint config](https://github.com/xojs/eslint-config-xo) as a base.

## Installation

Install this package with your favorite package manager

```bash
# using npm
npm install eslint-config-namchee -D

# using yarn
yarn add eslint-config-namchee -D

# using pnpm
pnpm add eslint-config-namchee -D

# using bun
bun add eslint-config-namchee
```

## Usage

### ESLint

> This config is only compatible with the latest [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)

To use the ESLint configuration, you can import the configuration and use spread operator:

```js
import configNamchee from 'eslint-config-namchee';

export default [...configNamchee];
```
