const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const { terser } = require('rollup-plugin-terser');

module.exports = [
  {
    input: 'src/ultraload.js', 
    output: [
      { file: 'dist/ultraload.esm.js', format: 'esm', sourcemap: true },
      { file: 'dist/ultraload.cjs.js', format: 'cjs', sourcemap: true },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: 'ultraload.css',
        minimize: false,
      }),
    ],
  },
  {
    input: 'src/ultraload.js',
    output: {
      file: 'dist/ultraload.umd.js',
      format: 'umd',
      name: 'UltraLoad',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: true,
        minimize: false,
      }),
    ],
  },
  {
    input: 'src/ultraload.js',
    output: {
      file: 'dist/ultraload.umd.min.js',
      format: 'umd',
      name: 'UltraLoad',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: 'ultraload.min.css',
        minimize: true,
      }),
      terser(),
    ],
  },
];
