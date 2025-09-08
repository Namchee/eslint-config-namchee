import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: './index.ts',
  shims: true,
  format: 'esm',
  dts: true,
});
