var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './src/dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /js\/\.css$/, loader: 'css-loader'},
      { test: /js\/\.js$/, loader: 'babel-loader',
        query: {
        presets: ['es2015','stage-0'],
        cacheDirectory: true
        } 
      }
    ]
  }
}
