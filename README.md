# ESLint Config Namchee

Personal and opinionated ESLint + Prettier + Stylelint shareable configuration with batteries included. Designed to be used with TypeScript (which means that you can extend the `tsconfig.json` from this package), although the config also works without it.

This configuration uses [google ESLint config](https://github.com/google/eslint-config-google) as the base config with some [JSDoc enchancements](https://github.com/gajus/eslint-plugin-jsdoc).

## Installation

Install this package with your favorite package manager

```bash
# using npm
npm install eslint-config-namchee -D

# using yarn
yarn add eslint-config-namchee -D

# using pnpm
pnpm add eslint-config-namchee -D
```

And then, install all peer dependencies from this package and you're all set!
Install peer dependencies easily with the following commands

```bash
# using npm
npx install-peerdeps eslint-config-namchee --dev --only-peers

# using pnpx
pnpx install-peerdeps eslint-config-namchee --dev --only-peers
```

> Don't worry about the package manager, `install-peerdeps` will automatically detect and use the currently used package manager in you project.

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

### `tsconfig.json`

> The TypeScript configuration provided by this package is tailored to output ESM modules, make sure to replace `modules` to something you like if ESM isn't what you're looking for.

> Remember to add the `include` options yourself! Those options are not provided by this configuration to avoid bugged behavior of `tsconfig`.

To use the TypeScript configuration file, extend this configuration in your TypeScript configuration file. Refer to the [official documentation](https://www.typescriptlang.org/tsconfig) for [how to extend TypeScript configuration file](https://www.typescriptlang.org/tsconfig#extends).

```json
{
  "extends": "eslint-config-namchee/tsconfig",
}
```


## License

This project is licensed under the [MIT License](./LICENSE)