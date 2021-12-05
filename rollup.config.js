'use strict'
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const { nodeResolve } = require('@rollup/plugin-node-resolve')

let fileDest = 'blockbundle.js'

module.exports = {
  input: './src/index.js',
  watch: {
    include: './src/**',
    clearScreen: false
  },
  output: {
    file: `./build/${fileDest}`,
    format: 'umd',
    name: 'clearBlocks'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    }),
    babel({
      exclude: 'node_modules/**', 
    }),
    scss(),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ],
};