# ESLint Config Namchee

Personal and opinionated ESLint + Prettier shareable configuration with batteries included. Designed to be used with TypeScript (which means that you can extend the `tsconfig.json` from this package), although the config also works without it.

This configuration extends [XO ESLint config](https://github.com/xojs/eslint-config-xo).

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

If you are using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), you can import the rules and use spread operator:

```js
import configNamchee from 'eslint-config-namchee';

export default [...configNamchee];
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