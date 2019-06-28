const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  entry: './src/index.js',
  output: {
    filename: 'hello-world.js',
    library: 'HelloWorld',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  }
});
