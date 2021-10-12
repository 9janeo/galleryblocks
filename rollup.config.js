'use strict'
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';

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