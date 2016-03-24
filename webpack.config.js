'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter((file) => (['.bin'].indexOf(file) === -1))
  .forEach((module) => {
    nodeModules[module] = 'commonjs ' + module;
  });

module.exports = {
  entry: './app/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel', 'eslint'],
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  externals: nodeModules,
};
