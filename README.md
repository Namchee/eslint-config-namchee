# eslint-config-namchee

My personal and opinionated ESLint + Prettier + Stylelint shareable configuration. Designed to be used with TypeScript (which means that you can extend the `tsconfig.json` from this package), although it will also work without it.

This configuration uses [google ESLint config](https://github.com/google/eslint-config-google) as the base config with some [JSDoc enchancements](https://github.com/gajus/eslint-plugin-jsdoc).

## Installation

All you have to do is install all peer dependencies from this package and you're all set! Install peer dependencies easily with:

```bash
# using npm
npx install-peerdeps eslint-config-namchee --dev --only-peers

# using pnpx
pnpx install-peerdeps eslint-config-namchee --dev --only-peers
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

### Stylelint

To use the Stylelint configuration, extend this configuration in your Stylelint configuration file. Refer to the [official documentation](https://stylelint.io/) for [how to extend Stylelint configuration file](https://stylelint.io/user-guide/configure/#extends).

Below is the example of how to extend the configuration from your `stylelint.config.js`:

```js
{
  "extends": "eslint-config-namchee/stylelint.config.js",
}
```

## License

This project is licensed under the [MIT License](./LICENSE)