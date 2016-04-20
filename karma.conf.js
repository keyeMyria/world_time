var path = require('path');

module.exports = function(config) {
  config.set({
    // basePath: 'webpack/spec/',
    autoWatch: true,
    browserNoActivityTimeout: 60000,
    reporters: ['progress', 'html'],

    browsers: ['Chrome'],
    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-jasmine-html-reporter',
      "karma-html-reporter",
    ],

    files: [
      // "./**/*.js*",
      // "./spec/**/*_spec.js*",
      'tests.webpack.js'
    ],

    preprocessors: {
      // "./**/*.js*": ['webpack', 'sourcemap'],
      // "./spec/**/*_spec.js*": ['webpack', 'sourcemap'],
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: {
      devtool: 'inline-source-map',
      watch: true,

      resolve: {
        root: path.join(__dirname, 'webpack'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx', ".css", ".sass", ".scss"]
      },

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

      },
      // {
      //   test:   /\.jade$/,
      //   loader: "jade"
      // },
      // {
      //   test:   /\.styl$/,
      //   loader: 'style!css!stylus?resolve urls'
      // },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass'],
      },
      // {
        // test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        // loader: 'file?name=[path][name].[ext]'
      // },
      // {
        // test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // loader: "url-loader?limit=10000&mimetype=application/font-woff"
      // },
      // {
        // test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // loader: "file-loader"
      // }
      ], },
    },

    htmlReporter: {
      outputDir: 'webpack/spec/utils/reporter/',
      templatePath: null,
      focusOnFailures: true,
      namedFiles: false,
      pageTitle: null,
      urlFriendlyName: false,
      preserveDescribeNesting: false,
      foldAll: false,
    },

  });
};


