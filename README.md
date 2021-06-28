# eslint-config-namchee

:wrench: My personal and opinionated ESLint shareable configuration. Designed to be used with TypeScript (which means that you can extend the `tsconfig.json` from this package), although it will also work without it. To add cherry on top, Prettier config is also included.

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

You can use this configuration by extending it in your ESLint configuration file.

```js
module.exports = {
  extends: ['eslint-config-namchee'], // or 'namchee' for short 
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