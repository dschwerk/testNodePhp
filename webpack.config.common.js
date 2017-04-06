var path = require('path');
var webpack = require('webpack');

//
var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => { ['.bin'].indexOf(x) === -1 })
  .forEach(mod => { nodeModules[mod] = 'common.js' + mod });

module.exports = {
	devtool: 'source-map',
  entry:  [
    path.resolve(__dirname, 'src/client/main.jsx')
  ],
  output: {
    path:       path.resolve(__dirname, 'public/dist'),
    filename:   'include.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?/, 
        exclude: /node_modules/, 
        // loader: 'babel'
        loaders: ['babel-loader']
      }
    ]
  },
  target: 'node',
  externals: nodeModules 
}