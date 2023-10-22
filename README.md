# ESLint Config Namchee

Personal and opinionated ESLint + Prettier shareable configuration with batteries included. This configuration uses [XO](https://github.com/xojs/eslint-config-xo) as the base config.

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
bun add eslint-config-namchee -D
```

## Usage

### ESLint

To use the ESLint configuration, extend this configuration in your ESLint configuration file.

```js
module.exports = {
  extends: ['eslint-config-namchee'], // or 'namchee' for short 
  // ...
}
```

> Do note that this configuration is meant to be used with TypeScript in mind. Some features might not be compatible or available for vanilla JavaScript.

### Prettier

To use the Prettier configuration, extend this configuration in your Prettier configuration file. Refer to the [official documentation](https://prettier.io/docs/en/index.html) for [how to extend Prettier configuration file](https://prettier.io/docs/en/configuration.html#sharing-configurations).

Below is the example of how to extend the configuration from your `package.json`:

```json
{
  "name": "<your_cool_package>",
  "version": "0.0.1",
  "prettier": "eslint-config-namchee/prettier.config.js"
}
```


## License

This project is licensed under the [MIT License](./LICENSE)