'use strict';

var path = require('path');
var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');

var devServerPort = 3808;
var production = process.env.TARGET === 'production';

var config = {
  entry: {
    'application': './webpack/application.js'
  },

  output: {
    path: path.join(__dirname, '..', 'public', 'webpack'),
    publicPath: '/webpack/',
    filename: production ? '[name]-[chunkhash].js' : '[name].js'
  },


  plugins: [
    new webpack.ProvidePlugin({
      'React':        'react',
      'ReactDOM':     'react-dom',
      "$":            "jquery",
      "jQuery":       "jquery",
    }),


    new StatsPlugin('manifest.json', {
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true
    })
  ],

  module: {

    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        plugins: [
          'transform-runtime',
          'add-module-exports',
          'transform-decorators-legacy',
        ],
        presets: ['es2015', 'react', 'stage-1'],
      },

    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.styl$/,
      loader: 'style!css!stylus?resolve urls'
    }, {
      test:   /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    } ]
  },

  resolve: {
    root: path.join(__dirname, 'webpack'),
    modulesDirectories: ['node_modules'],
  },

  // externals: {
  //     'react': 'React'
  // },


};

if (production) {
  config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  );
} else {
  config.devServer = {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  };
  config.output.publicPath = '//localhost:' + devServerPort + '/webpack/';
  config.devtool = 'cheap-module-eval-source-map'; // devtool
}

module.exports = config;
