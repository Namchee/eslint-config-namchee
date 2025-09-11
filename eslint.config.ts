import { createESLintConfig } from './index';

export default createESLintConfig({ node: true, astro: true, unocss: true });

// import astro from 'eslint-plugin-astro';
// import stylistic from '@stylistic/eslint-plugin';
// import { Linter } from 'eslint';

// export default [
//     ...astro.configs.recommended,
//     {
//         files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
//         plugins: {
//             stylistic,
//         },
//         rules: {
//             'stylistic/quotes': ['error', 'single'],
//         }
//     }
// ] as Linter.Config[];
