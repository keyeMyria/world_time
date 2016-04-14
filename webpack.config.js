'use strict';

var path = require('path');
var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');

var devServerPort = 3808;
var production = process.env.TARGET === 'production';

var config = {
  entry: {
    'application': './webpack/app.jsx'
  },
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '..', 'public', 'webpack'),
    publicPath: '/webpack/',
    filename: production ? '[name]-[chunkhash].js' : '[name].js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.ProvidePlugin({
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
    preLoaders: [
      {
        test: /\.(jsx|js)?$/,
        loaders: ['eslint'],
      },
    ],

    loaders: [{
      test: /\.(jsx|js)?$/,
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
      test: /\.sass$/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }
    ]

  },

  resolve: {
    root: path.join(__dirname, 'webpack'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', "css", "sass", "scss"]
  },

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
