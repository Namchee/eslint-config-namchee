# @namchee/eslint-config

:wrench: My personal and opinionated ESLint shareable configuration. Designed to be used with TypeScript (which means that you can extend the `tsconfig.json` from this package), although it will also work without it. To add cherry on top, Prettier config is also included.

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

Don't forget to include the prettier config in your `package.json` or your Prettier configuration file. 

Below is the example how to add your prettier config in `package.json`.

```json
{
  "name": "<your_cool_package>",
  "version": "0.0.1",
  "prettier": "@namchee/eslint-config/.prettierrc.js"
}
```

## License

This project is licensed under the [MIT License](./LICENSE)