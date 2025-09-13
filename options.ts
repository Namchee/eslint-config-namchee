/**
 * Configuration objects to toggle features that you want to enable
 */
export interface Options {
  /**
   * Enables TypeScript rules, including rules for linting tsconfig.json and
   * its derivatives.
   *
   * Defaults to `true`
   */
  typescript: boolean;
  /**
   * Enables JSON rules, including JSONC and JSON5
   *
   * Defaults to `false`
   */
  json: boolean;
  /**
   * Enables YAML rules
   *
   * Defaults to `false`
   */
  yaml: boolean;
  /**
   * Enable Stylistic rules used to format code, replacing prettier
   *
   * Defaults to `true`
   */
  stylistic: boolean;
  /**
   * Enables Markdown rules used to lint markdown files, including MDX
   *
   * Defaults to `false`
   */
  markdown: boolean;
  /**
   * Enables JS and TS rules exclusively for NodeJS API
   *
   * Defaults to `false`
   */
  node: boolean;
  /**
   * Enables Astro rules. Does not include linting markdown files!
   *
   * Defaults to `false`
   */
  astro: boolean;
  /**
   * Enables Vue rules.
   *
   * Defaults to `false`
   */
  vue: boolean;
  /**
   * Enables TOML rules.
   *
   * Defaults to `false`
   */
  toml: boolean;
  /**
   * Enables UnoCSS rules.
   *
   * Defaults to `false`
   */
  unocss: boolean;
  /**
   * Enable rules that checks package.json
   *
   * Defaults to `true`
   */
  package: boolean;
}
