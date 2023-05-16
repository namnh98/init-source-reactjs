import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  esbuild: {
    loader: 'jsx',
    include: [
      'src/**/*.jsx',
      'src/**/*.tsx',
      'node_modules/**/*.jsx',
      'node_modules/**/*.tsx',
      'src/LocalJsxInJsComponent.js',
      'node_modules/bad-jsx-in-js-component/index.js',
      'node_modules/bad-jsx-in-js-component/js/BadJSXinJS.js',
      'node_modules/bad-jsx-in-js-component/ts/index.ts',
      'node_modules/bad-jsx-in-js-component/ts/BadTSXinTS.ts',
      'src/**/*.js',
      'node_modules/**/*.js',
      'src/**/*.ts',
      'node_modules/**/*.ts',
    ],
  },
});
