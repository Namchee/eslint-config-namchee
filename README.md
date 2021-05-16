# @namchee/eslint-config

:wrench: My personal and opinionated ESLint shareable configuration. Designed to be used with TypeScript.

This configuration uses [google ESLint config](https://github.com/google/eslint-config-google) as the base config with some [JSDoc enchancements](https://github.com/gajus/eslint-plugin-jsdoc).

## Installation

You can install this configuration using your favorite Node package managers

```bash
# using npm
npm install -D @namchee/eslint-config

# using yarn
yarn add -D @namchee/eslint-config
```

## Usage

You can use this configuration by extending it in your ESLint configuration file.

```js
module.exports = {
  extends: ['@namchee/eslint-config'],
  // ...
}
```

## License

This project is licensed under the [MIT License](./LICENSE)